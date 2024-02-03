import React from 'react';
import Glider from 'glider-js';
import { useTranslations } from 'next-intl';
import { withTheme, useTheme } from 'styled-components';

import * as S from './style';
import faceImgSrc from './images/face.png';

export const id = 'skills';

const cards = [
  /* eslint-disable prettier/prettier */
  {id: 'languages', list: ['HTML', 'CSS', 'JavaScript', 'TypeScript']},
  {id: 'technologies', list: ['React', 'Redux', 'Styled Components', 'Webpack', 'Redux-form', 'React-final-form', 'Lodash', 'Date-fns', 'Axios', 'Storybook', 'Lerna']},
  {id: 'tools', list: ['Jira', 'GitLab', 'GitHub', 'Jenkins', 'Figma', 'Zeplin']},
  /* eslint-enable prettier/prettier */
];

const Skills = () => {
    const theme = useTheme();
    const t = useTranslations('Index');

    React.useEffect(() => {
        new Glider(document.querySelector('#glider-skills') as HTMLElement, {
            draggable: true,
            dots: '#glider-skills-dots',
            slidesToShow: 1.12,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: theme.breakpoint.laptop,
                    settings: {
                        draggable: false,
                        scrollLock: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        itemWidth: 150,
                        duration: 0.25,
                    },
                },
            ],
        });
    }, [theme.breakpoint.laptop]);

    return (
        <S.Skills id={id}>
            <S.Container>
                <S.Title>{t('skills.title')}</S.Title>
                <div className="glider" id="glider-skills">
                    {cards.map(({ id, list }) => (
                        <S.Card key={id}>
                            <S.CardTitle>{t(`skills.${id}`)}</S.CardTitle>
                            {list.map((item) => (
                                <S.Skill key={item}>{item}</S.Skill>
                            ))}
                            {id === 'languages' && <S.Img src={faceImgSrc.src} alt="face" />}
                        </S.Card>
                    ))}
                </div>
                <div id="glider-skills-dots"></div>
            </S.Container>
        </S.Skills>
    );
};

export default withTheme(Skills);
