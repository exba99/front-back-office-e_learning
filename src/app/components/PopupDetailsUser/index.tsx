/**
 *
 * PopupDetailsUser
 *
 */
import React, { memo } from 'react';
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import { Divider, Descriptions, Tag } from 'antd';
import 'antd/dist/antd.css';
import { ReadMoreText } from '../ReadMoreText/Loadable';
import { useGetUserQuery } from 'app/services/api/UserManagementApi';
import { skipToken } from '@reduxjs/toolkit/dist/query';

interface Props {
  isVisibleModal: boolean;
  handleCancelModal: any;
  idUser: string | null;
}

export const PopupDetailsUser = memo((props: Props) => {
  const { isVisibleModal, handleCancelModal, idUser } = props;
  const { data } = useGetUserQuery(idUser ?? skipToken);
  return (
    <Modal
      title="Detail d'un utilisateur"
      centered
      visible={isVisibleModal}
      onCancel={handleCancelModal}
      width={1100}
      closeIcon={
        <span aria-hidden="true">
          <i className="fas fa-times-circle"></i>
        </span>
      }
      footer={null}
    >
      <div className="ed_detail_head" style={{ padding: 0 }}>
        <div className="container">
          <div className="row align-items-center mb-2">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="authi_125">
                <div className="authi_125_thumb">
                  <img src={data?.avatar} className="img-fluid" alt="Avatar" />
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="dlkio_452">
                <div className="ed_detail_wrap">
                  <div className="ed_header_caption">
                    <h2 className="ed_title" style={{ marginBottom: 0 }}>
                      {data?.firstName} {data?.lastName}
                    </h2>
                    <span style={{ opacity: '.5' }}>{data?.roleName}</span>
                  </div>
                  <div className="ed_header_short">
                    <p style={{ fontFamily: 'Jost' }}>
                      <ReadMoreText>
                        {data?.biography ? data?.biography : ''}
                      </ReadMoreText>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider>More informations</Divider>
          <div
            className="row align-items-center justify-content-center mb-2"
            style={{ padding: '15px' }}
          >
            <Descriptions title="User Info" layout="vertical">
              <Descriptions.Item
                label="Email"
                labelStyle={{ fontWeight: 'bold', textTransform: 'uppercase' }}
              >
                {data?.email}
              </Descriptions.Item>
              <Descriptions.Item
                label="Email de contact"
                labelStyle={{ fontWeight: 'bold', textTransform: 'uppercase' }}
              >
                {data?.emailContact}
              </Descriptions.Item>
              <Descriptions.Item
                label="Téléphone"
                labelStyle={{ fontWeight: 'bold', textTransform: 'uppercase' }}
              >
                {data?.phoneNumber}
              </Descriptions.Item>
              <Descriptions.Item
                label="Spécialité"
                labelStyle={{ fontWeight: 'bold', textTransform: 'uppercase' }}
              >
                {data?.speciality}
              </Descriptions.Item>
              <Descriptions.Item
                label="Status"
                labelStyle={{ fontWeight: 'bold', textTransform: 'uppercase' }}
              >
                {data?.statusUser && data?.statusUser === 'ACTIVATED' ? (
                  <Tag color="geekblue">{data?.statusUser}</Tag>
                ) : (
                  <Tag color="volcano">{data?.statusUser}</Tag>
                )}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      </div>
    </Modal>
  );
});
