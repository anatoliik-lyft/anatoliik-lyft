import React from 'react';

import * as S from './style';
import { TProps } from './types';

const Switch: React.FC<TProps> = ({
    label,
    className,
    name,
    content,
    disabled,
    onChange,
    checked,
    onFocus,
    onBlur,
}) => (
    <S.Switch>
        <S.Input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
        />
        {label && <S.Text>{label}</S.Text>}
        <S.Content role="button" checked={checked} content={content} disabled={disabled} className={className}>
            {content}
        </S.Content>
    </S.Switch>
);

export default Switch;
