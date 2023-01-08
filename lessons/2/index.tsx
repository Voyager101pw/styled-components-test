import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button`
  // Цвет зависит от наличия пропса "primary"
  background: ${(props: ButtonProps): string =>
    props.primary ? 'palevioletred' : 'white'};
  color: ${(props: ButtonProps) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Container: FC = () => (
  <div>
    <h2>Lesson 2</h2>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);

export default Container;
