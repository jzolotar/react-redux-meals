import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
  font-size: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 0.8125rem;
  line-height: 1.4;
  background-color: #F5EEDC;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

h1,
h2,
h3,
h4 {
  margin: 0;
	padding: 0;
}


a {
  text-decoration: none;
}

p {
  margin: 0;
  padding: 0;
}
img {
display:block;
width:100%;
}
`;

export default GlobalStyles;
