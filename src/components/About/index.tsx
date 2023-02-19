import React from 'react';
import { useTranslations } from 'next-intl';

import * as S from './style';

const items = ['l1', 'l2', 'l3', 'l4', 'l5'];

const About = () => {
    const t = useTranslations('Index');

    return (
        <S.About>
            <S.Container>
                <S.Title>{t('about.title')}</S.Title>
                <S.List>
                    {items.map((item) => (
                        <S.Item key={item}>{t(`about.${item}`)}</S.Item>
                    ))}
                </S.List>
                <S.Download target="_blank" href="/public/docs/a.kurochkin.cv.pdf">
                    {t('about.download')}
                </S.Download>
            </S.Container>
        </S.About>
    );
};

export default About;
