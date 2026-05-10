import TopBar from '@/components/feature/TopBar';
import Navbar from '@/components/feature/Navbar';
import HeroSection from '@/components/feature/HeroSection';
import CollectionsSection from '@/components/feature/CollectionsSection';
import MarqueeSection from '@/components/feature/MarqueeSection';
import OffersSection from '@/components/feature/OffersSection';
import TrendingSection from '@/components/feature/TrendingSection';
import KitchenBanner from '@/components/feature/KitchenBanner';
import DiscoverMore from '@/components/feature/DiscoverMore';
import AppliancesSection from '@/components/feature/AppliancesSection';
import FeaturedProduct from '@/components/feature/FeaturedProduct';
import Footer from '@/components/feature/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <CollectionsSection />
        <MarqueeSection />
        <OffersSection />
        <TrendingSection />
        <KitchenBanner />
        <DiscoverMore />
        <AppliancesSection />
        <FeaturedProduct />
      </main>
      <Footer />
    </div>
  );
}