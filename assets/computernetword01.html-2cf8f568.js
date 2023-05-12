import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as e,b as a,e as n,f as s}from"./app-79b1d788.js";const o={},c=a('<h1 id="计算机网络01" tabindex="-1"><a class="header-anchor" href="#计算机网络01" aria-hidden="true">#</a> 计算机网络01</h1><h2 id="_1-网桥模式、路由模式、nat模式、旁路模式" tabindex="-1"><a class="header-anchor" href="#_1-网桥模式、路由模式、nat模式、旁路模式" aria-hidden="true">#</a> 1 网桥模式、路由模式、NAT模式、旁路模式</h2><h3 id="_1-1-网桥模式" tabindex="-1"><a class="header-anchor" href="#_1-1-网桥模式" aria-hidden="true">#</a> 1.1 网桥模式</h3><ul><li><p>网桥模式是计算机网络中的一种网络设备工作模式，它可以连接多个局域网（LAN）并转发数据帧以实现不同网段之间的通信。网桥是一个二层设备，它在物理层和数据链路层工作，可以识别数据帧的目的MAC地址，并将数据帧转发到正确的目标端口。网桥可以减少网络中的广播风暴，提高网络性能和安全性。</p><p>在网桥模式中，多个局域网连接到网桥的不同端口上，网桥通过学习每个端口上连接的设备的MAC地址，建立一个MAC地址表，从而可以转发数据帧到正确的目标端口。当数据帧到达网桥时，网桥会检查数据帧的目的MAC地址，并将数据帧转发到MAC地址表中对应的端口上，如果该地址不在MAC地址表中，则将数据帧广播到所有端口上，以便学习新的MAC地址。</p></li></ul><h3 id="_1-2-路由模式" tabindex="-1"><a class="header-anchor" href="#_1-2-路由模式" aria-hidden="true">#</a> 1.2 路由模式</h3><ul><li><p>路由模式是计算机网络中的一种网络设备工作模式，它可以连接不同的网络，并通过转发IP数据包来实现跨网络的通信。路由器是一个三层设备，它在网络层工作，可以识别数据包的目的IP地址，并将数据包转发到正确的目标网络。</p><p>在路由模式中，多个网络连接到路由器的不同接口上，路由器通过学习每个接口连接的网络的IP地址，建立一个路由表，从而可以转发数据包到正确的目标网络。当数据包到达路由器时，路由器会检查数据包的目的IP地址，并将数据包根据路由表转发到正确的接口上，如果该地址不在路由表中，则将数据包发送到默认路由或者丢弃该数据包。</p></li></ul><h3 id="_1-3-nat模式" tabindex="-1"><a class="header-anchor" href="#_1-3-nat模式" aria-hidden="true">#</a> 1.3 NAT模式</h3><ul><li><p>NAT（网络地址转换）模式是计算机网络中的一种网络设备工作模式，它可以将私有网络内部的IP地址转换为公网IP地址，从而实现私有网络与公网之间的通信。NAT是一种在网络层上进行地址转换的技术，通常被用于家庭或企业内部的局域网中，以便让内部的设备访问互联网。</p><p>在NAT模式中，NAT设备连接到公网上，并分配一个公网IP地址，内部设备连接到NAT设备的私有网络上，通过NAT设备进行地址转换。当内部设备向公网发送数据时，NAT设备会将数据包的源IP地址改为NAT设备的公网IP地址，并分配一个唯一的端口号，从而实现与公网的通信。当公网向内部设备发送数据时，NAT设备会将数据包的目的IP地址和端口号转换为内部设备的IP地址和端口号，从而实现与内部设备的通信。</p><p>NAT模式可以实现多个内部设备共享一个公网IP地址，从而节省公网IP地址的使用。此外，NAT模式还可以提高网络的安全性，因为NAT设备可以过滤和阻止不合法的数据包，从而保护内部网络不受来自公网的攻击。</p><p>需要注意的是，NAT模式会引入一定的网络延迟和复杂性，因为数据包需要经过NAT设备的处理和转换。此外，在某些情况下，NAT模式可能会影响某些网络应用程序的正常运行，例如P2P应用程序或者视频会议应用程序，因为这些应用程序需要直接访问设备的IP地址。</p></li></ul><h3 id="_1-4-旁路模式" tabindex="-1"><a class="header-anchor" href="#_1-4-旁路模式" aria-hidden="true">#</a> 1.4 旁路模式</h3><ul><li><p>旁路模式是计算机网络中的一种网络设备工作模式，它是指网络设备在处理数据流时，将数据流旁路到专门的处理单元进行处理，同时保证数据流的正常转发。在旁路模式下，网络设备通常会配备专门的硬件加速器或者处理器，以处理网络流量的特定类型或者特定协议，例如防火墙、入侵检测系统、负载均衡器等。</p><p>在旁路模式下，网络设备通常会有两个或者多个网口，其中一个网口用于接收数据流，另外一个网口则用于将数据流旁路到处理单元进行处理，处理单元处理完毕后将数据流发送回来，再由网络设备将数据流转发到正确的目标设备。</p><p>旁路模式可以提高网络设备的性能和安全性，因为它可以将特定类型的网络流量优先处理，从而提高网络设备的处理效率和响应速度。例如，防火墙可以通过旁路模式来检测和阻止网络中的恶意流量，避免网络攻击和恶意软件的传播。</p><p>需要注意的是，旁路模式需要额外的硬件和软件支持，因此通常会增加网络设备的成本和复杂性。此外，如果处理单元出现故障或者性能不足，可能会影响网络设备的正常运行，因此在设计和部署旁路模式时需要考虑相关的风险和容错措施。</p></li></ul><h2 id="_2-ipv4的计算" tabindex="-1"><a class="header-anchor" href="#_2-ipv4的计算" aria-hidden="true">#</a> 2 IPV4的计算</h2><blockquote><p>如：192.168.2.0/16 有多少位IP地址，写一个正常IPV4转长整形类型、长整形类型转正常IPV4的不同方法</p></blockquote><h3 id="_2-1-192-168-2-0-16有多少位ip地址" tabindex="-1"><a class="header-anchor" href="#_2-1-192-168-2-0-16有多少位ip地址" aria-hidden="true">#</a> 2.1 192.168.2.0/16有多少位IP地址</h3>',13),l=n("p",null,[n("code",null,"192.168.2.0/16"),s(" 是一个 CIDR（无类别域间路由）表示方法的 IP 地址块"),n("br"),s(" 其中的 "),n("code",null,"/16"),s(" 表示这个地址块中有 16 位是"),n("strong",null,"网络地址"),s("，剩下的 32-16=16 位是"),n("strong",null,"主机地址"),n("br"),s(" 因此，这个地址块中有 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mn",null,"2"),n("mn",null,"16")])]),n("annotation",{encoding:"application/x-tex"},"2^{16}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8141em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"16")])])])])])])])])])])]),s(" 个 IP 地址可供分配，即 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mn",null,"2"),n("mn",null,"16")]),n("mo",null,"−"),n("mn",null,"2")]),n("annotation",{encoding:"application/x-tex"},"2^{16}-2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"16")])])])])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"2")])])]),s(" 个（因为其中的第一个和最后一个 IP 地址是网络地址和广播地址，不能分配给主机使用），即65534个IP地址")],-1),i=a(`<h3 id="_2-2-正常ipv4转长整形类型" tabindex="-1"><a class="header-anchor" href="#_2-2-正常ipv4转长整形类型" aria-hidden="true">#</a> 2.2 正常IPV4转长整形类型</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">ipToLong</span><span class="token punctuation">(</span><span class="token class-name">String</span> ipAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ipAddressInArray <span class="token operator">=</span> ipAddress<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ipAddressInArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> power <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">-</span> i<span class="token punctuation">;</span>
        <span class="token keyword">int</span> ip <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>ipAddressInArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        result <span class="token operator">+=</span> ip <span class="token operator">*</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">,</span> power<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法接受一个字符串类型的IPv4地址，将其拆分成四个整数，然后将这四个整数转换为长整型类型。具体地，将IP地址的每个部分乘以256的不同次幂，然后将它们相加，得到一个长整型类型的IP地址。</p><p>例如，将字符串 &quot;192.168.0.1&quot; 转换为长整型类型的IP地址：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> ipAddress <span class="token operator">=</span> <span class="token string">&quot;192.168.0.1&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> ipLong <span class="token operator">=</span> <span class="token function">ipToLong</span><span class="token punctuation">(</span>ipAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ipLong<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 3232235521</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，输出的结果 3232235521 就是该IP地址对应的长整型类型表示。</p><h3 id="_2-3-长整形类型转正常ipv4" tabindex="-1"><a class="header-anchor" href="#_2-3-长整形类型转正常ipv4" aria-hidden="true">#</a> 2.3 长整形类型转正常IPV4</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">longToIp</span><span class="token punctuation">(</span><span class="token keyword">long</span> ip<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sb<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>ip <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sb<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token char">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        ip <span class="token operator">=</span> ip <span class="token operator">&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法接受一个长整型类型的IP地址，将其转换为对应的IPv4地址。具体地，将长整型类型的IP地址从右向左逐个取出每个8位，转换成十进制数，并使用&quot;.&quot;连接四个部分，得到一个字符串类型的IPv4地址。</p><p>例如，将长整型类型的IP地址 3232235521 转换为IPv4地址：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">long</span> ipLong <span class="token operator">=</span> <span class="token number">3232235521L</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> ipAddress <span class="token operator">=</span> <span class="token function">longToIp</span><span class="token punctuation">(</span>ipLong<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ipAddress<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 192.168.0.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，输出的结果 &quot;192.168.0.1&quot; 就是该长整型类型的IP地址对应的IPv4地址表示。</p><h2 id="_3-校验一段字符串是否是ipv4" tabindex="-1"><a class="header-anchor" href="#_3-校验一段字符串是否是ipv4" aria-hidden="true">#</a> 3 校验一段字符串是否是IPV4</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isIpv4Address</span><span class="token punctuation">(</span><span class="token class-name">String</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>input <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> input<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>parts<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> part <span class="token operator">:</span> parts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>part<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> value <span class="token operator">&gt;</span> <span class="token number">255</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NumberFormatException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法接受一个字符串参数，用于检查该字符串是否是IPv4地址</p><ol><li>检查输入字符串是否为空或者null，如果是，则返回false</li><li>使用&quot;.&quot;分隔符将输入字符串拆分成四个字符串部分，如果拆分后的字符串部分数量不是4，则返回false</li><li>接着，该方法会逐个检查每个字符串部分是否是一个介于0和255之间的整数，如果不是，则返回false</li><li>最后，如果所有的检查都通过，则返回true，表示输入字符串是一个IPv4地址</li></ol><p>例如，检查字符串 &quot;192.168.0.1&quot; 是否是IPv4地址：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> input <span class="token operator">=</span> <span class="token string">&quot;192.168.0.1&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> isIpv4 <span class="token operator">=</span> <span class="token function">isIpv4Address</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>isIpv4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),u=[c,l,i];function r(k,d){return t(),e("div",null,u)}const h=p(o,[["render",r],["__file","computernetword01.html.vue"]]);export{h as default};
