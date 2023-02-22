import Image from 'next/image';
import styled, { css } from 'styled-components';

import { mixins, TTheme, hexToRgba } from '@/styles';

export type TLogoProps = {
    name: 'lyft' | 'edna' | 'callfromweb' | 'ozon' | 'mailru' | 'onetwotrip' | 'deloitte' | 'ey';
};

const getLogoDimensions = ({ name }: TLogoProps) => {
    switch (name) {
        case 'lyft':
            return css`
                ${mixins.wh('40px')}
                ${mixins.media.laptop`
                    ${mixins.wh('60px', '50px')}
                `}
            `;
        case 'edna':
            return css`
                ${mixins.wh('90px', '28px')};
                ${mixins.media.laptop`
                    ${mixins.wh('100px', '32px')}
                `};
            `;
        case 'callfromweb':
            return css`
                ${mixins.wh('141px', '22px')}
                ${mixins.media.laptop`
                    ${mixins.wh('146px', '24px')}
                `}
            `;
        case 'ozon':
            return css`
                ${mixins.wh('82px', '18px')}
                ${mixins.media.laptop`
                    ${mixins.wh('92px', '20px')}
                `}
            `;
        case 'mailru':
            return css`
                ${mixins.wh('83px', '28px')}
                ${mixins.media.laptop`
                    ${mixins.wh('92px', '32px')}
                `}
            `;
        case 'onetwotrip':
            return css`
                ${mixins.wh('40px')}
                ${mixins.media.laptop`
                    ${mixins.wh('46px')}
                `}
            `;
        case 'deloitte':
            return css`
                ${mixins.wh('182px', '24px')}
                ${mixins.media.laptop`
                    ${mixins.wh('182px', '24px')}
                `}
            `;
        case 'ey':
            return css`
                ${mixins.wh('182px', '40px')}
                ${mixins.media.laptop`
                    ${mixins.wh('113px', '44px')}
                `}
            `;
        default:
            return css`
                ${mixins.wh('40px', '40px')}
            `;
    }
};

export const Experience = styled.section`
    position: relative;
    padding: 40px 0;
    background-color: ${({ theme }: TTheme) => theme.color.lightBlue};

    /* stylelint-disable-next-line selector-pseudo-element-colon-notation */
    :after {
        content: '';
        ${mixins.position({ position: 'absolute', bottom: 0, left: 0, zIndex: 2 })}
        ${mixins.wh('100%', '142px')}
    background-color: ${({ theme }: TTheme) => theme.color.white};
    }

    /* stylelint-disable-next-line selector-pseudo-element-colon-notation */
    :before {
        content: '';
        ${mixins.position({ position: 'absolute', bottom: '-40px', left: 0, zIndex: 1 })}
        ${mixins.wh('100%', '80px')}
        background: radial-gradient(
            50% 50% at 50% 50%,
            ${({ theme }: TTheme) => theme.color.darkAccent} 0%,
            ${({ theme }: TTheme) => hexToRgba(theme.color.darkAccent, 0)} 100%
        );
        opacity: 0.1;
    }

    /* stylelint-disable-next-line order/order */
    ${mixins.media.laptop`
        padding: 56px 0;

        :after {
        height: 168px;
        }
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

export const Grid = styled.div`
    position: relative;
    z-index: 3;
    display: grid;
    grid-gap: 12px;
    grid-template-columns: 1fr;

    ${mixins.media.laptop`
        grid-template-columns: 1fr 1fr 1fr;
    `}
`;

export const Card = styled.div`
    ${mixins.flexAlign('space-between', 'center')}
    flex-direction: column;
    height: 204px;
    padding: 0 8px 20px;
    border: 1px solid ${({ theme }: TTheme) => theme.color.lightBlue};
    border-radius: 2px;
    overflow: hidden;
    text-align: center;
    background-color: ${({ theme }: TTheme) => theme.color.white};
    color: ${({ theme }: TTheme) => theme.color.black};
    box-shadow: 0 2px 15px ${({ theme }: TTheme) => hexToRgba(theme.color.lightGrey, 0.2)};

    ${mixins.media.laptop`
        height: 228px;
    `}
`;

export const FaceCard = styled.div`
    ${mixins.flexAlign('center')}
    flex-direction: column;
    grid-row: 1;

    ${mixins.media.laptop`
        height: 228px;
        grid-row: 1;
        grid-column: 2;
    `}
`;

export const LogoWrapper = styled.div`
    ${mixins.flexAlign('center')}
    height: 68px;

    ${mixins.media.laptop`
        height: 75px;
    `}
`;

export const Logo = styled(Image)<TLogoProps>`
    ${getLogoDimensions}
`;

export const Header = styled.div``;

export const Footer = styled.div``;

export const FaceImg = styled.img`
    ${mixins.wh('116px')}
    margin-bottom: 8px;

    ${mixins.media.laptop`
        ${mixins.wh('210px')}
        margin-bottom: 0;
    `}
`;

export const Description = styled.div`
    ${mixins.h5}
    opacity: 0.7;
    text-transform: uppercase;
    white-space: pre-wrap;
`;

export const Divider = styled.div`
    ${mixins.wh('86.5%', '1px')}
    margin: 0 auto;
    background-color: ${({ theme }: TTheme) => theme.color.lightBlue};
    opacity: 0.5;
`;

export const Position = styled.div`
    ${mixins.font('18px', '20px')}
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const Dates = styled.div`
    ${mixins.h3}
    font-weight: 400;
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 0.1px;
`;
