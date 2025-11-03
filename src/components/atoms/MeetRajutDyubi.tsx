import React from "react";
import { FaHeart, FaCheckCircle } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { TbNeedleThread } from "react-icons/tb";

const MeetRajutDyubi: React.FC = () => {
  return (
    <div className="relative mt-[-6em]  flex items-center justify-center w-full lg:w-1/2 px-6 sm:px-10 lg:px-14 z-10 order-1 lg:order-none">
      {/* Latar lembut dengan nuansa benang keemasan */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(193,143,101,0.15)_0%,_transparent_75%)] blur-2xl"></div>

      <div className="relative max-w-lg text-center lg:text-left bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgba(193,143,101,0.1)] p-6 sm:p-8 border border-mainColor/20 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(193,143,101,0.25)] hover:scale-[1.015]">
        
        {/* Header */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
          <TbNeedleThread className="text-mainColor text-4xl animate-spin-slow drop-shadow-sm" />
          <h3 className="uppercase text-sm tracking-wider font-semibold text-mainColor">
            Tentang Kami
          </h3>
        </div>

        {/* Judul utama */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-dancingScript text-mainColor mb-3 leading-snug">
          Semua berawal dari benang dan cinta yang terjalin.
        </h1>

        {/* Paragraf pembuka */}
        <p className="text-lg sm:text-base text-rajutGray leading-relaxed mb-6 text-justify">
          Rajut Dyubi tumbuh dari <span className="font-medium text-mainColor">passion sederhana</span> menjadi perjalanan penuh makna.
          Setiap rajutan kami buat dengan hati, menghadirkan kehangatan di setiap simpul dan keindahan di setiap detail.
        </p>

        {/* Daftar poin dua kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-rajutGray mb-6">
          {[
            "Kualitas Rajutan Terbukti",
            "Desain Unik & Eksklusif",
            "Pengalaman Bertahun-tahun",
            "Layanan Ramah & Cepat",
            "Bahan Ramah Lingkungan",
            "Karya Handmade Penuh Cinta",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 justify-center lg:justify-start">
              <FaCheckCircle className="text-mainColor text-base" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center lg:items-start gap-2 text-sm">
          <p className="flex items-center gap-2 text-mainColor font-semibold tracking-wide">
            <TfiLocationPin className="text-lg animate-bounce-slow" />
            Pulisen, Boyolali, Jawa Tengah
          </p>
          <p className="flex items-center gap-2 text-rajutGray italic text-center lg:text-left">
            <FaHeart className="text-mainColor animate-pulse" />
            “Rajutan hangat dari tangan, untuk hati yang mencintai keindahan.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetRajutDyubi;
