import React from "react";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const ReadytoCreateSomethingBeautiful: React.FC = () => {
const navigate = useNavigate();
  return (
    <div className="w-full bg-thirdColor py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       
        <h2 className="text-3xl sm:text-4xl font-bold text-mainColor mb-2 font-dancingScript">
          Siap Menciptakan Keindahan Bersama Kami?
        </h2>
        <p className="text-rajutGray max-w-3xl mx-auto mb-6 mt-6 text-lg">
          Apakah Anda mencari hadiah istimewa atau menginginkan sesuatu yang dibuat khusus untuk Anda, kami siap mewujudkan visi Anda dengan keahlian dan keterampilan terbaik kami.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto">
          <Button
            message=""
            onClick={() => navigate("/Contact")}
            variant="min-h-10 w-[60vw] sm:flex-1 bg-mainColor hover:bg-mainColorHover text-white rounded-full font-poppins"
          >
            Pesan Kustom
          </Button>

          <Button
            message=""
            onClick={() => navigate("/About-us")}
            variant="min-h-10 w-[60vw] sm:flex-1 bg-transparent border-2 border-mainColor text-mainColor hover:bg-mainColorHover hover:text-white rounded-full font-poppins"
          >
            Tentang Kami
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReadytoCreateSomethingBeautiful;
