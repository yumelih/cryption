import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    &, &.dark-mode {
     --color-white: #fff;
     --color-black: #070707;
     --color-gray: #bbbbbc;
     --color-gray-light: #cfcfd0;
     --color-purple: #bb26f8;
     --color-blue: #544ef1;
     --color-purple-to-blue: linear-gradient(to right, #bb26f8 35%, #4f50f3);

    }
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
}

body {
    font-family: 'Poppins', sans-serif;
    color: var(--color-gray);
    background: var(--color-black);
    position: relative;
    font-size: 1.6rem;
    min-height: 100vh;
    line-height: 1.5;
}

input,
button,
textarea,
select {
    font: inherit;
    color: inherit;
    font-size: inherit;
}

button {
    cursor: pointer;
}

*:disabled {
    cursor: not-allowed;
}


ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

a {
   all: unset 
}

`;

export default GlobalStyle;
