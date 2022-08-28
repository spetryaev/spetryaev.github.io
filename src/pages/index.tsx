import * as React from 'react';

import { useTranslation } from 'react-i18next';

import Layout from 'components/Layout';
import TopNav from 'components/TopNav/Home';
import InternalLink from 'components/Link/Internal';

const styles = {
  main: 'justify-center items-center',
  title: 'leading-[1.15] text-[4rem] text-center mt-8 md:mt-0',
  titleLink:
    'no-underline text-blue-500 text-center hover:underline focus:underline active:underline',
  description: 'mt-4 px-8 text-center text-2xl leading-normal',
  code: 'bg-gray-100 rounded-[5px] p-3 text-[1.1rem] font-mono',
  grid: 'flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full',
  card: 'p-6 mt-6 md:w-96 text-left border rounded-xl transition ease-[2s] hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:border-blue-600 focus:border-blue-600 active:border-blue-600',
  cardTitle: 'text-xl font-bold',
  cardText: 'mt-4 text-lg',
};

export const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Layout className={styles.main} header={<TopNav />}>
      <div className="flex flex-col items-center space-y-2">
        <div className={styles.title}>Sergey Petryaev</div>
      </div>

      <div className={styles.grid}>
        <InternalLink href="/projects" className={styles.card}>
          <h3>Projects &rarr;</h3>
        </InternalLink>

        <InternalLink href="/categories" className={styles.card}>
          <h3>Categories &rarr;</h3>
        </InternalLink>
      </div>
    </Layout>
  );
};

export default Home;
