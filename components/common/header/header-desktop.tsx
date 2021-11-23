import { Button, Container, Link as MuiLink, Stack } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTE_LIST } from 'router';
import logo from '@/src/images/logo.svg';
import { useWeb3React } from '@web3-react/core';
import { injected } from 'connectors';

export interface IHeaderDesktopProps {}

export default function HeaderDesktop(props: IHeaderDesktopProps) {
  const web3ReactContext = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = web3ReactContext;

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
            {active ? (
              <>{account}</>
            ) : (
              <>
                <Button variant="text">Login</Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => activate(injected)}
                >
                  Connect
                </Button>
              </>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
