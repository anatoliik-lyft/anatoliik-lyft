import React from 'react';
import Link from 'next/link';
import { withTheme } from 'styled-components';

import logoIcon from 'src/icons/logo.svg';
import LangSelect from '@/components/LangSelect';

import * as S from './style';

const Header = () => {
    const [barOpened, setBarOpened] = React.useState(false);

    const toggleDrawer = () => setBarOpened(!barOpened);

    return (
        <S.Header>
            <S.Container>
                <S.BurgerButton open={barOpened} onClick={toggleDrawer} />
                <Link href="/">
                    <S.LogoIcon src={logoIcon} alt="Logo" />
                </Link>
                <LangSelect />
            </S.Container>
        </S.Header>
    );
};

export default withTheme(Header);
