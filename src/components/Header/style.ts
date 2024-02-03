import Image from 'next/image';
import styled, { css } from 'styled-components';

import { mixins, TTheme, hexToRgba } from 'src/styles';
import BaseBurgerButton from 'src/components/BurgerButton';

const getMobileMenuPadding = ({ theme }: TTheme) => {
    return css`
        padding-top: ${theme.dimention.headerHeightMobile}px;

        ${mixins.media.laptop`
          padding-top: ${theme.dimention.headerHeightDesktop}px;
        `}
    `;
};

const getHeaderHeight = ({ theme }: TTheme) => {
    return css`
        height: ${theme.dimention.headerHeightMobile}px;

        ${mixins.media.laptop`
            height: ${theme.dimention.headerHeightDesktop}px;
        `}
    `;
};

const getHeaderPosition = ({ theme }: TTheme) => css`
    ${mixins.position({ position: 'fixed', left: 0, top: 0, zIndex: theme.zIndex.header })}
`;

export const Header = styled.header`
    ${mixins.flexAlign('space-between', 'center')}
    ${getHeaderPosition}
    ${getHeaderHeight}
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};

    &::before {
        ${mixins.position({ position: 'absolute', top: 0, left: 0, zIndex: 1 })}
        ${mixins.wh('100%')}
    content: '';
        background-color: ${({ theme }) => theme.color.white};
    }

    &::after {
        ${mixins.position({ position: 'absolute', top: '28px', left: 0, zIndex: 0 })}
        ${mixins.wh('100%', '44px')}
    content: '';
        background: radial-gradient(
            50% 50% at 50% 50%,
            ${({ theme }) => theme.color.darkAccent} 0%,
            ${({ theme }) => hexToRgba(theme.color.darkAccent, 0)} 100%
        );
        opacity: 0.1;
    }

    ${mixins.media.laptop`
        &::after {
            top: 40px;
            height: 80px;
        }
    `}
`;

export const Container = styled.div`
    ${mixins.position({ position: 'relative', zIndex: 1 })}
    ${mixins.flexAlign('space-between', 'center')}
    ${mixins.container}
`;

export const MobileMenu = styled.div`
    ${mixins.wh('260px', '100%')}
    padding-right: 16px;
    padding-left: 24px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 10px ${({ theme }) => hexToRgba(theme.color.darkGrey, 0.2)};
    ${getMobileMenuPadding}
`;

export const LogoIcon = styled(Image)`
    ${mixins.wh('32px')}
    color: ${({ theme }) => theme.color.darkAccent};

    ${mixins.media.laptop`
    ${mixins.wh('42px')}
  `}
`;

export const BurgerButton = styled(BaseBurgerButton)`
    ${mixins.position({ position: 'relative' })}

    ${mixins.media.laptop`
        display: none;
    `}
`;

export const Navigation = styled.nav`
    display: none;

    ${mixins.media.laptop`
        display: flex;
    `}
`;

export const NavigationItem = styled.a`
    ${mixins.h5}
    display: block;
    padding-top: 16px;
    padding-bottom: 1px;
    color: ${({ theme }) => theme.color.darkGrey};
    text-transform: uppercase;
    text-decoration: none;

    &:not(:last-child) {
        margin: 0 0 8px;
    }

    ${mixins.media.laptop`
        &:not(:last-child) {
            margin: 0 28px 0 0;
        }
    `}
`;
