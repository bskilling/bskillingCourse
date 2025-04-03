import React, { useEffect, useState } from 'react';

const SVGSpeedometer = ({
  targetValue,
  text,
  color,
}: {
  targetValue: number;
  text: string;
  color: string;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < targetValue) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 20); // Adjust speed

    return () => clearInterval(interval);
  }, [targetValue]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width="200" height="200">
      <circle cx="100" cy="100" r={radius} fill="transparent" stroke="#e0e0e0" strokeWidth="10" />
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text x="100" y="110" textAnchor="middle" fontSize="20" fill={color}>
        {progress}%
      </text>
      <text x="100" y="140" textAnchor="middle" fontSize="16" fill={color}>
        {text}
      </text>
    </svg>
  );
};

export default SVGSpeedometer;
