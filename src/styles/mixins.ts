import React from 'react';
import { css, CSSObject, SimpleInterpolation, FlattenSimpleInterpolation } from 'styled-components';

import { TTheme } from './theme';
import hexToRgba from './hexToRgba';

type CSSProperties = React.CSSProperties;

const breakpoints = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopM: 1281,
    laptopL: 1440,
    fourK: 2560,
};

type TMedia = Record<
    keyof typeof breakpoints,
    (first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]) => FlattenSimpleInterpolation
>;

export const media = (Object.keys(breakpoints) as (keyof typeof breakpoints)[]).reduce((acc: TMedia, label) => {
    acc[label] = (first, ...interpolations) => css`
        @media (min-width: ${breakpoints[label]}px) {
            ${css(first, ...interpolations)}
        }
    `;

    return acc;
}, {} as TMedia);

export const position = ({
    position: pos,
    top,
    right,
    bottom,
    left,
    zIndex,
}: {
    position: CSSProperties['position'];
    top?: CSSProperties['top'];
    right?: CSSProperties['right'];
    bottom?: CSSProperties['bottom'];
    left?: CSSProperties['left'];
    zIndex?: CSSProperties['zIndex'];
}): SimpleInterpolation => css`
    position: ${pos};
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    z-index: ${zIndex};
`;

export const wh = (width: CSSProperties['width'], height?: CSSProperties['height']): SimpleInterpolation => css`
    width: ${width};
    height: ${height || width};
`;

export const round = (size: CSSProperties['width'] | CSSProperties['height']): SimpleInterpolation => css`
    ${wh(size)}
    overflow: hidden;
    border-radius: 50%;
`;

export const flexAlign = (
    mainAxis: CSSProperties['justifyContent'],
    crossAxis?: CSSProperties['alignItems'],
): SimpleInterpolation => css`
    display: flex;
    justify-content: ${mainAxis};
    align-items: ${crossAxis || mainAxis};
`;

export const font = (
    fontSize?: CSSProperties['fontSize'],
    lineHeight?: CSSProperties['lineHeight'],
    fontWeight?: CSSProperties['fontWeight'],
): SimpleInterpolation => css`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    font-weight: ${fontWeight};
`;

export const h1 = css`
    ${font('30px', '34px', 700)}
    letter-spacing: 1px;

    ${media.laptop`
    ${font('45px', '50px')}
  `}
`;

export const h2 = css`
    ${font('26px', '29px', 700)}
    letter-spacing: 1px;

    ${media.laptop`
    ${font('30px', '34px')}
  `}
`;

export const h3 = css`
    ${font('18px', '20px', 700)}
    letter-spacing: 1px;
`;

export const h4 = css`
    ${font('17px', '24px')}
    letter-spacing: 0.1px;
`;

export const h5 = css`
    ${font('14px', '18px')}
    letter-spacing: 1px;
`;

export const container = css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding-right: 12px;
    padding-left: 12px;

    ${media.laptop`
    padding-right: 40px;
    padding-left: 40px;
  `}
`;

export const glider = css`
    .glider-dots {
        margin-top: 20px;
    }
    .glider-dot {
        margin: 0;
        background-color: ${({ theme }: TTheme) => theme.color.lightBlue};

        /* stylelint-disable-next-line max-nesting-depth */
        :not(:last-child) {
            margin-right: 8px;
        }
    }
    .glider-dot.active {
        background-color: ${({ theme }: TTheme) => theme.color.accent};
        box-shadow: 0 0 10px ${({ theme }: TTheme) => hexToRgba(theme.color.accent, 0.5)};
    }

    /* stylelint-disable-next-line order/order */
    ${media.laptop`
    .glider-dots {
      display: none;
    }
  `}
`;
