import React from 'react';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import { mixins } from '@/styles';

const Content = styled.div`
    ${mixins.container}
    ${mixins.flexAlign('center', 'center')}
    ${mixins.font('32px')}
    padding: 32px 0;
`;

const Home = () => {
    return <Content>404</Content>;
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
