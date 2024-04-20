import React, { useEffect, useState } from "react";
import { Button, message, Steps, theme } from "antd";
import {
  SignedIn,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const isHrInterviewDone = localStorage.getItem("isHrInterviewDone");
console.log(isHrInterviewDone);
if(isHrInterviewDone) console.log("i am in");

const steps = [
  {
    title: "HR Interview",
    content: isHrInterviewDone ? "done" : "First-content",
  },
  {
    title: "Technical Interview",
    content: "Second-content",
  },
];

const Steper: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("Current",current);
    if (isHrInterviewDone) {
      console.log("I am in useeffect");
      window.location.reload();
      setCurrent(1``);
    }
  }, [isHrInterviewDone]);

  const next = () => {
    if (isSignedIn) {
      setCurrent(current + 1);
      navigate("/hrinterview");
    } else {
      message.warning("Please sign in to proceed.");
    }
  };

  

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        
      </div>
    </>
  );
};

export default Steper;
