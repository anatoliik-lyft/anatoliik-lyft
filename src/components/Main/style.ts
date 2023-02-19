import Image from 'next/image';
import styled from 'styled-components';

import { mixins, TTheme, hexToRgba } from '@/styles';

export const BurgerButton = styled.div`
    ${mixins.position({ position: 'relative', zIndex: 2 })}
`;

export const Main = styled.main`
    padding: 40px 0 56px;
    overflow: hidden;

    ${mixins.media.laptop`
        padding: 56px 0 75px;
    `}
`;

export const Container = styled.div`
    ${mixins.container}
`;

export const Title = styled.h1`
    ${mixins.h1}
    margin: 0 0 12px;
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
    color: ${({ theme }: TTheme) => theme.color.darkGrey};

    ${mixins.media.laptop`
    ${mixins.font('18px', '20px')}
    margin-bottom: 0;
  `}
`;

export const Face = styled.div`
    ${mixins.wh('212px', '232px')}
    position: relative;
    margin: 0 auto;

    ::before {
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
            ${({ theme }: TTheme) => hexToRgba(theme.color.darkGrey, 0.8)} 0%,
            ${({ theme }: TTheme) => hexToRgba(theme.color.darkGrey, 0.65)} 29.69%,
            ${({ theme }: TTheme) => hexToRgba(theme.color.darkGrey, 0.21)} 70.83%,
            ${({ theme }: TTheme) => hexToRgba(theme.color.darkGrey, 0)} 100%
        );
        transform: translate(-50%);
        opacity: 0.15;
    }
    ::after {
        ${mixins.wh('100vw', '127px')}
        ${mixins.position({ position: 'absolute', left: '50%', bottom: '-56px' })}
        content: '';
        display: block;
        background: radial-gradient(
            50% 50% at 50% 50%,
            ${({ theme }: TTheme) => theme.color.darkAccent} 0%,
            ${({ theme }: TTheme) => hexToRgba(theme.color.darkAccent, 0)} 100%
        );
        transform: translate(-50%);
        opacity: 0.15;
    }

    /* stylelint-disable-next-line order/order */
    ${mixins.media.laptop`
    ${mixins.wh('274px', '300px')}

    ::before {
        ${mixins.wh('352px', '54px')}
    }
    ::after {
        ${mixins.wh('692px', '190px')}
        bottom: -60px;
    }
  `}
`;

export const FaceImg = styled(Image)`
    ${mixins.position({ position: 'relative', zIndex: 1 })}
    width: 100%;
    height: 100%;
`;
