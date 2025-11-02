import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomerCard from "../atoms/CustomerCard";
import useIsMobile from "../hooks/UseIsMobile";

const CustomerSection: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Aulia Rahma",
      message:
        "Rajutannya halus banget, pengiriman cepat, dan pelayanan super ramah!",
      image: "/assets/img/customer1.jpg",
      location: "Bandung",
    },
    {
      name: "Dewi Lestari",
      message:
        "Suka banget! Warna dan teksturnya persis seperti di foto. Pasti beli lagi!",
      image: "/assets/img/customer2.jpg",
      location: "Jakarta",
    },
    {
      name: "Yanto Gobet",
      message:
        "Produk rajutannya unik dan berkualitas. Detailnya rapi banget 🧶✨",
      image: "/assets/img/customer3.jpg",
      location: "Yogyakarta",
    },
    {
      name: "Sari Melati",
      message:
        "Pelayanan ramah dan hasil rajutannya benar-benar memuaskan. Terima kasih!",
      image: "/assets/img/customer4.jpg",
      location: "Surabaya",
    },
    {
      name: "Indah Permata",
      message:
        "Setiap rajutan punya karakter dan kehangatan tersendiri, suka banget 💕",
      image: "/assets/img/customer5.jpg",
      location: "Bali",
    },
  ];

  return (
    <section className="w-full bg-gradientJourneyReverse py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-mainColor mb-2 font-dancingScript">
          Apa Kata Pelanggan Kami
        </h2>
        <p className="text-rajutGray max-w-xl mx-auto text-lg">
          Cerita hangat dari mereka yang telah merasakan keindahan rajutan kami.
        </p>

        <div className="flex items-center justify-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={isMobile ? 1 : 3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop
            centeredSlides
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className={`w-[90vw] sm:w-[85%] max-w-5xl`}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    index === activeIndex
                      ? "scale-105 opacity-100 z-20"
                      : "scale-90 opacity-80"
                  }`}
                >
                  <CustomerCard {...item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
