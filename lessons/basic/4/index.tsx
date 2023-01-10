import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface LinkProps extends React.PropsWithChildren {
  className?: string;
}

// Представим что это компонент Link из `react-router-dom`
const Link: FC<LinkProps> = (props) => (
  <a className={props.className} href="#">{props.children}</a>
);

// styled - метод может также работать на сторонних компонентах
const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const Container: FC = () => (
  <>
    <h2>Lesson 4</h2>
    <p>Компонент Link из библиотеки `react-router-dom`:</p>
    <Link>Unstyled, boring Link</Link>
    <br />
    <br />

    <p>Стилизованный Link из `react-router-dom` при помощи метода styled:</p>
    <StyledLink>Styled, exciting Link</StyledLink>
  </>
);

export default Container;
