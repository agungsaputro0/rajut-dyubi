import React from "react";
import { Card } from "antd";

import { FaRegHeart } from "react-icons/fa";
import { LiaUserCheckSolid } from "react-icons/lia";
import { GiSewingString } from "react-icons/gi";
import { RiSparkling2Fill } from "react-icons/ri";

const WhatDriveUs: React.FC = () => {
  // Data sekarang berupa ikon, angka, dan label
  const stats = [
    {   icon: <FaRegHeart />, 
        title: "Passion & Love",
        description: "Setiap produk dibuat dengan sentuhan presisi, passion, dan cinta."
    },
    {   icon: <GiSewingString />, 
        title: "Premium Quality", 
        description: "Kami hanya menggunakan bahan baku premium dan berkualitas tinggi untuk produksi" 
    },
    {   icon: <RiSparkling2Fill />, 
        title: "Unique Designs", 
        description: "Setiap desain terinspirasi oleh produk-produk berkualtias dunia, serta disesuaikan dengan kebutuhan customer" 
    },
    {   icon: <LiaUserCheckSolid />, 
        title: "Personal Touch", 
        description: "Setiap karya dibuat oleh Rajut Dyubi dengan memastikan perhatian pada setiap detail serta adanya keterikatan personal pada setiap ciptaan." 
    },
  ];

  return (
    <>
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl font-bold text-rajutBoldPink mb-2 font-dancingScript">
          What Drive Us
        </h2>
       <p className="text-rajutGray max-w-xl mx-auto mb-6 text-[0.85em] sm:text-base">
          Nilai produk kami ada pada keunikan desain, bahan berkualitas, dan produksi yang presisi
       </p>

        {/* Grid Lingkaran */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((item, idx) => (
            <Card
                key={idx}
                className="w-full h-auto text-center shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl"
                style={{ borderRadius: "12px" }}
            >
                <div className="w-20 h-20 justify-self-center rounded-full bg-rajutLighterPink flex items-center justify-center text-3xl sm:text-4xl text-rajutBoldPink shadow-md">
                    {item.icon}
                </div>
                <div className="text-rajutGray font-bold mt-4">{item.title}</div>
                <div className="text-rajutGray text-[0.85em]">{item.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
    <div className="w-full bg-gradientJourney py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl font-bold text-rajutBoldPink mb-2 font-dancingScript">
          The Future We're Weaving
        </h2>
       <p className="text-rajutGray max-w-xl mx-auto mb-6 text-[0.85em] sm:text-base">
         As I continue to grow and evolve as an artist, my vision extends beyond just creating beautiful pieces. I dream of building a community where the art of crochet is celebrated, where traditions are preserved, and where every customer becomes part of our extended family.
       </p>
       <p className="text-rajutGray max-w-xl mx-auto mb-6 text-[0.85em] sm:text-base">
         From our humble beginnings in Lafenwa to reaching customers across Nigeria and beyond, every order is a step towards realizing this dream. Thank you for being part of our story, and I can't wait to create something beautiful just for you.
       </p>
      </div>
    </div>
    </>
  );
};

export default WhatDriveUs;
