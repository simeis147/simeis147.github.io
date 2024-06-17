import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as n}from"./app-n7-iX-IR.js";const l={},t=n(`<h1 id="计算机网络02" tabindex="-1"><a class="header-anchor" href="#计算机网络02"><span>计算机网络02</span></a></h1><h2 id="_1-snmp协议的概念" tabindex="-1"><a class="header-anchor" href="#_1-snmp协议的概念"><span>1 snmp协议的概念</span></a></h2><p>SNMP（Simple Network Management Protocol）是一种用于网络管理的应用层协议，它可以在网络中的设备之间进行通信和信息交换，从而实现对网络设备的监控、配置和管理。SNMP协议定义了一组标准的消息格式和协议操作，可以实现对网络设备的远程管理和监控。</p><p><strong>SNMP协议主要包括以下几个部分</strong>：</p><ol><li><p>管理站：指执行网络管理任务的计算机或者设备，使用SNMP协议向网络设备发送请求，获取设备的状态信息。</p></li><li><p>管理代理：指网络设备上的软件模块，用于响应管理站的请求，提供设备的状态信息和配置数据。</p></li><li><p>管理信息库：指保存在管理代理中的设备状态信息和配置数据，可以由管理站查询和修改。</p></li><li><p>管理对象：指网络设备中的各种资源，例如接口、路由表、系统信息等，可以由管理站查询和配置。</p></li></ol><p><strong>SNMP协议通常使用UDP协议进行通信，它支持三种主要的操作</strong>：</p><ol><li><p>Get：指获取一个或多个管理对象的值，管理站向管理代理发送Get请求，管理代理返回管理对象的值。</p></li><li><p>Set：指设置一个或多个管理对象的值，管理站向管理代理发送Set请求，管理代理设置管理对象的值。</p></li><li><p>Trap：指在管理代理发生重要事件时主动向管理站发送通知，例如设备出现故障或者网络流量超过阈值等。</p></li></ol><p>SNMP协议是一个重要的网络管理协议，它可以帮助网络管理员实现对网络设备的远程监控和管理，提高网络的可靠性和性能。同时，SNMP协议也具有一定的安全风险，因此在使用SNMP协议时需要采取适当的安全措施，例如使用安全版本的SNMP协议和加密传输等。</p><h2 id="_2-交换机阻断和iptables防火墙阻断的原理和实现" tabindex="-1"><a class="header-anchor" href="#_2-交换机阻断和iptables防火墙阻断的原理和实现"><span>2 交换机阻断和iptables防火墙阻断的原理和实现</span></a></h2><h3 id="_2-1-交换机阻断原理" tabindex="-1"><a class="header-anchor" href="#_2-1-交换机阻断原理"><span>2.1 交换机阻断原理</span></a></h3><p>交换机阻断（Port Security）是一种网络安全措施，可以限制接入网络的设备数量，并防止未经授权的设备接入网络。</p><p>交换机阻断通常可以通过以下两种方式来实现：</p><ol><li><p>静态MAC地址绑定：在交换机上配置一个静态MAC地址表，将每个接口绑定到特定的MAC地址上。当网络设备连接到交换机的接口上时，交换机会检查设备的MAC地址是否在该接口的绑定列表中，如果不在，则该接口被阻断，设备无法连接到网络。</p></li><li><p>动态MAC地址学习：交换机可以动态学习每个接口连接的设备的MAC地址，并将其记录在MAC地址表中。当新设备连接到交换机的接口上时，交换机会将其MAC地址添加到MAC地址表中，并检查该MAC地址是否超过了预定义的阈值（通常是1或2个设备），如果超过了阈值，则该接口被阻断，设备无法连接到网络。</p></li></ol><h3 id="_2-2-交换机阻断的实现" tabindex="-1"><a class="header-anchor" href="#_2-2-交换机阻断的实现"><span>2.2 交换机阻断的实现</span></a></h3><h3 id="_2-3-iptables防火墙阻断的原理" tabindex="-1"><a class="header-anchor" href="#_2-3-iptables防火墙阻断的原理"><span>2.3 iptables防火墙阻断的原理</span></a></h3><p>iptables是Linux系统中的一个防火墙软件，用于过滤和管理网络数据包。它的阻断原理可以简单概括为以下三个步骤：</p><ol><li><p>匹配规则：iptables会按照事先定义好的规则对接收到的每个网络数据包进行匹配。规则可以根据IP地址、端口号、协议类型等多个条件来匹配。</p></li><li><p>判断动作：如果匹配成功，iptables会根据规则中定义的动作来判断是否阻断该数据包。常见的动作包括DROP（丢弃该数据包）、REJECT（拒绝该数据包并向发送端发送一个错误消息）和ACCEPT（接受该数据包）。</p></li><li><p>执行动作：如果匹配成功且判断动作为DROP或REJECT，则iptables会阻断该数据包；否则，iptables会允许该数据包通过防火墙并传递到下一层网络设备。</p></li></ol><h3 id="_2-4-iptables防火墙阻断的实现" tabindex="-1"><a class="header-anchor" href="#_2-4-iptables防火墙阻断的实现"><span>2.4 iptables防火墙阻断的实现</span></a></h3><h2 id="_3-主动扫描和被动扫描的区别" tabindex="-1"><a class="header-anchor" href="#_3-主动扫描和被动扫描的区别"><span>3 主动扫描和被动扫描的区别</span></a></h2><p>主动扫描和被动扫描是网络安全中两种常见的扫描方式，它们的区别如下：</p><ol><li><p>主动扫描：是指通过专门的扫描工具，对网络中的目标进行主动扫描，以便发现目标的漏洞和弱点。主动扫描通常需要事先对目标进行信息收集，例如获取目标的IP地址、端口和服务信息等，然后使用专门的扫描工具对目标进行扫描。主动扫描具有主动性、准确性和高效性等特点，但也容易引起目标系统的警觉和防御。</p></li><li><p>被动扫描：是指通过对网络流量进行监听和分析，发现网络中的目标漏洞和弱点。被动扫描通常不需要对目标进行主动扫描，而是通过对目标系统的网络流量进行分析，发现其中的异常或者恶意行为。被动扫描具有隐蔽性和针对性等特点，但需要对网络流量进行实时监控和分析，并且可能会误报或漏报目标的漏洞和弱点。</p></li></ol><h2 id="_4-写一个多线程的java实例" tabindex="-1"><a class="header-anchor" href="#_4-写一个多线程的java实例"><span>4 写一个多线程的Java实例</span></a></h2><blockquote><p>不要完全照搬网上，结合自己的一些想法，写一个带点业务性质的实例</p></blockquote><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> BankAccount</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> double</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> balance</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // 银行账户余额</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> BankAccount</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">double</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> balance</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">balance</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> balance;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 取款操作</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> synchronized</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> withdraw</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">double</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> amount</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (balance </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> amount) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">currentThread</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;正在取款：&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> amount);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            balance </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> amount;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">currentThread</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;取款成功，余额为：&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> balance);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">currentThread</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;取款失败，余额不足！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        BankAccount</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> account</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> BankAccount</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 初始化银行账户余额为1000元</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 创建多个线程模拟多个客户进行取款操作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> t1</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> account</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">withdraw</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;客户A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> t2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> account</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">withdraw</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;客户B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> t3</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> account</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">withdraw</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;客户C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 启动多个线程，进行取款操作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        t1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        t2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        t3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-建两张表-主、从表-然后关联查询出对应的信息" tabindex="-1"><a class="header-anchor" href="#_5-建两张表-主、从表-然后关联查询出对应的信息"><span>5 建两张表，主、从表，然后关联查询出对应的信息</span></a></h2><blockquote><p>如：ipv4信息表，ipv4端口表，需要关联两张表查询出对应的IP信息和端口信息</p></blockquote><p>假设有两张表ipv4和ipv4_port，ipv4表中包含ipv4地址的信息，ipv4_port表中包含ipv4地址的端口信息，可以通过以下SQL语句实现关联查询：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> ipv4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">ip</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">ipv4_port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">ipv4_port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">service</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ipv4</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">LEFT JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ipv4_port </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> ipv4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">ip</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> ipv4_port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">ip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述SQL语句中，使用LEFT JOIN关键字将ipv4和ipv4_port表进行关联，关联条件为ipv4表中的ip字段和ipv4_port表中的ip字段相等。SELECT语句中选择ipv4表中的ip字段，ipv4_port表中的port字段和service字段。</p><p>LEFT JOIN关键字表示左连接，即返回左表（ipv4表）中所有记录，以及匹配右表（ipv4_port表）中的记录。如果没有匹配的记录，则返回NULL。如果需要返回右表中所有记录，则可以使用RIGHT JOIN关键字。如果需要返回两个表中都存在的记录，则可以使用INNER JOIN关键字。</p>`,30),h=[t];function p(e,k){return a(),s("div",null,h)}const B=i(l,[["render",p],["__file","computernetwork02.html.vue"]]),g=JSON.parse('{"path":"/ComputerBasics/ComputerNetwork/computernetwork02.html","title":"计算机网络02","lang":"zh-CN","frontmatter":{"order":2,"date":"2023-05-12T00:00:00.000Z","category":["计算机网络"],"description":"计算机网络02 1 snmp协议的概念 SNMP（Simple Network Management Protocol）是一种用于网络管理的应用层协议，它可以在网络中的设备之间进行通信和信息交换，从而实现对网络设备的监控、配置和管理。SNMP协议定义了一组标准的消息格式和协议操作，可以实现对网络设备的远程管理和监控。 SNMP协议主要包括以下几个部分：...","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/ComputerNetwork/computernetwork02.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"计算机网络02"}],["meta",{"property":"og:description","content":"计算机网络02 1 snmp协议的概念 SNMP（Simple Network Management Protocol）是一种用于网络管理的应用层协议，它可以在网络中的设备之间进行通信和信息交换，从而实现对网络设备的监控、配置和管理。SNMP协议定义了一组标准的消息格式和协议操作，可以实现对网络设备的远程管理和监控。 SNMP协议主要包括以下几个部分：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-12T17:23:38.000Z"}],["meta",{"property":"article:published_time","content":"2023-05-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-12T17:23:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计算机网络02\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-12T17:23:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1 snmp协议的概念","slug":"_1-snmp协议的概念","link":"#_1-snmp协议的概念","children":[]},{"level":2,"title":"2 交换机阻断和iptables防火墙阻断的原理和实现","slug":"_2-交换机阻断和iptables防火墙阻断的原理和实现","link":"#_2-交换机阻断和iptables防火墙阻断的原理和实现","children":[{"level":3,"title":"2.1 交换机阻断原理","slug":"_2-1-交换机阻断原理","link":"#_2-1-交换机阻断原理","children":[]},{"level":3,"title":"2.2 交换机阻断的实现","slug":"_2-2-交换机阻断的实现","link":"#_2-2-交换机阻断的实现","children":[]},{"level":3,"title":"2.3 iptables防火墙阻断的原理","slug":"_2-3-iptables防火墙阻断的原理","link":"#_2-3-iptables防火墙阻断的原理","children":[]},{"level":3,"title":"2.4 iptables防火墙阻断的实现","slug":"_2-4-iptables防火墙阻断的实现","link":"#_2-4-iptables防火墙阻断的实现","children":[]}]},{"level":2,"title":"3 主动扫描和被动扫描的区别","slug":"_3-主动扫描和被动扫描的区别","link":"#_3-主动扫描和被动扫描的区别","children":[]},{"level":2,"title":"4 写一个多线程的Java实例","slug":"_4-写一个多线程的java实例","link":"#_4-写一个多线程的java实例","children":[]},{"level":2,"title":"5 建两张表，主、从表，然后关联查询出对应的信息","slug":"_5-建两张表-主、从表-然后关联查询出对应的信息","link":"#_5-建两张表-主、从表-然后关联查询出对应的信息","children":[]}],"git":{"createdTime":1683912218000,"updatedTime":1683912218000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":1}]},"readingTime":{"minutes":6.33,"words":1899},"filePathRelative":"ComputerBasics/ComputerNetwork/computernetwork02.md","localizedDate":"2023年5月12日","excerpt":"","autoDesc":true}');export{B as comp,g as data};