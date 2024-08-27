import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LatestReviews from "@/components/LatestReviews";
import PopularCategories from "@/components/PopularCategories";
import SubscriptionCta from "@/components/SubscriptionCta";
import TrendingArticles from "@/components/TrendingArticles";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <FeaturedProducts />
      <LatestReviews />
      <PopularCategories />
      <TrendingArticles />
      <SubscriptionCta />
      <Footer />
    </main>
  );
}
