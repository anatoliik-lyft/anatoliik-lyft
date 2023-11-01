import styled, { keyframes, css } from 'styled-components';

import { TTheme, mixins, hexToRgba } from '@/styles';

type TSkeletonDoughnutProps = TTheme & {
    size: string;
    cutoutPercentage: number;
};

const blink = keyframes`
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.64;
    }

    100% {
      opacity: 1;
    }
`;

const getSkeletonDoughnutStyle = ({ size, cutoutPercentage, theme }: TSkeletonDoughnutProps) => css`
    ${mixins.round(size)}
    border: solid calc(${size} * ${100 - cutoutPercentage} / 200) ${theme.color.grey};
`;

const getSkeletonDefaultStyle = css`
    border-radius: 4px;
    overflow: hidden;
    background-color: ${({ theme }) => hexToRgba(theme.color.grey, 0.24)};
    animation: ${blink} 1s ease-in-out infinite;
`;

type TSkeletonItemProps = {
    width?: string;
    height?: string;
};

export const SkeletonItem = styled.div<TSkeletonItemProps>`
    ${({ width = '100%', height = '20px' }) => mixins.wh(width, height)}
    ${getSkeletonDefaultStyle}
`;

export const SkeletonDoughnut = styled.div<TSkeletonDoughnutProps>`
    ${getSkeletonDefaultStyle}
    ${getSkeletonDoughnutStyle}
  border-radius: 50%;
    background: none;
`;

type TSkeletonCircleProps = {
    size: string;
};

export const SkeletonCircle = styled.div<TSkeletonCircleProps>`
    ${getSkeletonDefaultStyle}
    ${({ size }) => mixins.round(size)}
`;
