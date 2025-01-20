import React from 'react';
import styled from 'styled-components';

import { mixins } from '@/styles';

const Content = styled.div`
    ${mixins.container}
    ${mixins.flexAlign('center', 'center')}
    ${mixins.font('32px')}
    padding: 32px 0;
`;

const Page404 = () => {
    return <Content>404</Content>;
};

export default Page404;
