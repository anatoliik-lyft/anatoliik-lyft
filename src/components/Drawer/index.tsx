import React from 'react';
import { StyledComponent, ThemeContext } from 'styled-components';
import CSSTransition from 'react-transition-group/CSSTransition';

import { TTheme } from '@/styles';
import closeIcon from '@/icons/close.svg';

import * as S from './style';

export interface IOwnProps {
    open: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    withoutCloseButton?: boolean;
    component?: StyledComponent<any, any, any>;
    anchor?: 'top' | 'right' | 'bottom' | 'left';
}

const Drawer: React.FC<IOwnProps> = ({
    open,
    onClose,
    children,
    anchor = 'bottom',
    withoutCloseButton = false,
    component: WindowComponent = S.Window,
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

    const theme: TTheme['theme'] = React.useContext(ThemeContext);

    return (
        <CSSTransition appear in={open} unmountOnExit classNames="fade" timeout={theme.transition.duration}>
            <S.Modal onClose={onClose}>
                <CSSTransition enter in={open} unmountOnExit classNames="appear" timeout={theme.transition.duration}>
                    <WindowComponent
                        role="button"
                        anchor={anchor}
                        onMouseDown={(e: React.SyntheticEvent) => e.stopPropagation()}
                    >
                        {renderCloseButton()}
                        {children}
                    </WindowComponent>
                </CSSTransition>
            </S.Modal>
        </CSSTransition>
    );
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
