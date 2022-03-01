import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        /**
        *  #99d9d9 //primary
        *  #99D3D5 // dimmed primary
        *  #00AFAA // strong primary hover
        *  #edc2b3 //secondary
        *  #ffffff // background
        *  #000000 //text, logos
        *  #898a8d // lines
        *  #6C6C6C // gray images
        */
        --color-background: #ffffff;
        --color-primary: #99d9d9;
        --color-secondary: #edc2b3;
        --color-text: #000000;
        --color-lines: #898a8d;
        --color-gray: #6C6C6C;
        --color-gray-light: #f5f5f5;

        --font-title: 'Montserrat', sans-serif;
        --font-menu: 'Raleway', sans-serif;
        --font-amiko: 'Amiko', sans-serif;
        --font-bitter: 'Bitter', serif;
        --font-inter: 'Inter', sans-serif;
        --font-helvetica: 'Helvetica', sans-serif;

        --font-size-title: 2.25rem;
        --font-size-secondary-title: 1.5rem;
        --font-size-main-text: 1rem;
        --font-size-paragraph: 1.125rem;
        --font-size-background-text-big: 1.875rem;
        --font-size-background-text-small: 1.25rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: auto;

        list-style: none;
        text-decoration: none;
    }
    *::after,*::before {
        box-sizing: border-box;
    }

    html {
        // font-family: 'Roboto', sans-serif;
    }
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        font-family: 'Raleway', sans-serif;
    }
    li {
        list-style: none;
    }


    a, a:link, a:visited {
        text-decoration: none;
        color: "#000000";
    }

`