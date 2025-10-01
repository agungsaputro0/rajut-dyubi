import React from "react";

const TitleAndSubtitle: React.FC = () => {
  return (
    <div className="flex items-center">
      <img
        src="/assets/img/rajut-dyubi-icon.png"
        alt="Logo RCE"
        className="w-[130px] h-[100px]"
      />
      <div className="ml-2 flex flex-col items-start text-left">
        <h1 className="text-6xl font-bold text-white">
          <span className="text-rajutBoldPink font-dancingScript">Rajut Dyubi</span>
        </h1>
        <h3 className="text-xl mt-2 text-rajutPink">Handmade With Love</h3>
      </div>
    </div>
  );
};

export default TitleAndSubtitle;
