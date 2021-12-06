/**
 *
 * Header
 *
 */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components/macro';
import Logo from 'app/assets/img/logo.png';
import { ItemMenu } from '../ItemMenu/Loadable';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectInfoUser } from 'app/pages/DashboardPage/slice/selectors';
import history from 'utils/history';
import { reloadJs } from 'utils/insertJQuery';

interface Props {}

export const Header = memo((props: Props) => {
  useEffect(() => {
    reloadJs();
  }, []);
  const infoUser = useSelector(selectInfoUser);

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
