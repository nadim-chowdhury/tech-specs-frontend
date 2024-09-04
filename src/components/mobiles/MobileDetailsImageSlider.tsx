"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "../ui/button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

export default function MobileDetailsImageSlider({
  images,
  customDuration,
}: any) {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        // autoplay={{
        //   delay: customDuration,
        //   disableOnInteraction: false,
        // }}
        slidesPerView={1}
        className="rounded-lg overflow-hidden"
      >
        {images?.map((img: any, i: any) => (
          <SwiperSlide key={i}>
            <div className="h-[40vh] w-full">
              <Image
                key={i}
                src={img}
                alt=""
                width={1280}
                height={720}
                className="h-full w-auto object-cover"
              />
            </div>

            {/* <div
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
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
