import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './Collapse.module.sass';

interface CollapseProps {
  children: React.ReactNode;
}

const Collapse: FC<CollapseProps> = ({ children }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return;
    if (isVisible) return;
    setIsOpen(false);
  };

  useEffect(() => {
    if (wrapper.current) {
      wrapper.current.style.height = `${wrapper.current.scrollHeight}px`;
      setIsVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isVisible) {
      if (wrapper.current) wrapper.current.style.height = `${wrapper.current.scrollHeight}px`;
    } else if (wrapper.current) wrapper.current.style.height = `0px`;
  }, [isVisible]);

  const handleClick = () => {
    if (isOpen) {
      setIsVisible(!isVisible);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>click me</button>
      {isOpen && (
        <div ref={wrapper} className={styles.wrapper} onTransitionEnd={onTransitionEnd}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;
