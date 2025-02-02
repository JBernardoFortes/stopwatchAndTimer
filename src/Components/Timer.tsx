import { useEffect, useState } from "react";
const Timer = () => {
  const [[hours, minutes, seconds], setTime] = useState([0, 0, 0]);
  const [isRunning, setIsRunning] = useState(false);

  const decrementTime = () => {
    if (seconds > 0) {
      setTime([hours, minutes, seconds - 1]);
    } else if (minutes > 0) {
      setTime([hours, minutes - 1, 59]);
    } else if (hours > 0) {
      setTime([hours - 1, 59, 59]);
    }
  };
  const resetTime = () => {
    setIsRunning(false);
    setTime([0, 0, 0]);
  };

  useEffect(() => {
    if (isRunning == false) {
      return;
    }
    const interval = setInterval(() => {
      decrementTime();
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="timerContainer">
      <div className="inputContainer">
        <input
          type="number"
          name="hour"
          id="hours"
          value={hours}
          onChange={(e) => {
            setTime([
              Math.abs(Math.min(Number(e.target.value), 59)),
              minutes,
              seconds,
            ]);
          }}
        />
        <span> h</span>
        <input
          type="number"
          name="minutes"
          id="minutes"
          value={minutes}
          onChange={(e) => {
            setTime([
              hours,
              Math.abs(Math.min(Number(e.target.value), 59)),
              seconds,
            ]);
          }}
        />
        <span> m</span>
        <input
          type="number"
          name="seconds"
          id="seconds"
          value={seconds}
          onChange={(e) => {
            setTime([
              hours,
              minutes,
              Math.abs(Math.min(Number(e.target.value), 59)),
            ]);
          }}
        />
        <span> s</span>
      </div>
      <div className="timerButtons">
        <button
          onClick={() => {
            resetTime();
          }}
          className={`button ${
            hours == 0 && minutes == 0 && seconds == 0
              ? `desactive`
              : `activeButton`
          }`}
        >
          Reset
        </button>
        <button
          onClick={() => {
            if (hours == 0 && minutes == 0 && seconds == 0) {
              return;
            }
            setIsRunning(!isRunning);
          }}
          className={`button ${
            hours == 0 && minutes == 0 && seconds == 0
              ? `desactive`
              : `activeButton`
          }`}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
