/**
 *
 * AddUserManagement
 *
 */
import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { CustomInputText } from 'app/components/CustomInputText/Loadable';
import { CustomInputSummernote } from 'app/components/CustomInputSummernote/Loadable';
import { CustomImage } from 'app/components/CustomImage/Loadable';
import { getBase64FromFile } from 'utils/base64';
import 'antd/dist/antd.css';
import { Form } from 'antd';
import { CustomButtonValidate } from 'app/components/CustomButtonValidate/Loadable';

interface Props {}

export const AddUserManagement = memo((props: Props) => {
  const [biography, setBiography] = useState('');
  const [img, setImg] = useState(null);

  const setImageCallback = file => {
    if (file) {
      getBase64FromFile(file.originFileObj, base64 => setImg(base64));
    }
  };
  const handleChangeSummernoteCallback = value => {
    setBiography(value);
    console.log('summernote', value);
  };

  const onFinish = () => {};
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
                    Add Instructor
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="dashboard_wrap">
            <div className="form_blocs_wrap">
              <Form
                layout="vertical"
                onFinish={onFinish}
                // onFinishFailed={() => alert('Non OK')}
                autoComplete="on"
              >
                <div className="row justify-content-between">
                  <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                    <div
                      className="nav flex-column nav-pills me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="nav-link active"
                        id="v-pills-basic-tab"
                        data-toggle="pill"
                        data-target="#v-pills-basic"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-basic"
                        aria-selected="true"
                      >
                        Basic info
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-login-tab"
                        data-toggle="pill"
                        data-target="#v-pills-login"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-login"
                        aria-selected="false"
                      >
                        Login Details
                      </button>
                    </div>
                  </div>

                  <div className="col-xl-9 col-lg-8 col-md-7 col-sm-12">
                    <div className="tab-content" id="v-pills-tabContent">
                      {/* <!-- Basic --> */}
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-basic"
                        role="tabpanel"
                        aria-labelledby="v-pills-basic-tab"
                      >
                        <div className="form-group smalls">
                          <CustomInputText
                            nameInput="FirstName"
                            label="Prénom"
                            required={true}
                            errorMessage="Ce champ est obligatoire"
                            placeholder="votre prénom"
                          />
                        </div>
                        <div className="form-group smalls">
                          <CustomInputText
                            nameInput="LastName"
                            label="Nom"
                            required={true}
                            errorMessage="Ce champ est obligatoire"
                            placeholder="votre nom"
                          />
                        </div>
                        <div className="form-group smalls">
                          <CustomInputText
                            nameInput="EmailContact"
                            label="Email de contact"
                            required={true}
                            errorMessage="Ce champ est obligatoire"
                            type="email"
                            placeholder="votre email de contact"
                          />
                        </div>
                        <div className="form-group smalls">
                          <CustomInputText
                            nameInput="PhoneNumber"
                            label="Numero de téléphone"
                            required={true}
                            errorMessage="Ce champ est obligatoire"
                            type="number"
                            placeholder="votre numéro de téléphone"
                          />
                        </div>
                        <div className="form-group smalls">
                          <CustomInputText
                            nameInput="Speciality"
                            label="Votre Spécialité"
                            required={false}
                            placeholder="votre spécialité"
                          />
                        </div>
                        <div className="form-group smalls">
                          <CustomInputSummernote
                            label="Votre biographie"
                            data={biography}
                            placeholder="votre biographie"
                            handleChange={handleChangeSummernoteCallback}
                          />
                        </div>
                        <div className="form-group smalls">
                          <CustomImage
                            label="Avatar"
                            setImageCallback={setImageCallback}
                          />
                        </div>
                      </div>

                      {/* <!-- login --> */}
                      <div
                        className="tab-pane fade"
                        id="v-pills-login"
                        role="tabpanel"
                        aria-labelledby="v-pills-login-tab"
                      >
                        <div className="form-group">
                          <CustomInputText
                            nameInput="Email"
                            label="Email"
                            required={true}
                            errorMessage="Ce champ est obligatoire"
                            placeholder="xxxx@xxx.com"
                            type="email"
                          />
                        </div>
                        <div className="form-group">
                          <CustomInputText
                            nameInput="Password"
                            label="Mot de passe"
                            required={true}
                            errorMessage="Ce champ est obligatoire"
                            placeholder="********"
                            type="password"
                          />
                        </div>
                        <div className="d-flex justify-content-end">
                          <CustomButtonValidate text="Valider" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
