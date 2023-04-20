---
order: 2
date: 2023-03-10
category: 
  - HTML
---

# HTML标签
<!-- more -->

## 布局标签

实际开发网页中，会大量频繁的使用 div 和 span 这两个没有语义的布局标签。

::: info 标签：&lt;div> &lt;span>

div标签：

- 一行只显示一个（独占一行）

- 宽度默认是父元素的宽度，高度默认由内容撑开

- 可以设置宽高（width、height）

span标签：

- 一行可以显示多个

- 宽度和高度默认由内容撑开

- 不可以设置宽高（width、height）

:::

## 段落标签

::: info 标签 &lt;br> &lt;p>

- &lt;p> 这是一个段落标签 &lt;/p>
- &lt;br> 这是一个换行标签 &lt;/br>

:::

## 超链接

::: info  标签: &lt;a href="..." target="...">央视网&lt;/a>

- href:  指定资源访问的**url**
- target:  指定在何处打开资源链接
  - _self:  默认值，在当前页面打开
  - _blank:  在空白页面打开

:::

## 视频、音频标签

::: info &lt;video> &lt;audio>

&lt;video>

- src: 规定视频的url
- controls: 显示播放控件
- width: 播放器的宽度
- height: 播放器的高度

&lt;audio>

- src: 规定音频的url
- controls: 显示播放控件

:::

## 文本格式标签

| 效果   | 标签 | 标签(强调) |
| ------ | ---- | ---------- |
| 加粗   | b    | strong     |
| 倾斜   | i    | em         |
| 下划线 | u    | ins        |
| 删除线 | s    | del        |

## 注意事项

- 在HTML页面中无论输入了多少个空格, 最多只会显示一个。  
  可以使用空格占位符（ \&nbsp; ）来生成空格  

- 在HTML中，除了空格占位符以外，还有一些其他的占位符如下：
    | 显示结果 | 描述   | 占位符  |
    | :------- | :----- | :------ |
    |          | 空格   | \&nbsp; |
    | <        | 小于号 | \&lt;   |
    | >        | 大于号 | \&gt;   |
    | &        | 和号   | \&amp;  |
    | "        | 引号   | \&quot; |
    | '        | 撇号   | \&apos; |