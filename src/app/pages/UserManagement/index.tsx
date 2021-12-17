/**
 *
 * UserManagement
 *
 */
import { CustomDataTable } from 'app/components/CustomDataTable/Loadable';
import React, { memo, useState } from 'react';
import { Tag } from 'antd';
import styled from 'styled-components/macro';
import 'antd/dist/antd.css';
import { useGetAllUsersQuery } from 'app/services/api/UserManagementApi';
import { PopupDetailsUser } from 'app/components/PopupDetailsUser/Loadable';
import history from 'utils/history';

interface Props {}

export const UserManagement = memo((props: Props) => {
  const { data: users } = useGetAllUsersQuery();
  const [isVisibleDetailUserModal, setIsVisibleDetailUserModal] =
    useState(false);
  const [idUser, setIdUser] = useState(null);

  const handleClickDetail = id => {
    setIsVisibleDetailUserModal(true);
    setIdUser(id);
  };

  const handleCloseDetailUserModal = () => {
    setIsVisibleDetailUserModal(false);
    setIdUser(null);
  };

  const handleClickAddUser = () => {
    history.push('/add-user-management');
  };
  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      width: '10.33%',
      render: (avatar, records) => (
        <img
          src={avatar ? avatar : 'https://via.placeholder.com/500x500'}
          className="img-fluid circle"
          width="45"
          alt="Avatar"
        />
      ),
    },
    {
      title: 'Prénom',
      dataIndex: 'firstName',
      key: 'firstName',
      width: '14.33%',
    },
    {
      title: 'Nom',
      dataIndex: 'lastName',
      key: 'lastName',
      width: '14.33%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '22.33%',
    },
    {
      title: 'Téléphone',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      width: '14.33%',
    },
    {
      title: 'Actions',
      key: 'action',
      dataIndex: 'action',
      width: '13%',
      render: (element, records) => (
        <div className="d-flex justify-content-around">
          <i
            className="fas fa-eye"
            onClick={() => handleClickDetail(records.idUser)}
            style={{ fontSize: '16px', cursor: 'pointer', color: '#03b97c' }}
          ></i>
          <i
            className="fas fa-lock"
            style={{ fontSize: '16px', cursor: 'pointer', color: '#03b97c' }}
          ></i>
          <i
            className="fas fa-edit"
            style={{ fontSize: '16px', cursor: 'pointer', color: '#03b97c' }}
          ></i>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
          <div className="dashboard_wrap d-flex align-items-center justify-content-between">
            <div className="arion">
              <nav className="transparent">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Manage User
                  </li>
                </ol>
              </nav>
            </div>
            <div className="elkios">
              <div
                className="add_new_btn"
                style={{ cursor: 'pointer' }}
                onClick={handleClickAddUser}
              >
                <i className="fas fa-plus-circle mr-1"></i>Ajouter un
                utilisateur
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="dashboard_wrap">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                <h6 className="m-0">Liste des utilisateurs</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 mb-2">
                <CustomDataTable columns={columns} data={users} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopupDetailsUser
        handleCancelModal={handleCloseDetailUserModal}
        isVisibleModal={isVisibleDetailUserModal}
        idUser={idUser}
      />
    </>
  );
});

const Div = styled.div``;
