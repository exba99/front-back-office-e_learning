/**
 *
 * CustomInputText
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import { Form } from 'antd';

interface Props {
  nameInput: string;
  label: string;
  required: boolean;
  errorMessage?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

export const CustomInputText = memo((props: Props) => {
  const {
    nameInput,
    label,
    required,
    errorMessage,
    placeholder,
    type = 'text',
    className = 'form-control',
  } = props;

  return (
    <Div>
      <Form.Item
        name={nameInput}
        label={label}
        rules={[
          {
            required: required,
            message: (
              <div
                style={{ marginTop: '4px' }}
                className="d-flex align-items-center"
              >
                <ErrorRoundedIcon
                  style={{
                    color: '#ff0000',
                    fontSize: '16px',
                    marginRight: '4px',
                  }}
                />
                {errorMessage}
              </div>
            ),
          },
        ]}
        className="form-input"
      >
        <input placeholder={placeholder} className={className} type={type} />
      </Form.Item>
    </Div>
  );
});

const Div = styled.div``;
