import React from 'react';
import ReactDom from 'react-dom';

import * as S from './style';

export const MODAL_ID = 'modal';

if (typeof window !== 'undefined') {
    const modalRoot: Element = window.document.createElement('div');
    modalRoot.id = MODAL_ID;
    window.document.body.appendChild(modalRoot);
}

interface IOwnProps {
    className?: string;
    children: React.ReactNode;
    onClose?: (e: React.SyntheticEvent) => void;
}

const Modal: React.FC<IOwnProps> = (props) => {
    const { onClose = () => {}, children, className } = props;

    // return ReactDom.createPortal(
    return (
        <S.Modal role="button" onMouseDown={onClose} className={className}>
            {children}
        </S.Modal>
    );
    // modalRoot,
    // );
};

export default Modal;
