import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,a as p,d as n,e,b as c}from"./app-e581f78e.js";const o={},l=n("h1",{id:"java基础加强",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#java基础加强","aria-hidden":"true"},"#"),e(" Java基础加强")],-1),i=c(`<h2 id="_34-反射" tabindex="-1"><a class="header-anchor" href="#_34-反射" aria-hidden="true">#</a> 34. 反射</h2><p><strong>专业的解释（了解一下）：</strong></p><p>是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；</p><p>对于任意一个对象，都能够调用它的任意属性和方法；</p><p>这种动态获取信息以及动态调用对象方法的功能称为Java语言的反射机制。</p><p><strong>通俗的理解</strong>：</p><ul><li><p>利用<strong>反射</strong>创建的对象<strong>可以无视修饰符</strong>调用类里面的内容</p></li><li><p>可以跟<strong>配置文件结合起来使用</strong>，把要创建的对象信息和方法写在配置文件中。</p><p>读取到什么类，就创建什么类的对象</p><p>读取到什么方法，就调用什么方法</p><p>此时当需求变更的时候不需要修改代码，只要修改配置文件即可。</p></li></ul><h3 id="_34-1-字节码文件和字节码文件对象" tabindex="-1"><a class="header-anchor" href="#_34-1-字节码文件和字节码文件对象" aria-hidden="true">#</a> 34.1 字节码文件和字节码文件对象</h3><p>java文件：就是我们自己编写的java代码。</p><p>字节码文件：就是通过java文件编译之后的class文件（是在硬盘上真实存在的，用眼睛能看到的）</p><p>字节码文件对象：当class文件加载到内存之后，虚拟机自动创建出来的对象。</p><p>这个对象里面至少包含了：构造方法，成员变量，成员方法。</p><p>而我们的反射获取的是什么？字节码文件对象，这个对象在内存中是唯一的。</p><h2 id="_35-动态代理" tabindex="-1"><a class="header-anchor" href="#_35-动态代理" aria-hidden="true">#</a> 35. 动态代理</h2><p>无侵入式的给方法增强功能</p><h3 id="_35-1-动态代理三要素" tabindex="-1"><a class="header-anchor" href="#_35-1-动态代理三要素" aria-hidden="true">#</a> 35.1 动态代理三要素</h3><p>1，真正干活的对象</p><p>2，代理对象</p><p>3，利用代理调用方法</p><p>切记一点：代理可以增强或者拦截的方法都在接口中，接口需要写在newProxyInstance的第二个参数里。</p><p><strong>代码实现</strong>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
        需求：
            外面的人想要大明星唱一首歌
             1. 获取代理的对象
                代理对象 = ProxyUtil.createProxy(大明星的对象);
             2. 再调用代理的唱歌方法
                代理对象.唱歌的方法(&quot;只因你太美&quot;);
     */</span>
        <span class="token comment">//1. 获取代理的对象</span>
        <span class="token class-name">BigStar</span> bigStar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigStar</span><span class="token punctuation">(</span><span class="token string">&quot;鸡哥&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Star</span> proxy <span class="token operator">=</span> <span class="token class-name">ProxyUtil</span><span class="token punctuation">.</span><span class="token function">createProxy</span><span class="token punctuation">(</span>bigStar<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2. 调用唱歌的方法</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> proxy<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token string">&quot;只因你太美&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
*
* 类的作用：
*       创建一个代理
*
* */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyUtil</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    *
    * 方法的作用：
    *       给一个明星的对象，创建一个代理
    *
    *  形参：
    *       被代理的明星对象
    *
    *  返回值：
    *       给明星创建的代理
    *
    *
    *
    * 需求：
    *   外面的人想要大明星唱一首歌
    *   1. 获取代理的对象
    *      代理对象 = ProxyUtil.createProxy(大明星的对象);
    *   2. 再调用代理的唱歌方法
    *      代理对象.唱歌的方法(&quot;只因你太美&quot;);
    * */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Star</span> <span class="token function">createProxy</span><span class="token punctuation">(</span><span class="token class-name">BigStar</span> bigStar<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token comment">/* java.lang.reflect.Proxy类：提供了为对象产生代理对象的方法：

        public static Object newProxyInstance(ClassLoader loader, Class&lt;?&gt;[] interfaces, InvocationHandler h)
        参数一：用于指定用哪个类加载器，去加载生成的代理类
        参数二：指定接口，这些接口用于指定生成的代理长什么，也就是有哪些方法
        参数三：用来指定生成的代理对象要干什么事情*/</span>
        <span class="token class-name">Star</span> star <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Star</span><span class="token punctuation">)</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>
                <span class="token class-name">ProxyUtil</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//参数一：用于指定用哪个类加载器，去加载生成的代理类</span>
                <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">Star</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//参数二：指定接口，这些接口用于指定生成的代理长什么，也就是有哪些方法</span>
                <span class="token comment">//参数三：用来指定生成的代理对象要干什么事情</span>
                <span class="token keyword">new</span> <span class="token class-name">InvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
                        <span class="token comment">/*
                        * 参数一：代理的对象
                        * 参数二：要运行的方法 sing
                        * 参数三：调用sing方法时，传递的实参
                        * */</span>
                        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;sing&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;准备话筒，收钱&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;dance&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;准备场地，收钱&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token comment">//去找大明星开始唱歌或者跳舞</span>
                        <span class="token comment">//代码的表现形式：调用大明星里面唱歌或者跳舞的方法</span>
                        <span class="token keyword">return</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>bigStar<span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> star<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Star</span> <span class="token punctuation">{</span>
    <span class="token comment">//我们可以把所有想要被代理的方法定义在接口当中</span>
    <span class="token comment">//唱歌</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">String</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//跳舞</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BigStar</span> <span class="token keyword">implements</span> <span class="token class-name">Star</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">BigStar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BigStar</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//唱歌</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;正在唱&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;谢谢&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//跳舞</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;正在跳舞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取
     * <span class="token keyword">@return</span> name
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;BigStar{name = &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>额外扩展</strong>：</p><p>动态代理，还可以拦截方法</p><p>比如：</p><p>在这个故事中，经济人作为代理，如果别人让邀请大明星去唱歌，打篮球，经纪人就增强功能。</p><p>但是如果别人让大明星去扫厕所，经纪人就要拦截，不会去调用大明星的方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
* 类的作用：
*       创建一个代理
* */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyUtil</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Star</span> <span class="token function">createProxy</span><span class="token punctuation">(</span><span class="token class-name">BigStar</span> bigStar<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span> loader<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces<span class="token punctuation">,</span> <span class="token class-name">InvocationHandler</span> h<span class="token punctuation">)</span>
        <span class="token class-name">Star</span> star <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Star</span><span class="token punctuation">)</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>
                <span class="token class-name">ProxyUtil</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">Star</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">InvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;cleanWC&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;拦截，不调用大明星的方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token comment">//如果是其他方法，正常执行</span>
                        <span class="token keyword">return</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>bigStar<span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> star<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_35-2-动态代理的练习" tabindex="-1"><a class="header-anchor" href="#_35-2-动态代理的练习" aria-hidden="true">#</a> 35.2 动态代理的练习</h3><p>对add方法进行增强，对remove方法进行拦截，对其他方法不拦截也不增强</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyProxyDemo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//动态代码可以增强也可以拦截</span>
        <span class="token comment">//1.创建真正干活的人</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.创建代理对象</span>
        <span class="token comment">//参数一：类加载器。当前类名.class.getClassLoader()</span>
        <span class="token comment">//                 找到是谁，把当前的类，加载到内存中了，我再麻烦他帮我干一件事情，把后面的代理类，也加载到内存</span>

        <span class="token comment">//参数二：是一个数组，在数组里面写接口的字节码文件对象。</span>
        <span class="token comment">//                  如果写了List，那么表示代理，可以代理List接口里面所有的方法，对这些方法可以增强或者拦截</span>
        <span class="token comment">//                  但是，一定要写ArrayList真实实现的接口</span>
        <span class="token comment">//                  假设在第二个参数中，写了MyInter接口，那么是错误的。</span>
        <span class="token comment">//                  因为ArrayList并没有实现这个接口，那么就无法对这个接口里面的方法，进行增强或拦截</span>
        <span class="token comment">//参数三：用来创建代理对象的匿名内部类</span>
        <span class="token class-name">List</span> proxyList <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">)</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>
                <span class="token comment">//参数一：类加载器</span>
                <span class="token class-name">MyProxyDemo1</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token comment">//参数二：是一个数组，表示代理对象能代理的方法范围</span>
                <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">List</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//参数三：本质就是代理对象</span>
                <span class="token keyword">new</span> <span class="token class-name">InvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@Override</span>
                    <span class="token comment">//invoke方法参数的意义</span>
                    <span class="token comment">//参数一：表示代理对象，一般不用（了解）</span>
                    <span class="token comment">//参数二：就是方法名，我们可以对方法名进行判断，是增强还是拦截</span>
                    <span class="token comment">//参数三：就是下面第三步调用方法时，传递的参数。</span>
                    <span class="token comment">//举例1：</span>
                    <span class="token comment">//list.add(&quot;阿玮好帅&quot;);</span>
                    <span class="token comment">//此时参数二就是add这个方法名</span>
                    <span class="token comment">//此时参数三 args[0] 就是 阿玮好帅</span>
                    <span class="token comment">//举例2：</span>
                    <span class="token comment">//list.set(1, &quot;aaa&quot;);</span>
                    <span class="token comment">//此时参数二就是set这个方法名</span>
                    <span class="token comment">//此时参数三  args[0] 就是 1  args[1]&quot;aaa&quot;</span>
                    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
                        <span class="token comment">//对add方法做一个增强，统计耗时时间</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token comment">//调用集合的方法，真正的添加数据</span>
                            method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;耗时时间：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token comment">//需要进行返回，返回值要跟真正增强或者拦截的方法保持一致</span>
                            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;remove&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Integer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;拦截了按照索引删除的方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;remove&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;拦截了按照对象删除的方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                            <span class="token comment">//如果当前调用的是其他方法,我们既不增强，也不拦截</span>
                            method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3.调用方法</span>
        <span class="token comment">//如果调用者是list，就好比绕过了第二步的代码，直接添加元素</span>
        <span class="token comment">//如果调用者是代理对象，此时代理才能帮我们增强或者拦截</span>

        <span class="token comment">//每次调用方法的时候，都不会直接操作集合</span>
        <span class="token comment">//而是先调用代理里面的invoke，在invoke方法中进行判断，可以增强或者拦截</span>
        proxyList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxyList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxyList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxyList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ddd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        proxyList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxyList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//打印集合</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_36-日志" tabindex="-1"><a class="header-anchor" href="#_36-日志" aria-hidden="true">#</a> 36. 日志</h2><p>跟输出语句一样，可以把程序在运行过程中的详细信息都打印在控制台上。</p><p>利用log日志还可以把这些详细信息保存到文件和数据库中。</p><h3 id="_36-1-使用步骤" tabindex="-1"><a class="header-anchor" href="#_36-1-使用步骤" aria-hidden="true">#</a> 36.1 使用步骤</h3><p>不是java的，也不是自己写的，是第三方提供的代码，所以我们要导入jar包。</p><ul><li><p>把第三方的代码导入到当前的项目当中</p><p>新建lib文件夹，把jar粘贴到lib文件夹当中，全选后右键点击选择add as a ....</p><p>检测导入成功：导入成功后jar包可以展开。在项目重构界面可以看到导入的内容</p></li><li><p>把配置文件粘贴到src文件夹下</p></li><li><p>在代码中获取日志对象</p></li><li><p>调用方法打印日志</p></li></ul><h3 id="_36-2-日志级别" tabindex="-1"><a class="header-anchor" href="#_36-2-日志级别" aria-hidden="true">#</a> 36.2 日志级别</h3><pre><code>TRACE, DEBUG, INFO, WARN, ERROR
</code></pre><p>还有两个特殊的：</p><p>ALL：输出所有日志</p><p>OFF：关闭所有日志</p><p>日志级别从小到大的关系：</p><p>TRACE &lt; DEBUG &lt; INFO &lt; WARN &lt; ERR</p><h3 id="_36-2-配置文件" tabindex="-1"><a class="header-anchor" href="#_36-2-配置文件" aria-hidden="true">#</a> 36.2 配置文件</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
        CONSOLE ：表示当前的日志信息是可以输出到控制台的。
    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CONSOLE<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.ConsoleAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--输出流对象 默认 System.out 改为 System.err--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>target</span><span class="token punctuation">&gt;</span></span>System.out<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>target</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--格式化输出：%d表示日期，%thread表示线程名，%-5level：级别从左显示5个字符宽度
                %msg：日志消息，%n是换行符--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level]  %c [%thread] : %msg%n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- File是输出的方向通向文件的 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FILE<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.RollingFileAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>charset</span><span class="token punctuation">&gt;</span></span>utf-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>charset</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--日志输出路径--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span><span class="token punctuation">&gt;</span></span>C:/code/itheima-data.log<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>file</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--指定日志文件拆分和压缩规则--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rollingPolicy</span>
                       <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--通过指定压缩文件名称，来确定分割文件方式--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileNamePattern</span><span class="token punctuation">&gt;</span></span>C:/code/itheima-data2-%d{yyyy-MMdd}.log%i.gz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileNamePattern</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--文件拆分大小--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maxFileSize</span><span class="token punctuation">&gt;</span></span>1MB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maxFileSize</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rollingPolicy</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--

    level:用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF
   ， 默认debug
    &lt;root&gt;可以包含零个或多个&lt;appender-ref&gt;元素，标识这个输出位置将会被本日志级别控制。
    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CONSOLE<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FILE<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_37-类加载器" tabindex="-1"><a class="header-anchor" href="#_37-类加载器" aria-hidden="true">#</a> 37. 类加载器</h2><blockquote><p>基础加强包含了：</p><p>反射，动态代理，类加载器，xml，注解，日志，单元测试等知识点</p><p>其中最难的是反射和动态代理，其他知识点都非常简单</p></blockquote><p>略</p><h2 id="_38-xml" tabindex="-1"><a class="header-anchor" href="#_38-xml" aria-hidden="true">#</a> 38. xml</h2><p>略</p><h2 id="_39-单元测试" tabindex="-1"><a class="header-anchor" href="#_39-单元测试" aria-hidden="true">#</a> 39. 单元测试</h2><p>对部分代码进行测试。</p><h3 id="_39-1-junit的特点" tabindex="-1"><a class="header-anchor" href="#_39-1-junit的特点" aria-hidden="true">#</a> 39.1 Junit的特点？</h3><ul><li><p>是一个第三方的工具。（把别人写的代码导入项目中）（专业叫法：导jar包）</p></li><li><p>如果运行结果显示绿色，表示运行结果是正确的。</p><p>如果运行结果显示红色，表示运行结果是错误的</p></li></ul><h3 id="_39-2-运行测试代码" tabindex="-1"><a class="header-anchor" href="#_39-2-运行测试代码" aria-hidden="true">#</a> 39.2 运行测试代码</h3><ul><li>只能直接运行无参无返回值的非静态方法</li><li>想要运行谁，就右键点击哪个方法。如果想要运行一个类里面所有的测试方法，选择类名，有点点击即可。</li></ul><h3 id="_39-3-正确使用方式" tabindex="-1"><a class="header-anchor" href="#_39-3-正确使用方式" aria-hidden="true">#</a> 39.3 正确使用方式</h3><p>1，新建测试类</p><p>2，新建测试方法（要测试的方法名 + Test） methodTest</p><p>3，在这个方法中直接调用要测试的方法</p><p>4，在测试方法的上面写@Test</p><p>代码示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token comment">//真正用来测试的类</span>
    <span class="token comment">//测试用例（测试类）</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JunitTest</span> <span class="token punctuation">{</span>

        <span class="token comment">//在这个类里面再写无参无返回值的非静态方法</span>
        <span class="token comment">//在方法中调用想要测试的方法</span>

        <span class="token annotation punctuation">@Test</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//调用要测试的方法</span>
            <span class="token class-name">JunitDemo1</span> jd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JunitDemo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            jd<span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_39-4-实际开发中单元测试的使用方式" tabindex="-1"><a class="header-anchor" href="#_39-4-实际开发中单元测试的使用方式" aria-hidden="true">#</a> 39.4 实际开发中单元测试的使用方式</h3><p>需求：测试File中的delete方法，写的是否正确（掌握）</p><p>开发中的测试原则：</p><p>不污染原数据。</p><p>代码示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JunitDemo3</span> <span class="token punctuation">{</span>
    <span class="token comment">//在实际开发中，真正完整的单元测试该怎么写？</span>
    <span class="token comment">//前提：</span>
    <span class="token comment">//以后在工作的时候，测试代码不能污染原数据。（修改，篡改）</span>
    <span class="token comment">//1.利用Before去对数据做一个初始化的动作</span>
    <span class="token comment">//2.利用Test真正的去测试方法</span>
    <span class="token comment">//3.利用After去还原数据</span>
    
    <span class="token comment">//需求：测试File类中的delete方法是否书写正确？？？</span>
    <span class="token annotation punctuation">@Before</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">beforemethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//先备份</span>
        <span class="token class-name">File</span> src <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\moon\\\\Desktop\\\\a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> dest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\moon\\\\Desktop\\\\copy.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>dest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>b <span class="token operator">=</span> fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//作为一个标准的测试人员，运行完单元测试之后，不能污染原数据</span>
    <span class="token comment">//需要达到下面两个要求：</span>
    <span class="token comment">//1.得到结果</span>
    <span class="token comment">//2.a.txt还在而且其他的备份文件消失</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\moon\\\\Desktop\\\\a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> delete <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//检查a.txt是否存在</span>
        <span class="token keyword">boolean</span> exists <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//只有同时满足了下面所有的断言，才表示delete方法编写正确</span>
        <span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;delete方法出错了&quot;</span><span class="token punctuation">,</span>delete<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;delete方法出错了&quot;</span><span class="token punctuation">,</span>exists<span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@After</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">aftermethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//还要对a.txt做一个还原</span>
        <span class="token class-name">File</span> src <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\moon\\\\Desktop\\\\copy.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> dest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\moon\\\\Desktop\\\\a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>dest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>b <span class="token operator">=</span> fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//备份数据要删除</span>
        src<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_40-注解" tabindex="-1"><a class="header-anchor" href="#_40-注解" aria-hidden="true">#</a> 40. 注解</h2><h3 id="_40-1-注释和注解的区别" tabindex="-1"><a class="header-anchor" href="#_40-1-注释和注解的区别" aria-hidden="true">#</a> 40.1 注释和注解的区别？</h3><p>共同点：都可以对程序进行解释说明。</p><p>不同点：注释，是给程序员看的。只在Java中有效。在class文件中不存在注释的。</p><p>当编译之后，会进行注释擦除。</p><p>注解，是给虚拟机看的。当虚拟机看到注解之后，就知道要做什么事情了。</p><h3 id="_40-2-java中已经存在的注解" tabindex="-1"><a class="header-anchor" href="#_40-2-java中已经存在的注解" aria-hidden="true">#</a> 40.2 Java中已经存在的注解</h3><p>@Override：表示方法的重写</p><p>@Deprecated：表示修饰的方法已过时</p><p>@SuppressWarnings(&quot;all&quot;)：压制警告</p><p>除此之外，还需要掌握第三方框架中提供的注解：</p><p>比如：Junit</p><p>@Test 表示运行测试方法</p><p>@Before 表示在Test之前运行，进行数据的初始化</p><p>@After 表示在Test之后运行，进行数据的还原</p><h3 id="_40-3-特殊属性" tabindex="-1"><a class="header-anchor" href="#_40-3-特殊属性" aria-hidden="true">#</a> 40.3 特殊属性</h3><p>value：当注解中只有&quot;一个属性&quot;,并且属性名是&quot;value&quot;,使用注解时,可以省略value属性名</p><p>代码示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//注解的定义</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Anno2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">23</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//注解的使用</span>
<span class="token annotation punctuation">@Anno2</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnoDemo2</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Anno2</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_40-4-元注解" tabindex="-1"><a class="header-anchor" href="#_40-4-元注解" aria-hidden="true">#</a> 40.4 元注解</h3><p>可以写在注解上面的注解</p><p>@Target ：指定注解能在哪里使用</p><p>@Retention ：可以理解为保留时间(生命周期)</p><p><strong>Target</strong>：</p><p>作用：用来标识注解使用的位置，如果没有使用该注解标识，则自定义的注解可以使用在任意位置。</p><p>可使用的值定义在ElementType枚举类中，常用值如下</p><ul><li>TYPE，类，接口</li><li>FIELD, 成员变量</li><li>METHOD, 成员方法</li><li>PARAMETER, 方法参数</li><li>CONSTRUCTOR, 构造方法</li><li>LOCAL_VARIABLE, 局部变量</li></ul><p><strong>Retention</strong>：</p><p>作用：用来标识注解的生命周期(有效范围)</p><p>可使用的值定义在RetentionPolicy枚举类中，常用值如下</p><ul><li>SOURCE：注解只作用在源码阶段，生成的字节码文件中不存在</li><li>CLASS：注解作用在源码阶段，字节码文件阶段，运行阶段不存在，默认值</li><li>RUNTIME：注解作用在源码阶段，字节码文件阶段，运行阶段</li></ul>`,104);function u(k,d){return a(),t("div",null,[l,p(" more "),i])}const m=s(o,[["render",u],["__file","Javase12.html.vue"]]);export{m as default};
