import { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  // Цвет рамки и текста берется из контекста темы
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

const theme = {
  main: 'mediumseagreen',
};

const Container: FC = () => (
  <>
    <p>{`Передача темы обход <ThemeContext theme={...}> при помощи пропса theme у компонента <Button theme={...}>`}</p>
    <Button theme={{ main: 'royalblue' }}>Ad hoc theme</Button>
    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
      <Button theme={{ main: 'darkorange' }}>Overriden</Button>
    </ThemeProvider>
  </>
);

export default Container;
