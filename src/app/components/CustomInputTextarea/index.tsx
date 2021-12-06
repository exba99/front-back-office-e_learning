/**
 *
 * CustomInputTextarea
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
  placeholder?: string;
  className?: string;
  initialValue?: string;
  readOnly?: boolean;
}

export const CustomInputTextarea = memo((props: Props) => {
  const {
    nameInput,
    label,
    required,
    errorMessage,
    placeholder,
    className = 'form-control',
    initialValue,
    readOnly = false,
  } = props;

  return (
    <Div>
      <Form.Item
        name={nameInput}
        label={label}
        initialValue={initialValue}
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
        <textarea
          placeholder={placeholder}
          readOnly={readOnly}
          className={className}
        ></textarea>
      </Form.Item>
    </Div>
  );
});

const Div = styled.div``;
