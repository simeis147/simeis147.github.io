import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,a as t}from"./app-D_SFdkVG.js";const e="/assets/image-20221210164641266-C77k28O9.png",o="/assets/image-20221210170733921-Y0QUasyX.png",p="/assets/image-20221210165506359-ts5aum0H.png",i={},l=t('<h1 id="lombok" tabindex="-1"><a class="header-anchor" href="#lombok"><span>lombok</span></a></h1><h2 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍"><span>1 介绍</span></a></h2><p>Lombok是一个实用的Java类库，可以通过简单的注解来简化和消除一些必须但又显得很臃肿的Java代码</p><figure><img src="'+e+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th><strong>注解</strong></th><th><strong>作用</strong></th></tr></thead><tbody><tr><td>@Getter/@Setter</td><td>为所有的属性提供get/set方法</td></tr><tr><td>@ToString</td><td>会给类自动生成易阅读的 toString 方法</td></tr><tr><td>@EqualsAndHashCode</td><td>根据类所拥有的非静态字段自动重写 equals 方法和 hashCode 方法</td></tr><tr><td>@Data</td><td>提供了更综合的生成代码功能（@Getter + @Setter + @ToString + @EqualsAndHashCode）</td></tr><tr><td>@NoArgsConstructor</td><td>为实体类生成无参的构造器方法</td></tr><tr><td>@AllArgsConstructor</td><td>为实体类生成除了static修饰的字段之外带有各参数的构造器方法</td></tr></tbody></table><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2 使用</span></a></h2><p>第1步：在pom.xml文件中引入依赖</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 在springboot的父工程中，已经集成了lombok并指定了版本号--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第2步：在实体类上添加注解</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Short</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Short</span> gender<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> phone<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-说明" tabindex="-1"><a class="header-anchor" href="#_3-说明"><span>3 说明</span></a></h2><p>@Data注解中不包含全参构造方法，通常在实体类上，还会添加上：全参构造、无参构造</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span> <span class="token comment">//getter方法、setter方法、toString方法、hashCode方法、equals方法</span>
<span class="token annotation punctuation">@NoArgsConstructor</span> <span class="token comment">//无参构造</span>
<span class="token annotation punctuation">@AllArgsConstructor</span><span class="token comment">//全参构造</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Short</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Short</span> gender<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> phone<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-注意事项" tabindex="-1"><a class="header-anchor" href="#_4-注意事项"><span>4 注意事项</span></a></h2><div class="hint-container warning"><p class="hint-container-title">Lombok的注意事项：</p><p>Lombok会在编译时，会自动生成对应的java代码</p><p>在使用lombok时，还需要安装一个lombok的插件（新版本的IDEA中自带）</p></div><blockquote><p>在实体类上添加了@Data注解，那么这个类在编译时期，就会生成 getter/setter、equals、hashcode、toString 等方法</p><figure><img src="`+o+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><figure><img src="'+p+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure>',17),c=[l];function r(d,m){return n(),s("div",null,c)}const g=a(i,[["render",r],["__file","mybatis03.html.vue"]]),v=JSON.parse('{"path":"/BackEnd/MyBatis/mybatis03.html","title":"lombok","lang":"zh-CN","frontmatter":{"order":3,"date":"2023-04-07T00:00:00.000Z","category":["lombok"],"description":"lombok 1 介绍 Lombok是一个实用的Java类库，可以通过简单的注解来简化和消除一些必须但又显得很臃肿的Java代码 2 使用 第1步：在pom.xml文件中引入依赖 第2步：在实体类上添加注解 3 说明 @Data注解中不包含全参构造方法，通常在实体类上，还会添加上：全参构造、无参构造 4 注意事项 Lombok的注意事项： Lombok...","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/BackEnd/MyBatis/mybatis03.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"lombok"}],["meta",{"property":"og:description","content":"lombok 1 介绍 Lombok是一个实用的Java类库，可以通过简单的注解来简化和消除一些必须但又显得很臃肿的Java代码 2 使用 第1步：在pom.xml文件中引入依赖 第2步：在实体类上添加注解 3 说明 @Data注解中不包含全参构造方法，通常在实体类上，还会添加上：全参构造、无参构造 4 注意事项 Lombok的注意事项： Lombok..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T06:26:34.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-04-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T06:26:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lombok\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-07T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-08T06:26:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"1 介绍","slug":"_1-介绍","link":"#_1-介绍","children":[]},{"level":2,"title":"2 使用","slug":"_2-使用","link":"#_2-使用","children":[]},{"level":2,"title":"3 说明","slug":"_3-说明","link":"#_3-说明","children":[]},{"level":2,"title":"4 注意事项","slug":"_4-注意事项","link":"#_4-注意事项","children":[]}],"git":{"createdTime":1681268086000,"updatedTime":1694154394000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":2}]},"readingTime":{"minutes":1.4,"words":421},"filePathRelative":"BackEnd/MyBatis/mybatis03.md","localizedDate":"2023年4月7日","excerpt":"\\n<h2>1 介绍</h2>\\n<p>Lombok是一个实用的Java类库，可以通过简单的注解来简化和消除一些必须但又显得很臃肿的Java代码</p>\\n<figure><figcaption> </figcaption></figure>\\n<table>\\n<thead>\\n<tr>\\n<th><strong>注解</strong></th>\\n<th><strong>作用</strong></th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>@Getter/@Setter</td>\\n<td>为所有的属性提供get/set方法</td>\\n</tr>\\n<tr>\\n<td>@ToString</td>\\n<td>会给类自动生成易阅读的  toString 方法</td>\\n</tr>\\n<tr>\\n<td>@EqualsAndHashCode</td>\\n<td>根据类所拥有的非静态字段自动重写 equals 方法和  hashCode 方法</td>\\n</tr>\\n<tr>\\n<td>@Data</td>\\n<td>提供了更综合的生成代码功能（@Getter  + @Setter + @ToString + @EqualsAndHashCode）</td>\\n</tr>\\n<tr>\\n<td>@NoArgsConstructor</td>\\n<td>为实体类生成无参的构造器方法</td>\\n</tr>\\n<tr>\\n<td>@AllArgsConstructor</td>\\n<td>为实体类生成除了static修饰的字段之外带有各参数的构造器方法</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{g as comp,v as data};
