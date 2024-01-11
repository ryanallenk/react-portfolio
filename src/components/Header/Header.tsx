import { memo, useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './Header.module.scss';

const headerRoutes = {
  about: { path: '/about', title: 'About' }
};

import OpenCloseButton from '../OpenCloseButton/OpenCloseButton';
function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={classnames(styles.Header, { [styles.navOpen]: navOpen })}>
      <OpenCloseButton
        open={navOpen}
        onClick={() => setNavOpen(!navOpen)}
        className={classnames(styles.hamburgerButton)}
      />
      <nav className={classnames(styles.nav)}>
        <ul className={classnames(styles.menu)}>
          {Object.values(headerRoutes).map(({ path, title }) => (
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
    </header>
  );
}

export default memo(Header);
