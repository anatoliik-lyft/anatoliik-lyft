import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

import { TLanguage, ELanguage } from '../../constants';

import * as S from './style';
import RUIcon from './icons/ru.svg';
import ENIcon from './icons/en.svg';
import UAIcon from './icons/ua.svg';
import KZIcon from './icons/kz.svg';
import DEIcon from './icons/de.svg';

type TOwnProps = {
    className?: string;
};

type TProps = TOwnProps & WithTranslation;

const iconMap: Map<TLanguage, React.ComponentType<{}>> = new Map([
    [ELanguage.ru, RUIcon.src],
    [ELanguage.en, ENIcon.src],
    [ELanguage.ua, UAIcon.src],
    [ELanguage.kz, KZIcon.src],
    [ELanguage.de, DEIcon.src],
]);

const langName: Map<TLanguage, string> = new Map([
    [ELanguage.ru, 'Русский'],
    [ELanguage.en, 'English'],
    [ELanguage.ua, 'Українська'],
    [ELanguage.kz, 'Русский'],
    [ELanguage.de, 'Deutsch'],
]);

const languages = Object.keys(ELanguage) as TLanguage[];

const LangSelect: React.FC<TProps> = ({ className, i18n }) => {
    const currenTLanguage = i18n.language as ELanguage;

    return (
        <S.Dropdown
            placementX="right"
            className={className}
            head={<S.Icon as={iconMap.get(currenTLanguage)} />}
            overlay={
                <S.Overlay>
                    {languages
                        // Add rest locales
                        .filter((lang) => lang === 'ru' || lang === 'en')
                        .map((lang) => {
                            if (lang === currenTLanguage) {
                                return null;
                            }
                            return (
                                <S.Option key={lang} onClick={() => i18n.changeLanguage(lang)}>
                                    <S.Icon as={iconMap.get(lang)} />
                                    <S.Text>{langName.get(lang)}</S.Text>
                                </S.Option>
                            );
                        })}
                </S.Overlay>
            }
        />
    );
};

export default withTranslation()(LangSelect);
