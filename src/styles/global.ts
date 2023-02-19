import { createGlobalStyle } from 'styled-components';

import { TTheme } from './theme';

export default createGlobalStyle`
    ${require('glider-js/glider.min.css').default}

    body {
      font-family: 'Sansation', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: ${({ theme }: TTheme) => theme.color.black};
      background-color: ${({ theme }: TTheme) => theme.color.white}
    }

    * {
      box-sizing: border-box;
    }
`;
