import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="/assets/img/rajut-dyubi-icon-purple.png" 
        alt="Logo Rajut Dyubi"
        width={80}
        height={80}
        className="ml-2"
      />
      <div style={{ marginLeft: '15px' }}>
        <h3><b><span className="text-mainColor font-dancingScript text-[1.3em]">Rajut Dyubi</span></b></h3>
        <h4 className="text-mainColorHover text-[0.8em]">Dirajut dengan penuh cinta</h4>
      </div>
    </div>
  );
};

export default Logo;
