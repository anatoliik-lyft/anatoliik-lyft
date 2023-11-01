import React from 'react';
import { useTranslations } from 'next-intl';

import * as S from './style';
import faceImage from './images/face.png';

const Main = () => {
    const t = useTranslations('Index');

    return (
        <S.Main>
            <S.Container>
                <S.Title>{t('main.title')}</S.Title>
                <S.Subtitle>{t('main.subtitle')}</S.Subtitle>
                <S.Face>
                    <S.FaceImg priority src={faceImage} alt="Avatar" />
                </S.Face>
            </S.Container>
        </S.Main>
    );
};

export default Main;
