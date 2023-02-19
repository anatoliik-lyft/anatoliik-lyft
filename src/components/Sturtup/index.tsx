import React from 'react';
import { useTranslations } from 'next-intl';

import * as S from './style';

export const id = 'startup';

const Sturtup = () => {
    const t = useTranslations('Index');

    return (
        <S.Sturtup id={id}>
            <S.Container>
                <S.Title>{t('sturtup.title')}</S.Title>
                <S.Card>
                    <S.Logo as={require(`../icons/callfromweb.svg`)} />
                    <S.Divider />
                    <S.Description>{t('sturtup.description')}</S.Description>
                    <S.Link target="_blank" href="https://www.callfromweb.net/en-us/">
                        {t('sturtup.button')}
                    </S.Link>
                </S.Card>
            </S.Container>
        </S.Sturtup>
    );
};

export default Sturtup;
