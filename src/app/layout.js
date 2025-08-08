// src/app/layout.js
import './globals.css';
import VisualEffectsInitializer from './components/VisualEffectsInitializer';

export const metadata = {
  title: "Seth Riley | Data Engineer & AI Solutions Architect",
  description: "The portfolio of Seth Riley, a technical leader specializing in data engineering, AI solutions, and full-stack development on Azure and OCI.",
  metadataBase: new URL('https://seth-riley-portfolio.example'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    title: 'Seth Riley | Data Engineer & AI Solutions Architect',
    description: 'Portfolio and work of Seth Riley: data engineering, AI, full-stack.',
    url: '/',
    siteName: 'Seth Riley Portfolio',
    images: [
      { url: '/og-card.png', width: 1200, height: 630, alt: 'Seth Riley Portfolio' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seth Riley | Data Engineer & AI Solutions Architect',
    description: 'Portfolio and work of Seth Riley: data engineering, AI, full-stack.',
    images: ['/og-card.png']
  },
};

export default function RootLayout({ children }) {
  return (
    // Add suppressHydrationWarning here
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning> 
        {children}
        <VisualEffectsInitializer />
      </body>
    </html>
  );
}