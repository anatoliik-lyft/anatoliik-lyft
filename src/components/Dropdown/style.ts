import styled from 'styled-components';

import { TTheme } from '@/styles';
import hexToRgba from 'src/styles/hexToRgba';

export const Root = styled.div`
    position: relative;
    display: inline-flex;
    outline: none;
`;

export const Overlay = styled.div`
    position: absolute;
    z-index: 1;
    border-radius: 4px;
    box-shadow: 1px 1px 9px ${({ theme }: TTheme) => hexToRgba(theme.color.black, 0.12)};

    &.appear-bottom-enter {
        transform: translateY(10px);
        opacity: 0;
    }
    &.appear-bottom-enter-active {
        transform: translateY(0);
        opacity: 1;
        transition: all ${({ theme }: TTheme) => theme.transition.duration}ms;
    }
    &.appear-bottom-exit {
        transform: translateY(0);
        opacity: 1;
    }
    &.appear-bottom-exit-active {
        transform: translateY(10px);
        opacity: 0;
        transition: all ${({ theme }: TTheme) => theme.transition.duration}ms;
    }
`;

export const Head = styled.div`
    display: inline-flex;
    cursor: pointer;
`;
