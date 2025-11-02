import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../hooks/UseIsMobile";

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
    <>
      {/* ====== Jika MOBILE: tampilan banner atas dan konten di bawah ====== */}
      {isMobile ? (
        <div className="flex flex-col w-full mt-16">
            {/* Banner full */}
            <div
              className="relative w-full h-[80dvh] bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/img/rajut-dyubi-banner-image.webp')" }}
            >
              {/* Gradient di bawah supaya transisi halus ke putih */}
              {/* <div className="absolute bottom-0 w-full mt-[-80dvh] h-32 bg-gradient-to-t from-white/100 to-transparent"></div> */}
            </div>

            {/* Konten */}
            <div className="flex flex-col items-center mt-[-35dvh] px-6 py-10 bg-gradient-to-t from-white/100 via-white/100 via-white/100 via-white/100 to-transparent relative z-10">
              <h1 className="text-3xl sm:text-4xl font-dancingScript font-bold text-mainColor text-center drop-shadow-md">
                {layoutTitle} {layoutSubtitle}
              </h1>

              {/* Tombol */}
              <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
                <Button
                  message=""
                  onClick={() => navigate("/katalog")}
                  variant="min-h-10 bg-mainColor hover:bg-mainColorHover text-white px-6 rounded-full font-poppins"
                >
                  Koleksi Terbaru
                </Button>

                <Button
                  message=""
                  onClick={() => navigate("/katalog")}
                  variant="min-h-10 bg-transparent border-2 border-mainColor text-mainColor hover:bg-mainColorHover hover:text-white px-6 rounded-full font-poppins"
                >
                  Pesan Kustom
                </Button>
              </div>

              {/* Statistik */}
              <div className="mt-10 flex flex-col items-center text-center text-rajutGray font-light">
              {/* Bagian atas - 5+ Tahun Berkarya */}
              <div className="mb-6 px-4">
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-mainColor">
                  Lebih dari 5 tahun <br></br> kami berkarya dengan cinta
                </p>
              </div>

              {/* Garis pemisah halus */}
              <div className="w-16 h-[2px] bg-mainColor/30 mb-6"></div>

              {/* Bagian bawah - 2 kolom seimbang */}
              <div className="flex justify-center w-[100dvw] px-4">
                <div className="w-1/2">
                  <p className="text-2xl font-semibold text-mainColor">1.5K+</p>
                  <p className="text-sm">Pelanggan Bahagia</p>
                </div>

                <div className="w-[1px] bg-mainColor/30 mx-2"></div>

                <div className="w-1/2">
                  <p className="text-2xl font-semibold text-mainColor">300+</p>
                  <p className="text-sm">Produk Rajutan</p>
                </div>
              </div>
            </div>

            </div>
          </div>
      ) : (
        /* ====== Jika DESKTOP: tetap layout dua kolom ====== */
        <div className="min-h-screenNoNavbar mt-16 w-full flex flex-col lg:flex-row relative bg-cover bg-center">
          {/* Overlay hitam transparan */}
          <div className="absolute inset-0 bg-black/10 z-0"></div>

          {/* Konten Kiri */}
          <div className="flex items-center mt-28 justify-center w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 z-10 order-1 lg:order-none">
            <div className="max-w-lg text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-dancingScript font-bold text-mainColor leading-tight drop-shadow-lg">
                {layoutTitle} {layoutSubtitle}
              </h1>

              <p className="mt-4 text-lg sm:text-md text-rajutGray text-justify drop-shadow-md font-light">
                {layoutMessage}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  message=""
                  onClick={() => navigate("/katalog")}
                  variant="min-h-10 bg-mainColor hover:bg-mainColorHover text-white px-6 rounded-full font-poppins"
                >
                  Koleksi Terbaru
                </Button>

                <Button
                  message=""
                  onClick={() => navigate("/Contact")}
                  variant="min-h-10 bg-transparent border-2 border-mainColor text-mainColor hover:bg-mainColorHover hover:text-white px-6 rounded-full font-poppins"
                >
                  Pesan Kustom
                </Button>
              </div>

              <div className="mt-20 w-full mb-20 flex sm:flex-row justify-center lg:justify-around items-center gap-8 text-center text-rajutGray font-light">
                <div>
                  <p className="text-3xl font-semibold text-mainColor">1.5K+</p>
                  <p className="text-sm">Pelanggan Bahagia</p>
                </div>
                <div className="hidden sm:block w-[1px] h-10 bg-mainColor/30"></div>
                <div>
                  <p className="text-3xl font-semibold text-mainColor">300+</p>
                  <p className="text-sm">Produk Rajutan</p>
                </div>
                <div className="hidden sm:block w-[1px] h-10 bg-mainColor/30"></div>
                <div>
                  <p className="text-3xl font-semibold text-mainColor">5+</p>
                  <p className="text-sm">Tahun Berkarya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gambar Kanan */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-4 my-8 lg:mt-0">
            <div className="relative w-full h-[100dvh]"> {/* pastikan tinggi sesuai banner */}
              
              {/* Blob di belakang */}
              <img
                src="/assets/img/blob.webp"
                alt="Blob Background"
                className="absolute top-0 left-0 w-full h-full object-contain rotate-90 z-0"
              />

              {/* Banner utama */}
              <img
                src="/assets/img/rajut-dyubi-banner-image.webp"
                alt="Rajut Dyubi Banner"
                className="absolute top-0 left-0 w-full h-full object-contain rounded-xl drop-shadow-lg z-10"
              />
            </div>
          </div>


        </div>
      )}
    </>
  );
};

export default LandingLayouts;
