/**
 *
 * CustomInputSummernote
 *
 */
import React, { memo, useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/fr';
import './css/style.css';

interface Props {
  label: string;
  placeholder?: string;
  initialValue?: string;
  readOnly?: boolean;
  data: string;
  handleChange: any;
}

export const CustomInputSummernote = memo((props: Props) => {
  const {
    label,
    placeholder,
    initialValue,
    readOnly = false,
    handleChange,
    data,
  } = props;

  useEffect(() => {
    if (initialValue) {
      handleChange(initialValue);
    }
  }, []);

  return (
    <>
      <label>{label}</label>
      <CKEditor
        disabled={readOnly}
        data={data}
        editor={ClassicEditor}
        config={{ placeholder: placeholder, language: 'fr' }}
        onChange={(event, editor) => handleChange(editor.getData())}
      />
    </>
  );
});
