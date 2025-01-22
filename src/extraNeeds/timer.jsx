import React, { useEffect, useState } from "react";

export const Timer = (time) => {
  console.log(time);
  const DUETIME = time * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState(DUETIME);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);
    console.log(timer);
    if (timeLeft <= 0) {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    }
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);
  return timeLeft;
};
