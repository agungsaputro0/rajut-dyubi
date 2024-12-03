import { useState, useEffect } from "react";
import axios from "axios";
import { notification } from "antd";

interface UserProfile {
  name: string;
  nip: string;
  email: string;
}

interface UpdateProfileRequest {
  name: string;
  nip: string;
  email: string;
  konfirmasi_password: string; 
  new_password?: string;  
}

export const handleProfil = () => {
  const baseURL = import.meta.env.VITE_APP_PUBLIC_API_URL;
  const [dataUser, setDataUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);

  // Fetch user profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${baseURL}/profil/me`, { withCredentials: true });
        setDataUser(response.data);
      } catch (error) {
        notification.error({ message: "Error", description: "Failed to fetch profile data." });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);


  const updateProfile = async (updatedInfo: UpdateProfileRequest) => {
    setUpdateLoading(true);
    try {
      await axios.put(`${baseURL}/profil/update_me`, updatedInfo, { withCredentials: true });  
      notification.success({ message: "Success", description: "Profile updated successfully!" });
      setDataUser(prev => ({ ...prev, ...updatedInfo })); 
    } catch (error: any) {
      const errorMsg = error.response?.data || "Failed to update profile";
      notification.error({ message: "Error", description: errorMsg });
    } finally {
      setUpdateLoading(false);
    }
  };
  

  return { dataUser, loading, updateProfile, updateLoading };
};
