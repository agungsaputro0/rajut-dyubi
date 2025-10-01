import React from "react";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const ReadytoCreateSomethingBeautiful: React.FC = () => {
const navigate = useNavigate();
  return (
    <div className="w-full bg-rajutPeach py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       
        <h2 className="text-3xl sm:text-4xl font-bold text-rajutBoldPink mb-2 font-dancingScript">
          Ready to Create Something Beautiful?
        </h2>
        <p className="text-rajutGray max-w-2xl mx-auto mb-6 mt-6 text-[0.9em]">
          Apakah Anda mencari hadiah istimewa atau menginginkan sesuatu yang dibuat khusus untuk Anda, kami siap mewujudkan visi Anda dengan keahlian dan keterampilan terbaik kami.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto">
          <Button
            message=""
            onClick={() => navigate("/katalog")}
            variant="min-h-10 w-[60vw] sm:flex-1 bg-rajutBoldPink hover:bg-rajutPink text-white rounded-full font-poppins"
          >
            Start Custom Order
          </Button>

          <Button
            message=""
            onClick={() => navigate("/about-us")}
            variant="min-h-10 w-[60vw] sm:flex-1 bg-transparent border-2 border-rajutPink text-rajutPink hover:bg-rajutPink hover:text-white rounded-full font-poppins"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReadytoCreateSomethingBeautiful;
