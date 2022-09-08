import React, { useEffect, useState } from "react";

import { ModalProps } from "./interface";
import { Base, BackGround, CloseIcon } from "./styles";

export const Modal = ({
  isVisible,
  closeModal,
  children,
  withoutClose,
  ...rest
}: ModalProps) =>
  isVisible ? (
    <Base {...rest}>
      <BackGround {...rest}>
        {!withoutClose && (
          <CloseIcon size={25} onClick={() => closeModal(false)} />
        )}
        {children}
      </BackGround>
    </Base>
  ) : null;
