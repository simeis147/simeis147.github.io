import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as d,c,d as e,e as n,f as l,a}from"./app-avkYLIR5.js";const o={},r=a(`<h1 id="_10-git工具-重写历史" tabindex="-1"><a class="header-anchor" href="#_10-git工具-重写历史" aria-hidden="true">#</a> 10. Git工具-重写历史</h1><p>许多时候，在使用 Git 时，你可能想要修订提交历史。 Git 很棒的一点是它允许你在最后时刻做决定。 你可以在将暂存区内容提交前决定哪些文件进入提交，可以通过 <code>git stash</code> 来决定不与某些内容工作， 也可以重写已经发生的提交就像它们以另一种方式发生的一样。 这可能涉及改变提交的顺序，改变提交中的信息或修改文件，将提交压缩或是拆分， 或完全地移除提交——在将你的工作成果与他人共享之前。</p><p>在本节中，你可以学到如何完成这些工作，这样在与他人分享你的工作成果时你的提交历史将如你所愿地展示出来。</p><table><thead><tr><th>Note</th><th>在满意之前不要推送你的工作Git 的基本原则之一是，由于克隆中有很多工作是本地的，因此你可以 <strong>在本地</strong> 随便重写历史记录。 然而一旦推送了你的工作，那就完全是另一回事了，除非你有充分的理由进行更改，否则应该将推送的工作视为最终结果。 简而言之，在对它感到满意并准备与他人分享之前，应当避免推送你的工作。</th></tr></thead><tbody><tr><td></td><td></td></tr></tbody></table><h2 id="修改最后一次提交" tabindex="-1"><a class="header-anchor" href="#修改最后一次提交" aria-hidden="true">#</a> 修改最后一次提交</h2><p>修改你最近一次提交可能是所有修改历史提交的操作中最常见的一个。 对于你的最近一次提交，你往往想做两件事情：简单地修改提交信息， 或者通过添加、移除或修改文件来更改提交实际的内容。</p><h3 id="修改提交信息" tabindex="-1"><a class="header-anchor" href="#修改提交信息" aria-hidden="true">#</a> 修改提交信息</h3><p>如果，你只是想修改最近一次提交的提交信息，那么很简单：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这条命令会将最后一次的提交信息载入到编辑器中供你修改。 当保存并关闭编辑器后，编辑器会将更新后的提交信息写入新提交中，它会成为新的最后一次提交。</p><h3 id="修改实际内容" tabindex="-1"><a class="header-anchor" href="#修改实际内容" aria-hidden="true">#</a> 修改实际内容</h3><p>另一方面，如果你想要修改最后一次提交的实际内容，那么流程很相似：首先作出你想要补上的修改， 暂存它们，然后用 <code>git commit --amend</code> 以新的改进后的提交来 <strong>替换</strong> 掉旧有的最后一次提交，</p><p>使用这个技巧的时候需要小心，因为修正会改变提交的 SHA-1 校验和。 它类似于一个小的变基——<strong>如果已经推送了最后一次提交就不要修正它</strong>。</p><table><thead><tr><th>Tip</th><th>修补后的提交可能需要修补提交信息当你在修补一次提交时，可以同时修改提交信息和提交内容。 如果你修补了提交的内容，那么几乎肯定要更新提交消息以反映修改后的内容。另一方面，如果你的修补是琐碎的（如修改了一个笔误或添加了一个忘记暂存的文件）， 那么之前的提交信息不必修改，你只需作出更改，暂存它们，然后通过以下命令避免不必要的编辑器环节即可：<code>$ git commit --amend --no-edit</code></th></tr></thead><tbody><tr><td></td><td></td></tr></tbody></table><h2 id="修改多个提交信息" tabindex="-1"><a class="header-anchor" href="#修改多个提交信息" aria-hidden="true">#</a> 修改多个提交信息</h2><p>为了修改在提交历史中较远的提交，必须使用更复杂的工具。 Git 没有一个改变历史工具，但是可以使用变基工具来变基一系列提交，基于它们原来的 HEAD 而不是将其移动到另一个新的上面。 通过交互式变基工具，可以在任何想要修改的提交后停止，然后修改信息、添加文件或做任何想做的事情。 可以通过给 <code>git rebase</code> 增加 <code>-i</code> 选项来交互式地运行变基。 必须指定想要重写多久远的历史，这可以通过告诉命令将要变基到的提交来做到。</p><p>例如，如果想要修改最近三次提交信息，或者那组提交中的任意一个提交信息， 将想要修改的最近一次提交的父提交作为参数传递给 <code>git rebase -i</code> 命令，即 <code>HEAD~2^</code> 或 <code>HEAD~3</code>。 记住 <code>~3</code> 可能比较容易，因为你正尝试修改最后三次提交；但是注意实际上指定了以前的四次提交，即想要修改提交的父提交：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token parameter variable">-i</span> HEAD~3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次记住这是一个变基命令——在 <code>HEAD~3..HEAD</code> 范围内的每一个修改了提交信息的提交及其 <strong>所有后裔</strong> 都会被重写。 不要涉及任何已经推送到中央服务器的提交——这样做会产生一次变更的两个版本，因而使他人困惑。</p><p>运行这个命令会在文本编辑器上给你一个提交的列表，看起来像下面这样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pick f7f3f6d changed my name a bit
pick 310154e updated README formatting and added blame
pick a5f4a0d added cat-file

<span class="token comment"># Rebase 710f0f8..a5f4a0d onto 710f0f8</span>
<span class="token comment">#</span>
<span class="token comment"># Commands:</span>
<span class="token comment"># p, pick &lt;commit&gt; = use commit</span>
<span class="token comment"># r, reword &lt;commit&gt; = use commit, but edit the commit message</span>
<span class="token comment"># e, edit &lt;commit&gt; = use commit, but stop for amending</span>
<span class="token comment"># s, squash &lt;commit&gt; = use commit, but meld into previous commit</span>
<span class="token comment"># f, fixup &lt;commit&gt; = like &quot;squash&quot;, but discard this commit&#39;s log message</span>
<span class="token comment"># x, exec &lt;command&gt; = run command (the rest of the line) using shell</span>
<span class="token comment"># b, break = stop here (continue rebase later with &#39;git rebase --continue&#39;)</span>
<span class="token comment"># d, drop &lt;commit&gt; = remove commit</span>
<span class="token comment"># l, label &lt;label&gt; = label current HEAD with a name</span>
<span class="token comment"># t, reset &lt;label&gt; = reset HEAD to a label</span>
<span class="token comment"># m, merge [-C &lt;commit&gt; | -c &lt;commit&gt;] &lt;label&gt; [# &lt;oneline&gt;]</span>
<span class="token comment"># .       create a merge commit using the original merge commit&#39;s</span>
<span class="token comment"># .       message (or the oneline, if no original merge commit was</span>
<span class="token comment"># .       specified). Use -c &lt;commit&gt; to reword the commit message.</span>
<span class="token comment">#</span>
<span class="token comment"># These lines can be re-ordered; they are executed from top to bottom.</span>
<span class="token comment">#</span>
<span class="token comment"># If you remove a line here THAT COMMIT WILL BE LOST.</span>
<span class="token comment">#</span>
<span class="token comment"># However, if you remove everything, the rebase will be aborted.</span>
<span class="token comment">#</span>
<span class="token comment"># Note that empty commits are commented out</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要重点注意的是相对于正常使用的 <code>log</code> 命令，这些提交显示的顺序是相反的。 运行一次 <em>log</em> 命令，会看到类似这样的东西：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%h %s&quot;</span> HEAD~3<span class="token punctuation">..</span>HEAD
a5f4a0d added cat-file
310154e updated README formatting and added blame
f7f3f6d changed my name a bit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意其中的反序显示。 交互式变基给你一个它将会运行的脚本。 它将会从你在命令行中指定的提交（<code>HEAD~3</code>）开始，从上到下的依次重演每一个提交引入的修改。 它将最旧的而不是最新的列在上面，因为那会是第一个将要重演的。</p><p>你需要修改脚本来让它停留在你想修改的变更上。 要达到这个目的，你只要将你想修改的每一次提交前面的 ‘pick’ 改为 ‘edit’。 例如，只想修改第三次提交信息，可以像下面这样修改文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>edit f7f3f6d changed my name a bit
pick 310154e updated README formatting and added blame
pick a5f4a0d added cat-file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当保存并退出编辑器时，Git 将你带回到列表中的最后一次提交，把你送回命令行并提示以下信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> rebase <span class="token parameter variable">-i</span> HEAD~3
Stopped at f7f3f6d<span class="token punctuation">..</span>. changed my name a bit
You can amend the commit now, with

       <span class="token function">git</span> commit <span class="token parameter variable">--amend</span>

Once you&#39;re satisfied with your changes, run

       <span class="token function">git</span> rebase <span class="token parameter variable">--continue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些指令准确地告诉你该做什么。 输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改提交信息，然后退出编辑器。 然后，运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token parameter variable">--continue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令将会自动地应用另外两个提交，然后就完成了。 如果需要将不止一处的 pick 改为 edit，需要在每一个修改为 edit 的提交上重复这些步骤。 每一次，Git 将会停止，让你修正提交，然后继续直到完成。</p><h2 id="重新排序提交" tabindex="-1"><a class="header-anchor" href="#重新排序提交" aria-hidden="true">#</a> 重新排序提交</h2><p>也可以使用交互式变基来重新排序或完全移除提交。 如果想要移除 “added cat-file” 提交然后修改另外两个提交引入的顺序，可以将变基脚本从这样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pick f7f3f6d changed my name a bit
pick 310154e updated README formatting and added blame
pick a5f4a0d added cat-file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改为这样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pick 310154e updated README formatting and added blame
pick f7f3f6d changed my name a bit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当保存并退出编辑器时，Git 将你的分支带回这些提交的父提交，应用 <code>310154e</code> 然后应用 <code>f7f3f6d</code>，最后停止。 事实修改了那些提交的顺序并完全地移除了 “added cat-file” 提交。</p><h2 id="压缩提交" tabindex="-1"><a class="header-anchor" href="#压缩提交" aria-hidden="true">#</a> 压缩提交</h2><p>通过交互式变基工具，也可以将一连串提交压缩成一个单独的提交。 在变基信息中脚本给出了有用的指令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#</span>
<span class="token comment"># Commands:</span>
<span class="token comment"># p, pick &lt;commit&gt; = use commit</span>
<span class="token comment"># r, reword &lt;commit&gt; = use commit, but edit the commit message</span>
<span class="token comment"># e, edit &lt;commit&gt; = use commit, but stop for amending</span>
<span class="token comment"># s, squash &lt;commit&gt; = use commit, but meld into previous commit</span>
<span class="token comment"># f, fixup &lt;commit&gt; = like &quot;squash&quot;, but discard this commit&#39;s log message</span>
<span class="token comment"># x, exec &lt;command&gt; = run command (the rest of the line) using shell</span>
<span class="token comment"># b, break = stop here (continue rebase later with &#39;git rebase --continue&#39;)</span>
<span class="token comment"># d, drop &lt;commit&gt; = remove commit</span>
<span class="token comment"># l, label &lt;label&gt; = label current HEAD with a name</span>
<span class="token comment"># t, reset &lt;label&gt; = reset HEAD to a label</span>
<span class="token comment"># m, merge [-C &lt;commit&gt; | -c &lt;commit&gt;] &lt;label&gt; [# &lt;oneline&gt;]</span>
<span class="token comment"># .       create a merge commit using the original merge commit&#39;s</span>
<span class="token comment"># .       message (or the oneline, if no original merge commit was</span>
<span class="token comment"># .       specified). Use -c &lt;commit&gt; to reword the commit message.</span>
<span class="token comment">#</span>
<span class="token comment"># These lines can be re-ordered; they are executed from top to bottom.</span>
<span class="token comment">#</span>
<span class="token comment"># If you remove a line here THAT COMMIT WILL BE LOST.</span>
<span class="token comment">#</span>
<span class="token comment"># However, if you remove everything, the rebase will be aborted.</span>
<span class="token comment">#</span>
<span class="token comment"># Note that empty commits are commented out</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果，指定 “squash” 而不是 “pick” 或 “edit”，Git 将应用两者的修改并合并提交信息在一起。 所以，如果想要这三次提交变为一个提交，可以这样修改脚本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pick f7f3f6d changed my name a bit
squash 310154e updated README formatting and added blame
squash a5f4a0d added cat-file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当保存并退出编辑器时，Git 应用所有的三次修改然后将你放到编辑器中来合并三次提交信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># This is a combination of 3 commits.</span>
<span class="token comment"># The first commit&#39;s message is:</span>
changed my name a bit

<span class="token comment"># This is the 2nd commit message:</span>

updated README formatting and added blame

<span class="token comment"># This is the 3rd commit message:</span>

added cat-file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你保存之后，你就拥有了一个包含前三次提交的全部变更的提交。</p><h2 id="拆分提交" tabindex="-1"><a class="header-anchor" href="#拆分提交" aria-hidden="true">#</a> 拆分提交</h2><p>拆分一个提交会撤消这个提交，然后多次地部分地暂存与提交直到完成你所需次数的提交。 例如，假设想要拆分三次提交的中间那次提交。 想要将它拆分为两次提交：第一个 “updated README formatting”，第二个 “added blame” 来代替原来的 “updated README formatting and added blame”。 可以通过修改 <code>rebase -i</code> 的脚本来做到这点，将要拆分的提交的指令修改为 “edit”：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pick f7f3f6d changed my name a bit
edit 310154e updated README formatting and added blame
pick a5f4a0d added cat-file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，当脚本带你进入到命令行时，重置那个提交，拿到被重置的修改，从中创建几次提交。 当保存并退出编辑器时，Git 带你到列表中第一个提交的父提交，应用第一个提交（<code>f7f3f6d</code>）， 应用第二个提交（<code>310154e</code>），然后让你进入命令行。 那里，可以通过 <code>git reset HEAD^</code> 做一次针对那个提交的混合重置，实际上将会撤消那次提交并将修改的文件取消暂存。 现在可以暂存并提交文件直到有几个提交，然后当完成时运行 <code>git rebase --continue</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset HEAD^
<span class="token function">git</span> <span class="token function">add</span> README
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;updated README formatting&#39;</span>
<span class="token function">git</span> <span class="token function">add</span> lib/simplegit.rb
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;added blame&#39;</span>
<span class="token function">git</span> rebase <span class="token parameter variable">--continue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 在脚本中应用最后一次提交（<code>a5f4a0d</code>），历史记录看起来像这样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">-4</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%h %s&quot;</span>
1c002dd added cat-file
9b29157 added blame
35cfb2b updated README formatting
f3cc40e changed my name a bit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次强调，这些改动了所有在列表中的提交的 SHA-1 校验和，所以要确保列表中的提交还没有推送到共享仓库中。</p><h2 id="核武器级选项-filter-branch" tabindex="-1"><a class="header-anchor" href="#核武器级选项-filter-branch" aria-hidden="true">#</a> 核武器级选项：filter-branch</h2><p>有另一个历史改写的选项，如果想要通过脚本的方式改写大量提交的话可以使用它——例如，全局修改你的邮箱地址或从每一个提交中移除一个文件。 这个命令是 <code>filter-branch</code>，它可以改写历史中大量的提交，除非你的项目还没有公开并且其他人没有基于要改写的工作的提交做的工作，否则你不应当使用它。 然而，它可以很有用。 你将会学习到几个常用的用途，这样就得到了它适合使用地方的想法。</p>`,57),m=e("th",null,"Caution",-1),p=e("code",null,"git filter-branch",-1),u=e("code",null,"git-filter-repo",-1),v=e("code",null,"filter-branch",-1),b={href:"https://github.com/newren/git-filter-repo",target:"_blank",rel:"noopener noreferrer"},h=e("tbody",null,[e("tr",null,[e("td"),e("td")])],-1),g=a(`<h3 id="从每一个提交中移除一个文件" tabindex="-1"><a class="header-anchor" href="#从每一个提交中移除一个文件" aria-hidden="true">#</a> 从每一个提交中移除一个文件</h3><p>这经常发生。 有人粗心地通过 <code>git add .</code> 提交了一个巨大的二进制文件，你想要从所有地方删除。 可能偶然地提交了一个包括一个密码的文件，然而你想要开源项目。 <code>filter-branch</code> 是一个可能会用来擦洗整个提交历史的工具。 为了从整个提交历史中移除一个叫做 <code>passwords.txt</code> 的文件，可以使用 <code>--tree-filter</code> 选项给 <code>filter-branch</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> filter-branch --tree-filter <span class="token string">&#39;rm -f passwords.txt&#39;</span> HEAD
Rewrite 6b9b3cf04e7c5686a9cb838c3f36a8cb6a0fc2bd <span class="token punctuation">(</span><span class="token number">21</span>/21<span class="token punctuation">)</span>
Ref <span class="token string">&#39;refs/heads/master&#39;</span> was rewritten
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>--tree-filter</code> 选项在检出项目的每一个提交后运行指定的命令然后重新提交结果。 在本例中，你从每一个快照中移除了一个叫作 <code>passwords.txt</code> 的文件，无论它是否存在。 如果想要移除所有偶然提交的编辑器备份文件，可以运行类似 <code>git filter-branch --tree-filter &#39;rm -f *~&#39; HEAD</code> 的命令。</p><p>最后将可以看到 Git 重写树与提交然后移动分支指针。 通常一个好的想法是在一个测试分支中做这件事，然后当你决定最终结果是真正想要的，可以硬重置 <code>master</code> 分支。 为了让 <code>filter-branch</code> 在所有分支上运行，可以给命令传递 <code>--all</code> 选项。</p><h3 id="使一个子目录做为新的根目录" tabindex="-1"><a class="header-anchor" href="#使一个子目录做为新的根目录" aria-hidden="true">#</a> 使一个子目录做为新的根目录</h3><p>假设已经从另一个源代码控制系统中导入，并且有几个没意义的子目录（<code>trunk</code>、<code>tags</code> 等等）。 如果想要让 <code>trunk</code> 子目录作为每一个提交的新的项目根目录，<code>filter-branch</code> 也可以帮助你那么做：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> filter-branch --subdirectory-filter trunk HEAD
Rewrite 856f0bf61e41a27326cdae8f09fe708d679f596f <span class="token punctuation">(</span><span class="token number">12</span>/12<span class="token punctuation">)</span>
Ref <span class="token string">&#39;refs/heads/master&#39;</span> was rewritten
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在新项目根目录是 <code>trunk</code> 子目录了。 Git 会自动移除所有不影响子目录的提交。</p><h3 id="全局修改邮箱地址" tabindex="-1"><a class="header-anchor" href="#全局修改邮箱地址" aria-hidden="true">#</a> 全局修改邮箱地址</h3><p>另一个常见的情形是在你开始工作时忘记运行 <code>git config</code> 来设置你的名字与邮箱地址， 或者你想要开源一个项目并且修改所有你的工作邮箱地址为你的个人邮箱地址。 任何情形下，你也可以通过 <code>filter-branch</code> 来一次性修改多个提交中的邮箱地址。 需要小心的是只修改你自己的邮箱地址，所以你使用 <code>--commit-filter</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> filter-branch --commit-filter <span class="token string">&#39;
        if [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;schacon@localhost&quot; ];
        then
                GIT_AUTHOR_NAME=&quot;Scott Chacon&quot;;
                GIT_AUTHOR_EMAIL=&quot;schacon@example.com&quot;;
                git commit-tree &quot;$@&quot;;
        else
                git commit-tree &quot;$@&quot;;
        fi&#39;</span> HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这会遍历并重写每一个提交来包含你的新邮箱地址。 因为提交包含了它们父提交的 SHA-1 校验和，这个命令会修改你的历史中的每一个提交的 SHA-1 校验和， 而不仅仅只是那些匹配邮箱地址的提交。</p>`,13);function f(k,E){const s=t("ExternalLinkIcon");return d(),c("div",null,[r,e("table",null,[e("thead",null,[e("tr",null,[m,e("th",null,[p,n(" 有很多陷阱，不再推荐使用它来重写历史。 请考虑使用 "),u,n("，它是一个 Python 脚本，相比大多数使用 "),v,n(" 的应用来说，它做得要更好。它的文档和源码可访问 "),e("a",b,[n("https://github.com/newren/git-filter-repo"),l(s)]),n(" 获取。")])])]),h]),g])}const _=i(o,[["render",f],["__file","documentnotes10.html.vue"]]);export{_ as default};
