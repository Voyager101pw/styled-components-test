import { FC } from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "2em",
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

const PasswordInput = styled(Input).attrs({
  // text -> password
  type: "password", // переопределяем type из Input выше

  // Это будет унаследовано из Input выше 
  // size: props.size || "2em",
})`
  // переопределяем стиль рамки
  border: 2px solid aqua;
`;

const Container: FC = () => (
  <div>
    <p>Переопределение стиля и  `.attrs` другого компонента</p>
    <Input placeholder="A bigger text input" size="2em" />
    <br />
    {/* мы все еще можем использовать атрибут size из Input. */}
    <PasswordInput placeholder="A bigger password input" size="2em" />
  </div>
);

export default Container;