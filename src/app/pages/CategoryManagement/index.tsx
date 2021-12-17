/**
 *
 * CategoryManagement
 *
 */
import React, { memo, useState, useEffect } from 'react';
import {
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from 'app/services/api/CategoryManagementApi';
import { PopupAddUpdateCategory } from 'app/components/PopupAddUpdateCategory/Loadable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reloadJs } from 'utils/insertJQuery';

interface Props {}

export const CategoryManagement = memo((props: Props) => {
  const [isVisibleAddCategorie, setIsVisibleAddCategorie] = useState(false);
  const [isAddAction, setIsAddAction] = useState(false);
  const [catToUpdate, setCatToUpdate] = useState(null);

  const {
    data,
    isError,
    isSuccess: isSuccessGetAllCategories,
  } = useGetAllCategoriesQuery(undefined, { refetchOnMountOrArgChange: true });

  const [addCategory, { isLoading: isLoadingAddCategory }] =
    useAddCategoryMutation();

  const [updateCategory, { isLoading: isLoadingUpdateCategory }] =
    useUpdateCategoryMutation();

  const [deleteCategory, { isLoading: isLoadingDeleteCategory }] =
    useDeleteCategoryMutation();

  useEffect(() => {
    reloadJs();
  }, []);

  const handleSubmitAddCategory = values => {
    addCategory(values)
      .unwrap()
      .then(data => {
        toast.update('1', {
          render: data?.message,
          type: toast.TYPE.SUCCESS,
        });
      })
      .catch(error => {
        toast.update('1', {
          render: error?.data?.message,
          type: toast.TYPE.ERROR,
        });
      });
  };

  const handleSubmitUpdateCategory = values => {
    updateCategory(values)
      .unwrap()
      .then(data => {
        toast.update('1', {
          render: data?.message,
          type: toast.TYPE.SUCCESS,
        });
      })
      .catch(error => {
        toast.update('1', {
          render: error?.data?.message,
          type: toast.TYPE.ERROR,
        });
      });
  };

  const handleDeleteCategory = id => {
    const confirm = window.confirm(
      'Voulez vous vraiment supprimer cette catégorie ?',
    );
    if (confirm) {
      deleteCategory(id)
        .unwrap()
        .then(data => {
          toast.update('1', {
            render: data?.message,
            type: toast.TYPE.SUCCESS,
          });
        })
        .catch(error => {
          toast.update('1', {
            render: error?.data?.message,
            type: toast.TYPE.ERROR,
          });
        });
    }
  };

  const showAddCategoryModal = () => {
    setIsAddAction(true);
    setIsVisibleAddCategorie(true);
  };

  const showUpdateCategoryModal = cat => {
    setCatToUpdate(cat);
    setIsAddAction(false);
    setIsVisibleAddCategorie(true);
  };

  const handleCancelAddCategoryModal = () => {
    setIsVisibleAddCategorie(false);
  };

  // Add Category
  if (
    isLoadingAddCategory ||
    isLoadingUpdateCategory ||
    isLoadingDeleteCategory
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
                    Categorie des cours
                  </li>
                </ol>
              </nav>
            </div>
            <div className="elkios">
              <div
                className="add_new_btn"
                style={{ cursor: 'pointer' }}
                onClick={showAddCategoryModal}
              >
                <i className="fas fa-plus-circle mr-1"></i>Ajouter une categorie
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {isSuccessGetAllCategories &&
          data &&
          data.length > 0 &&
          data.map((cat, i) => (
            <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="dash_crs_cat">
                <div
                  className="remove_tools"
                  onClick={() => handleDeleteCategory(cat.categoryId)}
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
                      onClick={() => showUpdateCategoryModal(cat)}
                    >
                      Modifier Categorie
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {(isError ||
          (isSuccessGetAllCategories && data && data.length === 0)) && (
          <div className="succ_wrap">
            <div className="succ_121 mb-3">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div className="succ_122">
              <p>Aucune catégorie n'a été trouver !</p>
            </div>
            <div
              className="add_new_btn"
              style={{ cursor: 'pointer' }}
              onClick={showAddCategoryModal}
            >
              <i className="fas fa-plus-circle mr-1"></i>Ajouter une categorie
            </div>
          </div>
        )}
      </div>

      {isVisibleAddCategorie && (
        <PopupAddUpdateCategory
          handleCancelModal={handleCancelAddCategoryModal}
          isVisibleModal={isVisibleAddCategorie}
          handleSubmit={
            isAddAction ? handleSubmitAddCategory : handleSubmitUpdateCategory
          }
          isAddAction={isAddAction}
          catToUpdate={catToUpdate}
        />
      )}
    </>
  );
});
