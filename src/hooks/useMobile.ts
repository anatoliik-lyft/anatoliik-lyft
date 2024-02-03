/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import { isServer } from '@/constants';
import { breakpoints } from '@/styles/mixins';

export const useMobile = () => {
    if (isServer) return;

    const [width, setWidth] = React.useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return width < breakpoints.laptop;
};
/* eslint-enable react-hooks/rules-of-hooks */
