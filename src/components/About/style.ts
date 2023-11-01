import styled, { css } from 'styled-components';

import { mixins, TTheme, hexToRgba } from '@/styles';

export const About = styled.section`
    padding: 40px 0;
    background-color: ${({ theme }) => theme.color.lightBlue};
    overflow: hidden;

    ${mixins.media.laptop`
        padding: 56px 0;
    `}
`;

export const Container = styled.div`
    ${mixins.container}
`;

export const Title = styled.h2`
    ${mixins.h2}
    margin: 0 0 20px;
    text-align: center;

    ${mixins.media.laptop`
        margin: 0 0 28px;
    `}
`;

export const List = styled.ul`
    margin: 0 0 20px;
    padding: 28px 20px;
    list-style: none;
    border: 1px solid ${({ theme }) => hexToRgba(theme.color.accent, 0.3)};

    ${mixins.media.laptop`
        margin: 0 0 28px;
        padding: 40px;
    `}
`;

export const Item = styled.li`
    ${mixins.h4}
    opacity: 0.7;

    &:not(:last-child) {
        margin-bottom: 12px;
    }

    ${mixins.media.laptop`
        &:not(:last-child) {
            margin-bottom: 16px;
        }
    `}
`;

export const Download = styled.a`
    ${mixins.flexAlign('center')}
    ${mixins.wh('100%', '50px')}
    ${mixins.font('14px', '16px', 700)}
    border-radius: 2px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    background-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.white};

    ${mixins.media.laptop`
        width: 248px;
        margin: 0 auto;
    `}
`;
