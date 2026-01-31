import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Bella Apartments – Bonita Springs Luxury Living',
  description: 'Luxury apartments in Downtown Bonita Springs',
  openGraph: {
    title: 'Bella Apartments – Modern Luxury in Downtown Bonita Springs',
    description: 'Discover twenty-one thoughtfully designed residences in the heart of Downtown Bonita Springs. Featuring modern finishes, private balconies, resort-style amenities, and walkable access to shops, dining, and entertainment.',
    images: [
      {
        url: 'https://www.bellabonitasprings.com/images/the-bella-downtown-bonita-springs-fl-modern-design.jpg',
        width: 1200,
        height: 630,
        alt: 'Bella Apartments - Modern luxury living in Downtown Bonita Springs',
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Bella Apartments',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bella Apartments – Modern Luxury in Downtown Bonita Springs',
    description: 'Discover twenty-one thoughtfully designed residences in the heart of Downtown Bonita Springs.',
    images: ['https://www.bellabonitasprings.com/images/the-bella-downtown-bonita-springs-fl-modern-design.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}