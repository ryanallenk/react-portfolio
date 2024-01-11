import { memo } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './Footer.module.scss';

const routes = {
  about: { path: '/about', title: 'About' }
};

function Footer() {
  return (
    <footer className={classnames(styles.Footer)}>
      <h2>Footer</h2>
      <nav className={classnames(styles.nav)}>
        <ul className={classnames(styles.menu)}>
          {Object.values(routes).map(({ path, title }) => (
            <li key={path} className={classnames(styles.menuItem)}>
              <Link href={path}>
                <a aria-label={path} href={path}>
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default memo(Footer);
