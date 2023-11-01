import React from 'react';

import * as S from '../style';
import { MEDIUM_ARTICLES } from '@/constants';

const Medium: React.FC = () => {
    return (
        <S.Stories>
            {MEDIUM_ARTICLES.map(({ link, title, thumbnail }, index) => (
                <S.Story href={link} target="_blank" key={index}>
                    <S.StoryImg $imageSrc={thumbnail} />
                    <S.StoryTitle>{title}</S.StoryTitle>
                </S.Story>
            ))}
        </S.Stories>
    );
};

export default Medium;
