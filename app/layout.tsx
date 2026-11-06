import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Equinox VS - السيرفر العربي الرسمي لـ Conquer Mobile',
  description: 'الموقع الرسمي للعبة Equinox VS - سيرفر قهر أونلاين موبايل العربي الخاص بعتاد بلس 12 وجوائز يومية.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#0b0e14] text-[#e0e6ed] antialiased">
        {children}
      </body>
    </html>
  );
}
