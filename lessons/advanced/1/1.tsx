import { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Цвет рамки и текса будет получен из темы "theme.main" */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

StyledButton.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};

const theme = {
  main: 'mediumseagreen',
};

const Container: FC = () => (
  <>
    <h2>Lesson 1</h2>
    <p>{'Передача темы через <ThemeAdapter main={...}>'}</p>

    <StyledButton>Normal</StyledButton>
    <ThemeProvider theme={theme}>
      <StyledButton>Themed</StyledButton>
    </ThemeProvider>
  </>
);

export default Container;
