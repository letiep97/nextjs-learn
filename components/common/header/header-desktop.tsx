import { Button, Container, Link as MuiLink, Stack } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTE_LIST } from 'router';
import logo from '@/src/images/logo.svg';

export interface IHeaderDesktopProps {}

export default function HeaderDesktop(props: IHeaderDesktopProps) {
  return (
    <Box component="header" display={{ xs: 'none', md: 'block' }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Box>
            <Link href={'/'}>Logo</Link>
          </Box>
          <Box>
            {ROUTE_LIST.map((router, index) => {
              return (
                <Link key={index} href={router.path} passHref>
                  <MuiLink>{router.label}</MuiLink>
                </Link>
              );
            })}
          </Box>
          <Box>
            <Button variant="text">Login</Button>
            <Button variant="contained" color="success">
              Connect
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
