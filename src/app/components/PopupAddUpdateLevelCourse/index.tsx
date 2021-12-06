/**
 *
 * PopupAddUpdateLevelCourse
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
  levelToUpdate?: any;
}

export const PopupAddUpdateLevelCourse = memo((props: Props) => {
  const {
    isVisibleModal,
    handleCancelModal,
    handleSubmit,
    isAddAction,
    levelToUpdate,
  } = props;

  const onFinish = (values: any) => {
    if (!isAddAction) {
      const newValues = {
        ...values,
        LevelCourseId: levelToUpdate.levelCourseId,
      };
      console.log(newValues);
      handleSubmit(newValues);
    } else {
      handleSubmit(values);
    }
    handleCancelModal();
  };

  return (
    <Modal
      title="Formulaire d'ajout d'un niveau de cours"
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
          label="Niveau cours"
          required={true}
          errorMessage="Ce champ est obligatoire"
          placeholder="Expert..."
          initialValue={isAddAction ? '' : levelToUpdate?.label}
        />
        <CustomButtonValidate fullWidth={true} text="Valider" />
      </Form>
    </Modal>
  );
});
