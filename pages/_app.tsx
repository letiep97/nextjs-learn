import '../styles/globals.css';
import { MainLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { theme, createEmotionCache } from '@/utils';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import Web3ReactManager from '@/components/Web3ReactManager';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Web3
function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  // Default layout: MainLayout
  const Layout = Component.Layout ?? MainLayout;

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Web3ReactManager>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Web3ReactManager>
        </ThemeProvider>
      </Web3ReactProvider>
    </CacheProvider>
  );
}

export default MyApp;
