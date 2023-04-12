---
order: 2
date: 2023-03-10
category: 
  - CSS
---


# CSS选择器
<!-- more -->

选择器是选取需设置样式的元素（标签）

3种选择器是**元素选择器，id选择器，class选择器**，语法以及作用如下：

## 元素（标签）选择器

- 选择器的名字必须是标签的名字
- 作用：选择器中的样式会作用于所有同名的标签上

```css
元素名称 {
    css样式名:css样式值；
}
```

例子如下：

```css
div{
    color: red;
}
```

## id选择器

- 选择器的名字前面需要加上#
- 作用：选择器中的样式会作用于指定id的标签上，有且只有一个标签（由于id是唯一的）

```css
#id属性值 {
    css样式名:css样式值；
}
```

例子如下：

```css
#did {
    color: blue;
}
```

## 类选择器

- 选择器的名字前面需要加上 .
- 作用：选择器中的样式会作用于所有class的属性值和该名字一样的标签上，可以是多个

```css
.class属性值 {
    css样式名:css样式值；
}
```

例子如下：

```css
.cls{
     color: green;
 }
```

- text-indent: 设置段落的首行缩进
- line-height: 设置行高
- text-align: 设置对齐方式, 可取值为 left / center / right