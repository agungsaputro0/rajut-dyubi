import useIsMobile from "../hooks/UseIsMobile";
import MeetRajutDyubi from "../atoms/MeetRajutDyubi";
import { TbNeedleThread } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";



const AboutUsContent = () => {
  const isMobile = useIsMobile();


  return (
    <>
      {/* ====== Jika MOBILE: tampilan banner atas dan konten di bawah ====== */}
      {isMobile ? (
        <div>
            {/* Banner full */}
           <div className="flex flex-col w-full mt-16">
            {/* Banner penuh */}
            <div
              className="relative w-full h-[84dvh] bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/img/about-image-flip.webp')" }}
            >
              {/* Gradasi lembut di bawah agar transisi halus ke putih */}
              <div className="absolute bottom-0 w-full h-80 bg-gradient-to-t from-white via-white to-transparent"></div>
            </div>

            {/* Area konten putih */}
            <div className="relative z-10 flex flex-col items-center px-6 py-12 bg-gradient-to-t from-white via-white to-white rounded-t-3xl shadow-lg -mt-40">
              <div className="w-full max-w-md text-center">
                {/* Header */}
                <div className="flex items-center justify-center gap-3 mb-3 -mt-20">
                  <TbNeedleThread className="text-mainColor text-4xl animate-spin-slow drop-shadow-sm" />
                  <h3 className="uppercase text-sm tracking-wider font-semibold text-mainColor">
                    Tentang Kami
                  </h3>
                </div>

                {/* Judul utama */}
                <h1 className="text-2xl sm:text-3xl font-bold font-dancingScript text-mainColor mb-4 leading-snug">
                  Semua berawal dari benang dan cinta yang terjalin.
                </h1>

                {/* Paragraf pembuka */}
                <p className="text-base text-rajutGray font-light leading-relaxed mb-8 text-justify">
                  Rajut Dyubi tumbuh dari{" "}
                  <span className="font-medium text-mainColor">passion sederhana</span>{" "}
                  menjadi perjalanan penuh makna. Setiap rajutan kami buat dengan hati,
                  menghadirkan kehangatan di setiap simpul dan keindahan di setiap detail.
                </p>


                {/* Footer */}
                <div className="flex flex-col items-center gap-2 text-sm">
                  <p className="flex items-center gap-2 text-mainColor font-semibold tracking-wide">
                    <TfiLocationPin className="text-lg animate-bounce-slow" />
                    Pulisen, Boyolali, Jawa Tengah
                  </p>
                  <p className="flex mt-4 items-center gap-2 text-rajutGray italic text-center">
                    “Rajutan hangat dari tangan, untuk hati yang mencintai keindahan.”
                  </p>
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
                src="/assets/img/about-image-flip.webp"
                alt="Rajut Dyubi Banner"
                className="absolute top-0 left-0 w-full h-full object-contain rounded-xl drop-shadow-lg z-10"
              />
            </div>
          </div>
          

          {/* Gambar Kanan */}
          <MeetRajutDyubi />


        </div>
      )}
    </>
  );
};

export default AboutUsContent;
