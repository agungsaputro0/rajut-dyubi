import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const WorkshopLocation: React.FC = () => {
  const [showMap, setShowMap] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setShowMap(true);
    const handleOffline = () => setShowMap(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleIframeError = () => {
    setShowMap(false);
  };

  return (
    <div>
      {showMap ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3955.4309675681043!2d110.59202107500238!3d-7.52788299248522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzEnNDAuNCJTIDExMMKwMzUnNDAuNiJF!5e0!3m2!1sen!2sid!4v1759351431086!5m2!1sen!2sid"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Workshop Location"
          onError={handleIframeError} // fallback kalau iframe error
        ></iframe>
      ) : (
        <div className="bg-rajutPeach p-6 rounded-lg text-center">
          <span className="text-xs bg-white px-2 py-1 rounded-full inline-block mb-2">
            Lokasi workshop
          </span>
          <div className="text-rajutBoldPink text-2xl flex flex-col items-center gap-2 mt-2">
            <IoLocationOutline size={36} />
            Pulisen, Boyolali
            <span className="text-sm text-rajutGray">Jawa Tengah</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopLocation;
