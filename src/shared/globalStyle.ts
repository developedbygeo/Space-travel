import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints';

import variableBackground from './appBackgroundImg';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
    @media ${devices.mobileSS}{
      font-size: 27%;
    }
    @media ${devices.mobileS}{
      font-size: 35%;
    }
    @media ${devices.mobileM}{
      font-size: 40%;
    }
    @media ${devices.mobileL}{
      font-size: 50%;
    }
    @media ${devices.tablet}{
      font-size: 60%;
    }
    @media ${devices.laptopL}{
      font-size: 65.5%;
    }
    @media ${devices.desktop}{
      font-size: 70%;
    }
    @media ${devices.landscapeMobileSS}{
      font-size: 22%;
    }
    @media ${devices.landscapeMobileS}{
      font-size: 30%;
    }
    @media ${devices.landscapeMobileL}{
      font-size: 45%;
    }
    @media ${devices.desktop4K}{
      font-size: 110%;
    }
}
body{
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;
    font-family: 'Barlow', sans-serif;
}
header{
    height: 10vh;
    width: 100%;
}
main{
    position: relative;
    height: 95vh;
    width: 100vw;
    margin: auto;
    background: transparent;

}
#root{
  background: ${({ theme }) => theme.colors.mainBg};
  ${variableBackground};
}

h1 {
  font-size: 3.2rem;
  letter-spacing: 0.175rem;
}
h2 {
  font-size: 2.8rem;
  letter-spacing: 0.15rem;
}
h3 {
  font-size: 2.4rem;
  letter-spacing: 0.125rem;
}

h1, h2, h3, h4, h5{
  font-family: 'Bellefair', serif;
}
p,
button,
select,
input,
textarea,
label,
div,
li,
a {
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
}
button{
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
