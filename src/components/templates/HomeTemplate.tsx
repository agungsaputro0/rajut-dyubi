import React from 'react';
import HomeSection from '../organisms/HomeSection';

type HomeTemplateProps = {
  children: React.ReactNode;
};

const HomeTemplate: React.FC<HomeTemplateProps> = ({ children }) => {
  return (
    <div>
      <HomeSection>
        {children}
      </HomeSection>
    </div>
  );
};

export default HomeTemplate;
