/**
 *
 * CourseManagement
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { CustomDataTable } from 'app/components/CustomDataTable';
import { toast, ToastContainer } from 'react-toastify';
import history from 'utils/history';
import { Tag } from 'antd';
import {
  useGetAllCourseQuery,
  usePublishCourseMutation,
} from 'app/services/api/CourseApi';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

interface Props {}

export const CourseManagement = memo((props: Props) => {
  const [publishCourse] = usePublishCourseMutation();
  const handleClickDetailsCourse = id => {
    history.push('/preview-course', { idCourse: id });
  };

  const handleClickPublishCourse = id => {
    publishCourse(id || 0)
      .unwrap()
      .then(data => {
        toast.success(data?.message, {
          theme: 'colored',
          toastId: '1',
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch(error => {
        toast.error(error?.data?.message || error?.data?.title, {
          theme: 'colored',
          toastId: '1',
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const { data: courses } = useGetAllCourseQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      width: '10.33%',
      render: (image, records) => (
        <img
          src={image ? image : 'https://via.placeholder.com/500x500'}
          className="img-fluid circle"
          style={{ width: '45px', height: '45px' }}
          alt="Image"
        />
      ),
    },
    {
      title: 'Titre',
      dataIndex: 'label',
      key: 'label',
      width: '36.66%',
    },
    {
      title: "Date d'ajout",
      dataIndex: 'dateAdded',
      key: 'dateAdded',
      width: '22.33%',
      render: (dateAdded, records) => (
        <p>{new Date(dateAdded).toLocaleDateString()}</p>
      ),
    },
    {
      title: 'Statut du cours',
      dataIndex: 'statusCourse',
      key: 'statusCourse',
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
            onClick={() => handleClickDetailsCourse(records.courseId)}
            style={{ fontSize: '16px', cursor: 'pointer', color: '#03b97c' }}
          ></i>
          {records.statusCourse === 'ENREGISTRÉ' && (
            <i
              className="fa fa-upload"
              onClick={() => handleClickPublishCourse(records.courseId)}
              style={{ fontSize: '16px', cursor: 'pointer', color: '#03b97c' }}
              aria-hidden="true"
            ></i>
          )}
        </div>
      ),
    },
  ];
  const handleClickAddCourse = () => {
    history.push('/add-user-management');
  };

  return (
    <>
      <ToastContainer />
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
                    Manage Course
                  </li>
                </ol>
              </nav>
            </div>
            <div className="elkios">
              <div
                className="add_new_btn"
                style={{ cursor: 'pointer' }}
                onClick={handleClickAddCourse}
              >
                <i className="fas fa-plus-circle mr-1"></i>Ajouter un cours
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
                <h6 className="m-0">Liste des cours</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 mb-2">
                <CustomDataTable columns={columns} data={courses} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

const Div = styled.div``;
