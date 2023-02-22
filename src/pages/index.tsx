import React from 'react';
import { GetStaticProps } from 'next';

import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Sturtup from '../components/Sturtup';
import Articles from '../components/Articles';
import Contacts from '../components/Contacts';
import Experience from '../components/Experience';

const Home = () => {
    return (
        <>
            <Main />
            <About />
            <Skills />
            <Experience />
            <Articles />
            <Sturtup />
            <Contacts />
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            i18n: {
                ...require(`../i18n/${locale}.json`),
            },
            now: new Date().getTime(),
        },
    };
};
