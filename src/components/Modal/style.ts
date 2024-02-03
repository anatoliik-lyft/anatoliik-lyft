import styled, { css } from 'styled-components';

import { mixins, TTheme } from '@/styles';

const getTransition = ({ theme }: TTheme) => css`
    transition:
        opacity ${theme.transition.duration}ms,
        z-index ${theme.transition.duration}ms;
`;

const getPosition = ({ theme }: TTheme) => css`
    ${mixins.position({ position: 'fixed', top: 0, left: 0, zIndex: theme.zIndex.modal })}
`;

export const Modal = styled.div`
    ${getPosition}
    ${mixins.wh('100%')}
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(6px);
    ${getTransition}
`;
