import React from 'react';

import * as S from './style';
import faceImage from './images/face.png';
import resumeIcon from './icons/resume.svg';
import githubIcon from './icons/github.svg';
import linkedinIcon from './icons/linkedin.svg';
import instagramIcon from './icons/instagram.svg';
import facebookIcon from './icons/facebook.svg';

const socialMediaList = [
    { id: 'resume', src: resumeIcon, url: '/docs/anatolii-kurochkin-resume.pdf' },
    { id: 'github', src: githubIcon, url: 'https://github.com/anatoliik-lyft' },
    { id: 'linkedin', src: linkedinIcon, url: 'https://www.linkedin.com/in/anatoliisf' },
    { id: 'instagram', src: instagramIcon, url: 'https://www.instagram.com/anatoliisf' },
    { id: 'facebook', src: facebookIcon, url: 'https://www.facebook.com/anatoliisf' },
];

const Main = () => {
    return (
        <S.Container>
            <S.Title>Anatolii Kurochkin</S.Title>
            <S.Subtitle>Software Engineer</S.Subtitle>
            <S.Face>
                <S.FaceImg priority src={faceImage} alt="Avatar" />
            </S.Face>
            <S.SocialMediaList>
                {socialMediaList.map(({ id, src, url }) => (
                    <S.SocialMedia key={id} href={url} target="_blank">
                        <S.Logo src={src} alt="Logo" />
                    </S.SocialMedia>
                ))}
            </S.SocialMediaList>
            <S.Copyright>Created with ❤️</S.Copyright>
        </S.Container>
    );
};

export default Main;
