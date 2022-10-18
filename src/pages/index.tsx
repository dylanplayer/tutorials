import React from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import { HeroText } from '../components';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Dylan Player`}
      description="This is the home of Dylan Player's tutorials.">
        <main className={styles.home}>
          <HeroText>Welcome</HeroText>
          <a href='/tutorials/node' className={[styles.cta, 'button'].join(' ')}>Start Here</a>
        </main>
    </Layout>
  );
}
