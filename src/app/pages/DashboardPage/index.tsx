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
import { useLoadInfoUserQuery } from 'app/services/api/DashboardApi';
import { reloadJs, deleteJs } from 'utils/insertJQuery';
import { CategoryManagement } from '../CategoryManagement/Loadable';
import { LevelCourseManagement } from '../LevelCourseManagement/Loadable';
import { LanguageManagement } from '../LanguageManagement/Loadable';
import { UserManagement } from '../UserManagement/Loadable';
import { AddUserManagement } from '../AddUserManagement/Loadable';
import { AddCourseManagement } from '../AddCourseManagement/Loadable';
import { PreviewCourse } from '../PreviewCourse/Loadable';
import { CourseManagement } from '../CourseManagement/Loadable';

interface Props {}

export const DashboardPage = memo((props: Props) => {
  useLoadInfoUserQuery(undefined, { refetchOnMountOrArgChange: true });

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
                <PrivateRoute
                  exact={false}
                  path="/user-management"
                  component={UserManagement}
                />
                <PrivateRoute
                  exact={false}
                  path="/add-user-management"
                  component={AddUserManagement}
                />
                <PrivateRoute
                  exact={false}
                  path="/add-course"
                  component={AddCourseManagement}
                />
                <PrivateRoute
                  exact={false}
                  path="/preview-course"
                  component={PreviewCourse}
                />
                <PrivateRoute
                  exact={false}
                  path="/course-management"
                  component={CourseManagement}
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
