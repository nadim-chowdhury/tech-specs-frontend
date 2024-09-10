"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { featuredProducts } from "@/utils/featured-products";
import { Button } from "../ui/button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const ProductSwiper = ({ products, customDuration }: any) => (
  <div className="h-full">
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: customDuration,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      className="mySwiper rounded-lg overflow-hidden h-full"
    >
      {products?.map((product: any) => (
        <SwiperSlide key={product.id}>
          <div
            className="absolute inset-0 bg-cover bg-no-repeat transform transition-transform duration-300 hover:scale-110"
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>
          <div className="relative z-10 flex flex-col justify-center text-white px-8 py-4 bg-gradient-to-r from-slate-900 to-transparent h-full w-full">
            <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
            <p className="text-white/80 mb-4">{product.shortDescription}</p>
            <Link href={`/products/${product.id}`}>
              <Button variant="secondary" size="sm">
                Learn More
              </Button>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default function HeroSection() {
  return (
    <section className="container mx-auto h-[40vh] md:h-[60vh]">
      {/* <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[60vh]"> */}
      {/* Main Swiper */}
      {/* <div className="h-[40vh] md:h-[60vh] col-span-1 lg:col-span-2"> */}
      <ProductSwiper products={featuredProducts} customDuration={2000} />
      {/* </div> */}

      {/* Secondary Swipers */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-6 h-full">
        <div className="h-full w-full">
          <ProductSwiper products={featuredProducts} customDuration={3000} />
        </div>
        <div className="h-full w-full">
          <ProductSwiper products={featuredProducts} customDuration={4000} />
        </div>
      </div> */}
    </section>
  );
}
