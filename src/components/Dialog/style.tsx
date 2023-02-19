import styled from 'styled-components';
import Image from 'next/image';

import { mixins, TTheme } from '@/styles';

import BaseModal from '../Modal';

export const Window = styled.div`
    position: relative;
    width: calc(100% - 32px);
    max-width: 864px;
    margin: auto;
    border-radius: 4px;
    background-color: ${({ theme }: TTheme) => theme.color.white};
`;

export const Title = styled.div`
    ${mixins.h1}
    padding: 16px;
    border-bottom: 1px solid ${({ theme }: TTheme) => theme.color.black};
`;

export const Content = styled.div`
    ${mixins.container}
    padding-top: 24px;
    padding-bottom: 24px;
    overflow: auto;

    ${mixins.media.laptop`
    padding-top: 42px;
    padding-bottom: 42px;
  `}
`;

export const Actions = styled.div`
    ${mixins.flexAlign('flex-end', 'center')}
    padding: 16px;
    border-top: 1px solid ${({ theme }: TTheme) => theme.color.lightBlue};
`;

export const CloseIcon = styled(Image)`
    ${mixins.wh('16px')}
    color: ${({ theme }: TTheme) => theme.color.grey};

    ${mixins.media.laptop`
    ${mixins.wh('18px')}
  `}
`;

export const Close = styled.div`
    ${mixins.position({ position: 'absolute', right: 0, top: 0, zIndex: 1 })}
    ${mixins.wh('48px')}
  ${mixins.flexAlign('center')}
  cursor: pointer;

    ${mixins.media.laptop`
    ${mixins.wh('48px')}
    top: 8px;
    right: 26px;
  `}
`;

export const Modal = styled(BaseModal)`
    display: flex;
    justify-content: center;
    padding: 48px 0 80px;
    overflow-y: auto;
    overflow-x: hidden;

    &.fade-enter {
        opacity: 0;
    }
    &.fade-enter-active {
        opacity: 1;
        transition: opacity ${({ theme }: TTheme) => theme.transition.duration}ms;
    }
    &.fade-exit {
        opacity: 1;
    }
    &.fade-exit-active {
        opacity: 0;
        transition: opacity ${({ theme }: TTheme) => theme.transition.duration}ms;
    }
`;
