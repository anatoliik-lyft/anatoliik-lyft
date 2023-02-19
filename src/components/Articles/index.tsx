import React from 'react';
import Glider from 'glider-js';
import { useTranslations } from 'next-intl';

import { Dialog, DialogContent } from '@/components';

import Habr from './Habr';
import * as S from './style';
import Medium from './Medium';
import LeetCode from './LeetCode';

export const id = 'articles';

const cards = [
  /* eslint-disable prettier/prettier */
  {id: 'medium',  color: '#000000', bgColor: '#FFFFFF', logoIconSrc: require(`./icons/medium.svg`)},
  {id: 'leetcode',  color: '#ffffff', bgColor: '#3C4859', logoIconSrc: require(`./icons/leetcode.svg`)},
  {id: 'habr',  color: '#ffffff', bgColor: '#333333', logoIconSrc: require(`./icons/habr.svg`)},
  /* eslint-enable prettier/prettier */
];

const Articles = () => {
    const [activeDialog, setActiveDialog] = React.useState<string | null>(null);
    const [dialogVisible, setDialogVisible] = React.useState<boolean>(false);
    const t = useTranslations('Index');

    React.useEffect(() => {
        new Glider(document.querySelector('#glider-articles') as HTMLElement, {
            draggable: true,
            dots: '#glider-articles-dots',
            slidesToShow: 1.12,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
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
    }, []);

    const renderActiveDialog = () => {
        /* eslint-disable react/jsx-key */
        const siteMap = new Map([
            ['medium', <Medium />],
            ['habr', <Habr />],
            ['leetcode', <LeetCode />],
        ]);
        /* eslint-enable react/jsx-key */
        const logoMap = new Map([
            ['medium', require(`./icons/medium.svg`)],
            ['habr', require(`./icons/habr.svg`)],
            ['leetcode', require(`./icons/leetcode.svg`)],
        ]);

        return (
            <Dialog onClose={() => setDialogVisible(false)} open={dialogVisible}>
                <DialogContent>
                    <S.StoryLogo as={activeDialog ? logoMap.get(activeDialog) : null} />
                    {activeDialog ? siteMap.get(activeDialog) : null}
                </DialogContent>
            </Dialog>
        );
    };

    return (
        <>
            <S.Articles id={id}>
                <S.Container>
                    <S.Title>{t('articles.title')}</S.Title>
                    <S.Subtitle>{t('articles.subtitle')}</S.Subtitle>
                    <div className="glider" id="glider-articles">
                        {cards.map(({ id, bgColor, logoIconSrc, color }) => (
                            <S.Card
                                key={id}
                                onClick={() => {
                                    setDialogVisible(true);
                                    setActiveDialog(id);
                                }}
                                style={{ backgroundColor: bgColor, color }}
                            >
                                <S.Logo as={logoIconSrc} />
                                <S.SeeMore>{t('articles.seeMore')}</S.SeeMore>
                            </S.Card>
                        ))}
                    </div>
                    <div id="glider-articles-dots"></div>
                </S.Container>
            </S.Articles>
            {renderActiveDialog()}
        </>
    );
};

export default Articles;
