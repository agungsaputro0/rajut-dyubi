import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = import.meta.env.VITE_APP_PUBLIC_API_URL;

interface PegawaiPNS {
    nama: string;
    nip: string;
    role: string;
    auth: number[];
    tipe_pegawai: string;
    email: string;
    password: string;
    active: boolean;
    jabatan: string;
    esl4: string | null;
    esl3: string | null;
  }

  interface PegawaiNonPNS {
    nama: string;
    nik: string;
    role: string;
    auth: number[];
    tipe_pegawai: string;
    email: string;
    kontak: string;
    password: string;
    active: boolean;
    keterangan: string;
  }

interface SignUpResponse {
    message: string;
}

interface User {
    data?: {
        PegawaiPNS?: PegawaiPNS;
        PegawaiNonPNS?: PegawaiNonPNS;
        //DebiturPerusahaan?: DebiturPerusahaan;
        //DebiturPerseorangan?: DebiturPerseorangan;
        //Kreditur?: Kreditur;
    };
}

interface Kategori {
    kategori_id: number;
    nama: string;
  }

interface Groups {
    id: number;
    name: string;
    description: string;
  }

  export const useFetchGroups = (tipe_akun: string) => {
    const [groups, setGroups] = useState<Groups[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchGroups = async () => {
        try {
          const response = await axios.get(`${baseURL}/users/group_by_tipe/${tipe_akun}`, { withCredentials: true });
          setGroups(response.data);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch categories');
          setLoading(false);
        }
      };
  
      fetchGroups();
    }, []);
  
    return { groups, loading, error };
  };

  export const useFetchKategori = () => {
    const [kategori, setKategori] = useState<Kategori[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchKategori = async () => {
        try {
          const response = await axios.get(`${baseURL}/users/kategori_esl4`, { withCredentials: true });
          setKategori(response.data);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch categories');
          setLoading(false);
        }
      };
  
      fetchKategori();
    }, []);
  
    return { kategori, loading, error };
  };

const handleAddDataPegawaiPNS = async (pegawaiPNS: any) => {
    try {
        const response = await axios.post<SignUpResponse>(`${baseURL}/users/add_data_pegawai_pns`, pegawaiPNS, { withCredentials: true });
        return response.data.message;
    } catch (error) {
        throw error;
    }
};

const handleAddDataPegawaiNonPNS = async (pegawaiNonPNS: any) => {
    try {
        const response = await axios.post<SignUpResponse>(`${baseURL}/users/add_data_pegawai_non_pns`, pegawaiNonPNS, { withCredentials: true });
        return response.data.message;
    } catch (error) {
        throw error;
    }
};


const handleAddDataKreditur = async (krediturData: any) => {
    try {
        const response = await axios.post<SignUpResponse>(`${baseURL}/users/add_data_kreditur`, krediturData, { withCredentials: true });
        return response.data.message;
    } catch (error) {
        throw error;
    }
};

const handleAddDataDebiturPerusahaan = async (debiturData: any) => {
    try {
        const response = await axios.post<SignUpResponse>(`${baseURL}/users/add_data_debitur_perusahaan`, debiturData, { withCredentials: true });
        return response.data.message;
    } catch (error) {
        throw error;
    }
};

const handleAddDataDebiturPerseorangan = async (debiturData: any) => {
    try {
        const response = await axios.post<SignUpResponse>(`${baseURL}/users/add_data_debitur_perseorangan`, debiturData, { withCredentials: true });
        return response.data.message;
    } catch (error) {
        throw error;
    }
};

