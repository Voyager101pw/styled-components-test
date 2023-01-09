import { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

/*
    && - имеет особое поведение - «повышение приоритета»; 
    Полезно, если вы имеете дело со смешанной средой стилевых
    компонентов и ванильным CSS, где могут быть конфликтующие стили: 
*/


const Thing = styled.div`
  && {
    color: blue;
  }
`;

const GlobalStyle = createGlobalStyle`
   ${Thing} {
     color: red;
   }
 `;

const Container: FC = () => (
  <>
    <GlobalStyle />
    <Thing>I`m blue, da ba dee da ba daa</Thing>
  </>
);

export default Container;