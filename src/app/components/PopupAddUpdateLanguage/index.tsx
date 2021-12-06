/**
 *
 * PopupAddUpdateLanguage
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
  isAddAction: boolean;
  languageToUpdate?: any;
}

export const PopupAddUpdateLanguage = memo((props: Props) => {
  const {
    isVisibleModal,
    handleCancelModal,
    handleSubmit,
    isAddAction,
    languageToUpdate,
  } = props;

  const onFinish = (values: any) => {
    if (!isAddAction) {
      const newValues = {
        ...values,
        LanguageId: languageToUpdate.languageId,
      };
      handleSubmit(newValues);
    } else {
      handleSubmit(values);
    }
    handleCancelModal();
  };

  return (
    <Modal
      title="Formulaire d'ajout d'une langue"
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
          nameInput="Label"
          label="Langue"
          required={true}
          errorMessage="Ce champ est obligatoire"
          placeholder="Français..."
          initialValue={isAddAction ? '' : languageToUpdate?.label}
        />
        <CustomButtonValidate fullWidth={true} text="Valider" />
      </Form>
    </Modal>
  );
});
