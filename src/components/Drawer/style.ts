import Image from 'next/image';
import styled, { css } from 'styled-components';

import { TTheme, mixins } from '@/styles';

import BaseModal from '../Modal';

interface IScrollableProps {
    rounded?: boolean;
}

type TWindowProps = TTheme & {
    anchor: 'top' | 'right' | 'bottom' | 'left';
};

const getWindowLayout = ({ anchor }: TWindowProps) => {
    switch (anchor) {
        case 'bottom':
            return css`
                width: 100vw;
                max-height: 90%;
                border-radius: 8px;
            `;
        case 'left':
            return css`
                height: 100%;
            `;
        case 'right':
            return css``;
        case 'top':
            return css``;
        default:
            return css``;
    }
};

const getWindowStyles = ({ anchor, theme }: TWindowProps) => {
    if (anchor === 'bottom') {
        return css`
            &.appear-enter {
                transform: translateY(100%);
            }
            &.appear-enter-active {
                transform: translateY(0);
                transition: transform ${theme.transition.duration}ms;
            }
            &.appear-exit {
                transform: translateY(0);
            }
            &.appear-exit-active {
                transform: translateY(100%);
                transition: transform ${theme.transition.duration}ms;
            }
        `;
    }
    if (anchor === 'left') {
        return css`
            &.appear-enter {
                transform: translateX(-100%);
            }
            &.appear-enter-active {
                transition: transform ${theme.transition.duration}ms;
            }
            &.appear-exit {
                transform: translateX(0);
            }
            &.appear-exit-active {
                transform: translateX(-100%);
                transition: transform ${theme.transition.duration}ms;
            }
        `;
    }
};

export const Window = styled.div<TWindowProps>`
    position: relative;
    background-color: ${({ theme }) => theme.color.accent};
    ${getWindowLayout}
    ${getWindowStyles}
`;

export const Header = styled.div`
    position: relative;
    padding: 20px;
    color: ${({ theme }) => theme.color.accent};
`;

export const HeaderContent = styled.div`
    position: relative;
    z-index: 1;
`;

export const Title = styled.div`
    ${mixins.h1}
    margin: 0;
    padding-right: 32px;
    color: ${({ theme }) => theme.color.accent};
`;

export const Subtitle = styled.div`
    ${mixins.h2}
    margin: 20px 0 0;
    color: ${({ theme }) => theme.color.accent};
`;

export const CloseIcon = styled(Image)`
    ${mixins.position({ position: 'absolute', right: '20px', top: '28px', zIndex: 2 })}
    ${mixins.wh('16px')}
    cursor: pointer;
`;

export const Scrollable = styled.div<IScrollableProps>`
    flex: auto;
    overflow: auto;
    border-radius: 0 0 ${({ rounded = false }) => (rounded ? '8px 8px' : '0 0')};
`;

export const Content = styled.div`
    padding: 40px 20px 20px;
`;

export const Modal = styled(BaseModal)`
    ${mixins.flexAlign('flex-start', 'flex-end')}

    &.fade-enter {
        opacity: 0;
    }
    &.fade-enter-active {
        opacity: 1;
        transition: opacity ${({ theme }) => theme.transition.duration}ms;
    }
    &.fade-exit {
        opacity: 1;
    }
    &.fade-exit-active {
        opacity: 0;
        transition: opacity ${({ theme }) => theme.transition.duration}ms;
    }
`;
