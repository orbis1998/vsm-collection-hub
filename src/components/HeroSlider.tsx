import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const slides = [
  {
    image: hero1,
    title: "VIVRE AVEC STYLE",
    subtitle: "Collection 2024",
  },
  {
    image: hero2,
    title: "MADE IN DRC",
    subtitle: "Worn Worldwide",
  },
  {
    image: hero3,
    title: "STREETWEAR PREMIUM",
    subtitle: "Nouvelle Collection",
  },
];

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Auto-play
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(interval);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 bg-background/30" />
              
              <div className="relative h-full flex items-center justify-center text-center px-4">
                <div className="max-w-4xl animate-fade-in">
                  <p className="text-primary font-medium uppercase tracking-[0.3em] mb-4 text-sm md:text-base">
                    {slide.subtitle}
                  </p>
                  <h1 className="vsm-heading text-5xl md:text-7xl lg:text-8xl mb-8 text-foreground">
                    {slide.title}
                  </h1>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/boutique">
                      <Button variant="hero" size="xl">
                        Découvrir la Collection
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-foreground/20 flex items-center justify-center text-foreground hover:bg-background/40 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-foreground/20 flex items-center justify-center text-foreground hover:bg-background/40 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-primary w-8'
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
