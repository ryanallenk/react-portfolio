import { memo } from 'react';
import { NextSeo } from 'next-seo';
import classnames from 'classnames';

import styles from './index.module.scss';

type Props = {
  className?: string;
};

function Home({ className }: Props) {
  return (
    <main className={classnames(styles.Home, className)}>
      <NextSeo title="Home" />

      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam quisquam quod deleniti nesciunt ex eum
        excepturi consequuntur reiciendis quam, obcaecati, expedita similique aut esse quae quas! Aspernatur,
        praesentium non.
      </h2>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam quisquam quod deleniti nesciunt ex eum
        excepturi consequuntur reiciendis quam, obcaecati, expedita similique aut esse quae quas! Aspernatur,
        praesentium non..
      </h3>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam quisquam quod deleniti nesciunt ex eum
        excepturi consequuntur reiciendis quam, obcaecati, expedita similique aut esse quae quas! Aspernatur,
        praesentium non.
      </h4>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam quisquam quod deleniti nesciunt ex eum
        excepturi consequuntur reiciendis quam, obcaecati, expedita similique aut esse quae quas! Aspernatur,
        praesentium non..
      </h5>
      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam quisquam quod deleniti nesciunt ex eum
        excepturi consequuntur reiciendis quam, obcaecati, expedita similique aut esse quae quas! Aspernatur,
        praesentium non.
      </h6>
      <p className={classnames(styles.paragraphL)}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className={classnames(styles.paragraph)}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className={classnames(styles.paragraphS)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam quisquam quod deleniti nesciunt ex eum
        excepturi consequuntur reiciendis quam, obcaecati, expedita similique aut esse quae quas! Aspernatur,
        praesentium non.
      </p>
    </main>
  );
}

export default memo(Home);
