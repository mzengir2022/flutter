import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Clock from '../components/Clock';
import Calendar from '../components/Calendar';

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
