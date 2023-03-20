import {createGlobalStyle} from 'styled-components';
import UbuntuReg from './fonts/Ubuntu-Regular.ttf';
import UbuntuMed from './fonts/Ubuntu-Medium.ttf';
import UbuntuMBold from './fonts/Ubuntu-Bold.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  src: url(${UbuntuReg}) format('truetype');
}
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  src: url(${UbuntuMed}) format('truetype');
}
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  src: url(${UbuntuMBold}) format('truetype');
}
body{
  font-style: normal;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
   font-weight: 400;
 }
*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
h1,
h2,
h3,
h4,
h5,
h6,
li,
ul,
ol {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  outline: none;
  border: none;
  &::first-letter {
    text-transform: uppercase;
  }
}
input,
button,
textarea,
select {
  font: inherit;
}
img {
  max-width: 100%;
  display: block;
}
::-webkit-scrollbar {
  width: 0;
}
`;
export default GlobalStyle;
