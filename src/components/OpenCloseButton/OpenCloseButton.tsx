import { memo } from 'react';
import classnames from 'classnames';

import styles from './OpenCloseButton.module.scss';

type Props = {
  className?: string;
  onClick: () => void;
  open: boolean;
};

function OpenCloseButton({ className, onClick, open }: Props) {
  return (
    <button
      className={classnames(styles.OpenCloseButton, className, { [styles.open]: open })}
      onClick={() => onClick()}
    >
      <span className={classnames(styles.bar, styles.one)} />
      <span className={classnames(styles.bar, styles.two)} />
    </button>
  );
}

export default memo(OpenCloseButton);
