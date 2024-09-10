import FeaturedProducts from "@/components/home/FeaturedProducts";
import LatestReviews from "@/components/home/LatestReviews";
import PopularCategories from "@/components/home/PopularCategories";
import TrendingArticles from "@/components/home/TrendingArticles";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main className="home-container flex flex-col gap-12 lg:gap-16">
      <HeroSection />
      <FeaturedProducts />
      <LatestReviews />
      <TrendingArticles />
      <PopularCategories />
    </main>
  );
}
