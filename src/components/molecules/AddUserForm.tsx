import { FC, useEffect, useRef, useState } from "react";
import InputElement from "../atoms/InputElement";
import SelectElement from "../atoms/SelectElement"; 
import Button from "../atoms/Button";
import { notification, Spin } from "antd";
import { LeftOutlined, LoadingOutlined } from '@ant-design/icons'; 
import { HandleAddUser } from "../hooks/HandleUser";
import { useNavigate } from 'react-router-dom';
import { useFetchKategori } from "../hooks/HandleUser";

const AddUserForm: FC = () => {
  const [signUpError, setsignUpError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [tipePegawai, setTipePegawai] = useState<string>('');
  const [selectedEsl4, setSelectedEsl4] = useState<string>('');
  const [tipeDebitur, setTipeDebitur] = useState<string>('Perusahaan');
  const [crashProgram, setCrashProgram] = useState<string>('Tidak');
  const { kategori } = useFetchKategori();

  
  const [formData, setFormData] = useState({
    nama: '',
    nip: '',
    nik: '',
    email: '',
    password: '',
    kontak: '',
    jabatan: '',
    keterangan: '',
    esl3: '',
    alamat_debitur: '',
    npwp_debitur: '',
    nama_debitur: '',
    email_debitur: '',
    alamat_kreditur: '',
    nama_kreditur: '',
    email_kreditur: '',
    npwp_kreditur: ''
  });

  const usernameRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!signUpError) return;

    const timer = setTimeout(() => {
      setsignUpError("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [signUpError]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.nama || !formData.email || !formData.password) {
      notification.error({
        message: "Form tidak valid",
        description: "Nama, Email, dan Password wajib diisi.",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const message = await HandleAddUser(selectedRole, tipeDebitur, crashProgram, tipePegawai, selectedEsl4, formData);

      notification.success({
        message: "Penambahan User Berhasil!",
        description: message,
      });

      setTimeout(() => {
        navigate('/Users'); 
      }, 1000);
    } catch (error: any) { 
       const errorMessage = error.response?.data?.message || "Terjadi kesalahan saat Penambahan Users.";
       setsignUpError(errorMessage);
       notification.error({
          message: "Penambahan Users Gagal!",
          description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const loadingIndicator = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;

  const formattedOptions = [
    { value: '', label: 'Klik Disini' }, // Option default
      ...kategori.map((item) => ({
      value: item.kategori_id.toString(),
      label: item.nama,
    })),
  ];

  return (
  <section>
    <div className="pt-16 flex justify-center mb-20" style={{ paddingLeft: '80px' }}>
      <div className="bg-white/90 rounded-lg shadow-left-bottom border border-gray-400 p-6 space-y-4 w-full max-w-full">
      <div className="flex justify-between items-center mb-[25px]">
        <h1 className="text-4xl font-bold text-gray-800 text-left mb-[25px]">Tambah User</h1>
        <Button message="" onClick={() => navigate("/Users")} variant="bg-blue-500 text-white sm:h-[35px] h-[35px] mt-[-25px]"><LeftOutlined /> Kembali</Button>
        </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
              <InputElement
                inputClass="mb-6"
                forwhat="nama"
                labelMessage="Nama"
                typeInput="text"
                inputName="nama"
                inputPlaceholder="Masukkan Nama Anda"
                value={formData.nama}
                onChange={handleChange}
              />
              <SelectElement
                inputClass="mb-6"
                forwhat="role" 
                labelMessage="Pilih Role"
                id="role"
                name="role"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                options={[
                  { value: '', label: 'Klik Disini' },
                  { value: 'Pegawai', label: 'Pegawai' },
                  { value: 'Debitur', label: 'Debitur' },
                  { value: 'Kreditur', label: 'Kreditur' },
                ]}
              />
            </div>
            {selectedRole !== '' && (
            <>
            {selectedRole === 'Pegawai' && (
              <>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <SelectElement
                    inputClass="mb-6"
                    forwhat="tipe_pegawai" 
                    labelMessage="Tipe Pegawai" 
                    id="tipe_pegawai"
                    name="tipe_pegawai"
                    value={tipePegawai}
                    onChange={(e) => setTipePegawai(e.target.value)}
                    options={[
                      { value: '', label: 'Klik Disini' },
                      { value: 'PNS', label: 'PNS' },
                      { value: 'Non PNS', label: 'Non PNS' },
                    ]}
                  />
               {tipePegawai === 'PNS' && (
                  <InputElement
                    inputClass="mb-6"
                    forwhat="jabatan"
                    labelMessage="Jabatan"
                    typeInput="text"
                    inputName="jabatan"
                    inputPlaceholder="Masukkan Jabatan"
                    value={formData.jabatan}
                    onChange={handleChange}
                  />
                )}
                {tipePegawai === 'Non PNS' && (
                  <InputElement
                    inputClass="mb-6"
                    forwhat="keterangan"
                    labelMessage="keterangan"
                    typeInput="text"
                    inputName="keterangan"
                    inputPlaceholder="Masukkan Keterangan"
                    value={formData.keterangan}
                    onChange={handleChange}
                  />
                )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                {tipePegawai === 'Non PNS' && (
                    <InputElement
                        inputClass="mb-6"
                        forwhat="nik"
                        labelMessage="NIK / Passport ID"
                        typeInput="text"
                        inputName="nik"
                        inputPlaceholder="Masukkan NIK / Passport"
                        value={formData.nik}
                        onChange={handleChange}
                      />
                  )}
                  {tipePegawai === 'PNS' && (
                    <InputElement
                        inputClass="mb-6"
                        forwhat="nip"
                        labelMessage="NIP"
                        typeInput="text"
                        inputName="nip"
                        inputPlaceholder="Masukkan NIP"
                        value={formData.nip}
                        onChange={handleChange}
                      />
                  )}
                  {(tipePegawai === 'Non PNS' || tipePegawai === 'PNS') && (
                  <InputElement
                    inputClass="mb-6"
                    forwhat="email"
                    labelMessage="Email"
                    typeInput="text"
                    inputName="email"
                    inputPlaceholder="example@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                   )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  {tipePegawai === 'Non PNS' && (
                  <InputElement
                      inputClass="mb-6"
                      forwhat="kontak"
                      labelMessage="Nomor Kontak"
                      typeInput="text"
                      inputName="kontak"
                      inputPlaceholder="Masukkan Nomor Kontak"
                      value={formData.kontak}
                      onChange={handleChange}
                    />
                  )}
                  {tipePegawai === 'PNS' && (
                    <SelectElement
                      inputClass="mb-6"
                      forwhat="esl4" 
                      labelMessage="Eselon 4" 
                      id="esl4"
                      name="esl4"
                      value={selectedEsl4}
                      onChange={(e) => setSelectedEsl4(e.target.value)}
                      options={formattedOptions}
                    />
                  )}
                  {(tipePegawai === 'Non PNS' || tipePegawai === 'PNS') && (
                    <InputElement
                      inputClass="mb-6"
                      forwhat="password"
                      labelMessage="Password"
                      typeInput="password"
                      inputName="password"
                      inputPlaceholder="****"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  )}
                  </div>
                </>
            )}

            {/* Conditional Fields for Debitur */}
            {selectedRole === 'Debitur' && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <SelectElement
                    inputClass="mb-6"
                    forwhat="tipe_debitur" 
                    labelMessage="Tipe Debitur" 
                    id="tipe_debitur"
                    name="tipe_debitur"
                    value={tipeDebitur}
                    onChange={(e) => setTipeDebitur(e.target.value)}
                    options={[
                      { value: 'Perusahaan', label: 'Perusahaan' },
                      { value: 'Perseorangan', label: 'Perseorangan' },
                    ]}
                  />
                  <SelectElement
                    inputClass="mb-6"
                    forwhat="crash_program" 
                    labelMessage="Crash Program" 
                    id="crash_program"
                    name="crash_program"
                    value={crashProgram}
                    onChange={(e) => setCrashProgram(e.target.value)}
                    options={[
                      { value: 'Tidak', label: 'Tidak' },
                      { value: 'Ya', label: 'Ya' },
                    ]}
                  />
                  <InputElement
                        inputClass="mb-6"
                        forwhat="nik"
                        labelMessage="NIK / Passport ID"
                        typeInput="text"
                        inputName="nik"
                        inputPlaceholder="Masukkan NIK / Passport"
                        value={formData.nik}
                        onChange={handleChange}
                      />
                  <InputElement
                    inputClass="mb-6"
                    forwhat="email"
                    labelMessage="Email"
                    typeInput="text"
                    inputName="email"
                    inputPlaceholder="example@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputElement
                      inputClass="mb-6"
                      forwhat="password"
                      labelMessage="Password"
                      typeInput="password"
                      inputName="password"
                      inputPlaceholder="****"
                      value={formData.password}
                      onChange={handleChange}
                    />
                     <InputElement
                      inputClass="mb-6"
                      forwhat="kontak"
                      labelMessage="Nomor Kontak Anda"
                      typeInput="text"
                      inputName="kontak"
                      inputPlaceholder="Masukkan Nomor Kontak"
                      value={formData.kontak}
                      onChange={handleChange}
                    />
                </div>

                {tipeDebitur === 'Perusahaan' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <InputElement
                      inputClass="mb-6"
                      forwhat="nama_debitur"
                      labelMessage="Nama Entitas Debitur"
                      typeInput="text"
                      inputName="nama_debitur"
                      inputPlaceholder="Masukkan Nama Debitur"
                      value={formData.nama_debitur}
                      onChange={handleChange}
                    />
                    <InputElement
                      inputClass="mb-6"
                      forwhat="alamat_debitur"
                      labelMessage="Alamat Entitas Debitur"
                      typeInput="text"
                      inputName="alamat_debitur"
                      inputPlaceholder="Masukkan Alamat Debitur"
                      value={formData.alamat_debitur}
                      onChange={handleChange}
                    />
                    <InputElement
                      inputClass="mb-6"
                      forwhat="email_debitur"
                      labelMessage="Email Entitas Debitur"
                      typeInput="text"
                      inputName="email_debitur"
                      inputPlaceholder="Masukkan Email Debitur"
                      value={formData.email_debitur}
                      onChange={handleChange}
                    />
                    <InputElement
                      inputClass="mb-6"
                      forwhat="npwp_debitur"
                      labelMessage="NPWP Entitas Debitur"
                      typeInput="text"
                      inputName="npwp_debitur"
                      inputPlaceholder="Masukkan NPWP Debitur"
                      value={formData.npwp_debitur}
                      onChange={handleChange}
                    />
                  </div>
                )}
                {tipeDebitur === 'Perseorangan' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <InputElement
                      inputClass="mb-6"
                      forwhat="alamat_debitur"
                      labelMessage="Alamat"
                      typeInput="text"
                      inputName="alamat_debitur"
                      inputPlaceholder="Masukkan Alamat"
                      value={formData.alamat_debitur}
                      onChange={handleChange}
                    />
                    <InputElement
                      inputClass="mb-6"
                      forwhat="npwp_debitur"
                      labelMessage="NPWP"
                      typeInput="text"
                      inputName="npwp_debitur"
                      inputPlaceholder="Masukkan NPWP Debitur"
                      value={formData.npwp_debitur}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </>
            )}

            {/* Conditional Fields for Kreditur */}
            {selectedRole === 'Kreditur' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <InputElement
                        inputClass="mb-6"
                        forwhat="nik"
                        labelMessage="NIK / Passport ID"
                        typeInput="text"
                        inputName="nik"
                        inputPlaceholder="Masukkan NIK / Passport"
                        value={formData.nik}
                        onChange={handleChange}
                      />
                <InputElement
                    inputClass="mb-6"
                    forwhat="email"
                    labelMessage="Email"
                    typeInput="text"
                    inputName="email"
                    inputPlaceholder="example@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputElement
                      inputClass="mb-6"
                      forwhat="password"
                      labelMessage="Password"
                      typeInput="password"
                      inputName="password"
                      inputPlaceholder="****"
                      value={formData.password}
                      onChange={handleChange}
                    />
                <InputElement
                  inputClass="mb-6"
                  forwhat="nama_kreditur"
                  labelMessage="Nama Entitas Kreditur"
                  typeInput="text"
                  inputName="nama_kreditur"
                  inputPlaceholder="Masukkan Nama Kreditur"
                  value={formData.nama_kreditur}
                  onChange={handleChange}
                />
                <InputElement
                  inputClass="mb-6"
                  forwhat="alamat_kreditur"
                  labelMessage="Alamat Entitas Kreditur"
                  typeInput="text"
                  inputName="alamat_kreditur"
                  inputPlaceholder="Masukkan Alamat Kreditur"
                  value={formData.alamat_kreditur}
                  onChange={handleChange}
                />
                <InputElement
                  inputClass="mb-6"
                  forwhat="email_kreditur"
                  labelMessage="Email Entitas Kreditur"
                  typeInput="text"
                  inputName="email_kreditur"
                  inputPlaceholder="Masukkan Email Kreditur"
                  value={formData.email_kreditur}
                  onChange={handleChange}
                />
                <InputElement
                  inputClass="mb-6"
                  forwhat="npwp_kreditur"
                  labelMessage="NPWP Entitas Kreditur"
                  typeInput="text"
                  inputName="npwp_kreditur"
                  inputPlaceholder="Masukkan NPWP Kreditur"
                  value={formData.npwp_kreditur}
                  onChange={handleChange}
                />
                <InputElement
                      inputClass="mb-6"
                      forwhat="kontak"
                      labelMessage="Nomor Kontak Anda"
                      typeInput="text"
                      inputName="kontak"
                      inputPlaceholder="Masukkan Nomor Kontak"
                      value={formData.kontak}
                      onChange={handleChange}
                    />
              </div>
            )}
            </>
            )}
            <Button
              message={loading ? "Loading..." : "Register User"} 
              variant="bg-blue-700 w-full hover:bg-blue-900"
              type="submit"
              disabled={loading}
            >
              {loading ? <Spin indicator={loadingIndicator} /> : null} 
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddUserForm;
