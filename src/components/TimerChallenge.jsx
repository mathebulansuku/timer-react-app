import { useState, useRef } from "react";
import ResultModal from "./ResultsModal";

// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      {timerExpired ? (
        <ResultModal targetTime={targetTime} result="lost" />
      ) : null}
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired ? <p>You lost</p> : null}
        <p className="challenge-time">{targetTime} seconds</p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
