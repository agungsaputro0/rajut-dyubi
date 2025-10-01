import React from "react";

import { FaRegHeart } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";
import { GiSewingNeedle } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

const OurJourneyInNumber: React.FC = () => {
  // Data sekarang berupa ikon, angka, dan label
  const stats = [
    { icon: <FaRegHeart />, number: "500+", label: "Happy Customers" },
    { icon: <PiMedalLight />, number: "5+", label: "Years Experience" },
    { icon: <GiSewingNeedle />, number: "1000+", label: "Custom Pieces" },
    { icon: <RiCustomerService2Fill />, number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="w-full bg-rajutBolderPeach py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl font-bold text-rajutBoldPink mb-2 font-dancingScript">
          Our Journey in Numbers
        </h2>
       <p className="text-rajutGray max-w-xl mx-auto mb-6 text-[0.85em] sm:text-base">
          Perjalanan kami dalam angka: setiap langkah, setiap pencapaian, setiap cerita.
       </p>

        {/* Grid Lingkaran */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-3xl sm:text-4xl text-rajutBoldPink shadow-md">
                {item.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-rajutBoldPink">
                {item.number}
              </div>
              <div className="text-sm sm:text-base text-rajutGray">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurJourneyInNumber;
