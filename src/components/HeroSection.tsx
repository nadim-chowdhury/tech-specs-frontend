"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const trendingProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    image:
      "https://images.unsplash.com/photo-1524293772845-840102eccb82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The latest iPhone with cutting-edge technology.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    image:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Experience the ultimate performance with Galaxy S23 Ultra.",
  },
  {
    id: 3,
    name: "Google Pixel 7 Pro",
    image:
      "https://images.unsplash.com/photo-1511227499331-25c621db940e?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Google's flagship with the best camera on the market.",
  },
];

export default function HeroSection() {
  return (
    <section className="">
      <h2 className="text-3xl font-bold mb-4">Trending Tech Products</h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {trendingProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="text-center">
              <Image
                src={product.image}
                alt={product.name}
                width={1280}
                height={720}
                className="w-full h-96 object-cover rounded-lg"
              />
              
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="mt-8 bg-white text-blue-600 p-2 rounded">
        Shop Now
      </button>
    </section>
  );
}
