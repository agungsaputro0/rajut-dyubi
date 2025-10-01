import { FaHome } from "react-icons/fa"; 
import { GrCatalog } from "react-icons/gr"; 
import { RiArticleLine, RiCustomerService2Fill } from "react-icons/ri"; 
import { PiInfoDuotone } from "react-icons/pi"; 
import { Link } from "react-router-dom";

const MobileBottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md sm:hidden z-50">
      <div className="flex justify-around items-center relative py-2">
        <Link
          to="/Welcome"
          className="flex-1 flex flex-col items-center text-rajutBoldPink hover:text-gray-800 text-center"
        >
          <FaHome size={24} />
          <span className="text-xs">Home</span>
        </Link>

        <Link
          to="/About-us"
          className="flex-1 flex flex-col items-center text-rajutBoldPink hover:text-gray-800 text-center"
        >
          <PiInfoDuotone size={24} />
          <span className="text-xs">About Us</span>
        </Link>

        {/* Tombol Katalog Menonjol */}
        <Link
          to="/Katalog"
          className="flex-1 flex flex-col items-center text-white text-center relative -mt-10"
        >
          <div className="w-16 h-16 bg-rajutBoldPink rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <GrCatalog size={28} />
          </div>
        </Link>

        <Link
          to="/Blog"
          className="flex-1 flex flex-col items-center text-rajutBoldPink hover:text-gray-800 text-center"
        >
          <RiArticleLine size={24} />
          <span className="text-xs">Blog</span>
        </Link>

        <Link
          to="/Contact"
          className="flex-1 flex flex-col items-center text-rajutBoldPink hover:text-gray-800 text-center"
        >
          <RiCustomerService2Fill size={24} />
          <span className="text-xs">Kontak</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomNav;
