import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="/assets/img/logo-wastetrack-white.png" 
        alt="Logo WasteTrack"
        width={100}
        height={100}
      />
      <div style={{ color: 'white', marginLeft: '15px' }}>
        <h3><b>Waste<span className="text-amber-400">Track</span></b></h3>
        <h5>Mengubah Sampah Menjadi Berkah</h5>
      </div>
    </div>
  );
};

export default Logo;
