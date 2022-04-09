import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, html {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', 'Roboto', 'Helvetica', sans-serif, Arial;

        background-image: url('/images/walpaper.jpg');
        background-size: cover;
        overflow-x: hidden;

        height: 100vh;
        width: 100vw;
    }

    button {
        all: unset;
        cursor: pointer;
    }
`