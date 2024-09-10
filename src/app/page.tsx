import FeaturedGadgets from "@/components/home/FeaturedGadgets";
import PopularCategories from "@/components/home/PopularCategories";
import TrendingArticles from "@/components/home/TrendingArticles";
import HeroSection from "@/components/home/HeroSection";
import FeaturedMobiles from "@/components/home/FeaturedMobiles";

export default function Home() {
  return (
    <main className="home-container flex flex-col gap-12 lg:gap-16">
      <HeroSection />
      <FeaturedMobiles />
      <FeaturedGadgets />
      <TrendingArticles />
      <PopularCategories />
    </main>
  );
}
