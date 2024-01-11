import { NextSeo } from 'next-seo';
import { getStoryblokApi, ISbStoriesParams, ISbStoryData, useStoryblokState } from '@storyblok/react';
import classnames from 'classnames';

import styles from './storyblok.module.scss';

type Props = {
  initialStory: ISbStoryData;
  blok: ISbStoryData;
};

export default function Project({ initialStory }: Props) {
  const story = useStoryblokState(initialStory);
  if (!story) return <div>Loading...</div>;

  const { content } = story;

  return (
    <main className={classnames(styles.Storyblok)}>
      <NextSeo title={content.name} />
      <h1>{content.name}</h1>
    </main>
  );
}

export async function getStaticProps({ preview = false }) {
  const slug = 'PAGE_SLUG';

  const sbParams: ISbStoriesParams = {
    version: 'published'
  };

  if (preview) {
    sbParams.version = 'draft';
  }

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/PAGE_TYPE/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false
    },
    revalidate: 3600
  };
}
