import React from 'react';
import Glider from 'glider-js';
import { useTranslations } from 'next-intl';

import { Dialog, DialogContent } from '@/components';

import Habr from './Habr';
import * as S from './style';
import Medium from './Medium';
import LeetCode from './LeetCode';
import habrIcon from './icons/habr.svg';
import mediumIcon from './icons/medium.svg';
import leetcodeIcon from './icons/leetcode.svg';
import habrModalIcon from './icons/habr-modal.svg';
import leetcodeModalIcon from './icons/leetcode-modal.svg';

export const id = 'articles';

const cards = [
    { id: 'medium', color: '#000000', bgColor: '#FFFFFF', src: mediumIcon },
    { id: 'leetcode', color: '#ffffff', bgColor: '#3C4859', src: leetcodeIcon },
    { id: 'habr', color: '#ffffff', bgColor: '#333333', src: habrIcon },
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
            ['medium', mediumIcon],
            ['leetcode', leetcodeModalIcon],
            ['habr', habrModalIcon],
        ]);

        return (
            <Dialog onClose={() => setDialogVisible(false)} open={dialogVisible}>
                <DialogContent>
                    <S.StoryLogo src={activeDialog ? logoMap.get(activeDialog) : null} alt="Logo" />
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
                        {cards.map(({ id, bgColor, src, color }) => (
                            <S.Card
                                key={id}
                                onClick={() => {
                                    setDialogVisible(true);
                                    setActiveDialog(id);
                                }}
                                style={{ backgroundColor: bgColor, color }}
                            >
                                <S.Logo src={src} alt="Article logo" />
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
