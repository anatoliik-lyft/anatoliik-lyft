import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'styled-components';
import { NextIntlProvider } from 'next-intl';

import theme from '@/styles/theme';
import Header from '@/components/Header';

import GlobalStyle from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
    // TODO: use https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation
    // TODO: use Next.js fonts with Roboto https://nextjs.org/docs/basic-features/font-optimization
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>Anatolii Kurochkin | Front-end developer | Mentor</title>
                <meta
                    name="description"
                    content="Senior Frontend Developer | React Developer | JavaScript Developer | Software Engineer"
                />
                <meta name="author" content="Anatolii Kurochkin" />

                {/* OG */}
                <meta name="og:type" content="site" />
                <meta name="og:title" content="Anatolii Kurochkin | Front-end developer | Mentor" />
                <meta
                    name="og:description"
                    content="Senior Frontend Developer | React Developer | JavaScript Developer | Software Engineer"
                />
                <meta name="og:url" content="https://anatolii.us" />
                <meta name="og:site_name" content="Anatolii Kurochkin" />
                <meta name="og:image:width" content="320" />
                <meta name="og:image:height" content="320" />
                <meta name="og:image:alt" content="Anatolii Kurochkin" />
                <meta name="og:image" content="/images/og.png" />
                {/* OG */}

                {/* LinkedIn */}
                <meta name="image" property="og:image" content="/images/og.png" />
                {/* LinkedIn */}
            </Head>
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
