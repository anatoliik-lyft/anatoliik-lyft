import styled, { css } from 'styled-components';

import { mixins, TTheme } from '@/styles';

const getTransition = ({ theme }: TTheme) => css`
    transition: opacity ${theme.transition.duration}ms, z-index ${theme.transition.duration}ms;
`;

export const Modal = styled.div`
    ${mixins.position({ position: 'fixed', top: 0, left: 0, zIndex: 4 })}
    ${mixins.wh('100%')}
  background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(6px);
    ${getTransition}
`;
