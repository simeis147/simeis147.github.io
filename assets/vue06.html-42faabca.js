import{_ as s,W as a,X as t,Y as e,a0 as n,a2 as p,Z as o}from"./framework-f482b5e1.js";const l="/assets/1669385425617-64866296.png",i="/assets/1669385446343-8d525753.png",c="/assets/1669385782145-34a1749e.png",u="/assets/1669386261570-f334e82f.png",r="/assets/1669388755027-f5dc0ffc.png",d={},k=n("h1",{id:"vue路由",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue路由","aria-hidden":"true"},"#"),p(" Vue路由")],-1),v=o('<h2 id="路由介绍" tabindex="-1"><a class="header-anchor" href="#路由介绍" aria-hidden="true">#</a> 路由介绍</h2><p>此时基于案例中的功能，实现点击侧边栏的部门管理，显示部门管理的信息，点击员工管理，显示员工管理的信息，这就需要vue的路由功能了。</p><figure><img src="'+l+'" alt="1669385425617" tabindex="0" loading="lazy"><figcaption>1669385425617</figcaption></figure><figure><img src="'+i+'" alt="1669385446343" tabindex="0" loading="lazy"><figcaption>1669385446343</figcaption></figure><p><strong>前端路由</strong>：URL中的hash(#号之后的内容）与组件之间的对应关系</p><figure><img src="'+c+'" alt="1669385782145" tabindex="0" loading="lazy"><figcaption>1669385782145</figcaption></figure><p>当我们点击左侧导航栏时，浏览器的地址栏会发生变化，路由自动更新显示与url所对应的vue组件。</p><div class="hint-container note"><p class="hint-container-title">vue官方提供了路由插件Vue Router</p><p>VueRouter：路由器类，根据路由请求在路由视图中动态渲染选中的组件<br> &lt;router-link&gt;：请求链接组件，浏览器会解析成&lt;a&gt;<br> &lt;router-view&gt;：动态视图组件，用来渲染展示与路由路径对应的组件</p></div><p><strong>工作原理</strong>：</p><figure><img src="'+u+`" alt="1669386261570" tabindex="0" loading="lazy"><figcaption>1669386261570</figcaption></figure><p>首先VueRouter根据我们配置的url的hash片段和路由的组件关系去维护一张路由表</p><p>然后页面提供一个&lt;router-link&gt;组件，用户点击，发出路由请求</p><p>接着VueRouter根据路由请求，在路由表中找到对应的vue组件</p><p>最后VueRouter会切换&lt;router-view&gt;中的组件，从而进行视图的更新</p><h2 id="路由入门" tabindex="-1"><a class="header-anchor" href="#路由入门" aria-hidden="true">#</a> 路由入门</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>npm install vue-router@3.5.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<strong>src/router/index.js</strong>文件中定义路由表</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue  <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> VueRouter  <span class="token string">&#39;vue-router&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/emp&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//地址hash</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;emp&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/tlias/EmpView.vue&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//对应的vue组件</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/dept&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dept&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/tlias/DeptView.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 值得注意的是：默认的路由路径是 /</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span><span class="token string">&#39;/emp&#39;</span> <span class="token comment">//表示重定向到/emp即可</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由基本信息配置好了，路由表已经被加载，此时还缺少2个东西，就是&lt;router-link&gt;和&lt;router-view&gt;，所以我们需要修改2个页面（ EmpView.vue 和 DeptView.vue ）</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu-item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/dept<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>部门管理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu-item</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/emp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>员工管理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu-item</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还需要在内容展示区域即App.vue中定义route-view</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- {{message}} --&gt;</span>
    <span class="token comment">&lt;!-- &lt;element-view&gt;&lt;/element-view&gt; --&gt;</span>
    <span class="token comment">&lt;!-- &lt;emp-view&gt;&lt;/emp-view&gt; --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// import EmpView  &#39;./views/tlias/EmpView.vue&#39;</span>
<span class="token comment">// import ElementView  &#39;./views/Element/ElementView.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello world&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="1669388755027" tabindex="0" loading="lazy"><figcaption>1669388755027</figcaption></figure>',23);function m(g,b){return a(),t("div",null,[k,e(" more "),v])}const f=s(d,[["render",m],["__file","vue06.html.vue"]]);export{f as default};
