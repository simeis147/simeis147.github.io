const n=JSON.parse('{"key":"v-3bac2d3b","path":"/ComputerBasics/Algorithm/02LinkedList/linkedlist07.html","title":"链表相交","lang":"zh-CN","frontmatter":{"order":7,"date":"2023-06-14T00:00:00.000Z","category":["算法","链表"],"description":"链表相交 相关题目推荐 面试题 02.07. 链表相交 写法 public class Solution { public ListNode getIntersectionNode(ListNode headA, ListNode headB) { ListNode curA = headA; ListNode curB = headB; int lenA = 0, lenB = 0; while (curA != null) { // 求链表A的长度 lenA++; curA = curA.next; } while (curB != null) { // 求链表B的长度 lenB++; curB = curB.next; } curA = headA; curB = headB; // 让curA为最长链表的头，lenA为其长度 if (lenB &gt; lenA) { //1. swap (lenA, lenB); int tmpLen = lenA; lenA = lenB; lenB = tmpLen; //2. swap (curA, curB); ListNode tmpNode = curA; curA = curB; curB = tmpNode; } // 求长度差 int gap = lenA - lenB; // 让curA和curB在同一起点上（末尾位置对齐） while (gap-- != 0) { curA = curA.next; } // 遍历curA 和 curB，遇到相同则直接返回 while (curA != null) { if (curA == curB) { return curA; } curA = curA.next; curB = curB.next; } return null; } }","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/02LinkedList/linkedlist07.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"链表相交"}],["meta",{"property":"og:description","content":"链表相交 相关题目推荐 面试题 02.07. 链表相交 写法 public class Solution { public ListNode getIntersectionNode(ListNode headA, ListNode headB) { ListNode curA = headA; ListNode curB = headB; int lenA = 0, lenB = 0; while (curA != null) { // 求链表A的长度 lenA++; curA = curA.next; } while (curB != null) { // 求链表B的长度 lenB++; curB = curB.next; } curA = headA; curB = headB; // 让curA为最长链表的头，lenA为其长度 if (lenB &gt; lenA) { //1. swap (lenA, lenB); int tmpLen = lenA; lenA = lenB; lenB = tmpLen; //2. swap (curA, curB); ListNode tmpNode = curA; curA = curB; curB = tmpNode; } // 求长度差 int gap = lenA - lenB; // 让curA和curB在同一起点上（末尾位置对齐） while (gap-- != 0) { curA = curA.next; } // 遍历curA 和 curB，遇到相同则直接返回 while (curA != null) { if (curA == curB) { return curA; } curA = curA.next; curB = curB.next; } return null; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-29T04:57:04.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-06-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-29T04:57:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"链表相交\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-29T04:57:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"相关题目推荐","slug":"相关题目推荐","link":"#相关题目推荐","children":[]},{"level":2,"title":"写法","slug":"写法","link":"#写法","children":[]}],"git":{"createdTime":1686726771000,"updatedTime":1709182624000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":4}]},"readingTime":{"minutes":0.64,"words":192},"filePathRelative":"ComputerBasics/Algorithm/02LinkedList/linkedlist07.md","localizedDate":"2023年6月14日","excerpt":"<h1> 链表相交</h1>\\n<h2> 相关题目推荐</h2>\\n<p><a href=\\"https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">面试题 02.07. 链表相交</a></p>\\n<h2> 写法</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">ListNode</span> <span class=\\"token function\\">getIntersectionNode</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ListNode</span> headA<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">ListNode</span> headB<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">ListNode</span> curA <span class=\\"token operator\\">=</span> headA<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">ListNode</span> curB <span class=\\"token operator\\">=</span> headB<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">int</span> lenA <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> lenB <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>curA <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token comment\\">// 求链表A的长度</span>\\n            lenA<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n            curA <span class=\\"token operator\\">=</span> curA<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>curB <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token comment\\">// 求链表B的长度</span>\\n            lenB<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n            curB <span class=\\"token operator\\">=</span> curB<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        curA <span class=\\"token operator\\">=</span> headA<span class=\\"token punctuation\\">;</span>\\n        curB <span class=\\"token operator\\">=</span> headB<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 让curA为最长链表的头，lenA为其长度</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>lenB <span class=\\"token operator\\">&gt;</span> lenA<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token comment\\">//1. swap (lenA, lenB);</span>\\n            <span class=\\"token keyword\\">int</span> tmpLen <span class=\\"token operator\\">=</span> lenA<span class=\\"token punctuation\\">;</span>\\n            lenA <span class=\\"token operator\\">=</span> lenB<span class=\\"token punctuation\\">;</span>\\n            lenB <span class=\\"token operator\\">=</span> tmpLen<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token comment\\">//2. swap (curA, curB);</span>\\n            <span class=\\"token class-name\\">ListNode</span> tmpNode <span class=\\"token operator\\">=</span> curA<span class=\\"token punctuation\\">;</span>\\n            curA <span class=\\"token operator\\">=</span> curB<span class=\\"token punctuation\\">;</span>\\n            curB <span class=\\"token operator\\">=</span> tmpNode<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token comment\\">// 求长度差</span>\\n        <span class=\\"token keyword\\">int</span> gap <span class=\\"token operator\\">=</span> lenA <span class=\\"token operator\\">-</span> lenB<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 让curA和curB在同一起点上（末尾位置对齐）</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>gap<span class=\\"token operator\\">--</span> <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            curA <span class=\\"token operator\\">=</span> curA<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token comment\\">// 遍历curA 和 curB，遇到相同则直接返回</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>curA <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>curA <span class=\\"token operator\\">==</span> curB<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">return</span> curA<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n            curA <span class=\\"token operator\\">=</span> curA<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n            curB <span class=\\"token operator\\">=</span> curB<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
