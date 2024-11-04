import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';

const container = document.body;

interface ModalContentProps {
  visible: boolean;
  setUnvisible(state: boolean): void;
  children: React.ReactNode;
}

const ModalContent: FC<ModalContentProps> = ({ children, visible, setUnvisible }) => {
  return visible
    ? createPortal(
        <Modal visible={visible} setUnvisible={setUnvisible}>
          {children}
        </Modal>,
        container
      )
    : null;
};

export default ModalContent;
