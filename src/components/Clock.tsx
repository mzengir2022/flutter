// src/components/Clock.tsx
'use client';

import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Typography variant="h1" component="div" sx={{ fontWeight: 'bold', mb: 4 }}>
      {time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })}
    </Typography>
  );
}
