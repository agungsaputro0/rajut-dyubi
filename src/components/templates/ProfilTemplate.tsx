// LoginTemplate.tsx
import React from 'react';
import LoginSection from '../organisms/LoginSection';

type ProfilTemplateProps = {
  children: React.ReactNode;
};

const ProfilTemplate: React.FC<ProfilTemplateProps> = ({ children }) => {
  return (
    <div>
      <LoginSection>
        {children}
      </LoginSection>
    </div>
  );
};

export default ProfilTemplate;
