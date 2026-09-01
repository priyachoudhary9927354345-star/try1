import { Hero } from "@/components/hero/Hero";
import { FeaturedCollection } from "@/components/collection/FeaturedCollection";
import { ScentFinder } from "@/components/scent-finder/ScentFinder";
import { BrandStory } from "@/components/brand/BrandStory";
import { Testimonials } from "@/components/social/Testimonials";
import { Newsletter } from "@/components/newsletter/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-cream">
      <Hero />
      <FeaturedCollection />
      <ScentFinder />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
