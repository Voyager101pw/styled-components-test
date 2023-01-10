import { FC } from "react";
import styled from "styled-components";

interface PropTypes {
  inputColor? : string;
}

const Input = styled.input<PropTypes>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "red"};
  background: papayawhip;
  border: 2px solid;
  border-color: ${props => props.inputColor || "palevioletred"};
  border-radius: 3px;
`;

const Container:FC = () => (
  <div>
    <h2>Lesson 5</h2>
    <Input defaultValue="green" type="text" />
    <Input defaultValue="green" type="text" inputColor="blue" />
  </div>
)

export default Container;