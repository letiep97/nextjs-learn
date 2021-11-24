import {
  AppBar,
  Button,
  Container,
  IconButton,
  Link as MuiLink,
  Slide,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import * as PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTE_LIST } from 'router';
import logo from '@/src/images/logo.svg';
import { useWeb3React } from '@web3-react/core';
import { injected } from 'connectors';
import { shortenAddress } from '@/components/functions/format';
import { useRouter } from 'next/dist/client/router';
import useStyles from './styles';

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
  const styles = useStyles();

  const handleChangeTab = (e: React.SyntheticEvent, value: any) => {
    setTab(value);
    router.push(value.path);
  };

  return (
    <Box component="header" display={{ xs: 'none', md: 'block' }}>
      <HideOnScroll {...props}>
        <AppBar
          classes={{
            root: styles.appBar,
          }}
        >
          <Toolbar>
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
                          classes={{
                            root: styles.tab,
                          }}
                          label={router.label}
                          value={router}
                        />
                      );
                    })}
                  </Tabs>
                </Box>
                <Box>
                  {active ? (
                    <>{shortenAddress(account)}</>
                  ) : (
                    <>
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
