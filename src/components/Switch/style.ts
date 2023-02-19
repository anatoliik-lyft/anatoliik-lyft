import styled, { css } from 'styled-components';

import { mixins, TTheme } from '@/styles';

import { TProps } from './types';

type ISCProps = TTheme & TProps;

const getContentPadding = ({ content, checked }: ISCProps) => {
    if (content) {
        return checked ? '0 24px 0 8px' : '0 8px 0 24px';
    }

    return '';
};

const getContentAfterStyle = ({ checked, theme: { color } }: ISCProps) => {
    if (checked) {
        return css`
            ${mixins.position({ position: 'absolute', top: '50%', left: '100%' })}
            margin-left: -2px;
            transform: translate(-100%, -50%);
            background-color: ${color.darkAccent};
        `;
    }
    return css`
        ${mixins.position({ position: 'absolute', top: '50%', left: 0 })}
        transform: translate(2px, -50%);
        background-color: ${color.accent};
    `;
};

const getContentStyle = ({ checked, theme: { color, transition } }: ISCProps) => css`
    border: 2px solid ${color.accent};
    background-color: ${checked ? color.accent : 'transparent'};
    transition: all ${transition.duration}ms linear;

    &::after {
        content: '';
        ${mixins.round('16px')}
        transition: all ${transition.duration}ms linear;
        ${getContentAfterStyle}
    }
`;

export const Content = styled.div<ISCProps>`
    ${mixins.wh('44px', '24px')}
    font-size: 12px;
    position: relative;
    flex-shrink: 0;
    padding: ${getContentPadding};
    border-radius: 12px;
    user-select: none;
    ${getContentStyle}
`;

export const Switch = styled.label`
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;
`;

export const Text = styled.div`
    margin-top: 2px;
`;
