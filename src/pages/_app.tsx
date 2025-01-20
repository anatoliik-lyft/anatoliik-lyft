import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
    const { locale } = useRouter();
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>Anatolii Kurochkin | Software Engineer | Mentor</title>
                <meta
                    name="description"
                    content="Staff Software Engineer | Frontend Developer | React Developer | JavaScript Developer"
                />
                <meta name="author" content="Anatolii Kurochkin" />

                {/* OG */}
                <meta name="og:type" content="site" />
                <meta name="og:title" content="Anatolii Kurochkin | Front-end developer | Mentor" />
                <meta
                    name="og:description"
                    content="Staff Software Engineer | Frontend Developer | React Developer | JavaScript Developer"
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
                <Component {...pageProps} />
                <Analytics />
                <SpeedInsights />
            </ThemeProvider>
        </>
    );
}
