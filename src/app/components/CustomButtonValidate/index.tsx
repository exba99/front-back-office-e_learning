/**
 *
 * CustomButtonValidate
 *
 */
import React, { memo } from 'react';
import { Button, ButtonProps } from 'react-bootstrap';
import './assets/css/styles.css';

interface Props extends ButtonProps {
  isValid?: boolean;
  className?: string;
  text: string;
  fullWidth?: boolean;
}

export const CustomButtonValidate = memo((props: Props) => {
  const {
    isValid = true,
    className = 'btn btn-md theme-bg text-white',
    text,
    fullWidth = false,
    ...restProps
  } = props;
  return (
    <button
      type="submit"
      className={`${className} ${fullWidth && 'full-width'}`}
      disabled={!isValid}
      {...restProps}
    >
      {text}
    </button>
  );
});
