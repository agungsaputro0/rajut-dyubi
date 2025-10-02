import React from "react";
import Button from "../atoms/Button";

const LetsConnect: React.FC = () => {

  return (
    <div className="w-full bg-rajutPeach py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       
        <h2 className="text-3xl sm:text-4xl font-bold text-rajutBoldPink mb-2 font-dancingScript">
          Let's Connect
        </h2>
        <p className="text-rajutGray max-w-2xl mx-auto mb-6 mt-6 text-[0.9em]">
          Saya sangat senang mendengar dari Anda! Baik itu pertanyaan seputar produk kami, ingin memesan karya custom, atau sekadar menyapa.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto">
            <Button
                message=""
                onClick={() => window.open("https://wa.me/6281393328292", "_blank")}
                variant="min-h-10 w-[60vw] sm:flex-1 bg-rajutBoldPink hover:bg-rajutPink text-white rounded-full font-poppins"
                >
                +6287666999212
            </Button>

            <Button
                message=""
                onClick={() => window.open("mailto:wibisono.ardiansyah@binus.ac.id", "_blank")}
                variant="min-h-10 w-[60vw] sm:flex-1 bg-transparent border-2 border-rajutPink text-rajutPink hover:bg-rajutPink hover:text-white rounded-full font-poppins"
                >
                rajut.dyubi@gmail.com
            </Button>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
