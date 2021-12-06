/**
 *
 * ItemMenu
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

interface Props {
  className?: string;
  text: string;
  url?: string;
  withIcon?: boolean;
  withCollapse?: boolean;
}

export const ItemMenu = memo((props: Props) => {
  const { className, text, url, withIcon = true, withCollapse = false } = props;
  return (
    <NavLink exact to={url ? url : '#'} activeClassName="active">
      {withIcon ? (
        withCollapse ? (
          <>
            <i className={className}></i>
            <span className="ti-angle-left"></span>
          </>
        ) : (
          <i className={className}></i>
        )
      ) : null}
      {text}
    </NavLink>
  );
});
