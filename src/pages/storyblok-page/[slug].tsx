import { GetStaticPropsContext } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
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

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get('cdn/links/', {
    starts_with: 'PAGE_TYPE/',
    version: 'published'
  });

  const paths: Array<string | { params: NextParsedUrlQuery; locale?: string }> = [];
  Object.keys(data.links).forEach((linkKey) => {
    const slug: string = data.links[linkKey].slug.replace('pages/', '');
    paths.push({ params: { slug } });
  });

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  let slug;

  if (context.params) {
    slug = context.params.slug;
  }

  const sbParams: ISbStoriesParams = {
    version: 'published'
  };

  if (context.preview) {
    sbParams.version = 'draft';
  }

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/PAGE_TYPE/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: context.preview || false
    },
    revalidate: 3600
  };
}
