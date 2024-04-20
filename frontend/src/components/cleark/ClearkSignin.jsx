import React, { useEffect } from "react";
import { SignedOut, SignInButton, useUser } from "@clerk/clerk-react";
import { GoogleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ClerkSignin = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative z-10 max-w-md w-full p-6 bg-white bg-opacity-75 shadow-lg rounded-lg">
        <div className="bg-black text-white p-2 rounded-xl w-fit mx-auto flex items-center align-middle">
          <GoogleOutlined className="text-lg flex justify-center items-center mr-2 my-auto" />
          <SignedOut>
            <SignInButton afterSignInUrl="/dashboard" className="w-full" />
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default ClerkSignin;
