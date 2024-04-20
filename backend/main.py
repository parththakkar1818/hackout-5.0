from fastapi import FastAPI
from database.db import connect_db
from Scripts.texttospeech import texttospeech
import os

app = FastAPI()

# Connect to MongoDB
client = connect_db()
folder_path = "HR_questions"
if not os.path.exists(folder_path):
    os.makedirs(folder_path)

@app.get("/")   
async def root():
    return {"message": "Hello World"}

@app.post("/fetchquestions")
async def fetchquestions():
    collection = client["Hacknuthon"]["HR_Questions"]
    
    questions = collection.find()
    questions_list = [{**question, "_id": str(question["_id"])} for question in questions][0]["questions"]
    
    for i in range (len(questions_list)):
        texttospeech(questions_list[i],(f"{folder_path}/q{i}.mp3"))

    return {"questions": questions_list}
