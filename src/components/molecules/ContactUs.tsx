import React from "react";
import { Button } from "antd";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";
import InputElement from "../atoms/InputElement";
import useIsMobile from "../hooks/UseIsMobile";
import WorkshopLocation from "../atoms/WorkshopLocation";

const ContactUs: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Form kiri */}
        <div className={`${isMobile ? "mx-2" : ""}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-rajutBoldPink mb-2 font-dancingScript">
            Send us a Message
          </h2>
          <p className="text-rajutGray mb-6 text-sm sm:text-base">
            Silahkan isi data di bawah ini, kami akan menghubungi anda secepatnya setelah jam kerja dimulai
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputElement
              forwhat="nama"
              labelMessage="Nama Lengkap *"
              inputName="nama"
              inputPlaceholder="Masukkan nama lengkap"
              typeInput="text"
            />
            <InputElement
              forwhat="email"
              labelMessage="Alamat Email *"
              inputName="email"
              inputPlaceholder="Masukkan email"
              typeInput="text"
            />
            <InputElement
              forwhat="telp"
              labelMessage="Nomor Telepon"
              inputName="telp"
              inputPlaceholder="Masukkan nomor telepon"
              typeInput="text"
            />
            <InputElement
              forwhat="subyek"
              labelMessage="Subyek *"
              inputName="subyek"
              inputPlaceholder="Masukkan subyek"
              typeInput="text"
            />
            <div className="sm:col-span-2">
              <InputElement
                forwhat="pesan"
                labelMessage="Pesan *"
                inputName="pesan"
                inputPlaceholder="Tuliskan keperluan anda di sini..."
                typeInput="text"
                customElement={
                  <textarea
                    className="text-sm border-b-2 border-gray-500 w-full pt-2 pb-[10px] px-2 text-gray-800 placeholder:opacity-90 bg-transparent focus:border-gray-800 border-gray-300 resize-none"
                    rows={4}
                    placeholder="Tuliskan keperluan anda di sini..."
                  />
                }
              />
            </div>
          </div>

          <Button
            type="primary"
            className="mt-4 w-full rounded-full bg-rajutBoldPink hover:bg-rajutPink border-none flex items-center justify-center gap-2"
          >
            Kirim Pesan
            <span className="text-lg"><LuSendHorizonal /></span>
          </Button>

          {/* Kontak pintasan */}
          <div className="mt-6 bg-rajutPeach p-4 rounded-lg">
            <h3 className="text-rajutBoldPink font-semibold mb-2">Kontak Pintasan</h3>
            <div className="flex items-center gap-2 mb-1">
              <FaPhoneAlt className="text-rajutBoldPink" /> 087666999212
            </div>
            <div className="flex items-center gap-2 mb-2">
              <FaEnvelope className="text-rajutBoldPink" /> rajut-dyubi@gmail.com
            </div>
            <p className="text-sm text-rajutGray mt-2">
              Untuk keperluan mendesak, silahkan untuk langsung dapat menelpon kami pada nomor di atas.
            </p>
          </div>
        </div>

        {/* Info kanan */}
        <div className="space-y-6">
         <WorkshopLocation />

          <div>
            <h3 className="text-rajutBoldPink font-semibold mb-2">Follow Us</h3>
            <p className="text-gray-500 text-sm mb-4">
              Stay connected with us on social media for the latest updates, behind-the-scenes content, and crochet inspiration.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
              >
                <span className="bg-gradient-to-tr from-pink-400 to-purple-400 p-1 rounded-full text-white"><FaInstagram /></span>
                @rajutdyubi
              </a>
              <a
                href="#"
                className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
              >
                <span className="bg-blue-600 p-1 rounded-full text-white"><FaFacebook/></span>
                rajut dyubi
              </a>
              <a
                href="#"
                className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
              >
                <span className="bg-green-500 p-1 rounded-full text-white"><FaWhatsapp /></span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
