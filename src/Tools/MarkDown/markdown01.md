---
order: 1
star: true
date: 2023-04-08
cover: https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230627144902.png
category: 
  - Markdown
---

# Markdown方言（ hope ）

## 1 [提示信息](https://theme-hope.vuejs.press/zh/guide/markdown/hint.html)

::: important important

:::

::: info info
  
:::

::: note note
:::

::: tip tip
:::

::: warning warning
:::

::: caution caution
:::

::: details details
:::

::: tabs

@tab apple

Apple [选项卡](https://theme-hope.vuejs.press/zh/guide/markdown/tabs.html#%E6%A1%88%E4%BE%8B)

@tab banana

Banana

@tab orange

Orange

:::

## 2 [Emoji表情](https://www.webfx.com/tools/emoji-cheat-sheet/)

```md
经典: :wink: :cry: :laughing: :yum:

简写: 8-) :) :* :( :-) :-( ;)s
```

**效果**：

:wink: :cry: :laughing: :yum:  
8-) :) :* :( :-) :-( ;)

## 3 字体颜色

### 3.1 [徽章](https://plugin-components.vuejs.press/zh/guide/utilities/badge.html)<span class="vp-badge danger">重要</span>

<span class="vp-badge info">class="vp-badge info"</span>  
<span class="vp-badge danger">class="vp-badge danger"</span>  
<span class="vp-badge note">class="vp-badge note"</span>  
<span class="vp-badge tip">class="vp-badge tip"</span>  
<span class="vp-badge warning">class="vp-badge warning"</span>

top<Badge text="构建中" type="warning" vertical = "top"/> middle<Badge text="新" type="tip"  vertical = "middle"/> baseline<Badge text="MrHope" type="info" vertical = "baseline"/> bottom<Badge text="MrHope" color="grey" vertical = "bottom"/>

```md
<span class="vp-badge info">支持页面配置</span>

<Badge text="构建中" type="warning" vertical = "top"/> 
<Badge text="新" type="tip"  vertical = "middle"/> 
<Badge text="MrHope" type="info" vertical = "baseline"/>
<Badge text="MrHope" color="grey" vertical = "bottom"/>
```

### 3.2 更改字体、大小、颜色

```html
<font face="黑体">我是黑体字</font>
<font face="微软雅黑">我是微软雅黑</font>
<font face="STCAIYUN">我是华文彩云</font>
<font color=red>我是红色</font>
<font color=#008000>我是绿色</font>
<font color=Blue>我是蓝色</font>
<font size=5>我是尺寸</font>
<font face="黑体" color=green size=5>我是黑体，绿色，尺寸为5</font>
```

效果

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230719202045.png)
