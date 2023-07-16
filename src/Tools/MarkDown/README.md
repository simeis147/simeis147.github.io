---
sticky: true
star: true
index: true
order: number
date: 2023-03-02
category: 
  - Markdown
---

# Markdown速查表
<!-- more -->

::: tip 背景
Markdown 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）和亚伦·斯沃茨（Aaron Swartz）。它允许人们 “ 使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML（或者HTML）文档 ”

[Markdown 教程](https://markdown.com.cn/)  
[Markdown 示例](https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html)  
[Markdown 增强](https://theme-hope.vuejs.press/zh/guide/markdown/intro.html)  
:::

## 基本语法

这些是 John Gruber 的原始设计文档中列出的元素。所有 Markdown 应用程序都支持这些元素。

| 元素| Markdown 语法 |
| :---- | :----- |
| 标题（Heading）|# H1 <br> ## H2 <br> ### H3 |
| 粗体（Bold）| \*\*bold text\*\*|
| 斜体（Italic）|\*italicized text\*|
| 引用块（Blockquote）| > blockquote|
| 有序列表（Ordered List）|1. First item <br>   2. Second item <br> 3. Third item |
| 无序列表（Unordered List）| - First item <br> - Second item  <br> - Third item |
| 代码（Code）| \`code\` |
| 分隔线（Horizontal Rule）|---|
| 链接（Link）| \[title\]\(https://www.example.com\) |
| 图片（Image）| \!\[alt text\]\(image.jpg\) |

## 扩展语法

这些元素通过添加额外的功能扩展了基本语法。但是，并非所有 Markdown 应用程序都支持这些元素。

| 元素| Markdown 语法 |
| :---- | :----- |
| 表格（Table）| \| Syntax \| Description \| <br> \| &nbsp;----------- &nbsp;\| &nbsp;-----------&nbsp; \| <br> \| Header      \| Title       \| <br> \| Paragraph   \| Text        \| |
| 代码块（Fenced Code Block）| \`\`\`<br>   &nbsp;{<br> &nbsp;&nbsp; "firstName": "John",<br> &nbsp;&nbsp;  "lastName": "Smith",  <br> &nbsp;&nbsp; "age": 25 &nbsp; <br>} <br>\`\`\` |
| 脚注（Footnote）|Here's a sentence with a footnote. [^1] <br>[^1]: This is the footnote.|
| 标题编号（Heading ID）| ### My Great Heading \{#custom-id}|
| 定义列表（Definition List）|term  : definition |
| 删除线（Strikethrough）| \~\~The world is flat.\~\~ |
| 任务列表（Task List）| - [x] Write the press release <br>- [&nbsp;] Update the website <br> - [&nbsp;] Contact the media |
