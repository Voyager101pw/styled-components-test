## Theme (Тема)
https://styled-components.com/docs/advanced#theming

Styled-components имеет поддержку тем при помощи компонента обертки **`<ThemeProvider theme={...}>`**.
```tsx
import styled, { ThemeProvider } from "styled-components";

const theme = {
  main: 'blue'
};

const Container: FC = () => (
  <ThemeProvider theme={theme}>
    {* Внутри все элементы смогут получить в пропсах theme.main *}
  </ThemeProvider>
);

export default Container;
```
Все стилизованный компоненты помещенные в этот компонент обертку будут иметь доступ к теме.

Пример будет приведен на двух кнопках, где одна находится вне `<ThemeProvider>`, а другая внутри этого провайдера.

## Получение theme без syled-components
https://styled-components.com/docs/advanced#getting-the-theme-without-styled-components

Используя HOC-компонент `withTheme` можно получать текущую тему находясь вне стилизованного компонента (например, внутри больших компонентов)
```tsx
import { withTheme } from 'styled-components'

class MyComponent extends React.Component {
  render() {
    console.log('Current theme: ', this.props.theme)
    // ...
  }
}

export default withTheme(MyComponent)
```

## Использование theme при помощи Reack hook
https://styled-components.com/docs/advanced#via-usecontext-react-hook

Вы также можете использоватьиспользованиеконтекстадля доступа к текущей теме за пределами стилизованных компонентов при работе с React Hooks.

```tsx
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const MyComponent = () => {
  const themeContext = useContext(ThemeContext)

  console.log('Current theme: ', themeContext)
  // ...
}
```

## Хука useTheme
https://styled-components.com/docs/advanced#via-usetheme-custom-hook

Для получения состояния темы за пределами стилизованного компонента нужно использовать хук **`useTheme`**
```tsx
import { useTheme } from 'styled-components'

const MyComponent = () => {
  const theme = useTheme()

  console.log('Current theme: ', theme)
  // ...
}
```

## Theme пропс
https://styled-components.com/docs/advanced#the-theme-prop

Тема передается компоненту как пропс.
Это полезно, если нужно **обойти отсутствующий ThemeProvider или переопределить его**.

```tsx
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// Определяем, как будет выглядеть основная тема
const theme = {
  main: "mediumseagreen"
};

render(
  <div>
    <Button theme={{ main: "royalblue" }}>Ad hoc theme</Button>
    <ThemeProvider theme={theme}>
      <div>
        <Button>Themed</Button>
        <Button theme={{ main: "darkorange" }}>Overridden</Button>
      </div>
    </ThemeProvider>
  </div>
);
```