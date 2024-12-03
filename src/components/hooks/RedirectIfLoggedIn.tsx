import { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

type RedirectIfLoggedInProps = {
    children: ReactNode; 
  };

const RedirectIfLoggedIn = ({ children }: RedirectIfLoggedInProps) => {
  const { userName, userKategori } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userName) {
      if (userKategori === 'administrator') {
        navigate('/home');
      } else {
        navigate('/portal'); 
      }
    }
  }, [userName, userKategori, navigate]);

  return <>{children}</>;; 
};

export default RedirectIfLoggedIn;


