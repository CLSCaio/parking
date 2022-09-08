import React, { useEffect, useState } from "react";

import { ModalProps } from "./interface";
import { Base, BackGround, CloseIcon } from "./styles";

export const Modal = ({
  isVisible,
  closeModal,
  children,
  withoutClose,
  ...rest
}: ModalProps) => {
  const onCancel = () => {
    window.location.href = "/";
    closeModal(false);
  };

  return isVisible ? (
    <Base {...rest}>
      <BackGround {...rest}>
        {!withoutClose && (
          <CloseIcon
            style={{ cursor: "pointer" }}
            size={25}
            onClick={() => onCancel()}
          />
        )}
        {children}
      </BackGround>
    </Base>
  ) : null;
};
