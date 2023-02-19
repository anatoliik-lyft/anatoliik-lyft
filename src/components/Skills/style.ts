import styled from 'styled-components';

import { mixins, TTheme, hexToRgba } from '@/styles';

export const Skills = styled.section`
    ${mixins.glider}
    padding: 40px 0;
    background-color: ${({ theme }: TTheme) => theme.color.white};

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

export const Card = styled.div`
    width: 268px;
    padding: 28px 0 50px;
    border: 1px solid ${({ theme }: TTheme) => theme.color.lightBlue};
    text-align: center;
    background-color: ${({ theme }: TTheme) => theme.color.white};
    border-radius: 2px;
    box-shadow: 0 2px 15px ${({ theme }: TTheme) => hexToRgba(theme.color.lightGrey, 0.2)};

    :not(:last-child) {
        margin-right: 12px;
    }

    /* stylelint-disable-next-line order/order */
    ${mixins.media.laptop`
    padding: 36px 0;

    :not(:last-child) {
      margin-right: 16px;
    }
  `}
`;

export const CardTitle = styled.h3`
    ${mixins.h3}
    margin: 0 0 20px;
    text-transform: uppercase;

    ${mixins.media.laptop`
    margin: 0 0 24px;
  `}
`;

export const Skill = styled.div`
    ${mixins.h4}
    opacity: 0.7;

    :not(:last-child) {
        margin-bottom: 12px;
    }
`;

export const Img = styled.img`
    ${mixins.wh('186px')}
    margin-top: 44px;

    ${mixins.media.laptop`
    ${mixins.wh('210px')}
    margin-top: 38px;
  `}
`;
