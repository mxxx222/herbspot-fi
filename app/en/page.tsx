import { Hero } from '@/components/Hero';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ProductGrid } from '@/components/ProductGrid';
import { TrustSignals } from '@/components/TrustSignals';
import { AIRecommendations } from '@/components/AIRecommendations';

export default function HomePageEN() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <TrustSignals />
      <AIRecommendations currentProduct={null} />
    </main>
  );
}

export const metadata = {
  title: 'HerbSpot.fi - Premium 510 Cartridges & Aromatherapy Devices',
  description: 'Premium 510 cartridges & aromatherapy devices. Medical-grade steel, pyrex glass and ceramic core. White-label & premium packaging ready.',
  keywords: '510 cartridge, aromatherapy, vape, cbd, steel cartridge, ceramic core, pyrex glass, white label, premium packaging, EU shipping, herbspot, herbspot.fi',
  openGraph: {
    title: 'HerbSpot.fi - Premium 510 Cartridges',
    description: 'Premium 510 cartridges & aromatherapy devices. Medical-grade steel, pyrex glass and ceramic core.',
    images: ['/og-image-en.jpg'],
    locale: 'en_US',
    type: 'website',
  },
};
