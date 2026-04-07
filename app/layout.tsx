import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Complete Yacht Detailing and Management | Pompano Beach',
  description: 'Veteran-owned marine service with 20+ years of experience. Specializing in high-end yacht detailing, ceramic coatings, gelcoat refinishing, and vessel monitoring in Broward and Palm Beach counties.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Complete Yacht Detailing and Management',
    description: 'Veteran-owned marine service with 20+ years of experience. Specializing in high-end yacht detailing, ceramic coatings, gelcoat refinishing, and vessel monitoring in Broward and Palm Beach counties.',
    url: 'https://completeyachtdetailing.com',
    siteName: 'Complete Yacht Detailing and Management',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Complete Yacht Detailing and Management',
      },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-sail text-carbon" suppressHydrationWarning>{children}</body>
    </html>
  );
}
