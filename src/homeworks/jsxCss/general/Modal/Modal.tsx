import React, { FC } from 'react'
import styled from './Modal.module.sass'
import styledButton from './ModalButton.module.sass'
import cn from "clsx"


interface ModalProps {
    visible: boolean,
    children?: React.ReactNode
    setUnvisible: Function
}

const Modal: FC<ModalProps> = ({visible, setUnvisible, children}) => {

    if (!visible) return null

    return (
        <div className={cn(styled.modal, styled.active)}>
            <div className={styled.modalContent}>
                <div className={styled.mainContent}>
                    {children}
                </div>
                <button 
                    className={styledButton.modalButton}
                    onClick={() => setUnvisible(false)}
                    >Закрыть</button>
            </div>
        </div>
    )
}

export default Modal