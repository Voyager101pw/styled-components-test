## Передача пропсов
https://styled-components.com/docs/basics#passed-props

Если стилизованная цель является простым элементом styled.div.
То при монтировании его в DOM, внутри него будут отображатся только те пропсы, которые входят в список доступных атрибутов для этого HTML-элемента. 

Если это пользовательский компонент styled(MyComponent), styled-components передаст в него все пропсы. 


В этом примере показано, как все реквизиты компонента Input передаются смонтированному узлу DOM, как и в случае с элементами React.
```tsx
  // const Input = styled.div`...` - простой элемент

  <Input defaultValue="..." type="text" />
  <Input defaultValue="..." type="text" inputColor="rebeccapurple" />

  <input value="..." type="text"></input>
    
  // В смонтированном инпуте не будет inputColor т.к. этот пропс не входит в список доступных атрибутов для данного тега.
  <input value="..." type="text"></input> 
 
```
В этом примере показано, как все пропсы компонента Input передаются смонтированному узлу DOM