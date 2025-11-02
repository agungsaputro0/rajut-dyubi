import { FaQuoteLeft } from "react-icons/fa";

type CustomerCardProps = {
  name: string;
  message: string;
  image?: string;
  location?: string;
};

const CustomerCard = ({ name, message, image, location }: CustomerCardProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-mainColor/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-5 max-w-xs mx-auto flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="w-16 h-16 mb-3 rounded-full overflow-hidden shadow-md border border-mainColor/20">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-mainColor/10 text-mainColor text-xl font-semibold">
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* Nama & Lokasi */}
      <p className="text-base font-semibold text-mainColor">{name}</p>
      {location && (
        <p className="text-xs text-rajutGray/70">{location}</p>
      )}

      {/* Icon Petik */}
      <FaQuoteLeft className="text-mainColor/20 text-3xl mt-3 mb-1" />

      {/* Pesan */}
      <p className="text-sm text-rajutGray leading-relaxed italic mt-1">
        “{message}”
      </p>
    </div>
  );
};

export default CustomerCard;
