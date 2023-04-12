---
order: 1
date: 2023-03-10
category: 
  - CSS
---

# CSS引入方式
<!-- more -->

css引入方式主要有三种，分别是行**行内样式、内嵌式、外链式**。

**行内样式**是直接把css代码放到HTML标签里面，作为style属性的属性值。

```html
<div style="width: 100px; height: 100px; border: 1px solid black;">
这是一个长宽都为100px的div
</div>
```

**内嵌式**是在HTML中创建一个style标签，把css样式写入style标签内，style标签可以写在HTML中的任何位置，通常写在head标签内。

```html
<style>
        div {
            width: 100px;
            height: 100px;
            border: 1px solid black;
        }
</style>
<div>这是一个长宽都为100px的div</div>
```

**外链式**是把css样式写入.css文件内，然后通过link标签链接。

```css
/*css代码*/
 div {
            width: 100px;
            height: 100px;
            border: 1px solid black;
 }
```

```html
<link rel="stylesheet" href="url">
<div>这是一个长宽都为100px的div</div>
```
