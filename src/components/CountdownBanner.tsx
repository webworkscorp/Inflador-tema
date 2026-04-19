import React, { useState, useEffect } from "react";

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <div className="bg-red-600 py-3 border-y border-red-700 px-4">
      <div className="flex items-center justify-center gap-4">
        <span className="text-white font-bold text-xs tracking-widest uppercase">
          LA OFERTA TERMINA EN:
        </span>
        <div className="flex items-center gap-2">
          <span className="text-white text-xl font-black tabular-nums">{formatTime(timeLeft.hours)}</span>
          <span className="text-white text-xl font-black">:</span>
          <span className="text-white text-xl font-black tabular-nums">{formatTime(timeLeft.minutes)}</span>
          <span className="text-white text-xl font-black">:</span>
          <span className="text-white text-xl font-black tabular-nums">{formatTime(timeLeft.seconds)}</span>
        </div>
      </div>
    </div>
  );
}
