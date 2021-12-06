/**
 *
 * PopupAddUpdateCategory
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
  catToUpdate?: any;
}

export const PopupAddUpdateCategory = memo((props: Props) => {
  const {
    isVisibleModal,
    handleCancelModal,
    handleSubmit,
    isAddAction,
    catToUpdate,
  } = props;

  const onFinish = (values: any) => {
    if (!isAddAction) {
      console.log('cat', catToUpdate);
      const newValues = { ...values, CategoryId: catToUpdate.categoryId };
      console.log(newValues);
      handleSubmit(newValues);
    } else {
      handleSubmit(values);
    }
    handleCancelModal();
  };

  return (
    <Modal
      title="Formulaire d'ajout d'une catégorie"
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
          label="Label catégorie"
          required={true}
          errorMessage="Ce champ est obligatoire"
          placeholder="Web development..."
          initialValue={isAddAction ? '' : catToUpdate?.label}
        />
        <CustomButtonValidate fullWidth={true} text="Valider" />
      </Form>
    </Modal>
  );
});
