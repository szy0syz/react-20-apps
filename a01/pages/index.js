import React, { useRef, useState } from 'react';
import './index.css';

function padTime(time) {
  return time.toString().padStart(2, '0');
}

export default () => {
  const [title, setTitle] = useState('Let the countdown begin!!!');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const intervalRef = useRef(null);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  console.log(intervalRef.current);

  function startTimer() {
    console.log(intervalRef.current);
    if (intervalRef.current) return;
    setTitle('Youre doing gread!');
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('Keep it up!');
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('Ready to go another round?');
    setTimeLeft(25 * 60);
  }

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};
