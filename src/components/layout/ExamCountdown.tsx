
'use client';

import { useState, useEffect } from 'react';
import { AlarmClock } from 'lucide-react';

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

interface ExamCountdownProps {
  targetDate: Date;
}

export function ExamCountdown({ targetDate }: ExamCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +targetDate - +new Date();
      let newTimeLeft: TimeLeft = {};

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };

    // Initial calculation right after mount, only on client
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft === null) {
    return <p className="text-sm text-foreground/70 mt-1.5">Calculating time until exam...</p>;
  }

  const timerComponents: string[] = [];
  if (typeof timeLeft.days === 'number') timerComponents.push(`${timeLeft.days}d`);
  if (typeof timeLeft.hours === 'number') timerComponents.push(`${timeLeft.hours}h`);
  if (typeof timeLeft.minutes === 'number') timerComponents.push(`${timeLeft.minutes}m`);
  if (typeof timeLeft.seconds === 'number') timerComponents.push(`${timeLeft.seconds}s`);

  if (timerComponents.length === 0 && +targetDate <= +new Date()) {
    return <p className="text-sm text-primary font-medium mt-1.5">The exam period has begun. Good luck!</p>;
  }
  
  if (timerComponents.length === 0) {
     return <p className="text-sm text-foreground/70 mt-1.5">Calculating time until exam...</p>;
  }


  return (
    <div className="mt-2 flex items-center text-sm text-primary font-medium bg-primary/10 px-2.5 py-1.5 rounded-md shadow-sm">
      <AlarmClock size={16} className="mr-2 shrink-0" />
      <span>
        Exam starts in: <strong>{timerComponents.join(' : ')}</strong>
      </span>
    </div>
  );
}
