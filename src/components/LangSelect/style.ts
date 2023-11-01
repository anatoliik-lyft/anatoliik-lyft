import Image from 'next/image';
import styled from 'styled-components';

import { mixins } from '@/styles';
import BaseDropdown from 'src/components/Dropdown';

export const Dropdown = styled(BaseDropdown)`
    display: inline-flex;
`;

export const Overlay = styled.div`
    padding: 4px 0;
    overflow: hidden;
    border-radius: 3px;
    background-color: white;
`;

export const Option = styled.div`
    ${mixins.flexAlign('flex-start', 'center')}
    padding: 8px 16px;
    color: ${({ theme }) => theme.color.accent};
    transition: background-color 200ms;

    ${mixins.media.laptop`
        padding: 10px 18px;
    `}

    &:hover {
        cursor: pointer;
    }
`;

export const Text = styled.div`
    ${mixins.h5}
    margin-left: 12px;
    opacity: 0.7;

    ${mixins.media.laptop`
        ${mixins.font('16px', '24px')}
    `}
`;

export const Icon = styled(Image)`
    ${mixins.round('24px')}
    border: 1px solid ${({ theme }) => theme.color.lightGrey};

    ${mixins.media.laptop`
        ${mixins.wh('24px')}
    `}
`;
