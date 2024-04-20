import React from "react";
import { Button } from "antd";
import {
  SignedIn,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import Authentication from "./cleark/Authentication";
import { Navigate, useNavigate } from "react-router-dom";
import Steper from "./Steper";

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();
  // console.log(isSignedIn);
  const handleSignIn = () => {
    console.log("sign in");

    navigate("/signin");
  };
  if(!isSignedIn){
    localStorage.removeItem("isHrInterviewDone");
  }

  return (
    <div>
    <h1 className=" bg-blue-400 text-3xl">hi</h1>
      {isSignedIn ? (
          <UserButton></UserButton>
      ) : (
        <SignInButton></SignInButton>
      )}
      <Steper />
    </div>
  );
};

export default Dashboard;
