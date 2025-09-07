// src/components/Calendar.tsx
'use client';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Calendar.css';
import { faIR } from 'date-fns/locale';

export default function Calendar() {
  return (
    <DayPicker
      mode="single"
      showOutsideDays
      fixedWeeks
      locale={faIR}
    />
  );
}
