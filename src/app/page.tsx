import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Welcome to Your Expense Manager
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          This is a clean, mobile-first personal expense manager PWA built with Next.js and Material-UI.
        </Typography>
        <Button variant="contained" component={Link} href="/dashboard">
          Go to Dashboard
        </Button>
      </Box>
    </Container>
  );
}
