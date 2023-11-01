import React from 'react';

import * as S from '../style';
import { HABR_ARTICLES } from '@/constants';

const Habr: React.FC = () => {
    return (
        <S.Stories>
            {HABR_ARTICLES.map(({ link, title, thumbnail }) => (
                <S.Story key={title} href={link} target="_blank">
                    <S.StoryImg $imageSrc={thumbnail} />
                    <S.StoryTitle>{title}</S.StoryTitle>
                </S.Story>
            ))}
        </S.Stories>
    );
};

export default Habr;
