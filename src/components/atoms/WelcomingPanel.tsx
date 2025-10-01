import React from "react";

interface WelcomingPanelProps {
  userName: string;
}

const WelcomingPanel: React.FC<WelcomingPanelProps> = ({ userName }) => {
  const formatUserName = (name: string | null) => {
    if (!name) return 'Akun'; 
    
    const nameParts = name.split(' '); 
    const firstName = nameParts[0]; 
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : ''; 
    
    return nameParts.length > 2 ? `${firstName} ${lastName}` : name; 
  };
  return (
    <div className="w-full bg-white/10 backdrop-blur-md rounded-xl p-6 text-white mb-6">
      {/* Greeting */}
       <div className="mb-4">
        <h2 className="text-4xl font-bold text-kemenkeudarkerblue">
          Selamat datang, {formatUserName(userName)}
        </h2>
        <p className="text-sm text-gray-600 mt-4">
          Berikut adalah ringkasan cepat dari dashboard RCE Anda. 
          Pantau aktivitas, transaksi, dan statistik utama untuk 
          mengelola operasional dengan lebih efisien.
        </p>
      </div>
    </div>
  );
};

export default WelcomingPanel;
