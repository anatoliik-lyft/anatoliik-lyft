import React from 'react';

import * as S from './style';

interface IOwnProps {
    onClick: () => void;
    open: boolean;
    className?: string;
}

const BurgerButton: React.FC<IOwnProps> = ({ onClick, className, open }) => {
    return (
        <S.Button open={open} onClick={onClick} className={className}>
            <S.Line />
        </S.Button>
    );
};

export default BurgerButton;
