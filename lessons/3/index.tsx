/* eslint-disable react/no-children-prop */
import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Button } from '../2';

// / Имплементируем Имплементируем кнопку из прошлого урока
const TomatoButton = styled(Button)`
  color: tomato; // << добавляя еще стили
  border-color: tomato; // << добавляя еще стили
`;

interface PropTypes {
  children: string;
}

// 2) Компоент для подмены реализации props.children
const ReversedButton: FC<PropTypes> = (props) => (
  <Button {...props} children={props.children.split('').reverse()} />
);

const Container: FC = () => (
  <>
    <h2>Lesson 3</h2>
    <div>
      <p>Обычная кнопка</p>
      <Button>Normal Button</Button>
    </div>

    <div>
      <p>Имплементированный компонент с новыми стилями</p>
      <TomatoButton>Tomato Button</TomatoButton> {/*<button>*/}
    </div>
    
    <div>
      <p>Компоненты с подмененными тегами c `button` на `a` при помощи пропса `as`. <b>Из-за этого изменится вертикальное поведение margin</b></p>
      <Button as="a" href="#">Link with Button styles</Button>{/*<a>*/}
      <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>{/*<a>*/}
    </div>

    <div>
      <p> Компонент с подмененной реализацией `props.children `при помощи пропса `as`</p>
      <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
    </div>
  </>
);

export default Container;
