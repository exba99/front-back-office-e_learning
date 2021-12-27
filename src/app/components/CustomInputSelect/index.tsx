/**
 *
 * CustomInputSelect
 *
 */
import React, { memo } from 'react';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import { Form, Select } from 'antd';
import './css/style.css';

interface Props {
  nameInput: string;
  label: string;
  required: boolean;
  errorMessage?: string;
  placeholder?: string;
  className?: string;
  initialValue?: string;
  readOnly?: boolean;
  children: JSX.Element[] | JSX.Element | string;
}

export const CustomInputSelect = memo((props: Props) => {
  const {
    nameInput,
    label,
    required,
    errorMessage,
    placeholder,
    className = 'form-control',
    initialValue,
    children,
    readOnly = false,
  } = props;

  return (
    <div className="form-group smalls">
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
        <Select
          style={{ height: '42px' }}
          disabled={readOnly}
          className={className}
          placeholder={placeholder}
          filterOption={(input: string, option: any) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
          showSearch
        >
          {children}
        </Select>
      </Form.Item>
    </div>
  );
});
