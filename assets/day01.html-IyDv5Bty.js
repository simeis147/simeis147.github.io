import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as s,c as l,d as i,e,f as r,w as c,a as n}from"./app-HBWujhpY.js";const o={},u=n('<h1 id="linux-day01" tabindex="-1"><a class="header-anchor" href="#linux-day01" aria-hidden="true">#</a> Linux-Day01</h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1. 前言</h2><h3 id="_1-1-什么是linux" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是linux" aria-hidden="true">#</a> 1.1 什么是Linux</h3><p>Linux是一套免费使用和自由传播的操作系统</p><h3 id="_1-2-为什么要学linux" tabindex="-1"><a class="header-anchor" href="#_1-2-为什么要学linux" aria-hidden="true">#</a> 1.2 为什么要学Linux</h3><ol><li><p>企业用人要求</p><p>Linux操作系统提供了很多稳定的发行版本，广泛的应用在各种服务器操作系统领域，将来开发出来的项目，最终要上线运行，就需要将项目部署在Linux服务器中</p></li><li><p>个人发展需要</p><p>作为javaEE开发工程师，将来在企业中开发时会涉及到很多的数据库、中间件等技术，比如MySQL、Redis、MQ等技术，而这些应用软件大多都是需要安装在Linux系统中使用的</p><p>做为开发人员，是需要通过远程工具连接Linux操作系统，然后来操作这些软件的</p></li></ol><h3 id="_1-3-学完linux能干什么" tabindex="-1"><a class="header-anchor" href="#_1-3-学完linux能干什么" aria-hidden="true">#</a> 1.3 学完Linux能干什么</h3><figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605132241.png" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><p>环境搭建</p><p>系统安装：一般不会直接将Linux系统安装在本机电脑上，而会安装在公司的一台专门的服务器上</p><p>远程连接：要想使用服务器，一般都是通过远程连接工具连接Linux系统进行操作</p></li><li><p>常用命令</p><p>A. 文件、目录的基本操作(查看,删除,创建等)</p><p>B. 文件及文件夹的拷贝、移动、重命名</p><p>C. 文件的打包、压缩、解压缩操作</p><p>D. 文本的编辑</p></li><li><p>安装软件</p><p>比如： JDK、Tomcat、MySQL的安装及配置</p></li><li><p>项目部署</p><p>把基础的软件及环境安装配置好之后，可以将开发的项目部署在服务器中进行运行并测试</p></li></ol>',9),h=n(`<h2 id="_2-linux简介" tabindex="-1"><a class="header-anchor" href="#_2-linux简介" aria-hidden="true">#</a> 2. Linux简介</h2><h3 id="_2-1-主流操作系统" tabindex="-1"><a class="header-anchor" href="#_2-1-主流操作系统" aria-hidden="true">#</a> 2.1 主流操作系统</h3><p>不同领域的主流操作系统，主要分为以下这么几类：<br> 桌面操作系统、服务器操作系统、移动设备操作系统、嵌入式操作系统</p><ol><li><p>桌面操作系统</p><table><thead><tr><th>操作系统</th><th>特点</th></tr></thead><tbody><tr><td>Windows</td><td>用户数量最多</td></tr><tr><td>MacOS</td><td>操作体验好，办公人士首选</td></tr><tr><td>Linux</td><td>用户数量少(桌面操作系统,Linux使用较少)</td></tr></tbody></table></li><li><p>服务器操作系统</p><table><thead><tr><th>操作系统</th><th>特点</th></tr></thead><tbody><tr><td>Unix</td><td>安全、稳定、付费</td></tr><tr><td>Linux</td><td>安全、稳定、免费、占有率高</td></tr><tr><td>Windows Server</td><td>付费、占有率低</td></tr></tbody></table></li><li><p>移动设备操作系统</p><table><thead><tr><th>操作系统</th><th>特点</th></tr></thead><tbody><tr><td>Android</td><td>基于 Linux 、开源，主要用于智能手机、平板电脑和智能电视</td></tr><tr><td>IOS</td><td>苹果公司开发、不开源，用于苹果公司的产品，例如：iPhone、 iPad</td></tr></tbody></table></li><li><p>嵌入式操作系统</p><table><thead><tr><th>操作系统</th><th>特点</th></tr></thead><tbody><tr><td>Linux</td><td>机顶盒、路由器、交换机</td></tr></tbody></table></li></ol><h3 id="_2-2-linux发展历史" tabindex="-1"><a class="header-anchor" href="#_2-2-linux发展历史" aria-hidden="true">#</a> 2.2 Linux发展历史</h3><figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605132520.png" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>时间：1991年</p></li><li><p>地点：芬兰赫尔辛基大学</p></li><li><p>人物：Linus Torvalds（21岁）</p></li><li><p>语言：C语言、汇编语言</p></li><li><p>logo：企鹅</p></li><li><p>特点：免费、开源(源代码开放)、多用户(同时允许多个用户操作同一个Linux系统)、多任务(同时允许多个任务执行)</p></li></ul><h3 id="_2-3-linux系统版本" tabindex="-1"><a class="header-anchor" href="#_2-3-linux系统版本" aria-hidden="true">#</a> 2.3 Linux系统版本</h3><p>Linux系统的版本分为两种，分别是：<strong>内核版</strong> 和 <strong>发行版</strong></p><ol><li><p>内核版</p><ul><li><p>由Linus Torvalds及其团队开发、维护</p></li><li><p>免费、开源</p></li><li><p>负责控制硬件</p></li></ul></li><li><p>发行版</p><ul><li><p>基于Linux内核版进行扩展</p></li><li><p>由各个Linux厂商开发、维护</p></li><li><p>有收费版本和免费版本</p></li></ul></li></ol><table><thead><tr><th>发行版本</th><th>Logo</th><th>特点</th></tr></thead><tbody><tr><td>Ubuntu</td><td><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605132843.png" alt=" " loading="lazy"></td><td>以桌面应用为主</td></tr><tr><td>RedHat</td><td><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605132959.png" alt=" " loading="lazy"></td><td>应用最广泛、收费</td></tr><tr><td>CentOS</td><td><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605133056.png" alt=" " loading="lazy"></td><td>RedHat的社区版、免费</td></tr><tr><td>openSUSE</td><td><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605133109.png" alt=" " loading="lazy"></td><td>对个人完全免费、图形界面华丽</td></tr><tr><td>Fedora</td><td><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605133127.png" alt=" " loading="lazy"></td><td>功能完备、快速更新、免费</td></tr><tr><td>红旗Linux</td><td><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605133138.png" alt=" " loading="lazy"></td><td>北京中科红旗软件技术有限公司开发</td></tr></tbody></table><h2 id="_3-linux安装" tabindex="-1"><a class="header-anchor" href="#_3-linux安装" aria-hidden="true">#</a> 3. Linux安装</h2><h3 id="_3-1-安装方式介绍" tabindex="-1"><a class="header-anchor" href="#_3-1-安装方式介绍" aria-hidden="true">#</a> 3.1 安装方式介绍</h3><figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605133257.png" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th>方式</th><th>概述</th><th>场景</th></tr></thead><tbody><tr><td>物理机安装</td><td>直接将操作系统安装到服务器硬件上</td><td>企业开发中，服务器基本都是采用这种方式</td></tr><tr><td>虚拟机安装</td><td>通过虚拟机软件安装</td><td>没有自己服务器，学Linux，就可以安装在虚拟机上</td></tr></tbody></table><p><strong>虚拟机</strong>（Virtual Machine）指通过<strong>软件</strong>模拟的具有完整硬件系统功能、运行在完全隔离环境中的完整计算机系统</p><div class="hint-container tip"><p class="hint-container-title">常用虚拟机软件</p><ul><li>VMWare</li><li>VirtualBox</li><li>VMLite WorkStation</li><li>Qemu</li><li>HopeddotVOS</li></ul></div><h3 id="_3-2-linux目录结构" tabindex="-1"><a class="header-anchor" href="#_3-2-linux目录结构" aria-hidden="true">#</a> 3.2 Linux目录结构</h3><div class="hint-container tip"><p class="hint-container-title">Linux系统中的目录有以下特点</p><p>/ 是所有目录的顶点</p><p>目录结构像一颗倒挂的树</p></div><p><strong>Linux 和 Windows的目录结构对比:</strong></p><figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607171906.png" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Linux的目录结构，如下：</p><figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607171930.png" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>根目录/ 下各个目录的作用及含义说明</p><table><thead><tr><th>编号</th><th>目录</th><th>含义</th></tr></thead><tbody><tr><td>1</td><td>/bin</td><td>存放二进制可执行文件</td></tr><tr><td>2</td><td>/boot</td><td>存放系统引导时使用的各种文件</td></tr><tr><td>3</td><td>/dev</td><td>存放设备文件</td></tr><tr><td>4</td><td>/etc</td><td>存放系统配置文件</td></tr><tr><td>5</td><td>/home</td><td>存放系统用户的文件</td></tr><tr><td>6</td><td>/lib</td><td>存放程序运行所需的共享库和内核模块</td></tr><tr><td>7</td><td>/opt</td><td>额外安装的可选应用程序包所放置的位置</td></tr><tr><td>8</td><td>/root</td><td>超级用户目录</td></tr><tr><td>9</td><td>/sbin</td><td>存放二进制可执行文件，只有root用户才能访问</td></tr><tr><td>10</td><td>/tmp</td><td>存放临时文件</td></tr><tr><td>11</td><td>/usr</td><td>存放系统应用程序</td></tr><tr><td>12</td><td>/var</td><td>存放运行时需要改变数据的文件，例如日志文件</td></tr></tbody></table><h2 id="_4-linux常用命令" tabindex="-1"><a class="header-anchor" href="#_4-linux常用命令" aria-hidden="true">#</a> 4. Linux常用命令</h2><h3 id="_4-1-linux命令初体验" tabindex="-1"><a class="header-anchor" href="#_4-1-linux命令初体验" aria-hidden="true">#</a> 4.1 Linux命令初体验</h3><h4 id="_4-1-1-常用命令演示" tabindex="-1"><a class="header-anchor" href="#_4-1-1-常用命令演示" aria-hidden="true">#</a> 4.1.1 常用命令演示</h4><table><thead><tr><th>序号</th><th>命令</th><th>对应英文</th><th>作用</th></tr></thead><tbody><tr><td>1</td><td>ls [目录名]</td><td>list</td><td>查看当前目录下的内容</td></tr><tr><td>2</td><td>pwd</td><td>print work directory</td><td>查看当前所在目录</td></tr><tr><td>3</td><td>cd [目录名]</td><td>change directory</td><td>切换目录</td></tr><tr><td>4</td><td>touch [文件名]</td><td>touch</td><td>如果文件不存在,创建文件</td></tr><tr><td>5</td><td>mkdir [目录名]</td><td>make directory</td><td>创建目录</td></tr><tr><td>6</td><td>rm [文件名]</td><td>remove</td><td>删除指定文件</td></tr></tbody></table><h4 id="_4-1-2-linux命令使用技巧" tabindex="-1"><a class="header-anchor" href="#_4-1-2-linux命令使用技巧" aria-hidden="true">#</a> 4.1.2 Linux命令使用技巧</h4><ol><li><p>Tab键自动补全</p></li><li><p>连续两次Tab键，给出操作提示</p></li><li><p>使用上下箭头快速调出曾经使用过的命令</p></li><li><p>使用clear命令或者Ctrl+l快捷键实现清屏</p></li></ol><h4 id="_4-1-3-linux命令格式" tabindex="-1"><a class="header-anchor" href="#_4-1-3-linux命令格式" aria-hidden="true">#</a> 4.1.3 Linux命令格式</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>command <span class="token url">[<span class="token content">-options</span>] [<span class="token variable">parameter</span>]</span>

说明: 
    command:  命令名
    <span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">-options</span><span class="token punctuation">]</span><span class="token punctuation">:</span>  选项，可用来对命令进行控制，也可以省略</span>
    <span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">parameter</span><span class="token punctuation">]</span><span class="token punctuation">:</span> 传给命令的参数，可以是零个、一个或者多个</span>

注意: 
    [] 代表可选
    命令名、选项、参数之间有空格进行分隔
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例:</strong></p><figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607172347.png" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-2-文件目录操作命令" tabindex="-1"><a class="header-anchor" href="#_4-2-文件目录操作命令" aria-hidden="true">#</a> 4.2 文件目录操作命令</h3><h4 id="_4-2-1-ls" tabindex="-1"><a class="header-anchor" href="#_4-2-1-ls" aria-hidden="true">#</a> 4.2.1 ls</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 显示指定目录下的内容
语法: ls <span class="token url">[<span class="token content">-al</span>] [<span class="token variable">dir</span>]</span>
说明: 
    -a 显示所有文件及目录 (. 开头的隐藏文件也会列出)
    -l 除文件名称外，同时将文件型态(d表示目录，-表示文件)、权限、拥有者、文件大小等息详细列出

注意: 
    由于我们使用ls命令时经常需要加入-l选项，所以Linux为ls -l命令提供了一种简写方式，即ll

常见用法: 
    ls -al  查看当前目录的所有文件及目录详细信息
    ls -al /etc   查看/etc目录下所有文件及目录详细信息
    ll     查看当前目录文件及目录的详细信息 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-2-cd" tabindex="-1"><a class="header-anchor" href="#_4-2-2-cd" aria-hidden="true">#</a> 4.2.2 cd</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 用于切换当前工作目录，即进入指定目录
语法: cd [dirName]

特殊说明: 
    <span class="token strike"><span class="token punctuation">~</span><span class="token content">   表示用户的home目录
    .   表示目前所在的目录
    ..  表示目前目录位置的上级目录
        
举例: 
    cd  ..      切换到当前目录的上级目录
    cd  </span><span class="token punctuation">~</span></span>       切换到用户的home目录
    cd  /usr/loca   切换到/usr/local目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>备注:</p><p>​root用户 /root</p><p>​其他用户 /home/xxx</p></blockquote><h4 id="_4-2-3-cat" tabindex="-1"><a class="header-anchor" href="#_4-2-3-cat" aria-hidden="true">#</a> 4.2.3 cat</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 用于显示文件内容
语法: cat [-n] fileName

说明:
    -n: 由1开始对所有输出的行数编号

举例:
    cat /etc/profile    查看/etc目录下的profile文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cat 指令会一次性查看文件的所有内容，如果文件内容比较多，这个时候查看起来就不是很方便了，这个时候可以通过一个新的指令more</p><h4 id="_4-2-4-more" tabindex="-1"><a class="header-anchor" href="#_4-2-4-more" aria-hidden="true">#</a> 4.2.4 more</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 以分页的形式显示文件内容
语法: more fileName

操作说明:
    回车键 向下滚动一行
    空格键 向下滚动一屏
    b 返回上一屏
    q或者Ctrl+C退出more

举例：
    more /etc/profile 以分页方式显示/etc目录下的profile文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-5-tail" tabindex="-1"><a class="header-anchor" href="#_4-2-5-tail" aria-hidden="true">#</a> 4.2.5 tail</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 查看文件末尾的内容
语法: tail [-f] fileName

说明:
    -f : 动态读取文件末尾内容并显示，通常用于日志文件的内容输出
        
举例: 
tail /etc/profile   显示/etc目录下的profile文件末尾10行的内容
tail -20 /etc/profile   显示/etc目录下的profile文件末尾20行的内容
tail -f /itcast/my.log  动态读取/itcast目录下的my.log文件末尾内容并显示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-6-mkdir" tabindex="-1"><a class="header-anchor" href="#_4-2-6-mkdir" aria-hidden="true">#</a> 4.2.6 mkdir</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 创建目录
语法: mkdir [-p] dirName

说明: 
    -p: 确保目录名称存在，不存在的就创建一个  通过此选项，可以实现多层目录同时创建

举例: 
    mkdir itcast  在当前目录下，建立一个名为itcast的子目录
    mkdir -p itcast/test   在工作目录下的itcast目录中建立一个名为test的子目录，若itcast目录不存在，则建立一个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-7-rmdir" tabindex="-1"><a class="header-anchor" href="#_4-2-7-rmdir" aria-hidden="true">#</a> 4.2.7 rmdir</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 删除空目录
语法: rmdir [-p] dirName

说明:
    -p: 当子目录被删除后使父目录为空目录的话，则一并删除

举例:
    rmdir itcast   删除名为itcast的空目录
    rmdir -p itcast/test   删除itcast目录中名为test的子目录，若test目录删除后itcast目录变为空目录，则也被删除
    rmdir itcast*   删除名称以itcast开始的空目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>*: 是一个通配符，代表任意字符；</p><p>rmdir itcast* : 删除以itcast开头的目录</p><p>rmdir *itcast : 删除以itcast结尾的目录</p></blockquote><h4 id="_4-2-8-rm" tabindex="-1"><a class="header-anchor" href="#_4-2-8-rm" aria-hidden="true">#</a> 4.2.8 rm</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 删除文件或者目录
语法: rm [-rf] name

说明: 
    -r: 将目录及目录中所有文件（目录）逐一删除，即递归删除
    -f: 无需确认，直接删除
        
举例: 
    rm -r itcast/     删除名为itcast的目录和目录中所有文件，删除前需确认
    rm -rf itcast/    无需确认，直接删除名为itcast的目录和目录中所有文件
    rm -f hello.txt   无需确认，直接删除hello.txt文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>注意: 对于 rm -rf xxx 这样的指令，在执行的时候，一定要慎重，确认无误后再进行删除，避免误删</mark></p><h3 id="_4-3-拷贝移动命令" tabindex="-1"><a class="header-anchor" href="#_4-3-拷贝移动命令" aria-hidden="true">#</a> 4.3 拷贝移动命令</h3><h4 id="_4-3-1-cp" tabindex="-1"><a class="header-anchor" href="#_4-3-1-cp" aria-hidden="true">#</a> 4.3.1 cp</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 用于复制文件或目录
语法: cp [-r] source dest

说明: 
    -r: 如果复制的是目录需要使用此选项，此时将复制该目录下所有的子目录和文件

举例: 
    cp hello.txt itcast/            将hello.txt复制到itcast目录中
    cp hello.txt ./hi.txt           将hello.txt复制到当前目录，并改名为hi.txt
    cp -r itcast/ ./itheima/        将itcast目录和目录下所有文件复制到itheima目录下
    cp -r itcast/* ./itheima/       将itcast目录下所有文件复制到itheima目录下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-2-mv" tabindex="-1"><a class="header-anchor" href="#_4-3-2-mv" aria-hidden="true">#</a> 4.3.2 mv</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 为文件或目录改名、或将文件或目录移动到其它位置
语法: mv source dest

举例: 
    mv hello.txt hi.txt                 将hello.txt改名为hi.txt
    mv hi.txt itheima/                  将文件hi.txt移动到itheima目录中
    mv hi.txt itheima/hello.txt         将hi.txt移动到itheima目录中，并改名为hello.txt
    mv itcast/ itheima/                 如果itheima目录不存在，将itcast目录改名为itheima
    mv itcast/ itheima/                 如果itheima目录存在，将itcast目录移动到itheima目录中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-打包压缩命令" tabindex="-1"><a class="header-anchor" href="#_4-4-打包压缩命令" aria-hidden="true">#</a> 4.4 打包压缩命令</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 对文件进行打包、解包、压缩、解压
语法: tar  [-zcxvf]  fileName  [files]
    包文件后缀为.tar表示只是完成了打包，并没有压缩
    包文件后缀为.tar.gz表示打包的同时还进行了压缩

说明:
    -z: z代表的是gzip，通过gzip命令处理文件，gzip可以对文件压缩或者解压
    -c: c代表的是create，即创建新的包文件
    -x: x代表的是extract，实现从包文件中还原文件
    -v: v代表的是verbose，显示命令的执行过程
    -f: f代表的是file，用于指定包文件的名称

举例：
    打包
        tar -cvf hello.tar ./<span class="token italic"><span class="token punctuation">*</span><span class="token content">          将当前目录下所有文件打包，打包后的文件名为hello.tar
        tar -zcvf hello.tar.gz ./</span><span class="token punctuation">*</span></span>      将当前目录下所有文件打包并压缩，打包后的文件名为hello.tar.gz
              
<span class="token code keyword">    解包
        tar -xvf hello.tar              将hello.tar文件进行解包，并将解包后的文件放在当前目录
        tar -zxvf hello.tar.gz          将hello.tar.gz文件进行解压，并将解压后的文件放在当前目录
        tar -zxvf hello.tar.gz -C /usr/local     将hello.tar.gz文件进行解压，并将解压后的文件放在/usr/local目录</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-文本编辑命令" tabindex="-1"><a class="header-anchor" href="#_4-5-文本编辑命令" aria-hidden="true">#</a> 4.5 文本编辑命令</h3><p>文本编辑的命令，主要包含两个: <code>vi</code> 和 <code>vim</code> ，两个命令的用法类似</p><h4 id="_4-5-1-vi-vim介绍" tabindex="-1"><a class="header-anchor" href="#_4-5-1-vi-vim介绍" aria-hidden="true">#</a> 4.5.1 vi&amp;vim介绍</h4><p>作用: vi命令是Linux系统提供的一个文本编辑工具，可以对文件内容进行编辑，类似于Windows中的记事本</p><p>语法: vi fileName</p><p>说明:<br> 1.vim是从vi发展来的一个功能更加强大的文本编辑工具，编辑文件时可以对文本内容进行着色，方便我们对文件进行编辑处理，所以实际工作中vim更加常用<br> 2.要使用vim命令，安装：<code>yum install vim</code></p><h4 id="_4-5-2-vim安装" tabindex="-1"><a class="header-anchor" href="#_4-5-2-vim安装" aria-hidden="true">#</a> 4.5.2 vim安装</h4><p>命令： yum install vim</p><h4 id="_4-5-3-vim使用" tabindex="-1"><a class="header-anchor" href="#_4-5-3-vim使用" aria-hidden="true">#</a> 4.5.3 vim使用</h4><p>作用: 对文件内容进行编辑，vim其实就是一个文本编辑器<br> 语法: vim fileName<br> 说明:<br> 1. 在使用vim命令编辑文件时，如果指定的文件存在则直接打开此文件 如果指定的文件不 存在则新建文件<br> 2. vim在进行文本编辑时共分为三种模式，分别是 命令模式（Command mode），插入模式（Insert mode）和底行模式（Last line mode） 这三种模式之间可以相互切换 我们在使用vim时一定要注意我们当前所处的是哪种模式</p><p>三种模式:<br> A. 命令模式下可以查看文件内容、移动光标（上下左右箭头、gg、G）<br> B. 通过vim命令打开文件后，默认进入命令模式<br> C. 另外两种模式需要首先进入命令模式，才能进入彼此</p><table><thead><tr><th>命令模式指令</th><th>含义</th></tr></thead><tbody><tr><td>gg</td><td>定位到文本内容的第一行</td></tr><tr><td>G</td><td>定位到文本内容的最后一行</td></tr><tr><td>dd</td><td>删除光标所在行的数据</td></tr><tr><td>ndd</td><td>删除当前光标所在行及之后的n行数据</td></tr><tr><td>u</td><td>撤销操作</td></tr><tr><td>shift+zz</td><td>保存并退出</td></tr><tr><td>i 或 a 或 o</td><td>进入插入模式</td></tr></tbody></table><ul><li><p>插入模式 A. 插入模式下可以对文件内容进行编辑 B. 在命令模式下按下[i,a,o]任意一个，可以进入插入模式 进入插入模式后，下方会出现【insert】字样 C. 在插入模式下按下ESC键，回到命令模式</p></li><li><p>底行模式 A. 底行模式下可以通过命令对文件内容进行查找、显示行号、退出等操作 B. 在命令模式下按下[:,/]任意一个，可以进入底行模式 C. 通过/方式进入底行模式后，可以对文件内容进行查找 D. 通过:方式进入底行模式后，可以输入wq（保存并退出）、q!（不保存退出）、set nu（显示行号）</p></li></ul><table><thead><tr><th>底行模式命令</th><th>含义</th></tr></thead><tbody><tr><td>:wq</td><td>保存并退出</td></tr><tr><td>:q!</td><td>不保存退出</td></tr><tr><td>:set nu</td><td>显示行号</td></tr><tr><td>:set nonu</td><td>取消行号显示</td></tr><tr><td>:n</td><td>定位到第n行, 如 :10 就是定位到第10行</td></tr></tbody></table><figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607172946.png" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>操作示例:</p><figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607173006.png" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-6-查找命令" tabindex="-1"><a class="header-anchor" href="#_4-6-查找命令" aria-hidden="true">#</a> 4.6 查找命令</h3><h4 id="_4-6-1-find" tabindex="-1"><a class="header-anchor" href="#_4-6-1-find" aria-hidden="true">#</a> 4.6.1 find</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 在指定目录下查找文件
语法: find dirName -option fileName
举例:
    find  .  –name &quot;<span class="token italic"><span class="token punctuation">*</span><span class="token content">.java&quot; 在当前目录及其子目录下查找.java结尾文件
    find  /itcast  -name &quot;</span><span class="token punctuation">*</span></span>.java&quot; 在/itcast目录及其子目录下查找.java结尾的文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例:</strong></p><figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607173041.png" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_4-6-2-grep" tabindex="-1"><a class="header-anchor" href="#_4-6-2-grep" aria-hidden="true">#</a> 4.6.2 grep</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用: 从指定文件中查找指定的文本内容
语法: grep word fileName
举例: 
    grep Hello HelloWorld.java 查找HelloWorld.java文件中出现的Hello字符串的位置
    grep hello *.java       查找当前目录中所有.java结尾的文件中包含hello字符串的位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例:</strong></p><figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607173104.png" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,89);function v(m,p){const t=a("font");return s(),l("div",null,[u,i("p",null,[i("strong",null,[e("对于Linux的常用指令的学习，最好的学习方法就是："),r(t,{color:"red",size:"7"},{default:c(()=>[e("多敲")]),_:1})])]),h])}const x=d(o,[["render",v],["__file","day01.html.vue"]]);export{x as default};
