import Image from 'next/image';
import styled, { css, SimpleInterpolation } from 'styled-components';

import { TTheme, mixins } from '@/styles';

import { INotification } from './types';

interface IRootProps extends TTheme {
    type: INotification['type'];
}

const getRootStyle = ({ type, theme }: IRootProps): SimpleInterpolation => {
    switch (type) {
        case 'error': {
            return css`
                border-bottom-color: ${theme.color.accent};
            `;
        }
        case 'success': {
            return css`
                border-bottom-color: ${theme.color.accent};
            `;
        }
        case 'warning': {
            return css`
                border-bottom-color: ${theme.color.accent};
            `;
        }
        default: {
            return css``;
        }
    }
};

export const Root = styled.div`
    ${mixins.flexAlign('flex-start')}
    position: relative;
    padding: 16px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    background-color: ${({ theme }: IRootProps): string => theme.color.white};
    box-shadow: 0 2px 4px 0 ${({ theme }: IRootProps): string => theme.color.accent};
    ${getRootStyle}
`;

export const Message = styled.div`
    ${mixins.font('14px', '24px')}
    margin-right: 16px;
`;

const icon = css`
    flex-shrink: 0;
    margin-right: 16px;
`;

export const ErrorIcon = styled(Image)`
    ${icon}
    fill: ${({ theme }: TTheme) => theme.color.accent};
`;

export const SuccessIcon = styled(Image)`
    ${icon}
    fill: ${({ theme }: TTheme) => theme.color.accent};
`;

export const DeleteIcon = styled(Image)`
    flex-shrink: 0;
    margin-left: auto;
    cursor: pointer;
`;
