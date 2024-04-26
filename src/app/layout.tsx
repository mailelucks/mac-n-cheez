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
  title: 'Create Next App',
  description: 'Generated by create next app'
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
        {children}
      </body>
    </html>
  );
}
