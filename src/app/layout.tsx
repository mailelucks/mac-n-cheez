import React from 'react';
import type { Metadata } from 'next';
import { MuseoModerno, Playfair_Display } from 'next/font/google';
import './globals.css';

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display'
});

const museo_moderno = MuseoModerno({
  subsets: ['latin'],
  variable: '--font-museo-moderno'
});

export const metadata: Metadata = {
  title: 'Mac & Cheese: a case study and celebration',
  description:
    "A fanpage for one of the world's greatest comfort foods: macaroni and cheese"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${museo_moderno.variable} ${playfair_display.variable} font-serif`}
      >
        <main className="flex min-h-screen w-full flex-col items-start justify-start bg-stormy">
          {children}
        </main>
      </body>
    </html>
  );
}
