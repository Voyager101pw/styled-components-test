import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const anim = keyframes`
  from {
    transform: translateX(0px) scale(1);
  }

  to {
    transform: translateX(240px) scale(5);
  }
`;

const Wrapper = styled.div`
  // убираем второй вертикальный скролл который появился от анимации
  overflow-y: hidden;
`

const Rotate = styled.div`
  display: inline-block;
  animation: ${anim} 5s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const Container: FC = () => (
  <>
    <h2>Lesson 8</h2>
    <Wrapper>
      <Rotate>&lt; 🩼 &gt;</Rotate>
    </Wrapper>
  </>
);

export default Container;
