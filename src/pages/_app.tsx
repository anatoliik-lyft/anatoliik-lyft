import React from 'react';
import type { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'styled-components';
import { NextIntlProvider } from 'next-intl';

import theme from '@/styles/theme';
import Header from '@/components/Header';

import GlobalStyle from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Normalize />
                <GlobalStyle />
                <NextIntlProvider
                    formats={{
                        dateTime: {
                            short: {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            },
                        },
                    }}
                    messages={pageProps.i18n}
                    now={new Date(pageProps.now)}
                    timeZone="America/Los_Angeles"
                >
                    <Header />
                    <Component {...pageProps} />
                </NextIntlProvider>
            </ThemeProvider>
            <Analytics />
        </>
    );
}
