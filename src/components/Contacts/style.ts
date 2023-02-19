import Image from 'next/image';
import styled from 'styled-components';

import { mixins, TTheme } from '@/styles';

export const Contacts = styled.section`
    padding: 40px 0 20px;
    background-color: ${({ theme }: TTheme) => theme.color.lightBlue};

    ${mixins.media.laptop`
    padding: 40px 0 26px;
  `}
`;

export const Container = styled.div`
    ${mixins.container}
`;

export const LogoIcon = styled(Image)`
    ${mixins.wh('32px')}
    display: block;
    margin: 0 auto 16px;
    color: ${({ theme }: TTheme) => theme.color.darkAccent};

    ${mixins.media.laptop`
    ${mixins.wh('42px')}
    margin: 0 auto 20px;
  `}
`;

export const Card = styled.div`
    padding: 28px 16px;
    border: 1px solid ${({ theme }: TTheme) => theme.color.accent};
    text-align: center;
    border-radius: 2px;
`;

export const Face = styled.img`
    ${mixins.wh('186px')}
    margin-bottom: 20px;

    ${mixins.media.laptop`
    ${mixins.wh('210px')}
  `}
`;

export const Copyright = styled.div`
    ${mixins.h5}
    margin-top: 20px;
    text-transform: uppercase;
    opacity: 0.7;
    text-align: center;

    ${mixins.media.laptop`
    margin-top: 24px;
  `}
`;

export const SocialMediaList = styled.div`
    ${mixins.flexAlign('space-between', 'center')}
    width: 186px;
    margin: 0 auto;
`;

export const Logo = styled.div`
    ${mixins.wh('24px')}

    ${mixins.media.laptop`
    ${mixins.wh('32px')}
  `}
`;

export const SocialMedia = styled.a``;
