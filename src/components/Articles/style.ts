import Image from 'next/image';
import styled, { css } from 'styled-components';

import { mixins, TTheme, hexToRgba } from '@/styles';

const getCardStyle = ({ theme }: TTheme) => css`
    border: 1px solid ${theme.color.lightBlue};
    background-color: ${theme.color.white};
    box-shadow: 0 2px 15px ${hexToRgba(theme.color.lightGrey, 0.2)};
`;

export const Articles = styled.section`
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
    margin: 0 0 12px;
    text-align: center;
`;

export const Subtitle = styled.h5`
    ${mixins.h5}
    font-weight: 400;
    margin: 0 0 24px;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }: TTheme) => theme.color.darkGrey};

    ${mixins.media.laptop`
        margin: 0 0 28px;
    `}
`;

export const Card = styled.div`
    ${mixins.flexAlign('space-between', 'center')}
    flex-direction: column;
    height: 158px;
    padding: 40px 0;
    border-radius: 2px;
    overflow: hidden;
    ${getCardStyle};

    :not(:last-child) {
        margin-right: 12px;
    }

    /* stylelint-disable-next-line order/order */
    ${mixins.media.laptop`
        padding: 36px 0 40px;

        :not(:last-child) {
        margin-right: 16px;
        }
    `}
`;

export const CardTitle = styled.h3`
    ${mixins.h3}
    margin: 0 0 24px;
    text-transform: uppercase;
`;

export const CardItem = styled.div`
    ${mixins.h4}
    opacity: 0.7;

    :not(:last-child) {
        margin-bottom: 12px;
    }
`;

export const Logo = styled(Image)`
    width: auto;
    margin-bottom: 24px;
    color: ${({ theme }: TTheme) => theme.color.white};
`;

export const Stories = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr;

    ${mixins.media.laptop`
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 12px;
    `}
`;

export const StoryLogo = styled(Image)`
    display: block;
    width: auto;
    margin: 0 auto 20px;

    ${mixins.media.laptop`
        margin: 0 auto 28px;
    `}
`;

export const SeeMore = styled.div`
    ${mixins.h5}
    border-bottom: 1px ${({ theme }: TTheme) => theme.color.lightGrey} dashed;
    text-transform: uppercase;
    cursor: pointer;
`;

export const Story = styled.a`
    display: block;
    text-decoration: none;
    color: inherit;
`;

type TStoryImgProps = TTheme & {
    imageSrc: string;
};

export const StoryImg = styled.img<TStoryImgProps>`
    ${mixins.wh('100%', '168px')}
    background-image: url(${({ imageSrc }: TStoryImgProps) => imageSrc});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid ${({ theme }: TStoryImgProps) => theme.color.lightBlue};
    box-shadow: 0 2px 15px ${({ theme }: TStoryImgProps) => hexToRgba(theme.color.lightGrey, 0.2)};
    border-radius: 2px;
`;

export const StoryTitle = styled.div`
    ${mixins.h4}
    margin-top: 12px;
    color: ${({ theme }: TTheme) => theme.color.darkAccent};
`;
