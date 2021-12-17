/**
 *
 * MyProfilPage
 *
 */
import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { deleteJs, reloadJs } from 'utils/insertJQuery';
import { CustomInputText } from 'app/components/CustomInputText/Loadable';
import { CustomInputSummernote } from 'app/components/CustomInputSummernote';
import { CustomImage } from 'app/components/CustomImage/Loadable';
import 'antd/dist/antd.css';
import { Role } from 'app/type';
import { getBase64FromFile } from 'utils/base64';
import { Form } from 'antd';
import { CustomButtonValidate } from 'app/components/CustomButtonValidate/Loadable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from 'utils/history';
import {
  useLoadInfoUserQuery,
  useUpdateBasicInfoMutation,
  useUpdatePasswordMutation,
} from 'app/services/api/DashboardApi';
import {
  UpdateInterfaceUser,
  UpdatePasswordInterface,
} from 'app/services/api/DashboardApi/types';

interface Props {}

export const MyProfilPage = memo((props: Props) => {
  const { data: user } = useLoadInfoUserQuery();
  const [biography, setBiography] = useState('');
  const [img, setImg] = useState(user?.avatar);
  const [updateBasicInfo, { isLoading: isLoadingBasicInfo }] =
    useUpdateBasicInfoMutation();

  const [updatePassword, { isLoading: isLoadingPassword }] =
    useUpdatePasswordMutation();

  const handleChangeSummernoteCallback = value => {
    setBiography(value);
    console.log('summernote', value);
  };

  const setImageCallback = file => {
    if (file) {
      getBase64FromFile(file.originFileObj, base64 => setImg(base64));
    }
  };

  const onFinish = (values: any) => {
    const paylod: UpdateInterfaceUser = { ...values, Biography: biography };
    paylod.Avatar = img!;
    updateBasicInfo(paylod)
      .unwrap()
      .then(() => {
        toast.update('1', {
          render: 'Vos infos ont été mis à jour !',
          type: toast.TYPE.SUCCESS,
        });
        if (values.Email !== user.email) {
          localStorage.setItem('token', '');
          history.push('/');
        }
      })
      .catch(() => {
        toast.update('1', {
          render: 'Une erreur est survenue !',
          type: toast.TYPE.ERROR,
        });
      });
  };

  const onFinishChangePassword = (values: any) => {
    if (values.NewPassword !== values.RepeatPassword) {
      alert('Mot de passe non identique !');
    } else if (values.NewPassword.length < 6) {
      alert('Votre mot de passe doit contenir 6 caracteres au minimum!');
    } else {
      const paylod: UpdatePasswordInterface = values;
      updatePassword(paylod)
        .unwrap()
        .then(() => {
          toast.update('1', {
            render: 'Votre mot de passe à été mis à jour !',
            type: toast.TYPE.SUCCESS,
          });
        })
        .catch(() => {
          toast.update('1', {
            render: 'Une erreur est survenue !',
            type: toast.TYPE.ERROR,
          });
        });
    }
  };

  if (isLoadingPassword || isLoadingBasicInfo) {
    toast.info('Loading....', {
      theme: 'colored',
      toastId: '1',
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  useEffect(() => {
    reloadJs();
    return () => {
      deleteJs();
    };
  }, []);
  return (
    <>
      <ToastContainer limit={2} />
      <div className="row justify-content-between">
        <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
          <div className="dashboard_wrap d-flex align-items-center justify-content-between">
            <div className="arion">
              <nav className="transparent">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Mon profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-7 col-lg-6 col-md-12">
          <div className="dashboard_wrap">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                <h6 className="m-0">Detail basic</h6>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <Form layout="vertical" onFinish={onFinish} autoComplete="on">
                  <div className="form-group smalls">
                    <CustomInputText
                      nameInput="FirstName"
                      label="Prénom"
                      required={true}
                      errorMessage="Ce champ est obligatoire"
                      initialValue={user?.firstName}
                    />
                  </div>
                  <div className="form-group smalls">
                    <CustomInputText
                      nameInput="LastName"
                      label="Nom"
                      required={true}
                      errorMessage="Ce champ est obligatoire"
                      initialValue={user?.lastName}
                    />
                  </div>
                  <div className="form-group smalls">
                    <CustomInputText
                      nameInput="Email"
                      label="Email"
                      required={true}
                      errorMessage="Ce champ est obligatoire"
                      initialValue={user?.email}
                      type="email"
                    />
                  </div>
                  <div className="form-group smalls">
                    <CustomInputText
                      nameInput="EmailContact"
                      label="Email de contact"
                      required={true}
                      errorMessage="Ce champ est obligatoire"
                      initialValue={user?.emailContact}
                      type="email"
                    />
                  </div>
                  <div className="form-group smalls">
                    <CustomInputText
                      nameInput="PhoneNumber"
                      label="Numero de téléphone"
                      required={true}
                      errorMessage="Ce champ est obligatoire"
                      initialValue={user?.phoneNumber}
                      type="number"
                    />
                  </div>
                  {user?.roleName === Role.ADMIN ? null : (
                    <>
                      <div className="form-group smalls">
                        <CustomInputText
                          nameInput="Speciality"
                          label="Votre Spécialité"
                          required={false}
                          readOnly={true}
                          initialValue={user?.speciality}
                        />
                      </div>
                      <div className="form-group smalls">
                        <CustomInputSummernote
                          label="Votre biographie"
                          initialValue={user?.biography}
                          data={biography}
                          handleChange={handleChangeSummernoteCallback}
                        />
                      </div>
                    </>
                  )}
                  <div className="form-group smalls">
                    <CustomImage
                      label="Avatar"
                      setImageCallback={setImageCallback}
                      initialImage={[
                        {
                          uid: '-1',
                          name: 'avatar.png',
                          status: 'done',
                          url: user?.avatar,
                        },
                      ]}
                    />
                  </div>
                  <div className="form-group smalls">
                    <CustomButtonValidate text="Modifier" />
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-5 col-lg-6 col-md-12">
          <div className="dashboard_wrap">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <Form
                  layout="vertical"
                  onFinish={onFinishChangePassword}
                  // onFinishFailed={() => alert('Non OK')}
                  autoComplete="on"
                >
                  <div className="form-group smalls">
                    <CustomInputText
                      nameInput="CurrentPassword"
                      label="Mot de passe actuel"
                      required={true}
                      errorMessage="Ce champ est obligatoire"
                      type="password"
                    />
                  </div>
                  <div className="form-group smalls">
                    <CustomInputText
                      nameInput="NewPassword"
                      label="Nouveau mot de passe"
                      required={true}
                      errorMessage="Ce champ est obligatoire"
                      type="password"
                    />
                  </div>
                  <div className="form-group smalls">
                    <CustomInputText
                      nameInput="RepeatPassword"
                      label="Confirmer mot de passe"
                      required={true}
                      errorMessage="Ce champ est obligatoire"
                      type="password"
                    />
                  </div>
                  <div className="form-group smalls">
                    <CustomButtonValidate text="Valider" />
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

const Div = styled.div``;
