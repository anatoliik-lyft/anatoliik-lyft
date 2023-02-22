import React from 'react';
import { useTranslations } from 'next-intl';

import * as S from './style';
import faceImageSrc from './images/face.png';
import lyftIcon from './icons/lyft.svg';
import callfromwebIcon from '../icons/callfromweb.svg';
import ednaIcon from './icons/edna.svg';
import ozonIcon from './icons/ozon.svg';
import mailruIcon from './icons/mailru.svg';
import onetwotripIcon from './icons/onetwotrip.svg';
import deloitteIcon from './icons/deloitte.svg';
import eyIcon from './icons/ey.svg';

export const id = 'experience';

const cards: Array<{ id: S.TLogoProps['name'] | 'face'; src: string }> = [
    { id: 'lyft', src: lyftIcon },
    { id: 'callfromweb', src: callfromwebIcon },
    { id: 'face', src: '' },
    { id: 'edna', src: ednaIcon },
    { id: 'ozon', src: ozonIcon },
    { id: 'mailru', src: mailruIcon },
    { id: 'onetwotrip', src: onetwotripIcon },
    { id: 'deloitte', src: deloitteIcon },
    { id: 'ey', src: eyIcon },
];

const Experience = () => {
    const t = useTranslations('Index');

    return (
        <S.Experience id={id}>
            <S.Container>
                <S.Title>{t('workExperience.title')}</S.Title>
                <S.Grid>
                    {cards.map(({ id, src }) =>
                        id === 'face' ? (
                            <S.FaceCard key={id}>
                                <S.FaceImg src={faceImageSrc.src}></S.FaceImg>
                            </S.FaceCard>
                        ) : (
                            <S.Card key={id}>
                                <S.Header>
                                    <S.LogoWrapper>
                                        <S.Logo name={id} src={src} alt="Company logo" />
                                    </S.LogoWrapper>
                                    <S.Description>{t(`workExperience.${id}Description`)}</S.Description>
                                </S.Header>
                                <S.Divider />
                                <S.Footer>
                                    <S.Position>{t(`workExperience.${id}Position`)}</S.Position>
                                    <S.Dates>{t(`workExperience.${id}Dates`)}</S.Dates>
                                </S.Footer>
                            </S.Card>
                        ),
                    )}
                </S.Grid>
            </S.Container>
        </S.Experience>
    );
};

export default Experience;
