## SSR - Рендеринг стилей на стороне сервера
https://styled-components.com/docs/advanced#the-theme-prop

Стилизованный элементы можно рендерить на стороне сервера и без проблем получать готовый бандл от сервера.
Для использования SSR требуется поставить babel-плагин **`babel-plugin-styled-components`**

**Включить SSR**
```json
// .babelrc:
{
  "plugins": ["babel-plugin-styled-components"]
}
```

**Отключить SSR**
```json
{
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": false
      }
    ]
  ]
}
```


Использование
```jsx
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const sheet = new ServerStyleSheet();
try {
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <YourApp />
    </StyleSheetManager>
  );
  const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
} catch (error) {
  // handle error
  console.error(error);
} finally {
  sheet.seal();
}
```

## Next <12 & Babel
https://styled-components.com/docs/advanced#nextjs
https://github.com/vercel/next.js/blob/canary/examples/with-styled-components-babel/pages/_document.tsx
https://github.com/vercel/next.js/tree/canary/examples/with-styled-components-babel

Для работы нужно добавить pages/_document.js (если у вас его нет). 
Затем скопируйте логику для styled-components, чтобы внедрить стили, отображаемые на стороне сервера, в <head>.

```jsx
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
```

## Next > 12 (SWC)
https://styled-components.com/docs/advanced#with-swc

Начиная с версии 12 , Next.js использует компилятор Rust под названием SWC.
Если вы не используете какой-либо плагин babel, вместо этого вам следует обратиться к этому примеру.
https://github.com/vercel/next.js/tree/canary/examples/with-styled-components

Next > 12 в параметрах компилятора (`next.config.js`) нужно добавить **`styledComponents: true`**, и изменить _document файл с помощью getInitialProps для поддержки SSR.

**next.config.js**

https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true // Enables the styled-components SWC transform
  }
}

module.exports = nextConfig
```
**pages/_document.tsx** 

https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.tsx
```jsx
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }
}
```