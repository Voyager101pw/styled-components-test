## Wrapping React.Component & Caveat (предостережение)
https://styled-components.com/docs/advanced#caveat

Это поведение поддерживается только в контексте стилизованных компонентов: попытка монтированияБв следующем примере произойдет сбой, потому что компонент Аявляется экземпляром React.Component, а не стилизованным компонентом.

Оборачивать можно только стилизованный компоненты, но если попытатся обоернуть `React.Component`, то это приведет к исключению:
`Cannot call a class as a function` - возникает из-за того, что стилизованный компонент пытается вызвать компонент как функцию интерполяции

**Неправильно 💀**
```jsx
class A extends React.Component {
  render() {
    return <div />
  }
}

const B = styled.div`
  ${A} {               // ERROR: Cannot call a class as a function
  }
`
```


**Правильно 👍**
```jsx
class A extends React.Component {
  render() {
    return <div className={this.props.className} />
  }
}

const StyledA = styled(A)`` // Wrapped

const B = styled.div`
  ${StyledA} {
  }
`
```
Обрати внимание: Обернутый React.Component при помощи styled() **должен присваивать className внутри тега**, иначе переданные стили из styled-components не будут присвоены.

```jsx
class A extends React.Component {
  render() {
    return <div 
      className={this.props.className} // <<<<<< 
    />
  }
}
```