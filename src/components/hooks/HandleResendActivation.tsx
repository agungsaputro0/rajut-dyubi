import axios from 'axios';
const baseURL = import.meta.env.VITE_APP_PUBLIC_API_URL;

interface ResendActivationResponse {
    message: string;
}

export const HandleResendActivation = async (
    email: string
) => {
    try {
        const data = {
            email: email
        }
        const response = await axios.post<ResendActivationResponse>(`${baseURL}/resend_email_activation`, data);
        return response.data.message;
    } catch (error) {
        throw error;
    }
};