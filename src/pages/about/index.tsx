import React, { memo } from 'react';
import { NextSeo } from 'next-seo';
import classnames from 'classnames';

import styles from './index.module.scss';

function About() {
  return (
    <main className={classnames(styles.About)}>
      <NextSeo title="About" />

      <h1>About Page</h1>
    </main>
  );
}

export default memo(About);
