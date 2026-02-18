import Advertisements from "../components/home/Advertisements";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Features from "../components/home/Features";
import HeroSection from "../components/home/HeroSection";
import HotDeals from "../components/home/HotDeals";
import LatestNews from "../components/home/LatestNews";
import PopularCategories from "../components/home/PopularCategories";
import PopularProducts from "../components/home/PopularProducts";
import SummerBanner from "../components/home/SummerBannner";


export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <PopularCategories />
      <PopularProducts />
      <Advertisements />
      <HotDeals />
      <SummerBanner />
      <FeaturedProducts />
      <LatestNews />

   
    </>
  );
}
