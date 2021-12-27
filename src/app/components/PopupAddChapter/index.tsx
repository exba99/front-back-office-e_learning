/**
 *
 * PopupAddChapter
 *
 */
import React, { memo, useState } from 'react';
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import { CustomButtonValidate } from '../CustomButtonValidate';
import { CustomInputText } from '../CustomInputText/Loadable';
import { CustomImgDragger } from 'app/components/CustomImgDragger';

interface Props {
  isVisibleModal: boolean;
  handleCancelModal: any;
  handleSubmit: any;
}

export const PopupAddChapter = memo((props: Props) => {
  const { isVisibleModal, handleCancelModal, handleSubmit } = props;
  const [video, setVideo] = useState(null);

  const onFinish = (values: any) => {
    const chapter = { ...values, VideoFile: video };
    handleSubmit(chapter);
    handleCancelModal();
  };

  const setVideoCallback = file => {
    setVideo(file.originFileObj);
  };

  return (
    <Modal
      title="Ajout d'un chapitre"
      visible={isVisibleModal}
      onCancel={handleCancelModal}
      width={1000}
      closeIcon={
        <span aria-hidden="true">
          <i className="fas fa-times-circle"></i>
        </span>
      }
      footer={null}
    >
      <Form layout="vertical" onFinish={onFinish} autoComplete="on">
        <div className="form-group smalls">
          <CustomInputText
            nameInput="Title"
            label="Titre"
            required={true}
            errorMessage="Ce champ est obligatoire"
            placeholder="Titre du chapitre"
          />
        </div>
        <div className="form-group smalls">
          <CustomImgDragger
            label="Choisir l'image du cours: "
            setImageCallback={setVideoCallback}
            accept=".mp4"
          />
        </div>
        <CustomButtonValidate fullWidth={true} text="Valider" />
      </Form>
    </Modal>
  );
});
