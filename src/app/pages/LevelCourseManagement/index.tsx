/**
 *
 * LevelCourseManagement
 *
 */
import React, { memo, useState, useEffect } from 'react';
import { PopupAddUpdateLevelCourse } from 'app/components/PopupAddUpdateLevelCourse/Loadable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useAddLevelCourseMutation,
  useDeleteLevelCourseMutation,
  useGetAllLevelCoursesMutation,
  useUpdateLevelCourseMutation,
} from 'app/services/api/LevelCourseApi';
import { reloadJs } from 'utils/insertJQuery';

interface Props {}

export const LevelCourseManagement = memo((props: Props) => {
  const [isVisibleAddLevelCourse, setIsVisibleAddLevelCourse] = useState(false);
  const [isAddAction, setIsAddAction] = useState(false);
  const [levelToUpdate, setLevelToUpdate] = useState(null);

  const [
    getAllLevelCourse,
    { data, isError, isSuccess: isSuccessGetAllLevelCourses },
  ] = useGetAllLevelCoursesMutation();

  const [addLevelCourse, { isLoading: isLoadingAddLevelCourse }] =
    useAddLevelCourseMutation();

  const [updateLevelCourse, { isLoading: isLoadingUpdateLevelCourse }] =
    useUpdateLevelCourseMutation();

  const [deleteLevelCourse, { isLoading: isLoadingDeleteLevelCourse }] =
    useDeleteLevelCourseMutation();

  useEffect(() => {
    getAllLevelCourse(null).unwrap().catch();
  }, []);

  useEffect(() => {
    reloadJs();
  }, []);

  const handleSubmitAddLevelCourse = values => {
    addLevelCourse(values)
      .unwrap()
      .then(data => {
        toast.update('1', {
          render: data?.message,
          type: toast.TYPE.SUCCESS,
        });
        getAllLevelCourse(null).unwrap();
      })
      .catch(error => {
        toast.update('1', {
          render: error?.data?.message,
          type: toast.TYPE.ERROR,
        });
      });
  };

  const handleSubmitUpdateLevelCourse = values => {
    updateLevelCourse(values)
      .unwrap()
      .then(data => {
        toast.update('1', {
          render: data?.message,
          type: toast.TYPE.SUCCESS,
        });
        getAllLevelCourse(null).unwrap();
      })
      .catch(error => {
        toast.update('1', {
          render: error?.data?.message,
          type: toast.TYPE.ERROR,
        });
      });
  };

  const handleDeleteLevelCourse = id => {
    const confirm = window.confirm(
      'Voulez vous vraiment supprimer ce niveau de cours ?',
    );
    if (confirm) {
      deleteLevelCourse(id)
        .unwrap()
        .then(data => {
          toast.update('1', {
            render: data?.message,
            type: toast.TYPE.SUCCESS,
          });
          getAllLevelCourse(null).unwrap();
        })
        .catch(error => {
          toast.update('1', {
            render: error?.data?.message,
            type: toast.TYPE.ERROR,
          });
        });
    }
  };

  const showAddLevelCourseModal = () => {
    setIsAddAction(true);
    setIsVisibleAddLevelCourse(true);
  };

  const showUpdateLevelCourseModal = cat => {
    setLevelToUpdate(cat);
    setIsAddAction(false);
    setIsVisibleAddLevelCourse(true);
  };

  const handleCancelAddLevelCourseModal = () => {
    setIsVisibleAddLevelCourse(false);
  };

  // Add Category
  if (
    isLoadingAddLevelCourse ||
    isLoadingUpdateLevelCourse ||
    isLoadingDeleteLevelCourse
  ) {
    toast.info('Loading....', {
      theme: 'colored',
      toastId: '1',
      position: toast.POSITION.TOP_RIGHT,
    });
  }

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
                    Niveau de cours
                  </li>
                </ol>
              </nav>
            </div>
            <div className="elkios">
              <div
                className="add_new_btn"
                style={{ cursor: 'pointer' }}
                onClick={showAddLevelCourseModal}
              >
                <i className="fas fa-plus-circle mr-1"></i>Ajouter un niveau de
                cours
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {isSuccessGetAllLevelCourses &&
          data &&
          data.length > 0 &&
          data.map((cat, i) => (
            <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="dash_crs_cat">
                <div
                  className="remove_tools"
                  onClick={() => handleDeleteLevelCourse(cat.levelCourseId)}
                >
                  <i className="fas fa-trash-alt"></i>
                </div>

                <div className="dash_crs_cat_caption">
                  <div
                    style={{ height: '65px' }}
                    className="dash_crs_cat_head d-flex justify-content-center align-items-center"
                  >
                    <h4>{cat?.label}</h4>
                  </div>
                  <div className="dash_crs_cat_bottom">
                    <div
                      className="btn full-width theme-bg-light theme-cl"
                      onClick={() => showUpdateLevelCourseModal(cat)}
                    >
                      Modifier Niveau
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {(isError ||
          (isSuccessGetAllLevelCourses && data && data.length === 0)) && (
          <div className="succ_wrap">
            <div className="succ_121 mb-3">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div className="succ_122">
              <p>Aucun niveau de cours n'a été trouver !</p>
            </div>
            <div
              className="add_new_btn"
              style={{ cursor: 'pointer' }}
              onClick={showAddLevelCourseModal}
            >
              <i className="fas fa-plus-circle mr-1"></i>Ajouter un niveau de
              cours
            </div>
          </div>
        )}
      </div>

      {isVisibleAddLevelCourse && (
        <PopupAddUpdateLevelCourse
          handleCancelModal={handleCancelAddLevelCourseModal}
          isVisibleModal={isVisibleAddLevelCourse}
          handleSubmit={
            isAddAction
              ? handleSubmitAddLevelCourse
              : handleSubmitUpdateLevelCourse
          }
          isAddAction={isAddAction}
          levelToUpdate={levelToUpdate}
        />
      )}
    </>
  );
});
