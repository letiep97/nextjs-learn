import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  Link as MuiLink,
  ListItemIcon,
  MenuItem,
  Slide,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useScrollTrigger,
  Divider,
  Menu,
  Tooltip,
} from '@mui/material';
import { Settings, Logout, PersonAdd } from '@mui/icons-material';
import * as PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTE_LIST } from 'router';
import { useWeb3React } from '@web3-react/core';
import { injected } from 'connectors';
import { shortenAddress } from '@/components/functions/format';
import { useRouter } from 'next/dist/client/router';
import Logo from '../../../src/images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { connectWallet, disconnectWallet } from 'app/authSlice';

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
  const router = useRouter();
  const [tab, setTab] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const isConnect = useSelector((state: any) => state.auth.isConnect);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeTab = (e: React.SyntheticEvent, value: any) => {
    setTab(value);
    router.push(value.path);
  };

  return (
    <Box component="header" display={{ xs: 'none', md: 'block' }}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Container>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {/* Logo */}
                <Box>
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
                </Box>
                {/* Nav */}
                <Box>
                  <Tabs
                    value={tab}
                    onChange={handleChangeTab}
                    aria-label="basic tabs example"
                  >
                    {ROUTE_LIST.map((router, index) => {
                      return (
                        <Tab
                          key={index}
                          // label={
                          //   <Link key={index} href={router.path} passHref>
                          //     <MuiLink>{router.label}</MuiLink>
                          //   </Link>
                          // }
                          label={router.label}
                          value={router}
                        />
                      );
                    })}
                  </Tabs>
                </Box>
                {/* Login/Setting */}
                <Box>
                  {isConnect ? (
                    <>
                      <Tooltip title="Account settings">
                        <IconButton
                          onClick={handleClick}
                          size="small"
                          sx={{ ml: 2 }}
                        >
                          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                          <Box sx={{ pl: 1 }}>{shortenAddress(account)}</Box>
                        </IconButton>
                      </Tooltip>

                      <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            '&:before': {
                              content: '""',
                              display: 'block',
                              position: 'absolute',
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: 'background.paper',
                              transform: 'translateY(-50%) rotate(45deg)',
                              zIndex: 0,
                            },
                          },
                        }}
                        transformOrigin={{
                          horizontal: 'right',
                          vertical: 'top',
                        }}
                        anchorOrigin={{
                          horizontal: 'right',
                          vertical: 'bottom',
                        }}
                      >
                        <MenuItem onClick={() => router.push('./profile')}>
                          <ListItemIcon>
                            <Settings fontSize="small" />
                          </ListItemIcon>
                          Deposit
                        </MenuItem>
                        <Divider />
                        <MenuItem
                          onClick={() => {
                            dispatch(disconnectWallet());
                            deactivate();
                          }}
                        >
                          <ListItemIcon>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Logout
                        </MenuItem>
                      </Menu>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                          activate(injected);
                          dispatch(connectWallet());
                        }}
                      >
                        Connect
                      </Button>
                    </>
                  )}
                </Box>
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Box>
  );
}

function HideOnScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
