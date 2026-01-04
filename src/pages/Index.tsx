import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import BestSellers from '@/components/BestSellers';
import BrandValues from '@/components/BrandValues';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <BestSellers />
        <BrandValues />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
