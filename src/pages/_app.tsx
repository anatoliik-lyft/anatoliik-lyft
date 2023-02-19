import React from 'react';
import type { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';
import { I18nextProvider } from 'react-i18next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'styled-components';

import i18n from '@/i18n/index';
import theme from '@/styles/theme';
import Header from '@/components/Header';

import GlobalStyle from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={theme}>
                    <Normalize />
                    <GlobalStyle />
                    {/* <Header /> */}
                    <Component {...pageProps} />
                </ThemeProvider>
            </I18nextProvider>
            <Analytics />
        </>
    );
}
