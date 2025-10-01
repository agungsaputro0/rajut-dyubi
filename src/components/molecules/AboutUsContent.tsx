import { TfiLocationPin } from 'react-icons/tfi';
import { HiOutlineSparkles } from 'react-icons/hi';
import useIsMobile from '../hooks/UseIsMobile';
import { FaRegHeart } from 'react-icons/fa';


const AboutUsContent = () => {
  const isMobile = useIsMobile();
 

  return (
    <div className="min-h-screen-default mt-16 w-full py-10 flex flex-col lg:flex-row relative bg-cover bg-center">
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Konten Kiri */}
      <div className="flex items-center justify-center w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 z-10 order-1 lg:order-none">
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-dancingScript text-rajutBoldPink leading-tight drop-shadow-lg font-light">
            Meet Rajut Dyubi
          </h1>
          <p className="mt-4 text-sm sm:text-md text-rajutGray text-justify lg:text-justify drop-shadow-md font-light">
            Halo, berikut ini adalah produk trademark dari kami untuk bulan ini, flying bag over the river,
            dibuat dengan penuh detail dan presisi.
          </p>
          <p className="mt-4 text-sm sm:text-md text-rajutGray text-justify lg:text-justify drop-shadow-md font-light">
            Perjalanan saya bermula dari sebuah passion pribadi, namun dengan cepat berkembang menjadi sesuatu yang jauh lebih bermakna. Setiap karya yang saya hasilkan membawa sebuah cerita, sebuah kenangan, dan yang terpenting, cinta. Dari selimut bayi yang lembut hingga dekorasi rumah yang elegan, setiap ciptaan adalah bukti nyata keindahan yang lahir dari dedikasi dan keterampilan.
          </p>
          <p className="mt-4 flex gap-1 text-sm sm:text-md text-rajutBoldPink text-justify lg:text-justify drop-shadow-md font-bold">
              <TfiLocationPin className="mt-[0.2em]" /> Pulisen, Boyolali, Jawa Tengah
          </p>
        </div>
      </div>

      {/* Konten Kanan: Gambar */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 my-8 lg:mt-0">
        <div className="relative inline-block">
          {/* Bola kiri atas */}
          <div className="absolute -top-10 -right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rajutLiteGold z-0 flex items-center justify-center">
            <FaRegHeart className="text-rajutGold text-3xl sm:text-3xl" />
          </div>


          {/* Bola kanan bawah */}
          <div className="absolute -bottom-10 -left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rajutBoldPeach z-0 flex items-center justify-center">
            <HiOutlineSparkles className="text-rajutPink text-4xl sm:text-4xl" />
          </div>

          {/* Gambar utama */}
          <img
            src="/assets/img/rajut-dyubi-about-image.jpg"
            alt="Rajut Dyubi About"
            className={`${isMobile ? "max-h-[30vh] sm:max-h-[40vh]" : "max-h-[50vh] sm:max-h-[60vh]"}  rounded-xl w-auto object-contain drop-shadow-lg relative z-10`}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
