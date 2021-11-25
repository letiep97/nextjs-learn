import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import { NextPageWithLayout } from '@/models';

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  const handlerToProfile = () => {
    router.push('/profile');
  };

  return (
    <div className={''}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Description app" />
      </Head>

      <main className={''}>
        <h1 className={''}>Home</h1>

        <p className={''}></p>

        <div className={''}>
          <Link href="/portfolio">
            <a className={''}>
              <h2>Portfolio </h2>
              <p>Portfolio .</p>
            </a>
          </Link>

          <div onClick={handlerToProfile} className={''}>
            <h2>Profile &rarr;</h2>
            <p>Profile!</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
