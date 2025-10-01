import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_PUBLIC_API_URL;

interface LoginResponse {
    message: string;
}

interface User {
  id: number;
  email: string;
  name: string;
  kategori: string;
  // Tambahkan field lain jika diperlukan
}


export const handleLogin = async (email: string, password: string) => {
    try {
        //console.log("Base URL:", baseURL);
        const response = await axios.post<LoginResponse>(`${baseURL}/login`, { email, password }, { withCredentials: true });
        //console.log(response.data.message);
        if (response.data.message === 'Login successful') {
            const userResponse = await axios.get(`${baseURL}/get_current_user`, { withCredentials: true });
            return userResponse.data; 
        } else if (response.data.message === 'Account is inactive') {
            return response.data;
        }
    } catch (error) {
        //console.error('Login failed:', error);
        throw error;
    }
};

export const handleLoginAfterActivation = async (id: string) => {
    try {
      const response = await axios.post<LoginResponse>(
        `${baseURL}/login_after_activation`,
        { id }, // hanya kirim id
        { withCredentials: true }
      );
  
      if (response.data.message === 'Login successful') {
        // Mengambil data user setelah login
        const userResponse = await axios.get<User>(`${baseURL}/get_current_user`, {
          withCredentials: true,
        });
  
        const user = userResponse.data;
  
        // Pastikan data user memiliki kategori dan email
        if (user && user.kategori) {
          return {
            success: true,
            message: 'Login berhasil',
            user: user,
          };
        } else {
          return {
            success: false,
            message: 'Data pengguna tidak lengkap.',
          };
        }
      }
  
      return {
        success: false,
        message: response.data.message || 'Login gagal',
      };
    } catch (error: any) {
      return {
        success: false,
        message: 'Terjadi kesalahan koneksi atau server.',
      };
    }
  };
  