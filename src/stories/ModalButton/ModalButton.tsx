import React, { FC, useState } from 'react';
import styles from './ModalButton.module.sass';
import Portal from '../../homeworks/jsxCss/general/Modal/Portal';
import Modal from '../../homeworks/jsxCss/general/Modal/Modal';

const ModalButton: FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState('');

  return (
    <div className={styles.main}>
      <input
        className={styles.modalInput}
        placeholder="type something for modal"
        onChange={(e) => setData(e.target.value)}
      />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
        className={styles.modalButton}
      >
        Open modal
      </button>

      {visible && (
        <Portal container={document.body}>
          {() => (
            <Modal visible={visible} setUnvisible={setVisible}>
              {data}
            </Modal>
          )}
        </Portal>
      )}
    </div>
  );
};

export default ModalButton;
