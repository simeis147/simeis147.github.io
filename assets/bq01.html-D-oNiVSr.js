import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as r,c as s,b as e,d as i,e as o,a as t}from"./app-CDx1G-C5.js";const p={},h=t('<h1 id="基础级问题01" tabindex="-1"><a class="header-anchor" href="#基础级问题01"><span>基础级问题01</span></a></h1><h2 id="栈的概念、性质、应用" tabindex="-1"><a class="header-anchor" href="#栈的概念、性质、应用"><span>栈的概念、性质、应用</span></a></h2><h3 id="栈的基本概念" tabindex="-1"><a class="header-anchor" href="#栈的基本概念"><span>栈的基本概念</span></a></h3><p><strong>栈（Stack）</strong> 是一种基本的数据结构，它遵循 <strong>先进后出</strong> （Last In, First Out，LIFO）的原则。这意味着最后进入栈的元素将首先被移除。</p><p>栈常用一维数组或链表来实现，用数组实现的栈叫作 <strong>顺序栈</strong> ，用链表实现的栈叫作 <strong>链式栈</strong> 。</p><h3 id="栈的基本操作" tabindex="-1"><a class="header-anchor" href="#栈的基本操作"><span>栈的基本操作</span></a></h3><ol><li><p><strong>push</strong>：将元素插入栈顶，栈顶元素被移除。</p></li><li><p><strong>pop</strong>：将栈顶元素移除。</p></li><li><p><strong>Peek</strong>：查看栈顶元素，但不移除。</p></li><li><p><strong>isEmpty</strong>：判断栈是否为空。</p></li><li><p><strong>size</strong>：返回栈中元素的个数。</p></li><li><p><strong>toString</strong>：返回栈中元素的字符串表示。</p></li></ol><h3 id="栈的性质" tabindex="-1"><a class="header-anchor" href="#栈的性质"><span>栈的性质</span></a></h3><ol><li><p><strong>后进先出（Last In, First Out，LIFO）</strong>： 栈中最后进入的元素是第一个被访问或移除的。这是栈最基本的性质，决定了栈的操作顺序。</p></li><li><p><strong>只能在栈顶操作</strong>： 栈的操作限定在栈顶进行。元素的添加（压栈）、访问（查看栈顶元素）、移除（弹栈）都只能在栈顶进行，而不能在栈的中间或底部进行操作。</p></li><li><p><strong>限定操作</strong>： 栈的操作通常包括压栈（Push）和弹栈（Pop）。压栈是将元素添加到栈顶，弹栈是从栈顶移除元素。其他可能的操作包括查看栈顶元素（Peek）和判空（isEmpty）。</p></li><li><p><strong>逻辑上的一维性</strong>： 栈的结构是一维的，只有一个方向，即从栈底到栈顶。这简化了栈的实现和理解。</p></li></ol><h3 id="栈的应用" tabindex="-1"><a class="header-anchor" href="#栈的应用"><span>栈的应用</span></a></h3>',10),c={href:"https://javaguide.cn/cs-basics/data-structure/linear-data-structure.html#_3-2-%E6%A0%88%E7%9A%84%E5%B8%B8%E8%A7%81%E5%BA%94%E7%94%A8%E5%B8%B8%E8%A7%81%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF",target:"_blank",rel:"noopener noreferrer"},d=t('<ol><li><p>实现浏览器的回退和前进功能</p></li><li><p>反转字符串</p></li><li><p>维护函数调用：最后一个被调用的函数必须先完成执行，符合栈的 后进先出（LIFO, Last In First Out） 特性。</p></li><li><p><strong>表达式求值</strong>：编译器和解释器使用栈来跟踪表达式的运算顺序。</p></li><li><p><strong>递归</strong>：递归函数的调用也可以通过栈来实现，每次递归调用都会将参数和返回地址压栈。</p></li><li><p><strong>深度优先遍历（DFS）</strong>：在深度优先搜索过程中，栈被用来保存搜索路径，以便回溯到上一层。</p></li><li><p><strong>Undo操作</strong>：许多应用程序使用栈来实现撤销（Undo）操作，将用户的操作按照顺序压栈，撤销时则弹栈还原状态。</p></li></ol><h2 id="队列的概念、性质、应用" tabindex="-1"><a class="header-anchor" href="#队列的概念、性质、应用"><span>队列的概念、性质、应用</span></a></h2><h3 id="队列的基本概念" tabindex="-1"><a class="header-anchor" href="#队列的基本概念"><span>队列的基本概念</span></a></h3><p><strong>队列（Queue）</strong> 是一种常见的数据结构，属于线性数据结构，具有 <strong>先进先出（First In, First Out，FIFO）</strong> 的特性。在队列中，元素按照加入队列的顺序排列，最先进入队列的元素最先被取出。</p><h3 id="队列的基本操作" tabindex="-1"><a class="header-anchor" href="#队列的基本操作"><span>队列的基本操作</span></a></h3><ol><li><p>压入元素(添加)：add()、offer()<br> 相同：未超出容量，从队尾压入元素，返回压入的那个元素。<br> 区别：在超出容量时，add()方法会对抛出异常，offer()返回false</p></li><li><p>弹出元素(删除)：remove()、poll()<br> 相同：容量大于0的时候，删除并返回队头被删除的那个元素。<br> 区别：在容量为0的时候，remove()会抛出异常，poll()返回false</p></li><li><p>获取队头元素(不删除)：element()、peek()<br> 相同：容量大于0的时候，都返回队头元素。但是不删除。<br> 区别：容量为0的时候，element()会抛出异常，peek()返回null。</p></li></ol><h3 id="队列的性质" tabindex="-1"><a class="header-anchor" href="#队列的性质"><span>队列的性质</span></a></h3><ol><li><p>先进先出（FIFO）： 队列中最先进入的元素将被最先取出，保持了元素的顺序性。</p></li><li><p>只能在队尾插入元素（入队）： 新元素只能添加到队列的尾部，保持了元素的顺序性。</p></li><li><p>只能在队头删除元素（出队）： 队列中的元素只能从队列的头部移除，保持了元素的顺序性。</p></li><li><p>先入先出的操作是原子性的： 在队列上的插入和删除操作都是原子性的，不会发生交叉干扰。</p></li></ol><h3 id="队列的应用" tabindex="-1"><a class="header-anchor" href="#队列的应用"><span>队列的应用</span></a></h3><ol><li><p><strong>任务调度</strong>： 操作系统中的任务调度通常使用队列来管理待执行的任务，确保按照先进先出的顺序执行任务。</p></li><li><p><strong>广度优先搜索（BFS）</strong>： 在图的广度优先搜索过程中，队列被用于存储待访问的节点，保证按照层次顺序遍历图的节点。</p></li><li><p><strong>消息队列</strong>： 在分布式系统中，消息队列用于在不同组件或服务之间传递消息，保持消息的有序传递。</p></li><li><p><strong>缓冲区</strong>： 队列常用于实现缓冲区，例如在生产者-消费者模型中，通过队列来平衡生产者和消费者之间的速度差异。</p></li><li><p><strong>网络数据包处理</strong>： 网络路由器和交换机使用队列来处理输入和输出的数据包，保持按照先进先出的原则进行数据传输。</p></li></ol><h2 id="哈希表的概念、性质" tabindex="-1"><a class="header-anchor" href="#哈希表的概念、性质"><span>哈希表的概念、性质</span></a></h2><h2 id="哈希冲突解决方法" tabindex="-1"><a class="header-anchor" href="#哈希冲突解决方法"><span>哈希冲突解决方法</span></a></h2><h2 id="二叉树概念及其遍历算法" tabindex="-1"><a class="header-anchor" href="#二叉树概念及其遍历算法"><span>二叉树概念及其遍历算法</span></a></h2><h2 id="二叉查找树" tabindex="-1"><a class="header-anchor" href="#二叉查找树"><span>二叉查找树</span></a></h2><h2 id="排序算法及其复杂度、稳定性" tabindex="-1"><a class="header-anchor" href="#排序算法及其复杂度、稳定性"><span>排序算法及其复杂度、稳定性</span></a></h2><h2 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找"><span>二分查找</span></a></h2><h2 id="图的相关概念" tabindex="-1"><a class="header-anchor" href="#图的相关概念"><span>图的相关概念</span></a></h2>',17);function g(u,m){const n=a("ExternalLinkIcon");return r(),s("div",null,[h,e("p",null,[e("a",c,[i("栈的应用 - JavaGuide"),o(n)])]),d])}const k=l(p,[["render",g],["__file","bq01.html.vue"]]),x=JSON.parse('{"path":"/ComputerBasics/DataStructure/01BaseQuestion/bq01.html","title":"基础级问题01","lang":"zh-CN","frontmatter":{"order":1,"date":"2024-03-05T00:00:00.000Z","category":["数据结构"],"description":"基础级问题01 栈的概念、性质、应用 栈的基本概念 栈（Stack） 是一种基本的数据结构，它遵循 先进后出 （Last In, First Out，LIFO）的原则。这意味着最后进入栈的元素将首先被移除。 栈常用一维数组或链表来实现，用数组实现的栈叫作 顺序栈 ，用链表实现的栈叫作 链式栈 。 栈的基本操作 push：将元素插入栈顶，栈顶元素被移除。...","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/DataStructure/01BaseQuestion/bq01.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"基础级问题01"}],["meta",{"property":"og:description","content":"基础级问题01 栈的概念、性质、应用 栈的基本概念 栈（Stack） 是一种基本的数据结构，它遵循 先进后出 （Last In, First Out，LIFO）的原则。这意味着最后进入栈的元素将首先被移除。 栈常用一维数组或链表来实现，用数组实现的栈叫作 顺序栈 ，用链表实现的栈叫作 链式栈 。 栈的基本操作 push：将元素插入栈顶，栈顶元素被移除。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-05T09:15:05.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2024-03-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-05T09:15:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础级问题01\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-05T09:15:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"栈的概念、性质、应用","slug":"栈的概念、性质、应用","link":"#栈的概念、性质、应用","children":[{"level":3,"title":"栈的基本概念","slug":"栈的基本概念","link":"#栈的基本概念","children":[]},{"level":3,"title":"栈的基本操作","slug":"栈的基本操作","link":"#栈的基本操作","children":[]},{"level":3,"title":"栈的性质","slug":"栈的性质","link":"#栈的性质","children":[]},{"level":3,"title":"栈的应用","slug":"栈的应用","link":"#栈的应用","children":[]}]},{"level":2,"title":"队列的概念、性质、应用","slug":"队列的概念、性质、应用","link":"#队列的概念、性质、应用","children":[{"level":3,"title":"队列的基本概念","slug":"队列的基本概念","link":"#队列的基本概念","children":[]},{"level":3,"title":"队列的基本操作","slug":"队列的基本操作","link":"#队列的基本操作","children":[]},{"level":3,"title":"队列的性质","slug":"队列的性质","link":"#队列的性质","children":[]},{"level":3,"title":"队列的应用","slug":"队列的应用","link":"#队列的应用","children":[]}]},{"level":2,"title":"哈希表的概念、性质","slug":"哈希表的概念、性质","link":"#哈希表的概念、性质","children":[]},{"level":2,"title":"哈希冲突解决方法","slug":"哈希冲突解决方法","link":"#哈希冲突解决方法","children":[]},{"level":2,"title":"二叉树概念及其遍历算法","slug":"二叉树概念及其遍历算法","link":"#二叉树概念及其遍历算法","children":[]},{"level":2,"title":"二叉查找树","slug":"二叉查找树","link":"#二叉查找树","children":[]},{"level":2,"title":"排序算法及其复杂度、稳定性","slug":"排序算法及其复杂度、稳定性","link":"#排序算法及其复杂度、稳定性","children":[]},{"level":2,"title":"二分查找","slug":"二分查找","link":"#二分查找","children":[]},{"level":2,"title":"图的相关概念","slug":"图的相关概念","link":"#图的相关概念","children":[]}],"git":{"createdTime":1709626537000,"updatedTime":1709630105000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":2}]},"readingTime":{"minutes":4.48,"words":1343},"filePathRelative":"ComputerBasics/DataStructure/01BaseQuestion/bq01.md","localizedDate":"2024年3月5日","excerpt":"\\n<h2>栈的概念、性质、应用</h2>\\n<h3>栈的基本概念</h3>\\n<p><strong>栈（Stack）</strong> 是一种基本的数据结构，它遵循 <strong>先进后出</strong> （Last In, First Out，LIFO）的原则。这意味着最后进入栈的元素将首先被移除。</p>\\n<p>栈常用一维数组或链表来实现，用数组实现的栈叫作 <strong>顺序栈</strong> ，用链表实现的栈叫作 <strong>链式栈</strong> 。</p>\\n<h3>栈的基本操作</h3>\\n<ol>\\n<li>\\n<p><strong>push</strong>：将元素插入栈顶，栈顶元素被移除。</p>\\n</li>\\n<li>\\n<p><strong>pop</strong>：将栈顶元素移除。</p>\\n</li>\\n<li>\\n<p><strong>Peek</strong>：查看栈顶元素，但不移除。</p>\\n</li>\\n<li>\\n<p><strong>isEmpty</strong>：判断栈是否为空。</p>\\n</li>\\n<li>\\n<p><strong>size</strong>：返回栈中元素的个数。</p>\\n</li>\\n<li>\\n<p><strong>toString</strong>：返回栈中元素的字符串表示。</p>\\n</li>\\n</ol>","autoDesc":true}');export{k as comp,x as data};
