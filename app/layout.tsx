import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
export const metadata: Metadata = { title: 'Aces Intelligence Workhub', description: 'One workspace for your team’s tasks, time, and projects. Built for Aces Intelligence.', icons: { icon: '/favicon.svg?v=3', apple: '/aces-logo.svg?v=3' } };
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) { return <html lang="en"><body>{children}<Script src="/aces-logo.js" strategy="afterInteractive" /></body></html>; }
