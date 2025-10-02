import React from "react";
import Button from "../atoms/Button";

const NeverMissAPost: React.FC = () => {

  return (
    <div className="w-full bg-rajutPink py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-dancingScript">
          Tetap Terinspirasi Bersama Rajut Dyubi
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-6 mt-6 text-[0.9em]">
          Berlangganan newsletter kami dan dapatkan update mingguan tentang produk rajut terbaru, tutorial kreatif, dan diskon eksklusif langsung ke inbox Anda.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto">
          <Button
            message=""
            variant="min-h-10 w-[60vw] sm:flex-1 bg-white hover:bg-rajutPeach text-rajutBoldPink rounded-full font-poppins"
          >
            Berlangganan NewsLetter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NeverMissAPost;
