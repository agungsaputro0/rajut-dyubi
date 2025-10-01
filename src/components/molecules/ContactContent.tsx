import { TfiLocationPin, TfiEmail } from "react-icons/tfi";
import { AiTwotonePhone } from "react-icons/ai";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { Card } from "antd";

const ContactContent = () => {
     const contact = [
        {   icon: <TfiLocationPin />, 
            title: "Lokasi kami",
            description: "Pulisen, Boyolali, Jawa Tengah"
        },
        {   icon: <AiTwotonePhone />, 
            title: "Nomor Telepon", 
            description: "087-666-999-212" 
        },
        {   icon: <TfiEmail />, 
            title: "Alamat Email", 
            description: "rajut-djyubi@gmail.com" 
        },
        {   icon: <LiaBusinessTimeSolid />, 
            title: "Jam Kerja", 
            description: "Sen - Sab: 9:00 AM - 6:00 PM (Minggu: Perlu janjian)" 
        },
      ];
  return (
    <>
    <div className="min-h-screen-half mt-16 w-full py-10 flex flex-col lg:flex-row items-center justify-center relative bg-cover bg-center">
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Konten Kiri */}
      <div className="flex items-center justify-center w-full px-6 sm:px-12 lg:px-16 z-10">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-dancingScript text-rajutBoldPink leading-tight drop-shadow-lg font-light">
            Get in Touch
          </h1>
          <p className="mt-4 text-sm sm:text-md text-rajutGray text-center drop-shadow-md font-light">
             Kami senang banget kalau bisa dengar dari kamu! Mau tanya soal produk, pesan khusus, atau sekadar sapa aja, jangan ragu buat hubungi kami ya.
          </p>
        </div>
      </div>
    </div>
     <div className="w-full bg-rajutPeach py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {contact.map((item, idx) => (
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
    </>
  );
};


export default ContactContent;
