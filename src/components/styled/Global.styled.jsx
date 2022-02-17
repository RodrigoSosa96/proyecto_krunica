import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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