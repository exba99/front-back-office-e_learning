/**
 *
 * LanguageManagement
 *
 */
import React, { memo, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reloadJs } from 'utils/insertJQuery';
import {
  useAddLanguageMutation,
  useDeleteLanguageMutation,
  useGetAllLanguagesMutation,
  useUpdateLanguageMutation,
} from 'app/services/api/LanguageApi';
import { PopupAddUpdateLanguage } from 'app/components/PopupAddUpdateLanguage/Loadable';

interface Props {}

export const LanguageManagement = memo((props: Props) => {
  const [isVisibleAddLanguage, setIsVisibleAddLanguage] = useState(false);
  const [isAddAction, setIsAddAction] = useState(false);
  const [languageToUpdate, setLanguageToUpdate] = useState(null);

  const [
    getAllLanguages,
    { data, isError, isSuccess: isSuccessGetAllLanguages },
  ] = useGetAllLanguagesMutation();

  const [addLanguage, { isLoading: isLoadingAddLanguage }] =
    useAddLanguageMutation();

  const [updateLanguage, { isLoading: isLoadingUpdateLanguage }] =
    useUpdateLanguageMutation();

  const [deleteLanguage, { isLoading: isLoadingDeleteLanguage }] =
    useDeleteLanguageMutation();

  useEffect(() => {
    getAllLanguages(null).unwrap().catch();
  }, []);

  useEffect(() => {
    reloadJs();
  }, []);

  const handleSubmitAddLanguage = values => {
    addLanguage(values)
      .unwrap()
      .then(data => {
        toast.update('1', {
          render: data?.message,
          type: toast.TYPE.SUCCESS,
        });
        getAllLanguages(null).unwrap();
      })
      .catch(error => {
        toast.update('1', {
          render: error?.data?.message,
          type: toast.TYPE.ERROR,
        });
      });
  };

  const handleSubmitUpdateLanguage = values => {
    updateLanguage(values)
      .unwrap()
      .then(data => {
        toast.update('1', {
          render: data?.message,
          type: toast.TYPE.SUCCESS,
        });
        getAllLanguages(null).unwrap();
      })
      .catch(error => {
        toast.update('1', {
          render: error?.data?.message,
          type: toast.TYPE.ERROR,
        });
      });
  };

  const handleDeleteLanguage = id => {
    const confirm = window.confirm(
      'Voulez vous vraiment supprimer cette langue ?',
    );
    if (confirm) {
      deleteLanguage(id)
        .unwrap()
        .then(data => {
          toast.update('1', {
            render: data?.message,
            type: toast.TYPE.SUCCESS,
          });
          getAllLanguages(null).unwrap();
        })
        .catch(error => {
          toast.update('1', {
            render: error?.data?.message,
            type: toast.TYPE.ERROR,
          });
        });
    }
  };

  const showAddLanguageModal = () => {
    setIsAddAction(true);
    setIsVisibleAddLanguage(true);
  };

  const showUpdateLanguageModal = cat => {
    setLanguageToUpdate(cat);
    setIsAddAction(false);
    setIsVisibleAddLanguage(true);
  };

  const handleCancelAddLanguageModal = () => {
    setIsVisibleAddLanguage(false);
  };

  if (
    isLoadingAddLanguage ||
    isLoadingUpdateLanguage ||
    isLoadingDeleteLanguage
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
                    Langue
                  </li>
                </ol>
              </nav>
            </div>
            <div className="elkios">
              <div
                className="add_new_btn"
                style={{ cursor: 'pointer' }}
                onClick={showAddLanguageModal}
              >
                <i className="fas fa-plus-circle mr-1"></i>Ajouter une langue
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {isSuccessGetAllLanguages &&
          data &&
          data.length > 0 &&
          data.map((cat, i) => (
            <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="dash_crs_cat">
                <div
                  className="remove_tools"
                  onClick={() => handleDeleteLanguage(cat.languageId)}
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
                      onClick={() => showUpdateLanguageModal(cat)}
                    >
                      Modifier Langue
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {(isError ||
          (isSuccessGetAllLanguages && data && data.length === 0)) && (
          <div className="succ_wrap">
            <div className="succ_121 mb-3">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div className="succ_122">
              <p>Aucune langue n'a été trouver !</p>
            </div>
            <div
              className="add_new_btn"
              style={{ cursor: 'pointer' }}
              onClick={showAddLanguageModal}
            >
              <i className="fas fa-plus-circle mr-1"></i>Ajouter une langue
            </div>
          </div>
        )}
      </div>

      {isVisibleAddLanguage && (
        <PopupAddUpdateLanguage
          handleCancelModal={handleCancelAddLanguageModal}
          isVisibleModal={isVisibleAddLanguage}
          handleSubmit={
            isAddAction ? handleSubmitAddLanguage : handleSubmitUpdateLanguage
          }
          isAddAction={isAddAction}
          languageToUpdate={languageToUpdate}
        />
      )}
    </>
  );
});
