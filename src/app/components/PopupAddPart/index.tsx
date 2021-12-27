/**
 *
 * PopupAddPart
 *
 */
import React, { memo, useState } from 'react';
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import { CustomButtonValidate } from '../CustomButtonValidate';
import { CustomInputText } from '../CustomInputText/Loadable';

interface Props {
  isVisibleModal: boolean;
  handleCancelModal: any;
  handleSubmit: any;
}

export const PopupAddPart = memo((props: Props) => {
  const { isVisibleModal, handleCancelModal, handleSubmit } = props;

  const onFinish = (values: any) => {
    handleSubmit(values);
    handleCancelModal();
  };

  return (
    <Modal
      title="Formulaire d'ajout d'une partie"
      visible={isVisibleModal}
      onCancel={handleCancelModal}
      closeIcon={
        <span aria-hidden="true">
          <i className="fas fa-times-circle"></i>
        </span>
      }
      footer={null}
    >
      <Form layout="vertical" onFinish={onFinish} autoComplete="on">
        <CustomInputText
          nameInput="title"
          label="Ajouter une partie"
          required={true}
          errorMessage="Ce champ est obligatoire"
          placeholder="Nom de la partie..."
        />
        <CustomButtonValidate fullWidth={true} text="Valider" />
      </Form>
    </Modal>
  );
});
