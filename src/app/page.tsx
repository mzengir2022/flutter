'use client';

import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
import Calendar from '../components/Calendar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';

const Clock = dynamic(() => import('../components/Clock'), { ssr: false });

export default function HomePage() {
  const [timestamp, setTimestamp] = useState<string>('');
  const [convertedDate, setConvertedDate] = useState<Date | null>(null);

  const handleConvert = () => {
    const num = Number(timestamp);
    if (!isNaN(num)) {
      setConvertedDate(new Date(num * 1000));
    } else {
      setConvertedDate(null);
    }
  };

  const formatJalali = (date: Date) => {
    return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: 4,
        }}
      >
        <Clock />
        <Calendar />
        <Box sx={{ mt: 4, width: '100%', maxWidth: 400 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
            Timestamp Converter
          </Typography>
          <TextField
            label="Unix Timestamp"
            variant="outlined"
            fullWidth
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleConvert}>
            Convert
          </Button>
          {convertedDate && (
            <Box sx={{ mt: 2 }}>
              <Typography>
                Gregorian: {format(convertedDate, 'yyyy-MM-dd HH:mm:ss')}
              </Typography>
              <Typography>
                Jalali: {formatJalali(convertedDate)}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
