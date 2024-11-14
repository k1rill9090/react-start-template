import React, { FC, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import styles from './ToolTip.module.sass'
import { useTheme } from '../../../ThemeSwitcher/ThemeContext/ThemeContext';


interface IChildren {
    ref: React.MutableRefObject<HTMLInputElement>;
    show: () => void;
    hide: () => void;
}

interface ToolTipProps {
    children: (elem: IChildren) => React.ReactNode
    tip: string;
}

const ToolTip: FC<ToolTipProps> = ({children, tip}) => {
    const {theme} = useTheme()
    const triggerRef = useRef(null);
    const tipRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const show = () => setIsOpen(true);
    const hide = () => setIsOpen(false);

    useEffect(() => {
        if (!isOpen || !triggerRef.current || !tipRef.current) return;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tipRect = tipRef.current.getBoundingClientRect();
        const top = triggerRect.y + window.scrollY + triggerRect.height - 58;
        const left = triggerRect.x + window.scrollX + (triggerRect.width - tipRect.width) / 2;

        tipRef.current.style.transform = `translate(${left}px, ${top}px)`;
    }, [isOpen, triggerRef, tipRef])


    return (

    <>
        {children({ref: triggerRef, show, hide})}
        {
            isOpen && createPortal(
                <div ref={tipRef} className={styles[`tip-${theme}`]}>
                        {tip}
                </div>, document.body
            )
        }
    </>
    )
}

export default ToolTip