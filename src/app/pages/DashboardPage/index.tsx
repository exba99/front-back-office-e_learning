/**
 *
 * DashboardPage
 *
 */
import React, { useEffect } from 'react';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { memo } from 'react';
import { Route, Switch } from 'react-router';
import { PrivateRoute } from 'app/components/PrivateRoute/Loadable';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { SideBar } from 'app/components/SideBar/Loadable';
import { MyProfilPage } from '../MyProfilPage/Loadable';
import { useDispatch } from 'react-redux';
import { useDashboardSliceSlice } from './slice';
import { useLoadInfoUserMutation } from 'app/services/api/DashboardApi';
import { reloadJs, deleteJs } from 'utils/insertJQuery';
import { CategoryManagement } from '../CategoryManagement/Loadable';
import { LevelCourseManagement } from '../LevelCourseManagement/Loadable';
import { LanguageManagement } from '../LanguageManagement/Loadable';

interface Props {}

export const DashboardPage = memo((props: Props) => {
  const dispatch = useDispatch();
  const { actions } = useDashboardSliceSlice();
  const [loadInfoUser, { data, isSuccess }] = useLoadInfoUserMutation();

  useEffect(() => {
    reloadJs();
  }, []);

  useEffect(() => {
    loadInfoUser(null).unwrap().catch();
  }, []);

  if (isSuccess && data) {
    dispatch(actions.getInfoUser(data));
  }

  return (
    <div id="main-wrapper">
      <Header />
      <div className="clearfix"></div>
      <section className="gray pt-4">
        <div className="container-fluid">
          <div className="row">
            <SideBar />

            <div className="col-lg-9 col-md-9 col-sm-12">
              <Switch>
                <PrivateRoute exact={true} path="/home" component={HomePage} />
                <PrivateRoute
                  exact={false}
                  path="/my-profil"
                  component={MyProfilPage}
                />
                <PrivateRoute
                  exact={false}
                  path="/category-management"
                  component={CategoryManagement}
                />
                <PrivateRoute
                  exact={false}
                  path="/level-course-management"
                  component={LevelCourseManagement}
                />
                <PrivateRoute
                  exact={false}
                  path="/language-management"
                  component={LanguageManagement}
                />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
      <a id="back2Top" className="top-scroll" title="Back to top" href="#">
        <i className="ti-arrow-up"></i>
      </a>
    </div>
  );
});
