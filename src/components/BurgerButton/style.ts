import styled, { css } from 'styled-components';

import { mixins, TTheme } from '@/styles';

type TProps = TTheme & {
    open: boolean;
};

const lineStyle = css`
    ${mixins.wh('100%', '2px')}
    border-radius: 1px;
    background-color: ${({ theme }: TTheme) => theme.color.lightGrey};
    transition: opacity ${({ theme }: TTheme) => theme.transition.duration}ms ease-in-out,
        transform ${({ theme }: TTheme) => theme.transition.duration}ms ease-in-out;
`;

export const Line = styled.div`
    ${lineStyle}
    opacity: 1;
`;

const getOpenStyle = ({ open }: TProps) => {
    if (open) {
        return css`
            ${Line} {
                opacity: 0;
            }

            &::before {
                transform: translate(0, 8px) rotate(45deg);
            }

            &::after {
                transform: translate(0, -8px) rotate(-45deg);
            }
        `;
    }
    return css``;
};

export const Button = styled.div<TProps>`
    ${mixins.flexAlign('space-between', 'center')}
    ${mixins.wh('24px', '18px')}
    flex-direction: column;
    cursor: pointer;

    ::before,
    ::after {
        ${lineStyle}
        position: relative;
        content: '';
    }

    /* stylelint-disable-next-line order/order */
    ${getOpenStyle}
`;
