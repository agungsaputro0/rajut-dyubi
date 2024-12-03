import { useEffect, useState } from 'react';
import { Table, Input, TablePaginationConfig, Spin, Select, Row, Col, Typography, Button, Modal, Tooltip } from 'antd';
import { useFetchUsers } from '../hooks/useFetchUsers';
import { LoadingOutlined, PlusOutlined, EditOutlined, DeleteOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { handleDeleteUser } from '../hooks/HandleUser';
import { notification } from 'antd';

const { Search } = Input;
const { Option } = Select;
const { Text } = Typography;

const UsersTable = () => {
  const { data, loading, pagination, fetchUsers } = useFetchUsers();
  const [search, setSearch] = useState<string>('');
  const [pageSize, setPageSize] = useState<number>(10);
  const navigate = useNavigate();

  const handleTableChange = (pagination: TablePaginationConfig) => {
    fetchUsers(pagination.current || 1, pagination.pageSize || pageSize, search);
  };

  const handleAddData = (path: string) => {
    navigate(path);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value.trim() === '') {
      fetchUsers(1, pageSize); // Reset to initial data if search is empty
    } else {
      fetchUsers(1, pageSize, value); // Reset to page 1 when searching
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim() === '') {
      fetchUsers(1, pageSize); // Auto-fetch data if search is cleared
    }
  };

  const handlePageSizeChange = (value: number) => {
    setPageSize(value);
    fetchUsers(1, value, search); // Reset to page 1 when page size changes
  };

  useEffect(() => {
    fetchUsers(pagination.current || 1, pageSize);
  }, [pagination.current, pageSize]);

  const dataWithIndex = data.map((item: any, index: number) => ({
    ...item,
    index: index + 1,
  }));

  const handleUpdate = (tipe: string, uid: string) => {
    navigate(`/UpdateUser/${tipe}/${uid}`);
  };

  const handleDelete = (uid: string) => {
    Modal.confirm({
      title: 'Konfirmasi Hapus',
      content: 'Apakah Anda yakin ingin menghapus user ini?',
      onOk: async () => {
        try {
          await handleDeleteUser(uid);
          fetchUsers(pagination.current || 1, pageSize, search); 
          notification.success({
            message: "Selamat",
            description: "User berhasil dihapus",
          });
        } catch (error) {
          notification.error({
            message: "Mohon maaf",
            description: "User gagal untuk dihapus",
          });
        }
      },
    });
  };

  const columns = [
    {
      title: 'No',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'NIP / NIK',
      dataIndex: 'identifier',
      key: 'identifier',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Tipe',
      dataIndex: 'tipe',
      key: 'tipe',
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      render: (text: boolean) => (text ? 'Yes' : 'No'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_ : void, record: any) => (
        <center>
        <>
        {record.email !== 'agung.saputro@binus.ac.id' && (
         <Tooltip title="Update User">
          <Button
            className="btn-update"
            icon={<EditOutlined />}
            onClick={() => handleUpdate(record.tipe_akun, record.uid)}
          />
        </Tooltip>
         )}
        {record.email !== 'agung.saputro@binus.ac.id' && (
        <Tooltip title="Delete User">
          <Button
            className="btn-delete"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.uid)}
          />
        </Tooltip>
        )}
        {record.email === 'agung.saputro@binus.ac.id' && (
          <LockOutlined />
        )}
        </>
        </center>
      ),
    },
  ];

  const loadingIndicator = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;

  return (
    <section>
      <div className="pt-16 flex justify-center mb-20" style={{ paddingLeft: '80px' }}>
        <div className="bg-white/90 rounded-lg shadow-left-bottom border border-gray-400 p-6 space-y-4 w-full max-w-full">
          <h1 className="text-4xl font-bold text-gray-800 text-left mb-[25px]">User SIMPHO</h1>

          <Row justify="space-between" align="middle" gutter={16}>
            <Col>
              <Row gutter={8} align="middle">
                <Col>
                  <Button
                    type="primary"
                    onClick={() => handleAddData('/TambahUser')}
                    icon={<PlusOutlined />}
                    size="middle"
                  >
                    Tambah User
                  </Button>
                </Col>
                <Col>
                  <Select
                    defaultValue={10}
                    style={{ width: 120 }}
                    onChange={handlePageSizeChange}
                    size="middle"
                  >
                    <Option value={10}>10 / page</Option>
                    <Option value={50}>50 / page</Option>
                    <Option value={100}>100 / page</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col>
              <Search
                placeholder="Cari users"
                enterButton="Cari"
                onChange={handleSearchChange}
                onSearch={handleSearch}
                size="middle"
                style={{ marginBottom: 20 }}
              />
            </Col>
          </Row>

          {loading ? (
            <div className="flex justify-center items-center">
              <Spin indicator={loadingIndicator} />
            </div>
          ) : (
            <>
              <Table
                columns={columns}
                dataSource={dataWithIndex}
                rowKey="id"
                pagination={{
                  ...pagination,
                  pageSize: pageSize,
                }}
                loading={loading}
                onChange={handleTableChange}
                scroll={{ x: 'max-content' }}
              />
              <Row justify="end" style={{ marginTop: 16 }}>
                <Text>
                  Menampilkan {dataWithIndex.length} data
                </Text>
              </Row>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default UsersTable;
