import { useState } from 'react';
import axios from 'axios';
import { TablePaginationConfig } from 'antd';

interface User {
  uid: string;
  nama: string;
  identifier: string;
  email: string;
  tipe: string;
  active: boolean;
  akun_tipe: string;
}

interface Meta {
  page: number;
  limit: number;
  total_pages: number;
}

interface UseFetchUsersProps {
  data: User[];
  loading: boolean;
  pagination: TablePaginationConfig;
  fetchUsers: (page: number, pageSize: number, searchQuery?: string) => void;
}

export const useFetchUsers = (): UseFetchUsersProps => {
  const baseURL = import.meta.env.VITE_APP_PUBLIC_API_URL;
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const fetchUsers = async (page: number, pageSize: number, searchQuery = '') => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/users/`, {
        withCredentials: true, 
        params: {
          page: page,
          limit: pageSize,
          search: searchQuery,
        },
      });

      const { data, meta }: { data: User[]; meta: Meta } = response.data;
      setData(data);
      setPagination({
        current: meta.page,
        pageSize: meta.limit,
        total: meta.total_pages * meta.limit, // Calculate total items
      });
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, pagination, fetchUsers };
};
