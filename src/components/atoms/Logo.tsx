import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="/assets/img/rajut-dyubi-icon.png" 
        alt="Logo Rajut Dyubi"
        width={80}
        height={80}
        className="ml-2"
      />
      <div className="font-dancingScript" style={{ marginLeft: '15px' }}>
        <h3><b><span className="text-rajutBoldPink  text-[1.2em]">Rajut Dyubi</span></b></h3>
        <h5 className="text-rajutPink text-[0.9em]"> Handmade With Love</h5>
      </div>
    </div>
  );
};

export default Logo;
