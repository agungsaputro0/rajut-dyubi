import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_APP_PUBLIC_API_URL;

function useIsLogin(): boolean {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      if (!baseURL) {
        setIsLoggedIn(false);
        return;
      }
      try {
        const response = await axios.get(`${baseURL}/credential/me`, { withCredentials: true });
        if (response.status === 200) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch {
        setIsLoggedIn(false);
      }
    };

    checkLogin();
  }, []);

  return isLoggedIn;
}

export default useIsLogin;
