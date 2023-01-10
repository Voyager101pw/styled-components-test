import { FC } from 'react';
import styled, { css } from 'styled-components';

const Input = styled.input.attrs({ type: 'checkbox' })``;

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;


/*
    && - относится к экземпляру компонента; Полезно, если вы выполняете
    переопределение условного стиля и не хотите, чтобы стиль применялся 
    ко всем экземплярам определенного компонента:
*/

const LabelText = styled.span<{ mode?: string }>`
  ${(props) => {
    switch (props.mode) {
      case 'dark':
        return css`
          background-color: black;
          color: white;
          ${Input}:checked + && {
            color: blue;
          }
        `;
      default:
        return css`
          background-color: white;
          color: black;
          ${Input}:checked + && {
            color: red;
          }
        `;
    }
  }}
`;

const Container: FC = () => (
  <>
    <Label>
      <Input defaultChecked />
      <LabelText>Foo</LabelText>
    </Label>
    <Label>
      <Input />
      <LabelText mode="dark">Foo</LabelText>
    </Label>
    <Label>
      <Input defaultChecked />
      <LabelText>Foo</LabelText>
    </Label>
    <Label>
      <Input defaultChecked />
      <LabelText mode="dark">Foo</LabelText>
    </Label>
  </>
);

export default Container;
