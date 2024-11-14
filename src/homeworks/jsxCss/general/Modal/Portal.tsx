import React, { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  container: HTMLElement;
  children: () => React.ReactNode;
}

const Portal: FC<PortalProps> = ({ children, container }) => {
  return <>{createPortal(children(), container)}</>;
};

export default Portal;
