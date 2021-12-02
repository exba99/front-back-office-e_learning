/**
 *
 * LoginPage
 *
 */
import React, { memo } from 'react';
import { Form } from 'antd';
import { CustomInputText } from 'app/components/CustomInputText/Loadable';
import { CustomButtonValidate } from 'app/components/CustomButtonValidate/Loadable';
import { useLoginMutation } from 'app/services/api/AuthApi';
import { LoginModel } from 'app/services/api/AuthApi/types';

interface Props {}

export const LoginPage = memo((props: Props) => {
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const onFinish = (values: any) => {
    const paylod: LoginModel = values;
    login(paylod).unwrap();
  };
  //console.log(error!.message);

  return (
    <div id="main-wrapper">
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-12 col-sm-12">
              <Form
                layout="vertical"
                onFinish={onFinish}
                // onFinishFailed={() => alert('Non OK')}
                autoComplete="on"
              >
                <div className="crs_log_wrap">
                  <div className="crs_log__caption">
                    <div className="rcs_log_124">
                      <div className="Lpo09">
                        <h4>Connexion</h4>
                      </div>
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
                      <div className="form-group">
                        <CustomButtonValidate text="Login" />
                      </div>
                    </div>
                    {/* {isError && error && (
                      <span className="alert alert-danger">
                        {error}
                      </span>
                    )} */}
                  </div>
                  <div className="crs_log__footer d-flex justify-content-between">
                    <div className="fhg_45">
                      <p className="musrt">
                        <a href="#" className="text-danger">
                          Mot de passe oublié?
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
