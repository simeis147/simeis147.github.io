import{_ as n,W as a,X as e,Y as i,a0 as s,a2 as c,Z as l}from"./framework-f482b5e1.js";const t={},d=s("h1",{id:"css选择器",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#css选择器","aria-hidden":"true"},"#"),c(" CSS选择器")],-1),p=l(`<p>选择器是选取需设置样式的元素（标签）</p><p>3种选择器是<strong>元素选择器，id选择器，class选择器</strong>，语法以及作用如下：</p><h2 id="元素-标签-选择器" tabindex="-1"><a class="header-anchor" href="#元素-标签-选择器" aria-hidden="true">#</a> 元素（标签）选择器</h2><ul><li>选择器的名字必须是标签的名字</li><li>作用：选择器中的样式会作用于所有同名的标签上</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">元素名称</span> <span class="token punctuation">{</span>
    <span class="token property">css样式名</span><span class="token punctuation">:</span>css样式值；
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="id选择器" tabindex="-1"><a class="header-anchor" href="#id选择器" aria-hidden="true">#</a> id选择器</h2><ul><li>选择器的名字前面需要加上#</li><li>作用：选择器中的样式会作用于指定id的标签上，有且只有一个标签（由于id是唯一的）</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#id属性值</span> <span class="token punctuation">{</span>
    <span class="token property">css样式名</span><span class="token punctuation">:</span>css样式值；
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#did</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器" aria-hidden="true">#</a> 类选择器</h2><ul><li>选择器的名字前面需要加上 .</li><li>作用：选择器中的样式会作用于所有class的属性值和该名字一样的标签上，可以是多个</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.class属性值</span> <span class="token punctuation">{</span>
    <span class="token property">css样式名</span><span class="token punctuation">:</span>css样式值；
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.cls</span><span class="token punctuation">{</span>
     <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>text-indent: 设置段落的首行缩进</li><li>line-height: 设置行高</li><li>text-align: 设置对齐方式, 可取值为 left / center / right</li></ul>`,18);function r(o,u){return a(),e("div",null,[d,i(" more "),p])}const m=n(t,[["render",r],["__file","css02.html.vue"]]);export{m as default};
