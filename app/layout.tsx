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
  metadataBase: new URL('https://completeyacht.netlify.app'),
  title: 'Complete Yacht Detailing and Management | Pompano Beach',
  description: 'Veteran-owned marine service with 20+ years of experience. Specializing in high-end yacht detailing, ceramic coatings, gelcoat refinishing, and vessel monitoring in Broward and Palm Beach counties.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Complete Yacht Detailing and Management',
    description: 'Veteran-owned marine service with 20+ years of experience. Specializing in high-end yacht detailing, ceramic coatings, gelcoat refinishing, and vessel monitoring in Broward and Palm Beach counties.',
    url: 'https://completeyacht.netlify.app',
    siteName: 'Complete Yacht Detailing and Management',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Complete Yacht Detailing and Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Yacht Detailing and Management',
    description: 'Veteran-owned marine service with 20+ years of experience.',
    images: ['https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-sail text-carbon" suppressHydrationWarning>{children}</body>
    </html>
  );
}
