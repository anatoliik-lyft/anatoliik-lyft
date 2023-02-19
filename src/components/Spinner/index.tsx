import React from 'react';

import * as S from './styles';

interface IProps {
    color?: string;
    className?: string;
    size?: string | number;
}

const Spinner: React.FC<IProps> = ({ className, size = '32px', color = 'currentColor' }) => {
    return (
        <S.Root width={size} height={size} viewBox="0 0 66 66" className={className} xmlns="http://www.w3.org/2000/svg">
            <S.Circle fill="transparent" stroke={color} strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
        </S.Root>
    );
};

export default Spinner;
