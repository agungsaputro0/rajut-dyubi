import React from "react";
import { FaInstagram } from "react-icons/fa";
import useIsMobile from "../hooks/UseIsMobile";

const FollowOurJourney: React.FC = () => {
  const isMobile = useIsMobile();
  // contoh gambar dummy, nanti ganti dengan asset kamu
  const images = [
    "/assets/img/instagram1.jpg",
    "/assets/img/instagram2.jpg",
    "/assets/img/instagram3.jpg",
    "/assets/img/instagram4.jpg",
  ];

  return (
    <div className="w-full bg-gradientJourney py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl font-bold text-mainColor mb-2 font-dancingScript">
          Ikuti Perjalanan Kami
        </h2>
        <p className="text-rajutGray max-w-2xl mx-auto mb-6 text-lg">
          Dapatkan inspirasi dari kreasi terbaru kami dan momen di balik layar di Instagram.
        </p>

        {/* Tombol Instagram */}
        <a
          href="https://www.instagram.com/rajutdyubi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-mainColor text-mainColor px-5 py-2 rounded-full font-medium shadow-sm hover:bg-mainColor hover:text-white transition duration-200"
        >
          <FaInstagram className="text-lg" />
          @rajutdyubi
        </a>

        {/* Grid Gambar */}
        {!isMobile && (
        <div className="mt-10 grid  grid-cols-1 sm:grid-cols-2 sm:grid-cols-4 gap-12">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-md">
              <img
                src={img}
                alt={`Instagram post ${idx + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default FollowOurJourney;
