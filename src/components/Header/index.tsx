import React from 'react';
import { useTranslations } from 'next-intl';
import { withTheme, useTheme } from 'styled-components';

import Drawer from '@/components/Drawer';
import logoIcon from 'src/icons/logo.svg';
import LangSelect from '@/components/LangSelect';
import { useMobile } from '@/hooks/useMobile';

import * as S from './style';
import { id as skillsId } from '../Skills';
import { id as articlesId } from '../Articles';
import { id as contactsId } from '../Contacts';
import { id as experienceId } from '../Experience';

const NAVIGATION_LIST = [skillsId, experienceId, articlesId, contactsId];

const Header = () => {
    const theme = useTheme();
    const isMobile = useMobile();
    const t = useTranslations('Components');
    const [barOpened, setBarOpened] = React.useState(false);

    const toggleDrawer = () => setBarOpened(!barOpened);
    const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setBarOpened(false);

        const href = e.currentTarget.getAttribute('href');

        if (!href) return;

        const anchorNode: HTMLAnchorElement | null = window.document.querySelector(href);

        scroll({
            top: anchorNode
                ? anchorNode.offsetTop -
                  (isMobile ? theme.dimention.headerHeightMobile : theme.dimention.headerHeightDesktop)
                : 0,
            behavior: 'smooth',
        });
    };

    return (
        <S.Header>
            <S.Container>
                <Drawer open={barOpened} anchor="left" withoutCloseButton onClose={toggleDrawer}>
                    <S.MobileMenu>
                        {NAVIGATION_LIST.map((item) => (
                            <S.NavigationItem onClick={handleClick} href={`#${item}`} key={item}>
                                {t(`header.${item}`)}
                            </S.NavigationItem>
                        ))}
                    </S.MobileMenu>
                </Drawer>
                <S.BurgerButton open={barOpened} onClick={toggleDrawer} />
                <S.LogoIcon src={logoIcon} alt="Logo" />
                <S.Navigation>
                    {NAVIGATION_LIST.map((item) => (
                        <S.NavigationItem onClick={handleClick} href={`#${item}`} key={item}>
                            {t(`header.${item}`)}
                        </S.NavigationItem>
                    ))}
                </S.Navigation>
                <LangSelect />
            </S.Container>
        </S.Header>
    );
};

export default withTheme(Header);
