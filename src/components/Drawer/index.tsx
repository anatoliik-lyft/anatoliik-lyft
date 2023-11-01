import React from 'react';
import { IStyledComponent } from 'styled-components';

import closeIcon from '@/icons/close.svg';

import * as S from './style';

export interface IOwnProps {
    open: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    withoutCloseButton?: boolean;
    component?: IStyledComponent<any, any>;
    anchor?: 'top' | 'right' | 'bottom' | 'left';
}

const Drawer: React.FC<IOwnProps> = ({
    open,
    onClose,
    children,
    anchor = 'bottom',
    withoutCloseButton = false,
    component: WindowComponent = S.Window as any,
}) => {
    React.useEffect(() => {
        if (open) {
            const originalStyle = window.getComputedStyle(document.body).overflow;
            document.documentElement.style.overflow = 'hidden';

            return () => {
                document.documentElement.style.overflow = originalStyle;
            };
        }
        return () => {};
    }, [open]);

    const renderCloseButton = (): React.ReactNode =>
        withoutCloseButton ? null : <S.CloseIcon src={closeIcon} alt="Close" onClick={onClose} />;

    return open ? (
        <S.Modal onClose={onClose}>
            <WindowComponent
                role="button"
                anchor={anchor}
                onMouseDown={(e: React.SyntheticEvent) => e.stopPropagation()}
            >
                {renderCloseButton()}
                {children}
            </WindowComponent>
        </S.Modal>
    ) : null;
};

interface IHeaderProps {
    children: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ children }) => (
    <S.Header>
        <S.HeaderContent>{children}</S.HeaderContent>
    </S.Header>
);

export default Drawer;
export const Window = S.Window;
export const DrawerHeader = Header;
export const DrawerHeaderTitle = S.Title;
export const DrawerHeaderSubtitle = S.Subtitle;
export const DrawerContent = S.Content;
export const DrawerScrollable = S.Scrollable;
