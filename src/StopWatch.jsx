import { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 1);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const startWatch = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const stopWatch = () => {
    setIsRunning(false);
  };

  const resetWatch = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = () => {
    const padTime = (value) => {
      return String(value).padStart(2, "0");
    };

    let hours = padTime(Math.floor(elapsedTime / (1000 * 60 * 60)));
    let minutes = padTime(Math.floor((elapsedTime / (1000 * 60)) % 60));
    let seconds = padTime(Math.floor((elapsedTime / 1000) % 60));
    let milliseconds = padTime(Math.floor((elapsedTime % 1000) / 10));

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button className="start-button" onClick={startWatch}>
          Start
        </button>
        <button className="stop-button" onClick={stopWatch}>
          Stop
        </button>
        <button className="reset-button" onClick={resetWatch}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
