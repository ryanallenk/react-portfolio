import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

import { GtmScript } from '@/utils/analytics';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <GtmScript consent={true} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
