import React from 'react';
import { useTranslations } from 'next-intl';

import logoIcon from '@/icons/logo.svg';

import * as S from './style';
import faceImageSrc from './images/face.png';
import githubIcon from './icons/github.svg';
import linkedinIcon from './icons/linkedin.svg';
import instagramIcon from './icons/instagram.svg';
import facebookIcon from './icons/facebook.svg';

export const id = 'contacts';

const socialMediaList = [
    { id: 'github', src: githubIcon, url: 'https://github.com/anatoliy8493' },
    { id: 'linkedin', src: linkedinIcon, url: 'https://www.linkedin.com/in/anatolii-kurochkin/' },
    { id: 'instagram', src: instagramIcon, url: 'https://www.instagram.com/anatolii841993/' },
    { id: 'facebook', src: facebookIcon, url: 'https://www.facebook.com/anatolii841993' },
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
                        {socialMediaList.map(({ id, src, url }) => (
                            <S.SocialMedia key={id} href={url} target="_blank">
                                <S.Logo src={src} alt="Logo" />
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
