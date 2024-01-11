import { AppProps } from 'next/app';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import { apiPlugin, storyblokInit } from '@storyblok/react';
import 'normalize.css';

import '@/styles/global.scss';

import Layout from '@/components/Layout/Layout';

import gsapInit from '@/utils/gsap';

import storyblokComponents from '@/lib/storyblok/storyblok-components';
import UiContextProvider from '@/provider/UiContextProvider';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components: storyblokComponents
});

if (typeof window !== 'undefined') {
  gsapInit();
}

const defaultSeoMeta = {
  siteName: 'Tonic Starter',
  title: 'Tonic Starter',
  description: 'Tonic Starter is a Next.js starter kit with Storyblok CMS integration.'
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title={defaultSeoMeta.title}
        titleTemplate={'Tonic Starter | %s'}
        description={defaultSeoMeta.description}
        twitter={{
          handle: '@',
          cardType: 'summary_large_image',
          site: '@'
        }}
        additionalMetaTags={[
          {
            httpEquiv: 'content-type',
            content: 'text/html;charset=utf-8'
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, maximum-scale=1'
          }
        ]}
        openGraph={{
          title: defaultSeoMeta.title,
          description: defaultSeoMeta.description,
          url: process.env.NEXT_PUBLIC_URL,
          type: 'website',
          locale: 'en_US',
          siteName: defaultSeoMeta.siteName,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/assets/images/share-image-new.png`,
              type: 'image/png',
              alt: defaultSeoMeta.title,
              width: 1200,
              height: 630
            }
          ]
        }}
      />
      <SocialProfileJsonLd
        type="Organization"
        name="Tonic Starter"
        url={process.env.NEXT_PUBLIC_URL}
        sameAs={['https://twitter.com/@']}
      />
      <UiContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UiContextProvider>
    </>
  );
}

export default App;