export const HandleAddUser = async (
    role: string,
    tipeDebitur: string,
    crashProgram: string,
    tipePegawai: string,
    selectedEsl4: string,
    data: any
) => {
    try {
        if(role === 'Pegawai'){
            if(tipePegawai === 'PNS'){
              const pegawaiPNS = {
                    nama: data.nama,
                    nip: data.nip,
                    role: role,
                    tipe_pegawai: tipePegawai,
                    email: data.email,
                    password: data.password,
                    jabatan: data.jabatan,
                    esl4: selectedEsl4,
                    esl3: 'Kantor Pelayanan Kekayaan Negara dan Lelang Pekanbaru',
              }
              return await handleAddDataPegawaiPNS(pegawaiPNS);
            } else {
               const pegawaiNonPNS = {
                    nama: data.nama,
                    nik: data.nik,
                    email: data.email,
                    password: data.password,
                    nomor_kontak: data.kontak,
                    role: role,
                    tipe_pegawai: tipePegawai,
                    keterangan: data.keterangan,
               }
               return await handleAddDataPegawaiNonPNS(pegawaiNonPNS);
            }
        }
        else if (role === 'Kreditur') {
            const krediturData = {
                nama: data.nama,
                nik: data.nik,
                email: data.email,
                password: data.password,
                kontak: data.kontak,
                role: role,
                nama_kreditur: data.nama_kreditur,
                alamat_kreditur: data.alamat_kreditur,
                email_kreditur: data.email_kreditur,
                npwp_kreditur: data.npwp_kreditur,
            };
            return await handleAddDataKreditur(krediturData);

        } else if (role === 'Debitur') {
            let crash_program: boolean = false;
            if(crashProgram === 'Ya'){
                crash_program = false;
            } 
            if (tipeDebitur === 'Perusahaan') {
                const debiturPerusahaanData = {
                    nama: data.nama,
                    nik: data.nik,
                    email: data.email,
                    password: data.password,
                    kontak: data.kontak,
                    role: role,
                    tipe_debitur: tipeDebitur,
                    crash_program: crash_program,
                    nama_debitur: data.nama_debitur,
                    alamat_debitur: data.alamat_debitur,
                    email_debitur: data.email_debitur,
                    npwp_debitur: data.npwp_debitur,
                };
                return await handleAddDataDebiturPerusahaan(debiturPerusahaanData);

            } else if (tipeDebitur === 'Perseorangan') {
                const debiturPerseoranganData = {
                    nama: data.nama,
                    nik: data.nik,
                    email: data.email,
                    password: data.password,
                    kontak: data.kontak,
                    role: role,
                    tipe_debitur: tipeDebitur,
                    crash_program: crash_program,
                    alamat_debitur: data.alamat_debitur,
                    npwp_debitur: data.npwp_debitur,
                };
                return await handleAddDataDebiturPerseorangan(debiturPerseoranganData);
            }
        } else {
            throw new Error("Role tidak dipilih atau tidak valid");
        }
    } catch (error) {
        console.error('Penambahan User gagal:', error);
        throw error;
    }
};

export const handleDeleteUser = async (id: string) => {
    try {
        const response = await axios.delete(`${baseURL}/delete_users/${id}`, { withCredentials: true });
        return response.data; 
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error; 
    }
};

