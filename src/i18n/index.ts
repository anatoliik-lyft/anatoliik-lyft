import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { ELanguage, TLanguage } from 'src/constants';

const fallbackLng = ELanguage.en;
// const storagELanguage = localStorage.getItem('a-tech-language') as TLanguage;
const initialLang = fallbackLng;

i18n.use(initReactI18next).init({
    lng: initialLang,
    fallbackLng,
    interpolation: {
        escapeValue: false,
    },
    cleanCode: true,
    lowerCaseLng: true,
    resources: {
        [ELanguage.ru]: {
            Home: require('./ru').default,
            // Header: require('./components/Header/i18n/ru').default,
        },
        [ELanguage.en]: {
            Home: require('./en').default,
            // Header: require('./components/Header/i18n/en').default,
        },
        [ELanguage.ua]: {
            Home: require('./ua').default,
            // Header: require('./components/Header/i18n/ua').default,
        },
        [ELanguage.kz]: {
            Home: require('./kz').default,
            // Header: require('./components/Header/i18n/kz').default,
        },
        [ELanguage.de]: {
            Home: require('./de').default,
            // Header: require('./components/Header/i18n/de').default,
        },
    },
});

// i18n.on('languageChanged', (lang) => {
//     window.localStorage.setItem('a-tech-language', lang);
//     window.document.documentElement.setAttribute('lang', lang);
// });

i18n.changeLanguage(initialLang);

export default i18n;
