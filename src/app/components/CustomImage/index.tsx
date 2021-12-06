/**
 *
 * CustomImage
 *
 */
import React, { useState, memo } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

interface Props {
  label: string;
  initialImage?: any;
  setImageCallback: any;
}

export const CustomImage = memo((props: Props) => {
  const { label, initialImage = [], setImageCallback } = props;
  const [image, setImage] = useState(initialImage);

  const onChange = ({ fileList: newFileList }) => {
    console.log('image', newFileList);
    setImage(newFileList);
    setImageCallback(newFileList[0]);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <>
      <label>{label}</label>
      <ImgCrop rotate>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={image}
          onChange={onChange}
          onPreview={onPreview}
        >
          {image.length === 0 && 'Choisir un avatar'}
        </Upload>
      </ImgCrop>
    </>
  );
});
