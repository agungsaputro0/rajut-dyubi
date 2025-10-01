import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import useIsMobile from '../hooks/UseIsMobile';

type LandingProps = {
  layoutMessage: string;
  layoutTitle: string;
  layoutSubtitle: string;
};

const LandingLayouts = (props: LandingProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { layoutTitle, layoutSubtitle, layoutMessage } = props;

  return (
    <div className="min-h-screen-default mt-16 w-full py-10 flex flex-col lg:flex-row relative bg-cover bg-center">
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Konten Kiri */}
      <div className="flex items-center justify-center w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 z-10 order-1 lg:order-none">
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-dancingScript text-rajutBoldPink leading-tight drop-shadow-lg font-light">
            {layoutTitle}
          </h1>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-dancingScript text-rajutGold drop-shadow-md font-extralight">
            {layoutSubtitle}
          </h2>
          <p className="mt-4 text-sm sm:text-md text-rajutGray text-justify lg:text-justify drop-shadow-md font-light">
            {layoutMessage}
          </p>

          {/* Tombol */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              message=""
              onClick={() => navigate("/katalog")}
              variant="min-h-10 bg-rajutBoldPink hover:bg-rajutPink text-white px-6 rounded-full font-poppins"
            >
              Koleksi Terbaru
            </Button>

            <Button
              message=""
              onClick={() => navigate("/katalog")}
              variant="min-h-10 bg-transparent border-2 border-rajutPink text-rajutPink hover:bg-rajutPink hover:text-white px-6 rounded-full font-poppins"
            >
              Customs Order
            </Button>
          </div>
        </div>
      </div>

      {/* Konten Kanan: Gambar */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 my-8 lg:mt-0">
        <div className="relative inline-block">
          {/* Bola kiri atas */}
          <div className="absolute -top-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rajutLiteGold z-0"></div>

          {/* Bola kanan bawah */}
          <div className="absolute -bottom-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rajutBoldPeach z-0"></div>

          {/* Gambar utama */}
          <img
            src="/assets/img/rajut-dyubi-banner-image.jpg"
            alt="Rajut Dyubi Banner"
            className={`${isMobile ? "max-h-[30vh] sm:max-h-[40vh]" : "max-h-[50vh] sm:max-h-[60vh]"}  rounded-xl w-auto object-contain drop-shadow-lg relative z-10`}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingLayouts;
