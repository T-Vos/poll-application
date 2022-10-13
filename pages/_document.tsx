import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="nl">
        <Head>
          <meta name="description" content="A small poll application"/>
          <meta name="author" content="Thomas Vos"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
