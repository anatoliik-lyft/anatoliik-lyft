import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { StyledComponent, ThemeContext } from 'styled-components';

import { TTheme } from '@/styles';
import closeIcon from '@/icons/close.svg';

import * as S from './style';

export interface IOwnProps {
    open?: boolean;
    children: React.ReactNode;
    withoutCloseButton?: boolean;
    component?: StyledComponent<any, any, any>;
    onClose?: (e: React.SyntheticEvent) => void;
}

const Dialog: React.FC<IOwnProps> = ({
    onClose,
    children,
    open = true,
    withoutCloseButton = false,
    component: WindowComponent = S.Window,
}) => {
    React.useLayoutEffect(() => {
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
        withoutCloseButton ? null : (
            <S.Close onClick={onClose}>
                <S.CloseIcon src={closeIcon} alt="Close" />
            </S.Close>
        );

    const theme: TTheme['theme'] = React.useContext(ThemeContext);

    return (
        <CSSTransition appear in={open} unmountOnExit classNames="fade" timeout={theme.transition.duration}>
            <S.Modal onClose={onClose}>
                <WindowComponent role="button" onMouseDown={(e: React.SyntheticEvent) => e.stopPropagation()}>
                    {renderCloseButton()}
                    {children}
                </WindowComponent>
            </S.Modal>
        </CSSTransition>
    );
};

export default Dialog;
export const DialogWindow = S.Window;
export const DialogTitle = S.Title;
export const DialogContent = S.Content;
export const DialogActions = S.Actions;
