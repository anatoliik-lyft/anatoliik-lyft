import React from 'react';
import { useTranslations } from 'next-intl';

import logoIcon from '@/icons/logo.svg';

import * as S from './style';
import faceImageSrc from './images/face.png';

export const id = 'contacts';

const socialMediaList = [
  /* eslint-disable prettier/prettier */
  {id: 'github', LogoIcon: require(`./icons/github.svg`), url: 'https://github.com/anatoliy8493'},
  {id: 'linkedin', LogoIcon: require(`./icons/linkedin.svg`), url: 'https://www.linkedin.com/in/anatolii-kurochkin/'},
  {id: 'instagram', LogoIcon: require(`./icons/instagram.svg`), url: 'https://www.instagram.com/anatolii841993/'},
  {id: 'facebook', LogoIcon: require(`./icons/facebook.svg`), url: 'https://www.facebook.com/anatolii841993'},
  /* eslint-enable prettier/prettier */
];

const Contacts = () => {
    const t = useTranslations('Index');

    return (
        <S.Contacts id={id}>
            <S.Container>
                <S.LogoIcon src={logoIcon} alt="Logo" />
                <S.Card>
                    <S.Face src={faceImageSrc.src} />
                    <S.SocialMediaList>
                        {socialMediaList.map(({ id, LogoIcon, url }) => (
                            <S.SocialMedia key={id} href={url} target="_blank">
                                <S.Logo as={LogoIcon} />
                            </S.SocialMedia>
                        ))}
                    </S.SocialMediaList>
                </S.Card>
                <S.Copyright>{t('contacts.copyright')}</S.Copyright>
            </S.Container>
        </S.Contacts>
    );
};

export default Contacts;
