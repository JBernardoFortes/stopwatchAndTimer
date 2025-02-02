import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [[minutes, seconds, miliseconds], setStopwatch] = useState([0, 0, 0]);

  const [isRunning, setIsRunning] = useState(false);

  const incrementTime = () => {
    if (miliseconds < 99) {
      setStopwatch([minutes, seconds, miliseconds + 1]);
    } else if (seconds < 59) {
      setStopwatch([minutes, seconds + 1, 0]);
    } else if (minutes < 59) {
      setStopwatch([minutes + 1, 0, 0]);
    }
  };
  const resetTime = () => {
    setIsRunning(false);
    setStopwatch([0, 0, 0]);
  };

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const interval = setInterval(() => {
      incrementTime();
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, miliseconds]);

  // Nesse useEffect foi colocado todos os hooks pra serem monitorados
  // pra sempre ser criado um novo intervalo e encerrado o mesmo assim
  // que um valor eh mudado
  // ou seja, pra cada incremento no cronometro eh criado um intervalo
  // diferente.

  // Nao eh eficiente, tentar de outra forma depois

  return (
    <div>
      <div className="stopwatchTime">
        {minutes < 10 && 0}
        {minutes}:{seconds < 10 && 0}
        {seconds}:{miliseconds < 10 && 0}
        {miliseconds}
      </div>
      <div className="stopwatchButtons">
        <button
          onClick={() => resetTime()}
          className={`button ${
            minutes == 0 && seconds == 0 && miliseconds == 0 ? "desactive" : "activeButton"
          }`}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setIsRunning(!isRunning);
          }}
          className="button activeButton"
        >
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
