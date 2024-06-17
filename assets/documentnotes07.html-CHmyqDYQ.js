import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,a}from"./app-n7-iX-IR.js";const t={},n=a(`<h1 id="_7-git分支-变基" tabindex="-1"><a class="header-anchor" href="#_7-git分支-变基"><span>7. Git分支-变基</span></a></h1><p>在 Git 中整合来自不同分支的修改主要有两种方法：<code>merge</code> 以及 <code>rebase</code>。 在本节中我们将学习什么是“变基”，怎样使用“变基”，并将展示该操作的惊艳之处，以及指出在何种情况下你应避免使用它。</p><h2 id="变基的基本操作" tabindex="-1"><a class="header-anchor" href="#变基的基本操作"><span>变基的基本操作</span></a></h2><p>请回顾之前在 <a href="https://git-scm.com/book/zh/v2/ch00/_basic_merging" target="_blank" rel="noopener noreferrer">分支的合并</a> 中的一个例子，你会看到开发任务分叉到两个不同分支，又各自提交了更新。</p><figure><img src="https://git-scm.com/book/en/v2/images/basic-rebase-1.png" alt="分叉的提交历史。" tabindex="0" loading="lazy"><figcaption>分叉的提交历史。</figcaption></figure><p>之前介绍过，整合分支最容易的方法是 <code>merge</code> 命令。 它会把两个分支的最新快照（<code>C3</code> 和 <code>C4</code>）以及二者最近的共同祖先（<code>C2</code>）进行<strong>三方合并</strong>，合并的结果是生成一个新的快照（并提交）。</p><figure><img src="https://git-scm.com/book/en/v2/images/basic-rebase-2.png" alt="通过合并操作来整合分叉了的历史。" tabindex="0" loading="lazy"><figcaption>通过合并操作来整合分叉了的历史。</figcaption></figure><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><p>变基就是：将某一分支上的所有修改复制到另一分支上</p><p>除了<code>merge</code>，还有一种方法：你可以提取在 <code>C4</code> 中引入的补丁和修改，然后在 <code>C3</code> 的基础上应用一次。 在 Git 中，这种操作就叫做 <strong>变基（rebase）</strong>。 你可以使用 <code>rebase</code> 命令将提交到某一分支上的所有修改都移到另一分支上，就好像“重新播放”一样。</p><p>在这个例子中，你可以检出 <code>experiment</code> 分支，然后将它变基到 <code>master</code> 分支上：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> experiment</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rebase</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> master</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 将experiment上的修改变基到master分支上（将experiment的提交移动到master上。）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">First,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rewinding</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> head</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> replay</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> work</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> top</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> it...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Applying:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> added</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> staged</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> command</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的原理是首先找到这两个分支（即当前分支 <code>experiment</code>、变基操作的目标基底分支 <code>master</code>） 的最近共同祖先 <code>C2</code>，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件， 然后将当前分支指向目标基底 <code>C3</code>, 最后以此将之前另存为临时文件的修改依序应用。 （译注：写明了 commit id，以便理解，下同）</p><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h3><ol><li><p><strong>找到当前分支和目标分支的最近共同祖先</strong></p></li><li><p><strong>对比当前分支相对于该共同祖先的历次提交</strong></p></li><li><p><strong>提取相应的修改并存为临时文件</strong></p></li><li><p><strong>将当前分支指向目标分支</strong></p></li><li><p><strong>将之前临时文件的修改依序应用</strong></p></li></ol><figure><img src="https://git-scm.com/book/en/v2/images/basic-rebase-3.png" alt="将  中的修改变基到  上。" tabindex="0" loading="lazy"><figcaption>将 <code>C4</code> 中的修改变基到 <code>C3</code> 上。</figcaption></figure><p>现在回到 <code>master</code> 分支，进行一次快进合并。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> experiment</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://git-scm.com/book/en/v2/images/basic-rebase-4.png" alt=" 分支的快进合并。" tabindex="0" loading="lazy"><figcaption><code>master</code> 分支的快进合并。</figcaption></figure><h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤</span></a></h3><p>先检出源分支，将源分支的修改变基到目标分支。切回目标分支，进行一次快进合并</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 示意：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">源分</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">支</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (源分支的修改)rebase(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">到</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">目标分支</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">目标分</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">支</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">源分</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">支</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，<code>C4&#39;</code> 指向的快照就和 <a href="https://git-scm.com/book/zh/v2/ch00/ebasing-merging-example" target="_blank" rel="noopener noreferrer">the merge example</a> 中 <code>C5</code> 指向的快照一模一样了。 这两种整合方法的最终结果没有任何区别，但是 <strong>变基使得提交历史更加整洁</strong>。 你在查看一个经过变基的分支的历史记录时会发现，尽管实际的开发工作是并行的， 但它们看上去就像是串行的一样，提交历史是一条直线没有分叉。</p><p>一般我们这样做的目的是为了确保在向远程分支推送时能保持提交历史的整洁——<strong>例如向某个其他人维护的项目贡献代码时。 在这种情况下，你首先在自己的分支里进行开发，当开发完成时你需要先将你的代码变基到 <code>origin/master</code> 上，然后再向主项目提交修改</strong>。 这样的话，该项目的维护者就不再需要进行整合工作，只需要快进合并便可。</p><p>请注意，无论是通过变基，还是通过三方合并，整合的最终结果所指向的快照始终是一样的，只不过提交历史不同罢了。 变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><p><strong>变基的优点： 使提交记录更加整洁。</strong></p><h2 id="更有趣的变基例子1" tabindex="-1"><a class="header-anchor" href="#更有趣的变基例子1"><span>更有趣的变基例子1</span></a></h2><p>在对两个分支进行变基时，所生成的“重放”并不一定要在目标分支上应用，你也可以指定另外的一个分支进行应用。 就像 <a href="https://git-scm.com/book/zh/v2/ch00/bdiag_e" target="_blank" rel="noopener noreferrer">从一个主题分支里再分出一个主题分支的提交历史</a> 中的例子那样。 你创建了一个主题分支 <code>server</code>，为服务端添加了一些功能，提交了 <code>C3</code> 和 <code>C4</code>。 然后从 <code>C3</code> 上创建了主题分支 <code>client</code>，为客户端添加了一些功能，提交了 <code>C8</code> 和 <code>C9</code>。 最后，你回到 <code>server</code> 分支，又提交了 <code>C10</code>。</p><h2 id="更有趣的变基例子2" tabindex="-1"><a class="header-anchor" href="#更有趣的变基例子2"><span>更有趣的变基例子2</span></a></h2><p>在对两个分支进行变基时，所生成的“重放”并不一定要在目标分支上应用，你也可以指定另外的一个分支进行应用。 就像 <a href="https://git-scm.com/book/zh/v2/ch00/bdiag_e" target="_blank" rel="noopener noreferrer">从一个主题分支里再分出一个主题分支的提交历史</a> 中的例子那样。 你创建了一个主题分支 <code>server</code>，为服务端添加了一些功能，提交了 <code>C3</code> 和 <code>C4</code>。 然后从 <code>C3</code> 上创建了主题分支 <code>client</code>，为客户端添加了一些功能，提交了 <code>C8</code> 和 <code>C9</code>。 最后，你回到 <code>server</code> 分支，又提交了 <code>C10</code>。</p><figure><img src="https://git-scm.com/book/en/v2/images/interesting-rebase-1.png" alt="从一个主题分支里再分出一个主题分支的提交历史。" tabindex="0" loading="lazy"><figcaption>从一个主题分支里再分出一个主题分支的提交历史。</figcaption></figure><p>假设你希望将 <code>client</code> 中的修改合并到主分支并发布，但暂时并不想合并 <code>server</code> 中的修改， 因为它们还需要经过更全面的测试。这时，你就可以使用 <code>git rebase</code> 命令的 <strong><code>--onto</code> 选项， 选中在 <code>client</code> 分支里但不在 <code>server</code> 分支里的修改（即 <code>C8</code> 和 <code>C9</code>），将它们在 <code>master</code> 分支上重放</strong>：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rebase</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --onto</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> master</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> server</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> client</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>以上命令的意思是：“取出 <code>client</code> 分支，找出它从 <code>server</code> 分支分歧之后的补丁， 然后把这些补丁在 <code>master</code> 分支上重放一遍，让 <code>client</code> 看起来像直接基于 <code>master</code> 修改一样”。这理解起来有一点复杂，不过效果非常酷。</p><h3 id="onto选项" tabindex="-1"><a class="header-anchor" href="#onto选项"><span>--onto选项</span></a></h3><p><strong>选中C分支中的但不在B分支里的修改，应用到A分支。</strong></p><figure><img src="https://git-scm.com/book/en/v2/images/interesting-rebase-2.png" alt="截取主题分支上的另一个主题分支，然后变基到其他分支。" tabindex="0" loading="lazy"><figcaption>截取主题分支上的另一个主题分支，然后变基到其他分支。</figcaption></figure><p>现在可以快进合并 <code>master</code> 分支了。（如图 <a href="https://git-scm.com/book/zh/v2/ch00/bdiag_g" target="_blank" rel="noopener noreferrer">快进合并 <code>master</code> 分支，使之包含来自 <code>client</code> 分支的修改</a>）：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> client</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://git-scm.com/book/en/v2/images/interesting-rebase-3.png" alt="快进合并  分支，使之包含来自  分支的修改。" tabindex="0" loading="lazy"><figcaption>快进合并 <code>master</code> 分支，使之包含来自 <code>client</code> 分支的修改。</figcaption></figure><h3 id="省去先切换到源分支的步骤" tabindex="-1"><a class="header-anchor" href="#省去先切换到源分支的步骤"><span>省去先切换到源分支的步骤</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rebase</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">目标</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">当前</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">分</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">支</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">源分</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">支</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 将源分支变基到目标分支。执行此命令后会自动切换到源分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">目标分</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">支</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">源分</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">支</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：使用这个方法要确保源分支上的代码是最新的。</strong></p><p>接下来你决定将 <code>server</code> 分支中的修改也整合进来。 使用 <code>git rebase &lt;basebranch&gt; &lt;topicbranch&gt;</code> 命令可以直接将主题分支 （即本例中的 <code>server</code>）变基到目标分支（即 <code>master</code>）上。 这样做能省去你先切换到 <code>server</code> 分支，再对其执行变基命令的多个步骤。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rebase</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> master</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如图 <a href="https://git-scm.com/book/zh/v2/ch00/bdiag_h" target="_blank" rel="noopener noreferrer">将 <code>server</code> 中的修改变基到 <code>master</code> 上</a> 所示，<code>server</code> 中的代码被“续”到了 <code>master</code> 后面。</p><figure><img src="https://git-scm.com/book/en/v2/images/interesting-rebase-4.png" alt="将  中的修改变基到  上。" tabindex="0" loading="lazy"><figcaption>将 <code>server</code> 中的修改变基到 <code>master</code> 上。</figcaption></figure><p>然后就可以快进合并主分支 <code>master</code> 了：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，<code>client</code> 和 <code>server</code> 分支中的修改都已经整合到主分支里了， 你可以删除这两个分支，最终提交历史会变成图 <a href="https://git-scm.com/book/zh/v2/ch00/bdiag_i" target="_blank" rel="noopener noreferrer">最终的提交历史</a> 中的样子：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> client</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://git-scm.com/book/en/v2/images/interesting-rebase-5.png" alt="最终的提交历史。" tabindex="0" loading="lazy"><figcaption>最终的提交历史。</figcaption></figure><h2 id="变基的风险" tabindex="-1"><a class="header-anchor" href="#变基的风险"><span>变基的风险</span></a></h2><h3 id="金科玉律" tabindex="-1"><a class="header-anchor" href="#金科玉律"><span>金科玉律</span></a></h3><p>呃，奇妙的变基也并非完美无缺，要用它得遵守一条准则：</p><p><strong>如果提交存在于你的仓库之外，而别人可能基于这些提交进行开发，那么不要执行变基。</strong></p><p>如果你遵循这条金科玉律，就不会出差错。 否则，人民群众会仇恨你，你的朋友和家人也会嘲笑你，唾弃你。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>例如：几个人同时在一个主题分支上进行开发和提交时，你不要中途执行变基，只有在大家都完成工作之后才可以执行变基。</strong></p></div><h3 id="变基的实质" tabindex="-1"><a class="header-anchor" href="#变基的实质"><span>变基的实质</span></a></h3><p><strong>变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。</strong> 如果你已经将提交推送至某个仓库，而其他人也已经从该仓库拉取提交并进行了后续工作，此时，如果你用 <code>git rebase</code> 命令重新整理了提交并再次推送，你的同伴因此将不得不再次将他们手头的工作与你的提交进行整合，如果接下来你还要拉取并整合他们修改过的提交，事情就会变得一团糟。</p><p>让我们来看一个在公开的仓库上执行变基操作所带来的问题。 假设你从一个中央服务器克隆然后在它的基础上进行了一些开发。 你的提交历史如图所示：</p><figure><img src="https://git-scm.com/book/en/v2/images/perils-of-rebasing-1.png" alt="克隆一个仓库，然后在它的基础上进行了一些开发。" tabindex="0" loading="lazy"><figcaption>克隆一个仓库，然后在它的基础上进行了一些开发。</figcaption></figure><p>然后，某人又向中央服务器提交了一些修改，其中还包括一次合并。 你抓取了这些在远程分支上的修改，并将其合并到你本地的开发分支，然后你的提交历史就会变成这样：</p><figure><img src="https://git-scm.com/book/en/v2/images/perils-of-rebasing-2.png" alt="抓取别人的提交，合并到自己的开发分支。" tabindex="0" loading="lazy"><figcaption>抓取别人的提交，合并到自己的开发分支。</figcaption></figure><p>接下来，这个人又决定把合并操作回滚，改用变基；继而又用 <code>git push --force</code> 命令覆盖了服务器上的提交历史。 之后你从服务器抓取更新，会发现多出来一些新的提交。</p><figure><img src="https://git-scm.com/book/en/v2/images/perils-of-rebasing-3.png" alt="有人推送了经过变基的提交，并丢弃了你的本地开发所基于的一些提交。" tabindex="0" loading="lazy"><figcaption>有人推送了经过变基的提交，并丢弃了你的本地开发所基于的一些提交。</figcaption></figure><p>结果就是你们两人的处境都十分尴尬。 如果你执行 <code>git pull</code> 命令，你将合并来自两条提交历史的内容，生成一个新的合并提交，最终仓库会如图所示：</p><figure><img src="https://git-scm.com/book/en/v2/images/perils-of-rebasing-4.png" alt="你将相同的内容又合并了一次，生成了一个新的提交。" tabindex="0" loading="lazy"><figcaption>你将相同的内容又合并了一次，生成了一个新的提交。</figcaption></figure><p>此时如果你执行 <code>git log</code> 命令，你会发现有两个提交的作者、日期、日志居然是一样的，这会令人感到混乱。 此外，如果你将这一堆又推送到服务器上，你实际上是将那些已经被变基抛弃的提交又找了回来，这会令人感到更加混乱。 很明显对方并不想在提交历史中看到 <code>C4</code> 和 <code>C6</code>，因为之前就是他把这两个提交通过变基丢弃的。</p><h2 id="用变基解决变基" tabindex="-1"><a class="header-anchor" href="#用变基解决变基"><span>用变基解决变基</span></a></h2><p>如果你 <strong>真的</strong> 遭遇了类似的处境，Git 还有一些高级魔法可以帮到你。 如果团队中的某人强制推送并覆盖了一些你所基于的提交，你需要做的就是检查你做了哪些修改，以及他们覆盖了哪些修改。</p><p>实际上，Git 除了对整个提交计算 SHA-1 校验和以外，也对本次提交所引入的修改计算了校验和——即 “patch-id”。</p><p>如果你拉取被覆盖过的更新并将你手头的工作基于此进行变基的话，一般情况下 Git 都能成功分辨出哪些是你的修改，并把它们应用到新分支上。</p><p>举个例子，如果遇到前面提到的 <a href="https://git-scm.com/book/zh/v2/ch00/_pre_merge_rebase_work" target="_blank" rel="noopener noreferrer">有人推送了经过变基的提交，并丢弃了你的本地开发所基于的一些提交</a> 那种情境，如果我们不是执行合并，而是执行 <code>git rebase teamone/master</code>, Git 将会：</p><ul><li>检查哪些提交是我们的分支上独有的（C2，C3，C4，C6，C7）</li><li>检查其中哪些提交不是合并操作的结果（C2，C3，C4）</li><li>检查哪些提交在对方覆盖更新时并没有被纳入目标分支（只有 C2 和 C3，因为 C4 其实就是 C4&#39;）</li><li>把查到的这些提交应用在 <code>teamone/master</code> 上面</li></ul><p>从而我们将得到与 <a href="https://git-scm.com/book/zh/v2/ch00/_merge_rebase_work" target="_blank" rel="noopener noreferrer">你将相同的内容又合并了一次，生成了一个新的提交</a> 中不同的结果，如图 <a href="https://git-scm.com/book/zh/v2/ch00/_rebase_rebase_work" target="_blank" rel="noopener noreferrer">在一个被变基然后强制推送的分支上再次执行变基</a> 所示。</p><figure><img src="https://git-scm.com/book/en/v2/images/perils-of-rebasing-5.png" alt="在一个被变基然后强制推送的分支上再次执行变基。" tabindex="0" loading="lazy"><figcaption>在一个被变基然后强制推送的分支上再次执行变基。</figcaption></figure><p>要想上述方案有效，还需要对方在变基时确保 <code>C4&#39;</code> 和 <code>C4</code> 是几乎一样的。 否则变基操作将无法识别，并新建另一个类似 <code>C4</code> 的补丁（而这个补丁很可能无法整洁的整合入历史，因为补丁中的修改已经存在于某个地方了）。</p><p>在本例中另一种简单的方法是使用 <code>git pull --rebase</code> 命令而不是直接 <code>git pull</code>。 又或者你可以自己手动完成这个过程，先 <code>git fetch</code>，再 <code>git rebase teamone/master</code>。</p><p>如果你习惯使用 <code>git pull</code> ，同时又希望默认使用选项 <code>--rebase</code>，你可以执行这条语句 <code>git config --global pull.rebase true</code> 来更改 <code>pull.rebase</code> 的默认配置。</p><p>如果你只对不会离开你电脑的提交执行变基，那就不会有事。 如果你对已经推送过的提交执行变基，但别人没有基于它的提交，那么也不会有事。 如果你对已经推送至共用仓库的提交上执行变基命令，并因此丢失了一些别人的开发所基于的提交， 那你就有大麻烦了，你的同事也会因此鄙视你。</p><p>如果你或你的同事在某些情形下决意要这么做，请一定要通知每个人执行 <code>git pull --rebase</code> 命令，这样尽管不能避免伤痛，但能有所缓解。</p><h2 id="变基-vs-合并" tabindex="-1"><a class="header-anchor" href="#变基-vs-合并"><span>变基 vs. 合并</span></a></h2><p>至此，你已在实战中学习了变基和合并的用法，你一定会想问，到底哪种方式更好。 在回答这个问题之前，让我们退后一步，想讨论一下提交历史到底意味着什么。</p><p>有一种观点认为，仓库的提交历史即是 <strong>记录实际发生过什么</strong>。 它是针对历史的文档，本身就有价值，不能乱改。 从这个角度看来，改变提交历史是一种亵渎，你使用 <em>谎言</em> 掩盖了实际发生过的事情。 如果由合并产生的提交历史是一团糟怎么办？ 既然事实就是如此，那么这些痕迹就应该被保留下来，让后人能够查阅。</p><p>另一种观点则正好相反，他们认为提交历史是 <strong>项目过程中发生的事</strong>。 没人会出版一本书的第一版草稿，软件维护手册也是需要反复修订才能方便使用。 持这一观点的人会使用 <code>rebase</code> 及 <code>filter-branch</code> 等工具来编写故事，怎么方便后来的读者就怎么写。</p><p>现在，让我们回到之前的问题上来，到底合并还是变基好？希望你能明白，这并没有一个简单的答案。 Git 是一个非常强大的工具，它允许你对提交历史做许多事情，但每个团队、每个项目对此的需求并不相同。 既然你已经分别学习了两者的用法，相信你能够根据实际情况作出明智的选择。</p><p><strong>总的原则是，只对尚未推送或分享给别人的本地修改执行变基操作清理历史， 从不对已推送至别处的提交执行变基操作，这样，你才能享受到两种方式带来的便利。</strong></p>`,89),l=[n];function r(h,o){return e(),s("div",null,l)}const c=i(t,[["render",r],["__file","documentnotes07.html.vue"]]),g=JSON.parse('{"path":"/Tools/Git/02DocumentNotes/documentnotes07.html","title":"7. Git分支-变基","lang":"zh-CN","frontmatter":{"order":7,"date":"2023-05-15T00:00:00.000Z","category":["Git"],"description":"7. Git分支-变基 在 Git 中整合来自不同分支的修改主要有两种方法：merge 以及 rebase。 在本节中我们将学习什么是“变基”，怎样使用“变基”，并将展示该操作的惊艳之处，以及指出在何种情况下你应避免使用它。 变基的基本操作 请回顾之前在 分支的合并 中的一个例子，你会看到开发任务分叉到两个不同分支，又各自提交了更新。 分叉的提交历史。...","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/Tools/Git/02DocumentNotes/documentnotes07.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"7. Git分支-变基"}],["meta",{"property":"og:description","content":"7. Git分支-变基 在 Git 中整合来自不同分支的修改主要有两种方法：merge 以及 rebase。 在本节中我们将学习什么是“变基”，怎样使用“变基”，并将展示该操作的惊艳之处，以及指出在何种情况下你应避免使用它。 变基的基本操作 请回顾之前在 分支的合并 中的一个例子，你会看到开发任务分叉到两个不同分支，又各自提交了更新。 分叉的提交历史。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://git-scm.com/book/en/v2/images/basic-rebase-1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-15T08:53:15.000Z"}],["meta",{"property":"article:published_time","content":"2023-05-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-15T08:53:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7. Git分支-变基\\",\\"image\\":[\\"https://git-scm.com/book/en/v2/images/basic-rebase-1.png\\",\\"https://git-scm.com/book/en/v2/images/basic-rebase-2.png\\",\\"https://git-scm.com/book/en/v2/images/basic-rebase-3.png\\",\\"https://git-scm.com/book/en/v2/images/basic-rebase-4.png\\",\\"https://git-scm.com/book/en/v2/images/interesting-rebase-1.png\\",\\"https://git-scm.com/book/en/v2/images/interesting-rebase-2.png\\",\\"https://git-scm.com/book/en/v2/images/interesting-rebase-3.png\\",\\"https://git-scm.com/book/en/v2/images/interesting-rebase-4.png\\",\\"https://git-scm.com/book/en/v2/images/interesting-rebase-5.png\\",\\"https://git-scm.com/book/en/v2/images/perils-of-rebasing-1.png\\",\\"https://git-scm.com/book/en/v2/images/perils-of-rebasing-2.png\\",\\"https://git-scm.com/book/en/v2/images/perils-of-rebasing-3.png\\",\\"https://git-scm.com/book/en/v2/images/perils-of-rebasing-4.png\\",\\"https://git-scm.com/book/en/v2/images/perils-of-rebasing-5.png\\"],\\"datePublished\\":\\"2023-05-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-15T08:53:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"变基的基本操作","slug":"变基的基本操作","link":"#变基的基本操作","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":3,"title":"步骤","slug":"步骤","link":"#步骤","children":[]},{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]}]},{"level":2,"title":"更有趣的变基例子1","slug":"更有趣的变基例子1","link":"#更有趣的变基例子1","children":[]},{"level":2,"title":"更有趣的变基例子2","slug":"更有趣的变基例子2","link":"#更有趣的变基例子2","children":[{"level":3,"title":"--onto选项","slug":"onto选项","link":"#onto选项","children":[]},{"level":3,"title":"省去先切换到源分支的步骤","slug":"省去先切换到源分支的步骤","link":"#省去先切换到源分支的步骤","children":[]}]},{"level":2,"title":"变基的风险","slug":"变基的风险","link":"#变基的风险","children":[{"level":3,"title":"金科玉律","slug":"金科玉律","link":"#金科玉律","children":[]},{"level":3,"title":"变基的实质","slug":"变基的实质","link":"#变基的实质","children":[]}]},{"level":2,"title":"用变基解决变基","slug":"用变基解决变基","link":"#用变基解决变基","children":[]},{"level":2,"title":"变基 vs. 合并","slug":"变基-vs-合并","link":"#变基-vs-合并","children":[]}],"git":{"createdTime":1684135553000,"updatedTime":1684140795000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":2}]},"readingTime":{"minutes":13.89,"words":4166},"filePathRelative":"Tools/Git/02DocumentNotes/documentnotes07.md","localizedDate":"2023年5月15日","excerpt":"","autoDesc":true}');export{c as comp,g as data};
