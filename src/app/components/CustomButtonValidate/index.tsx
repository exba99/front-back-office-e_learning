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
}

export const CustomButtonValidate = memo((props: Props) => {
  const {
    isValid = true,
    className = 'btn full-width btn-md theme-bg text-white',
    text,
  } = props;
  return (
    <button type="submit" className={className} disabled={!isValid}>
      {text}
    </button>
  );
});
