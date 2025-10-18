import { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HerbSpot.ru - Премиум 510 картриджи и ароматерапия',
  description: 'Премиум 510 картриджи, AIO устройства и аксессуары. Медицинская сталь, пирекс и керамическое ядро.',
  keywords: ['510 картриджи', 'ароматерапия', 'премиум', 'медицинская сталь', 'пирекс', 'керамическое ядро'],
  openGraph: {
    title: 'HerbSpot.ru - Премиум 510 картриджи',
    description: 'Премиум 510 картриджи, AIO устройства и аксессуары. Медицинская сталь, пирекс и керамическое ядро.',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HerbSpot.ru - Премиум 510 картриджи',
    description: 'Премиум 510 картриджи, AIO устройства и аксессуары. Медицинская сталь, пирекс и керамическое ядро.',
  },
};

export default function RussianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
