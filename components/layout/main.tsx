import { LayoutProps } from '@/models';
import { Container, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { Footer, Header } from '../common';
import { Theme } from '@mui/material/styles';

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

      <Box
        component="main"
        flexGrow={1}
        sx={{
          bgcolor: (theme: any) => theme.color.bgColor,
        }}
      >
        <Container maxWidth="lg" sx={{ bgcolor: 'pink', padding: 1 }}>
          {children}
        </Container>
      </Box>

      <Footer />
    </Stack>
  );
}
