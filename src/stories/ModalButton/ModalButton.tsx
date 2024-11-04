import React, { FC, useState } from 'react';
import styles from './ModalButton.module.sass';
import ModalContent from '../../homeworks/jsxCss/general/Modal/ModalContent';

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
      <ModalContent visible={visible} setUnvisible={setVisible}>
        {data}
      </ModalContent>
    </div>
  );
};

export default ModalButton;
