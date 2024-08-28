// import FeaturedProducts from "@/components/FeaturedProducts";
// import Footer from "@/components/Footer";
// import HeroSection from "@/components/HeroSection";
// import LatestReviews from "@/components/LatestReviews";
// import PopularCategories from "@/components/PopularCategories";
// import SubscriptionCta from "@/components/SubscriptionCta";
// import TrendingArticles from "@/components/TrendingArticles";
import Image from "next/image";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LatestReviews from "@/components/home/LatestReviews";
import PopularCategories from "@/components/home/PopularCategories";
import TrendingArticles from "@/components/home/TrendingArticles";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      {/* <HeroSection />
      <FeaturedProducts />
      <LatestReviews />
      <PopularCategories />
      <TrendingArticles />
      <SubscriptionCta /> */}
      <HeroSection />
      <FeaturedProducts />
      <LatestReviews />
      <TrendingArticles />
      <PopularCategories />
    </main>
  );
}
