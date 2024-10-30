import React, { FC } from 'react';
import styled from './Modal.module.sass';
import styledButton from './ModalButton.module.sass';
import cn from 'clsx';
import { createPortal } from 'react-dom';

interface ModalProps {
  visible: boolean;
  children?: React.ReactNode;
  setUnvisible(state: boolean): void;
}

const Modal: FC<ModalProps> = ({ visible, setUnvisible, children }) => {

  return visible ? createPortal (
    <div className={cn(styled.modal, styled.active)}>
      <div className={styled.modalContent}>
        <div className={styled.mainContent}>{children}</div>
        <button className={styledButton.modalButton} onClick={() => setUnvisible(false)}>
          Закрыть
        </button>
      </div>
    </div>, document.body
  ) : null
};

export default Modal;
