import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
import Calendar from '../components/Calendar';

const Clock = dynamic(() => import('../components/Clock'), { ssr: false });

export default function HomePage() {
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
      </Box>
    </Container>
  );
}
