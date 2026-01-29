// In your _document.js or via metadata in app/layout.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Basic favicon */}
        <link rel="icon" href="/sl.svg" />
        
        {/* SVG favicon (scalable) */}
        <link rel="icon" type="image/svg+xml" href="/sl.svg" />
        
        {/* Apple Touch Icon (for iOS home screen) */}
        <link rel="apple-touch-icon" sizes="180x180" href="/sl.svg" />
        
        {/* Multiple sizes for different contexts */}
        <link rel="icon" type="image/png" sizes="32x32" href="/sl.svg-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/sl.svg-16x16.png" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}