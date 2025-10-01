import React from 'react';
import useIsLogin from '../hooks/UseIsLogin';
const LoadingSpinner: React.FC = () => {
  const isLogin = useIsLogin();
  return (
    <div className={`${isLogin ? "bg-rajutPeach" : "bg-rajutPeach"} bg-no-repeat bg-center bg-cover bg-fixed w-full h-screen flex flex-col items-center justify-center text-white`}>
      {/* Logo dan nama */}
      <div className="flex items-center mb-8">
        <img
          src="/assets/img/rajut-dyubi-icon.png"
          alt="Alkafi Farm Logo"
          className="h-16 w-24"
        />
        <span className="ml-3 text-4xl font-bold">
          <span className="text-rajutPink font-dancingScript">Rajut Dyubi</span>
        </span>
      </div>

      {/* Animasi gelombang */}
      <div className="flex space-x-1 h-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 bg-rajutPink animate-wave"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;
