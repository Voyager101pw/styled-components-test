import React, { FC, useRef } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Component: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h2>Lesson 2</h2>
      <p>{`Стилизованный компоненты поддреживают пропс ref.  <Input ref={inputRef}>`}</p>
      <p>При наведении на инпут: inputRef.current.focus()</p>
      <Input
        ref={inputRef}
        placeholder="Hover to focus!"
        onMouseEnter={() => {
          inputRef?.current?.focus();
        }}
      ></Input>
    </>
  );
};

export default Component;
