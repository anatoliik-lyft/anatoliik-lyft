import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './style';
import faceImageSrc from './images/face.png';

export const id = 'experience';

const cards = [
  /* eslint-disable prettier/prettier */
  {id: 'lyft', logoIconSrc: require(`./icons/lyft.svg`)},
  {id: 'callfromweb', logoIconSrc: require(`../icons/callfromweb.svg`)},
  {id: 'face'},
  {id: 'edna', logoIconSrc: require(`./icons/edna.svg`)},
  {id: 'ozon', logoIconSrc: require(`./icons/ozon.svg`)},
  {id: 'mailru', logoIconSrc: require(`./icons/mailru.svg`)},
  {id: 'onetwotrip', logoIconSrc: require(`./icons/onetwotrip.svg`)},
  {id: 'deloitte', logoIconSrc: require(`./icons/deloitte.svg`)},
  {id: 'ey', logoIconSrc: require(`./icons/ey.svg`)},
  /* eslint-enable prettier/prettier */
];

const Experience = () => {
    const { t } = useTranslation('Home');

    return (
        <S.Experience id={id}>
            <S.Container>
                <S.Title>{t('workExperience.title')}</S.Title>
                <S.Grid>
                    {cards.map(({ id, logoIconSrc }) =>
                        id === 'face' ? (
                            <S.FaceCard key={id}>
                                <S.FaceImg src={faceImageSrc.src}></S.FaceImg>
                            </S.FaceCard>
                        ) : (
                            <S.Card key={id}>
                                <S.Header>
                                    <S.LogoWrapper>
                                        <S.Logo name={id} as={logoIconSrc} />
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
