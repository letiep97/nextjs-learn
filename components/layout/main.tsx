import { LayoutProps } from '@/models';
import { Container, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('mounting');
    return () => {
      console.log('un-mounting');
    };
  }, []);

  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        <Container maxWidth="lg" sx={{ bgcolor: 'pink' }}>
          <h1>Main layout</h1>
          {children}
        </Container>
      </Box>

      <Footer />
    </Stack>
  );
}
