import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_PUBLIC_API_URL;

interface LoginResponse {
    message: string;
}

export const handleLogin = async (email: string, password: string) => {
    try {
        //console.log("Base URL:", baseURL);
        const response = await axios.post<LoginResponse>(`${baseURL}/login`, { email, password }, { withCredentials: true });

        if (response.data.message === 'Login successful') {
            const userResponse = await axios.get(`${baseURL}/get_current_user`, { withCredentials: true });
            return userResponse.data; 
        }
    } catch (error) {
        //console.error('Login failed:', error);
        throw error;
    }
};
