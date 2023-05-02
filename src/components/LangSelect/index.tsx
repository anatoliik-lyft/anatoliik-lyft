import React from 'react';
import { useRouter } from 'next/router';

import * as S from './style';
import enIcon from './icons/en.svg';
import esIcon from './icons/es.svg';
import deIcon from './icons/de.svg';
import ruIcon from './icons/ru.svg';

type TOwnProps = {
    className?: string;
};

type TProps = TOwnProps;

const iconMap = new Map([
    ['en', enIcon],
    ['es', esIcon],
    ['de', deIcon],
    ['ru', ruIcon],
]);

const langName = new Map([
    ['en', 'English'],
    ['es', 'Español'],
    ['de', 'Deutsch'],
    ['ru', 'Русский'],
]);

const languages = [...langName.keys()];

const LangSelect: React.FC<TProps> = ({ className }) => {
    const router = useRouter();

    return (
        <S.Dropdown
            placementX="right"
            className={className}
            head={<S.Icon src={iconMap.get(router.locale as string)} alt="Language" />}
            overlay={
                <S.Overlay>
                    {languages.map((lang) => {
                        if (lang === router.locale) {
                            return null;
                        }
                        return (
                            <S.Option
                                key={lang}
                                onClick={() => {
                                    router.push('/', '/', { locale: lang });
                                }}
                            >
                                <S.Icon src={iconMap.get(lang)} alt="Language" />
                                <S.Text>{langName.get(lang)}</S.Text>
                            </S.Option>
                        );
                    })}
                </S.Overlay>
            }
        />
    );
};

export default LangSelect;
