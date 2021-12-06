/**
 *
 * SideBar
 *
 */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { useSelector } from 'react-redux';
import { selectInfoUser } from 'app/pages/DashboardPage/slice/selectors';
import { reloadJs, deleteJs } from 'utils/insertJQuery';
import { ItemMenu } from '../ItemMenu/Loadable';

interface Props {}

export const SideBar = memo((props: Props) => {
  const infoUser = useSelector(selectInfoUser);

  useEffect(() => {
    reloadJs();
  }, []);

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
            <li>
              <ItemMenu
                className="fas fa-shopping-basket"
                text="Courses"
                withCollapse={true}
              />
              <ul>
                <li>
                  <ItemMenu
                    withIcon={false}
                    text="Catégorie de cours"
                    url="/category-management"
                  />
                </li>
                <li>
                  <ItemMenu
                    withIcon={false}
                    text="Niveau de cours"
                    url="/level-course-management"
                  />
                </li>
                <li>
                  <ItemMenu
                    withIcon={false}
                    text="Langues des cours"
                    url="/language-management"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

const Div = styled.div``;
