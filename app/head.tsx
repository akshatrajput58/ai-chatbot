import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>vicpra chatbot</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="With the help of Vicpra Chatbot, you can make your work even easier, that too with a single click, use it today for free."/>
      <link rel="apple-touch-icon" sizes="57x57" href="https://vicpra.com/images/favicon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="https://vicpra.com/images/favicon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="https://vicpra.com/images/favicon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="https://vicpra.com/images/favicon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="https://vicpra.com/images/favicon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="https://vicpra.com/images/favicon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="https://vicpra.com/images/favicon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="https://vicpra.com/images/favicon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="https://vicpra.com/images/favicon-180x180.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://vicpra.com/images/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://vicpra.com/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="https://vicpra.com/images/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="https://vicpra.com/images/favicon-192x192.png" />
      <link rel="shortcut icon" type="image/x-icon" href="https://vicpra.com/images/favicon.ico" />
      <link rel="icon" type="image/x-icon" href="https://vicpra.com/images/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="https://vicpra.com/images/favicon-144x144.png" />
      <meta name="msapplication-config" content="https://vicpra.com/images/browserconfig.xml"></meta>
      <meta name="keywords" content="free ai chatbot,chatgpt bot,chatgpt clone,vicpra chatbot,vicpra ai chatbot" />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-5ZXHZWBMHP`}
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5ZXHZWBMHP');
        `}
      </Script>
    </>
  )
}
