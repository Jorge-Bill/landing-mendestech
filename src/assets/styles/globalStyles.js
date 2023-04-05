import { createGlobalStyle, keyframes } from 'styled-components'

export const DegradeAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`
export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  */
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    height: 100%;
    -ms-overflow-style: scrollbar;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.normal};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    background-color: ${({ theme }) => theme.colors.offwhite};
    height: 100%;
  }



  #app, #root { /* stylelint-disable-line */
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`
