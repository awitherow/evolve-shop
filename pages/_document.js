import Document, { Head, Main, NextScript } from "next/document";

const title = "EVOLVE SHOP";
const description = "";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/logo.png" />
          <meta name="keywords" content="" />
          <meta name="rights" content="EVOLVE SHOP" />
          <meta name="description" content={description} />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />

          <meta itemprop="name" content={title} />
          <meta itemprop="description" content={description} />
          <meta itemprop="image" content="" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image:src" content="" />

          <meta property="og:title" content={title} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="" />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={title} />
          <meta property="article:published_time" content={Date.now()} />
          <meta property="article:modified_time" content={Date.now()} />
          {/* <meta property="fb:admins" content="Facebook numberic ID" /> */}

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <script src="https://checkout.stripe.com/checkout.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