export const useFetchUserByUid = (tipe_akun: string, uid: string) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${baseURL}/users/get_users_by_uid/${tipe_akun}/${uid}`, { withCredentials: true });
                setUser(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch user data');
                setLoading(false);
            }
        };

        if (uid && tipe_akun) {
            fetchUser();
        }
    }, [tipe_akun, uid]);

    return { user, loading, error };
};

const handleUpdateDataPegawaiPNS = async (id: string, pegawaiPNS: any) => {
    try {
        const response = await axios.put<SignUpResponse>(`${baseURL}/users/update_data_pegawai_pns/${id}`, pegawaiPNS, { withCredentials: true });
        return response.data.message;
    } catch (error) {
        throw error;
    }
};

const handleUpdateDataPegawaiNonPNS = async (id: string, pegawaiNonPNS: any) => {
    try {
        const response = await axios.put<SignUpResponse>(`${baseURL}/users/update_data_pegawai_non_pns/${id}`, pegawaiNonPNS, { withCredentials: true });
        return response.data.message;
    } catch (error) {
        throw error;
    }
};

const handleUpdateDataKreditur = async (id: string, krediturData: any) => {
    try {
        const response = await axios.put<SignUpResponse>(`${baseURL}/users/update_data_kreditur/${id}`, krediturData, { withCredentials: true });
        return response.data.message;
    } catch (error) {
        throw error;
    }
};

const handleUpdateDataDebiturPerusahaan = async (id: string, debiturData: any) => {
    try {
        const response = await axios.put<SignUpResponse>(`${baseURL}/users/update_data_debitur_perusahaan/${id}`, debiturData, { withCredentials: true });
        return response.data.message;
    } catch (error) {
        throw error;
    }
};

const handleUpdateDataDebiturPerseorangan = async (id: string, debiturData: any) => {
    try {
        const response = await axios.put<SignUpResponse>(`${baseURL}/users/update_data_debitur_perseorangan/${id}`, debiturData, { withCredentials: true });
        return response.data.message;
    } catch (error) {
        throw error;
    }
};

export const handleUpdateUser = async (
    id: string,
    role: string,
    tipeDebitur: string,
    crashProgram: string,
    tipePegawai: string,
    selectedEsl4: string,
    data: any,
    active: boolean,
    groups: number[] // IDs of selected groups
) => {
    try {
        if (role === 'Pegawai') {
            if (tipePegawai === 'PNS') {
                const pegawaiPNS = {
                    nama: data.nama,
                    nip: data.nip,
                    role: role,
                    tipe_pegawai: tipePegawai,
                    email: data.email,
                    password: data.password,
                    jabatan: data.jabatan,
                    esl4: selectedEsl4,
                    esl3: 'Kantor Pelayanan Kekayaan Negara dan Lelang Pekanbaru',
                    active: active,
                    groups: groups
                };
                console.log(id);
                console.log(pegawaiPNS);
                return await handleUpdateDataPegawaiPNS(id, pegawaiPNS);
            } else {
                const pegawaiNonPNS = {
                    nama: data.nama,
                    nik: data.nik,
                    email: data.email,
                    password: data.password,
                    role: role,
                    tipe_pegawai: tipePegawai,
                    keterangan: data.keterangan,
                    groups: groups
                };
                return await handleUpdateDataPegawaiNonPNS(id, pegawaiNonPNS);
            }
        } else if (role === 'Kreditur') {
            const krediturData = {
                nama: data.nama,
                nik: data.nik,
                email: data.email,
                password: data.password,
                kontak: data.kontak,
                role: role,
                nama_kreditur: data.nama_kreditur,
                alamat_kreditur: data.alamat_kreditur,
                email_kreditur: data.email_kreditur,
                npwp_kreditur: data.npwp_kreditur,
                groups: groups
            };
            return await handleUpdateDataKreditur(id, krediturData);

        } else if (role === 'Debitur') {
            const crash_program = crashProgram === 'Ya';
            if (tipeDebitur === 'Perusahaan') {
                const debiturPerusahaanData = {
                    nama: data.nama,
                    nik: data.nik,
                    email: data.email,
                    password: data.password,
                    kontak: data.kontak,
                    role: role,
                    tipe_debitur: tipeDebitur,
                    crash_program: crash_program,
                    nama_debitur: data.nama_debitur,
                    alamat_debitur: data.alamat_debitur,
                    email_debitur: data.email_debitur,
                    npwp_debitur: data.npwp_debitur,
                    groups: groups
                };
                return await handleUpdateDataDebiturPerusahaan(id, debiturPerusahaanData);
            } else if (tipeDebitur === 'Perseorangan') {
                const debiturPerseoranganData = {
                    nama: data.nama,
                    nik: data.nik,
                    email: data.email,
                    password: data.password,
                    kontak: data.kontak,
                    role: role,
                    tipe_debitur: tipeDebitur,
                    crash_program: crash_program,
                    alamat_debitur: data.alamat_debitur,
                    npwp_debitur: data.npwp_debitur,
                    groups: groups
                };
                return await handleUpdateDataDebiturPerseorangan(id, debiturPerseoranganData);
            }
        } else {
            throw new Error("Role tidak dipilih atau tidak valid");
        }
    } catch (error) {
        console.error('Update User gagal:', error);
        throw error;
    }
};
