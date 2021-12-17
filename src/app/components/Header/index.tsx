/**
 *
 * Header
 *
 */
import React, { memo, useEffect, useMemo } from 'react';
import styled from 'styled-components/macro';
import Logo from 'app/assets/img/logo.png';
import { ItemMenu } from '../ItemMenu/Loadable';
import { NavLink } from 'react-router-dom';
import history from 'utils/history';
import {
  DashboardApi,
  useLoadInfoUserQuery,
} from 'app/services/api/DashboardApi';
import { rootApi } from 'app/services/api';
import { useSelector } from 'react-redux';

interface Props {}

export const Header = memo((props: Props) => {
  const selectInfoUser = useMemo(
    () => DashboardApi.endpoints.loadInfoUser.select(),
    [],
  );

  const { data: infoUser } = useSelector(selectInfoUser);
  const signOut = () => {
    localStorage.setItem('token', '');
    history.push('/');
  };
  return (
    <div className="header header-light">
      <div className="container">
        <nav id="navigation" className="navigation navigation-landscape">
          <div className="nav-header">
            <NavLink to="/home">
              <div className="nav-brand">
                <img src={Logo} className="logo" alt="" />{' '}
              </div>
            </NavLink>
          </div>
          <div
            className="nav-menus-wrapper"
            style={{ transitionProperty: 'none' }}
          >
            <ul className="nav-menu nav-menu-social align-to-right">
              <li>
                <div className="btn-group account-drop">
                  <a
                    href="javascript:void(0);"
                    className="crs_yuo12 btn btn-order-by-filt"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={
                        infoUser
                          ? infoUser.avatar
                          : 'https://via.placeholder.com/500x500'
                      }
                      className="avater-img"
                      alt="Avatar"
                    />
                  </a>
                  <div className="dropdown-menu pull-right animated flipInX">
                    <div className="drp_menu_headr">
                      <h4>Salut, {infoUser?.lastName}</h4>
                    </div>
                    <ul>
                      <li>
                        <ItemMenu
                          className="fa fa-user-tie"
                          url="/my-profil"
                          text="Mon profil"
                        />
                      </li>

                      <li onClick={signOut}>
                        <ItemMenu
                          className="fa fa-unlock-alt"
                          text="Deconnexion"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
});

const Div = styled.div``;
