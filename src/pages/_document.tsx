import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { updateAssetsPrefix } from 'utils/path';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="version" content={process.env.VERSION} />
          <meta name="theme-color" content="#000000" />
          <meta name="title" content="Sergey Petryaev" />
          <meta name="description" content="Sergey Petryaev's art portfolio" />
          <meta
            name="keywords"
            content="spetryaev, sbpetryaev, petryaev, inflatableotter, deflatableotter, animation, art, illustration, sergey petryaev, сергей петряев, петряев, sergei petriaev, petriaev"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="14 days" />
          <meta name="author" content="Sergey Petryaev" />
          <link rel="shortcut icon" href={updateAssetsPrefix('favicon.ico')} />

          <link
            rel="preconnect"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/"
            crossOrigin=""
          />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
