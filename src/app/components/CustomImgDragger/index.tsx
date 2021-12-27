/**
 *
 * CustomImgDragger
 *
 */
import React, { useState, memo } from 'react';
import { Upload, Progress } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

interface Props {
  label: string;
  initialImage?: any;
  setImageCallback: any;
  accept: string;
}

export const CustomImgDragger = memo((props: Props) => {
  const { label, initialImage = [], setImageCallback, accept } = props;
  const [image, setImage] = useState(initialImage);

  const { Dragger } = Upload;

  const uploadImageProps = {
    headers: {
      'content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
    },
    name: 'file',
    onChange(info) {
      setImage(info?.fileList);
      setImageCallback(info?.fileList[0]);
    },
  };

  return (
    <>
      <label style={{ fontFamily: 'Jost' }}>{label}</label>
      <Dragger fileList={image} {...uploadImageProps} accept={accept}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text" style={{ fontFamily: 'Jost' }}>
          Cliquer ou glisser et deposer sur cette espace pour ajouter votre
          média
        </p>
      </Dragger>
    </>
  );
});
