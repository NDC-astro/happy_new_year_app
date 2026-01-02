import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Happy New Year 2026! 🎉',
  description: 'Celebrate the arrival of 2026 with fireworks, confetti, and personalized greetings!',
  keywords: ['new year', '2026', 'celebration', 'fireworks', 'greeting cards'],
  openGraph: {
    title: 'Happy New Year 2026! 🎉',
    description: 'Join the celebration! Create personalized greetings and share the joy.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy New Year 2026! 🎉',
    description: 'Celebrate 2026 with amazing animations and personalized greetings!',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}