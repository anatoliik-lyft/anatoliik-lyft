import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Sansation';
    src:
      local('Sansation Light'),
      local('Sansation-Light'),
      /* url('/fonts/sensation/Sansation_Light.woff2') format('woff2'), */
      /* url('/fonts/sensation/Sansation_Light.woff') format('woff'), */
      url('/fonts/sensation/Sansation_Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Sansation';
    src:
      local('Sansation Regular'),
      local('Sansation-Regular'),
      /* url('/fonts/sensation/Sansation_Regular.woff2') format('woff2'), */
      /* url('/fonts/sensation/Sansation_Regular.woff') format('woff'), */
      url('/fonts/sensation/Sansation_Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Sansation';
    src:
      local('Sansation Bold'),
      local('Sansation-Bold'),
      /* url('/fonts/sensation/Sansation_Bold.woff2') format('woff2'), */
      /* url('/fonts/sensation/Sansation_Bold.woff') format('woff'), */
      url('/fonts/sensation/Sansation_Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'Sansation', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white}
  }

  * {
    box-sizing: border-box;
  }
`;
