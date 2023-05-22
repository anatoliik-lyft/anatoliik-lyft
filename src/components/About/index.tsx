import React from 'react';
import { useTranslations } from 'next-intl';

import * as S from './style';

const getYoE = () => {
    const diffSec = (new Date().getTime() - new Date(2016, 8, 8).getTime()) / 1000;
    const diffDays = diffSec / (60 * 60 * 24);

    return Math.abs(Math.round(diffDays / 365.25));
};

const About = () => {
    const t = useTranslations('Index');

    return (
        <S.About>
            <S.Container>
                <S.Title>{t('about.title')}</S.Title>
                <S.List>
                    <S.Item key="l1">{t('about.l1', { yoe: getYoE() })}</S.Item>
                    <S.Item key="l2">{t('about.l2')}</S.Item>
                    <S.Item key="l3">{t('about.l3')}</S.Item>
                    <S.Item key="l4">{t('about.l4')}</S.Item>
                    <S.Item key="l5">{t('about.l5')}</S.Item>
                </S.List>
                <S.Download target="_blank" href="/docs/a.kurochkin.cv.pdf">
                    {t('about.download')}
                </S.Download>
            </S.Container>
        </S.About>
    );
};

export default About;
