import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

import { mixins, hexToRgba } from '@/styles';

export const BurgerButton = styled.div`
    ${mixins.position({ position: 'relative', zIndex: 2 })}
`;

export const Container = styled.div`
    ${mixins.container}
`;

export const Title = styled.h1`
    ${mixins.h1}
    margin: 64px 0 12px;
    text-transform: uppercase;
    text-align: center;

    ${mixins.media.laptop`
        margin-bottom: 16px;
    `}
`;

export const Subtitle = styled.div`
    ${mixins.h5}
    margin-bottom: 20px;
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) => theme.color.darkGrey};

    ${mixins.media.laptop`
    ${mixins.font('18px', '20px')}
        margin-bottom: 0;
    `}
`;

export const Face = styled.div`
    ${mixins.wh('212px', '232px')}
    position: relative;
    margin: auto;

    &::before {
        ${mixins.wh('212px', '54px')}
        ${mixins.position({
            position: 'absolute',
            left: '50%',
            right: 0,
            bottom: '-14px',
        })}
        content: '';
        display: block;
        margin: auto;
        background: radial-gradient(
            50% 50% at 50% 50%,
            ${({ theme }) => hexToRgba(theme.color.darkGrey, 0.8)} 0%,
            ${({ theme }) => hexToRgba(theme.color.darkGrey, 0.65)} 29.69%,
            ${({ theme }) => hexToRgba(theme.color.darkGrey, 0.21)} 70.83%,
            ${({ theme }) => hexToRgba(theme.color.darkGrey, 0)} 100%
        );
        transform: translate(-50%);
        opacity: 0.15;
    }
    &::after {
        ${mixins.wh('100vw', '127px')}
        ${mixins.position({ position: 'absolute', left: '50%', bottom: '-56px' })}
        content: '';
        display: block;
        background: radial-gradient(
            50% 50% at 50% 50%,
            ${({ theme }) => theme.color.darkAccent} 0%,
            ${({ theme }) => hexToRgba(theme.color.darkAccent, 0)} 100%
        );
        transform: translate(-50%);
        opacity: 0.15;
    }

    ${mixins.media.laptop`
        ${mixins.wh('274px', '300px')}
        margin: 0 auto;

        &::before {
            ${mixins.wh('352px', '54px')}
        }
        &::after {
            ${mixins.wh('692px', '190px')}
            bottom: -60px;
        }
    `}
`;

export const FaceImg = styled(Image)<ImageProps>`
    width: 100%;
    height: 100%;
`;

export const SocialMediaList = styled.div`
    ${mixins.flexAlign('center', 'center')}
    margin: auto auto 0;

    ${mixins.media.laptop`
        margin: 64px auto 0;
    `}
`;

export const SocialMedia = styled.a`
    display: block;
    margin-right: 24px;
    color: ${({ theme }) => theme.color.text};

    &:first-child {
        margin-right: 20px;
    }

    &:last-child {
        margin-right: 0;
    }
`;

export const Copyright = styled.div`
    ${mixins.h5}
    margin: 20px 0 32px 0;
    text-transform: uppercase;
    opacity: 0.7;
    text-align: center;

    ${mixins.media.laptop`
        margin: 24px 0 32px 0;
    `}
`;
