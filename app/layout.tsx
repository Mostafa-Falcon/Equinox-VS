import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#030611',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://equinox-dusky.vercel.app'),
  title: 'Equinox VS - السيرفر العربي الرسمي لـ Conquer Mobile',
  description: 'الموقع الرسمي لـ Equinox VS - سيرفر قهر أونلاين موبايل العربي بعتاد +8 مجاني بالشنطة قابل للترقية لـ +12، هدايا يومية ومكافآت قتل الوحوش.',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/logo-emblem.jpeg', type: 'image/jpeg' },
    ],
    shortcut: ['/icon.png'],
    apple: [
      { url: '/logo-emblem.jpeg', type: 'image/jpeg' },
    ],
  },
  openGraph: {
    title: 'Equinox VS - Conquer Mobile World',
    description: 'انضم الآن لعالم Equinox VS واستلم عتادك وصندوق الهدايا فوراً!',
    images: [{ url: '/logo-emblem.jpeg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-emblem.jpeg" />
      </head>
      <body className="bg-[#050811] text-slate-100 antialiased overflow-x-hidden selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
