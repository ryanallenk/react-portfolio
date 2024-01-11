import { memo } from 'react';
import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';
import classnames from 'classnames';

import styles from './StoryblokProjectImage.module.scss';

type Props = {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blok: any;
};

function StoryblokProjectImage({ className, blok }: Props) {
  const dimensions = blok.image.filename.split('/')[5].split('x');

  if (dimensions[0] === '') {
    return (
      <div className={classnames(styles.StoryblokProjectImage, className)} {...storyblokEditable(blok)}>
        <img className={classnames(styles.image)} src={blok.image.filename} alt={blok.image?.alt ?? 'Project Image'} />
      </div>
    );
  }

  return (
    <div
      className={classnames(styles.StoryblokProjectImage, className, styles[blok.margin_bottom])}
      {...storyblokEditable(blok)}
    >
      <span className={classnames(styles.image)}>
        <Image
          width={dimensions[0]}
          height={dimensions[1]}
          src={blok.image.filename}
          alt={blok.image?.alt ?? 'Project Image'}
          objectFit="contain"
        />
      </span>
    </div>
  );
}

export default memo(StoryblokProjectImage);
