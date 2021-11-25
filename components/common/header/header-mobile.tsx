import {
  AppBar,
  Button,
  Container,
  IconButton,
  Link as MuiLink,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/useAppRedux';
import { connectWallet } from 'app/authSlice';
import Logo from '../../../src/images/logo.svg';

export interface IHeaderMobileProps {}

export default function HeaderMobile(props: IHeaderMobileProps) {
  const dispatch = useAppDispatch();
  const isConnect = useAppSelector((state) => state.auth.isConnect);

  return (
    <Box display={{ sx: 'block', md: 'none' }}>
      <AppBar>
        <Toolbar>
          <Container
          // sx={{
          //   padding: '0 !important',
          // }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Link href={'/'} passHref>
                <MuiLink
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Image src={Logo} alt="logo" width={128} height={30} />
                </MuiLink>
              </Link>
              {!isConnect && (
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    // activate(injected);
                    dispatch(connectWallet());
                  }}
                >
                  Connect
                </Button>
              )}
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </Box>
  );
}
