import Script from 'next/script';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BG.IBELICK - Modern, Ready-to-Use Background Snippets for Developers',
  description: 'A collection of modern background snippets for web developers. Ready-to-use snippets crafted with Tailwind CSS and Vanilla CSS for seamless integration.',
  keywords: 'background snippets, Tailwind CSS, CSS snippets, web development, front-end snippets, free CSS resources',
  openGraph: {
    title: 'BG.IBELICK - Ready-to-Use Background Snippets',
    description: 'Modern background snippets for web developers crafted with Tailwind CSS and Vanilla CSS.',
    url: 'https://bg.ibelick.com',
    type: 'website',
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'BG.IBELICK Cover Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BG.IBELICK - Ready-to-Use Background Snippets',
    description: 'Modern background snippets for web developers crafted with Tailwind CSS and Vanilla CSS.',
    image: '/banner.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        
        {/* Open Graph Metadata */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      {!isDev ? (
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="9ad0e597-9fa4-4690-8ca2-18a964ab087f"
        />
      ) : null}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
