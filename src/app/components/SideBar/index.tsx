/**
 *
 * SideBar
 *
 */
import React, { memo, useEffect, useMemo } from 'react';
import styled from 'styled-components/macro';
import { ItemMenu } from '../ItemMenu/Loadable';
import { DashboardApi } from 'app/services/api/DashboardApi';
import { useSelector } from 'react-redux';
import { Role } from 'app/type';

interface Props {}

export const SideBar = memo((props: Props) => {
  const selectInfoUser = useMemo(
    () => DashboardApi.endpoints.loadInfoUser.select(),
    [],
  );

  const { data: infoUser } = useSelector(selectInfoUser);

  return (
    <div className="col-lg-3 col-md-3">
      <div className="dashboard-navbar">
        <div className="d-user-avater">
          <img
            src={
              infoUser ? infoUser.avatar : 'https://via.placeholder.com/500x500'
            }
            className="img-fluid avater"
            alt="Avatar"
          />
          <h4>
            {infoUser?.firstName} {infoUser?.lastName}
          </h4>
          <span>{infoUser?.roleName}</span>
        </div>

        <div className="d-navigation">
          <ul id="side-menu">
            <li className="active">
              <a href="dashboard.html">
                <i className="fas fa-th"></i>Dashboard
              </a>
            </li>
            {infoUser?.roleName === Role.ADMIN && (
              <>
                <li>
                  <ItemMenu
                    className="fas fa-shopping-basket"
                    text="Courses"
                    withCollapse={true}
                  />
                  <ul className="nav nav-second-level">
                    <li>
                      <ItemMenu
                        withIcon={false}
                        text="Category management"
                        url="/category-management"
                      />
                    </li>
                    <li>
                      <ItemMenu
                        withIcon={false}
                        text="Level course management"
                        url="/level-course-management"
                      />
                    </li>
                    <li>
                      <ItemMenu
                        withIcon={false}
                        text="Languages management"
                        url="/language-management"
                      />
                    </li>
                  </ul>
                </li>
                <li>
                  <ItemMenu
                    className="fas fa-toolbox"
                    text="User"
                    withCollapse={true}
                  />
                  <ul className="nav nav-second-level">
                    <li>
                      <ItemMenu
                        withIcon={false}
                        text="User management"
                        url="/user-management"
                      />
                    </li>
                    <li>
                      <ItemMenu
                        withIcon={false}
                        text="Add user management"
                        url="/add-user-management"
                      />
                    </li>
                  </ul>
                </li>
              </>
            )}
            {infoUser?.roleName === Role.TEACHER && (
              <>
                <li>
                  <ItemMenu
                    className="fas fa-shopping-basket"
                    text="Courses"
                    withCollapse={true}
                  />
                  <ul className="nav nav-second-level">
                    <li>
                      <ItemMenu
                        withIcon={false}
                        text="Add Course"
                        url="/add-course"
                      />
                    </li>
                    <li>
                      <ItemMenu
                        withIcon={false}
                        text="Course Management"
                        url="/course-management"
                      />
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
});

const Div = styled.div``;
