## Тема
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
