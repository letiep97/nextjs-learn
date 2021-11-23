import '../styles/globals.css';
import { MainLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  
  // Default layout: MainLayout
  const Layout = Component.Layout ?? MainLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
