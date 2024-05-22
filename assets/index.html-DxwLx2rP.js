import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as t}from"./app-BZhYnKGs.js";const e="/assets/1651590778564-d43XmFI-.png",p="/assets/1651591732224-Bntnzfj0.png",o="/assets/1651592524644-3060CWD5.png",c="/assets/1651595619453-DdGiXrMa.png",l={},i=t('<h1 id="springmvc" tabindex="-1"><a class="header-anchor" href="#springmvc"><span>SpringMVC</span></a></h1><h2 id="_1-springmvc简介" tabindex="-1"><a class="header-anchor" href="#_1-springmvc简介"><span>1 SpringMVC简介</span></a></h2><blockquote><p>SpringMVC 隶属于 Spring ，是 Spring 技术中的一部分</p></blockquote><p>SpringMVC 与 Servlet 技术功能等同，均属于web层或者说是表现层开发技术</p><div class="hint-container tip"><p class="hint-container-title">SpringMVC 与 Servlet相比</p><p>开发起来更简单快捷，用更少的代码完成表现层代码的开发</p></div><h3 id="_1-1-servlet例子" tabindex="-1"><a class="header-anchor" href="#_1-1-servlet例子"><span>1.1 Servlet例子</span></a></h3><figure><img src="'+e+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>UserSaveServlet：使用Servlet开发的用户新增模块</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/user/save&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserSaveServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.接收请求参数</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;servlet save name ==&gt; &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.生产响应</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/json;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PrintWriter</span> pw <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;{&#39;module&#39;:&#39;servlet save&#39;}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UserUpdateServlet：使用Servlet开发的用户修改模块</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/user/update&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserUpdateServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.接收请求参数</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;servlet update name ==&gt; &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.生产响应</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/json;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PrintWriter</span> pw <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;{&#39;module&#39;:&#39;servlet update&#39;}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UserDeleteServlet：使用Servlet开发的用户删除模块</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/user/delete&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDeleteServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.接收请求参数</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;servlet delete name ==&gt; &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.生产响应</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/json;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PrintWriter</span> pw <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;{&#39;module&#39;:&#39;servlet delete&#39;}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UserDeleteServlet：使用Servlet开发的用户查询模块</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/user/select&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserSelectServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.接收请求参数</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;servlet select name ==&gt; &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.生产响应</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/json;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PrintWriter</span> pw <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;{&#39;module&#39;:&#39;servlet select&#39;}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动项目，测试结果如下:</p><figure><img src="`+p+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>上面就是通过Servlet的方式来实现的用户模块的增删改查功能</p></blockquote><h3 id="_1-2-springmvc例子" tabindex="-1"><a class="header-anchor" href="#_1-2-springmvc例子"><span>1.2 springMVC例子</span></a></h3><p>springmvc下的<code>UserController</code>类</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/save&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;springmvc save name ==&gt; &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;{&#39;module&#39;:&#39;springmvc save&#39;}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/delete&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;springmvc delete name ==&gt; &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;{&#39;module&#39;:&#39;springmvc delete&#39;}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/update&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;springmvc update name ==&gt; &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;{&#39;module&#39;:&#39;springmvc update&#39;}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/select&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;springmvc select name ==&gt; &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;{&#39;module&#39;:&#39;springmvc select&#39;}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动项目，测试结果如下:</p><figure><img src="`+o+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container note"><p class="hint-container-title">注</p><p>请求与响应：SpringMVC 主要的作用就是用来接收前端发过来的请求和数据然后经过处理并将处理的结果响应给前端，所以如何处理请求和响应是SpringMVC中非常重要的一块内容</p><p>REST风格：是一种软件架构风格，可以降低开发的复杂性，提高系统的可伸缩性，在以后开发中非常重要和常用</p></div><h2 id="_2-springmvc概述" tabindex="-1"><a class="header-anchor" href="#_2-springmvc概述"><span>2 SpringMVC概述</span></a></h2><blockquote><p>当前WEB程序的工作流程:</p></blockquote><figure><img src="'+c+'" alt=" " width="600" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-1-三层架构" tabindex="-1"><a class="header-anchor" href="#_2-1-三层架构"><span>2.1 三层架构</span></a></h3><ol><li><p>web程序通过浏览器访问前端页面，发送异步请求到后端服务器</p></li><li><p>后台服务器采用三层架构进行功能开发</p><ul><li>表现层 负责接收请求和数据然后将数据转交给业务层</li><li>业务层 负责调用数据层完成数据库表的增删改查，并将结果返给表现层</li><li>表现层 将数据转换成json格式返回给前端</li></ul></li><li><p>前端页面将数据进行解析最终展示给用户</p></li></ol><h3 id="_2-2-表现层与数据层的技术选型" tabindex="-1"><a class="header-anchor" href="#_2-2-表现层与数据层的技术选型"><span>2.2 表现层与数据层的技术选型</span></a></h3><ol><li>数据层采用Mybatis框架</li><li>表现层采用SpringMVC框架，SpringMVC主要负责的内容有: <ul><li>controller如何接收请求和数据</li><li>如何将请求和数据转发给业务层</li><li>如何将响应数据转换成json发回到前端</li></ul></li></ol><div class="hint-container tip"><p class="hint-container-title">总结</p><ul><li><p>SpringMVC是一种基于Java实现MVC模型的轻量级Web框架</p></li><li><p>优点</p><ul><li>使用简单、开发便捷(相比于Servlet)</li><li>灵活性强</li></ul></li></ul></div>',32),u=[i];function r(k,d){return a(),s("div",null,u)}const g=n(l,[["render",r],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/BackEnd/SpringMVC/","title":"SpringMVC","lang":"zh-CN","frontmatter":{"index":true,"order":"number","date":"2023-04-04T00:00:00.000Z","category":["SpringMVC"],"description":"SpringMVC 1 SpringMVC简介 SpringMVC 隶属于 Spring ，是 Spring 技术中的一部分 SpringMVC 与 Servlet 技术功能等同，均属于web层或者说是表现层开发技术 SpringMVC 与 Servlet相比 开发起来更简单快捷，用更少的代码完成表现层代码的开发 1.1 Servlet例子 UserS...","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/BackEnd/SpringMVC/"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"SpringMVC"}],["meta",{"property":"og:description","content":"SpringMVC 1 SpringMVC简介 SpringMVC 隶属于 Spring ，是 Spring 技术中的一部分 SpringMVC 与 Servlet 技术功能等同，均属于web层或者说是表现层开发技术 SpringMVC 与 Servlet相比 开发起来更简单快捷，用更少的代码完成表现层代码的开发 1.1 Servlet例子 UserS..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-25T05:19:13.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-04-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-25T05:19:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringMVC\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-25T05:19:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"1 SpringMVC简介","slug":"_1-springmvc简介","link":"#_1-springmvc简介","children":[{"level":3,"title":"1.1 Servlet例子","slug":"_1-1-servlet例子","link":"#_1-1-servlet例子","children":[]},{"level":3,"title":"1.2 springMVC例子","slug":"_1-2-springmvc例子","link":"#_1-2-springmvc例子","children":[]}]},{"level":2,"title":"2 SpringMVC概述","slug":"_2-springmvc概述","link":"#_2-springmvc概述","children":[{"level":3,"title":"2.1 三层架构","slug":"_2-1-三层架构","link":"#_2-1-三层架构","children":[]},{"level":3,"title":"2.2 表现层与数据层的技术选型","slug":"_2-2-表现层与数据层的技术选型","link":"#_2-2-表现层与数据层的技术选型","children":[]}]}],"git":{"createdTime":1681268086000,"updatedTime":1682399953000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":3}]},"readingTime":{"minutes":3.08,"words":924},"filePathRelative":"BackEnd/SpringMVC/README.md","localizedDate":"2023年4月4日","excerpt":"\\n<h2>1 SpringMVC简介</h2>\\n<blockquote>\\n<p>SpringMVC 隶属于 Spring ，是 Spring 技术中的一部分</p>\\n</blockquote>\\n<p>SpringMVC 与 Servlet 技术功能等同，均属于web层或者说是表现层开发技术</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">SpringMVC 与 Servlet相比</p>\\n<p>开发起来更简单快捷，用更少的代码完成表现层代码的开发</p>\\n</div>\\n<h3>1.1 Servlet例子</h3>","autoDesc":true}');export{g as comp,b as data};