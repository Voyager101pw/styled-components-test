import { FC } from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  // Определяем статическое свойство
  type: 'text',

  // Определяем динамическое свойство
  size: props.size || '1em',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  // Получаем доступ только что созданным пропсам 
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const Container: FC = () => (
  <div>
  <h2>Lesson 7</h2>
  <p>Использование `.attrs`</p>
    <Input placeholder="A small text input" />
    <br />
    <Input placeholder="A bigger text input" size="2em" />
  </div>
);

export default Container;