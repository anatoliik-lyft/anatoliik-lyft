import styled, { css } from 'styled-components';

import { mixins, TTheme } from 'src/styles';

const getMainHeight = ({ theme }: TTheme) => {
    return css`
        padding-top: ${theme.dimention.headerHeightMobile}px;

        ${mixins.media.laptop`
            padding-top: ${theme.dimention.headerHeightDesktop}px;
        `}
    `;
};

export const Main = styled.main`
    ${getMainHeight}
`;
