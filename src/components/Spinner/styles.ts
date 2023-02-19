import styled, { keyframes } from 'styled-components';

import { mixins } from '@/styles';

const OFFSET = 187;
const DURATION = '1.4s';

const rotator = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(270deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dashoffset: ${OFFSET};
  }

  50% {
    stroke-dashoffset: ${OFFSET / 4};
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: ${OFFSET};
    transform: rotate(450deg);
  }
`;

export const Root = styled.svg`
    fill: none;
    vertical-align: middle;
    animation: ${rotator} ${DURATION} linear infinite;
`;

export const Circle = styled.circle`
    stroke-dasharray: ${OFFSET};
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: ${dash} ${DURATION} ease-in-out infinite;
`;

export const SpinnerGifImg = styled.img`
    ${mixins.wh('64px')}
`;
