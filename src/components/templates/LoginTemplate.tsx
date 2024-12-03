// LoginTemplate.tsx
import React from 'react';
import LoginSection from '../organisms/LoginSection';

type LoginTemplateProps = {
  children: React.ReactNode;
};

const LoginTemplate: React.FC<LoginTemplateProps> = ({ children }) => {
  return (
    <div className="mb-10 sm:mb-10 md:mb-10 lg:mb-0">
      <LoginSection>
        {children}
      </LoginSection>
    </div>
  );
};

export default LoginTemplate;
