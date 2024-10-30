import React, { FC, useState } from 'react';
import Modal from '../../homeworks/jsxCss/general/Modal/Modal';
import styles from './ModalButton.module.sass';

const ModalButton: FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState('');

  return (
    <div className={styles.main}>
      <input className={styles.modalInput} placeholder="type something for modal" onChange={(e) => setData(e.target.value)} />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
        className={styles.modalButton}
      >
        Open modal
      </button>
      <Modal visible={visible} setUnvisible={setVisible}>
        {data}
      </Modal>
    </div>
  );
};

export default ModalButton;
