import{_ as a,W as s,X as t,Y as e,a0 as n,a2 as i,Z as l}from"./framework-f482b5e1.js";const c="/assets/01_简单了解多线程-e7a8c5f7.png",d="/assets/1591163781941-6941f09b.png",p={},o=n("h1",{id:"多线程技术",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多线程技术","aria-hidden":"true"},"#"),i(" 多线程技术")],-1),r=l('<h2 id="_31-多线程" tabindex="-1"><a class="header-anchor" href="#_31-多线程" aria-hidden="true">#</a> 31. 多线程</h2><p>是指从软件或者硬件上实现多个线程并发执行的技术。 具有多线程能力的计算机因有硬件支持而能够在同一时间执行多个线程，提升性能。</p><figure><img src="'+c+`" alt="01_简单了解多线程" tabindex="0" loading="lazy"><figcaption>01_简单了解多线程</figcaption></figure><h3 id="_31-1-并发和并行" tabindex="-1"><a class="header-anchor" href="#_31-1-并发和并行" aria-hidden="true">#</a> 31.1 并发和并行</h3><p>并行：在同一时刻，有多个指令在多个CPU上同时执行。</p><p>并发：在同一时刻，有多个指令在单个CPU上交替执行。</p><h3 id="_31-2-进程和线程" tabindex="-1"><a class="header-anchor" href="#_31-2-进程和线程" aria-hidden="true">#</a> 31.2 进程和线程</h3><ul><li><p>进程：是正在运行的程序</p><p>独立性：进程是一个能独立运行的基本单位，同时也是系统分配资源和调度的独立单位 动态性：进程的实质是程序的一次执行过程，进程是动态产生，动态消亡的 并发性：任何进程都可以同其他进程一起并发执行</p></li><li><p>线程：是进程中的单个顺序控制流，是一条执行路径</p><p>单线程：一个进程如果只有一条执行路径，则称为单线程程序<br> 多线程：一个进程如果有多条执行路径，则称为多线程程序</p></li></ul><p><strong>线程休眠</strong>:</p><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>static void sleep(long millis)</td><td>使当前正在执行的线程停留（暂停执行）指定的毫秒数</td></tr></tbody></table><p><strong>线程优先级</strong>:</p><ul><li><p>线程调度</p><ul><li>两种调度方式 <ul><li>分时调度模型：所有线程轮流使用 CPU 的使用权，平均分配每个线程占用 CPU 的时间片</li><li>抢占式调度模型：优先让优先级高的线程使用 CPU，如果线程的优先级相同，那么会随机选择一个，优先级高的线程获取的 CPU 时间片相对多一些</li></ul></li><li>Java使用的是抢占式调度模型</li></ul></li></ul><h2 id="_32-线程池" tabindex="-1"><a class="header-anchor" href="#_32-线程池" aria-hidden="true">#</a> 32. 线程池</h2><h3 id="_32-1-线程状态介绍" tabindex="-1"><a class="header-anchor" href="#_32-1-线程状态介绍" aria-hidden="true">#</a> 32.1 线程状态介绍</h3><p>当线程被创建并启动以后，它既不是一启动就进入了执行状态，也不是一直处于执行状态。线程对象在不同的时期有不同的状态。那么Java中的线程存在哪几种状态呢？Java中的线程</p><p>状态被定义在了java.lang.Thread.State枚举类中，State枚举类的源码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    
        <span class="token comment">/* 新建 */</span>
        <span class="token constant">NEW</span> <span class="token punctuation">,</span> 

        <span class="token comment">/* 可运行状态 */</span>
        <span class="token constant">RUNNABLE</span> <span class="token punctuation">,</span> 

        <span class="token comment">/* 阻塞状态 */</span>
        <span class="token constant">BLOCKED</span> <span class="token punctuation">,</span> 

        <span class="token comment">/* 无限等待状态 */</span>
        <span class="token constant">WAITING</span> <span class="token punctuation">,</span> 

        <span class="token comment">/* 计时等待 */</span>
        <span class="token constant">TIMED_WAITING</span> <span class="token punctuation">,</span> 

        <span class="token comment">/* 终止 */</span>
        <span class="token constant">TERMINATED</span><span class="token punctuation">;</span>
    
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 获取当前线程的状态</span>
    <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> jdk<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>misc<span class="token punctuation">.</span><span class="token constant">VM</span><span class="token punctuation">.</span><span class="token function">toThreadState</span><span class="token punctuation">(</span>threadStatus<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过源码我们可以看到Java中的线程存在6种状态，每种线程状态的含义如下</p><table><thead><tr><th>线程状态</th><th>具体含义</th></tr></thead><tbody><tr><td>NEW</td><td>一个尚未启动的线程的状态。也称之为初始状态、开始状态。线程刚被创建，但是并未启动。还没调用start方法。MyThread t = new MyThread()只有线程象，没有线程特征。</td></tr><tr><td>RUNNABLE</td><td>当我们调用线程对象的start方法，那么此时线程对象进入了RUNNABLE状态。那么此时才是真正的在JVM进程中创建了一个线程，线程一经启动并不是立即得到执行，线程的运行与否要听令与CPU的调度，那么我们把这个中间状态称之为可执行状态(RUNNABLE)也就是说它具备执行的资格，但是并没有真正的执行起来而是在等待CPU的度。</td></tr><tr><td>BLOCKED</td><td>当一个线程试图获取一个对象锁，而该对象锁被其他的线程持有，则该线程进入Blocked状态；当该线程持有锁时，该线程将变成Runnable状态。</td></tr><tr><td>WAITING</td><td>一个正在等待的线程的状态。也称之为等待状态。造成线程等待的原因有两种，分别是调用Object.wait()、join()方法。处于等待状态的线程，正在等待其他线程去执行一个特定的操作。例如：因为wait()而等待的线程正在等待另一个线程去调用notify()或notifyAll()；一个因为join()而等待的线程正在等待另一个线程结束。</td></tr><tr><td>TIMED_WAITING</td><td>一个在限定时间内等待的线程的状态。也称之为限时等待状态。造成线程限时等待状态的原因有三种，分别是：Thread.sleep(long)，Object.wait(long)、join(long)。</td></tr><tr><td>TERMINATED</td><td>一个完全运行完成的线程的状态。也称之为终止状态、结束状态</td></tr></tbody></table><p>各个状态的转换，如下图所示：</p><figure><img src="`+d+'" alt="1591163781941" tabindex="0" loading="lazy"><figcaption>1591163781941</figcaption></figure>',21);function u(v,m){return s(),t("div",null,[o,e(" more "),r])}const b=a(p,[["render",u],["__file","Javase10.html.vue"]]);export{b as default};
