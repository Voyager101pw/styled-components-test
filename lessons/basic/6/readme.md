# Псевдоэлементы, псевдоселекторы и вложенность
https://styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting

В styled-components используется препроцессор, который поддерживает scss подобный синтаксис, со всеми его приемуществами, а именно:

& - Одиночный амперсанд - Обращение ко **всем экземплярам** компонента.
&& - Двойной амперсанд - Обращение к **экземплярау** компонента и **повышение приоритета**. 
- Полезно если вы выполняете переопределение условного стиля и не хотите, чтобы стиль применялся ко всем экземплярам.
- Полезно, если вы имеете дело со смешанной средой стилевых компонентов и ванильным CSS, где могут быть конфликтующие стили.
