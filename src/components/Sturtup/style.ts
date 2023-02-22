import Image from 'next/image';
import styled from 'styled-components';

import { mixins, TTheme, hexToRgba } from '@/styles';

export const Sturtup = styled.section`
    position: relative;
    padding: 40px 0;
    background-color: ${({ theme }: TTheme) => theme.color.lightBlue};

    /* stylelint-disable-next-line selector-pseudo-element-colon-notation */
    :after {
        content: '';
        ${mixins.position({ position: 'absolute', bottom: 0, left: 0 })}
        ${mixins.wh('100%', '168px')}
        background-color: ${({ theme }: TTheme) => theme.color.white};
    }

    /* stylelint-disable-next-line order/order */
    ${mixins.media.laptop`
      padding: 56px 0;

      :after {
        height: 204px;
      }
    `}
`;

export const Container = styled.div`
    ${mixins.container}
`;

export const Logo = styled(Image)`
    ${mixins.wh('181px', '26px')}

    ${mixins.media.laptop`
    ${mixins.wh('186px', '28px')}
  `}
`;

export const Card = styled.div`
    ${mixins.position({ position: 'relative', zIndex: 1 })}
    padding: 28px 16px;
    border: 1px solid ${({ theme }: TTheme) => theme.color.lightBlue};
    text-align: center;
    background-color: ${({ theme }: TTheme) => theme.color.white};
    border-radius: 2px;
    box-shadow: 0 2px 15px ${({ theme }: TTheme) => hexToRgba(theme.color.lightGrey, 0.2)};

    ${mixins.media.laptop`
      padding: 40px 16px;
    `}
`;

export const Divider = styled.div`
    ${mixins.wh('100%', '1px')}
    margin: 16px auto;
    background: radial-gradient(
        50% 2000000.02% at 50% 49.93%,
        ${({ theme }: TTheme) => theme.color.lightBlue} 0%,
        ${({ theme }: TTheme) => hexToRgba(theme.color.lightBlue, 0)} 100%
    );
    opacity: 0.5;

    ${mixins.media.laptop`
      margin: 24px auto;
    `}
`;

export const Description = styled.div`
    ${mixins.h4}
    margin-bottom: 20px;
    white-space: pre-wrap;
    opacity: 0.7;

    ${mixins.media.laptop`
      margin-bottom: 28px;
    `}
`;

export const Title = styled.h2`
    ${mixins.h2}
    margin: 0 0 24px;
    text-align: center;

    ${mixins.media.laptop`
      margin: 0 0 28px;
    `}
`;

export const Link = styled.a`
    ${mixins.flexAlign('center')}
    ${mixins.wh('100%', '50px')}
    ${mixins.font('14px', '16px', 700)}
    border-radius: 2px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    background-color: ${({ theme }: TTheme) => theme.color.accent};
    color: ${({ theme }: TTheme) => theme.color.white};

    ${mixins.media.laptop`
      width: 248px;
      margin: 0 auto;
    `}
`;
