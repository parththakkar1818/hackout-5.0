import React, { useRef, useEffect } from "react";

const VideoPlayer = ({ src, autoPlay = false }) => {
  const videoRef = useRef(null);
  console.log("i got source: ", src);

  useEffect(() => {
    if (autoPlay) {
      videoRef.current.play();
    }
  }, [autoPlay]);
  console.log("i got source: ", src);
  
  const handleClick = () => {
    console.log("i got clicked");
    videoRef.current.play();
  };
  return (
    <div>
      <video
        ref={videoRef}
        width="640"
        height="360"
        controls
        onClick={handleClick}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={handleClick}>Click me</button>
      <h1>from video</h1>
    </div>
  );
};

export default VideoPlayer;
