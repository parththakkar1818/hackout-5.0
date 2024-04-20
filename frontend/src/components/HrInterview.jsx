import React from "react";
import { Button, Flex } from "antd";
import video1 from "./questionVideos/Question-0.mp4";
import { useRef } from "react";

const VideoPage = () => {
  const videoRef = useRef(null);
  const handleClick = () => {
    videoRef.current.play();
  };
  return (
    <div className=" bg-blue-500">
      <div className="mt-5 text-2xl blue_gradient flex font-satoshi  text-black-600 font-bold  flex-auto justify-center ">
        Interview
      </div>
      <div className="flex flex-row max-w-full max-h-full">
        <div className="rounded-lg flex mt-5 w-[55rem] h-[37rem] justify-center items-center shadow-2xl bg-gray-50">
          {/* <img className="object-contain rounded-lg  w-full h-[95%]" src="public\new_face.jpg"/> */}
          <video
            ref={videoRef}
            className="object-contain rounded-lg h-[95%]"
            controls={false}
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="flex rounded-lg mt-5 w-[30rem] h-[37rem] justify-center items-center shadow-inner bg-gray-50"></div>
      </div>
      {/* <button className="flex btn justify-center blue_gradient cursor-pointer border" onClick={handleClick}>Play</button> */}
      <div className="flex flex-auto items-center justify-center mt-3">
        <Button
          type="primary"
          className="font-satoshi text-black-600 text-xl font-bold pb-8 blue_gradient w-[12%]"
          onClick={handleClick}
        >
          Next Question
        </Button>
      </div>
    </div>
  );
};

export default VideoPage;
