"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[8263],{16290:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-76ee5566",path:"/utility/guava/06-%E8%BF%AD%E4%BB%A3%E5%99%A8%E5%B7%A5%E5%85%B7%E7%B1%BB.html",title:"迭代器工具类",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"all 方法：判断迭代器中的元素是否都满足某个条件",slug:"all-方法-判断迭代器中的元素是否都满足某个条件",children:[]},{level:2,title:"any 方法：判断迭代器中是否至少有一个满足条件",slug:"any-方法-判断迭代器中是否至少有一个满足条件",children:[]},{level:2,title:"get 方法：获得迭代器中的第 x 个元素",slug:"get-方法-获得迭代器中的第-x-个元素",children:[]},{level:2,title:"filter 方法：过滤、选中符合条件的项",slug:"filter-方法-过滤、选中符合条件的项",children:[]},{level:2,title:"find 方法：返回符合条件的第一个元素",slug:"find-方法-返回符合条件的第一个元素",children:[]},{level:2,title:"transform 方法：对迭代器元素做转换",slug:"transform-方法-对迭代器元素做转换",children:[]}],filePathRelative:"utility/guava/06-迭代器工具类.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},38283:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(66252).uE)('<h1 id="迭代器工具类" tabindex="-1"><a class="header-anchor" href="#迭代器工具类" aria-hidden="true">#</a> 迭代器工具类</h1><p><strong>Iterators</strong> 是 Guava 中对 Iterator 迭代器操作的帮助类，这个类提供了很多有用的方法来简化 Iterator 的操作。</p><blockquote><p>再次提醒，<strong>Iterator</strong> 是迭代器；<em>Iterable</em> 是接口，它是 <em>Collection</em> 的父接口。</p></blockquote><h2 id="all-方法-判断迭代器中的元素是否都满足某个条件" tabindex="-1"><a class="header-anchor" href="#all-方法-判断迭代器中的元素是否都满足某个条件" aria-hidden="true">#</a> all 方法：判断迭代器中的元素是否都满足某个条件</h2><p><strong>all</strong> 方法的第一个参数是 <em>Iterator</em>，第二个参数是 <strong>Predicate&lt;String&gt;</strong> 的实现，这个方法的意义是不需要我们自己去写 <strong>while</strong> 循环了，他的内部实现中帮我们做了循环，把循环体中的条件判断抽象出来了。</p><p>伪代码：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// false</span>\n<span class="token class-name">Iterators</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Pear&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Peach&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Banana&quot;</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n    input <span class="token operator">-&gt;</span> input<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// true</span>\n<span class="token class-name">Iterators</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;Pear&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Peach&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Peter&quot;</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n    input <span class="token operator">-&gt;</span> input<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="any-方法-判断迭代器中是否至少有一个满足条件" tabindex="-1"><a class="header-anchor" href="#any-方法-判断迭代器中是否至少有一个满足条件" aria-hidden="true">#</a> any 方法：判断迭代器中是否至少有一个满足条件</h2><p><strong>any</strong> 方法的参数和 <strong>all</strong> 方法一样，就不再具体举例了。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// true</span>\n<span class="token class-name">Iterators</span><span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Pear&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Peach&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Banana&quot;</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n    input <span class="token operator">-&gt;</span> input<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// true</span>\n<span class="token class-name">Iterators</span><span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;Pear&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Peach&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Peter&quot;</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n    input <span class="token operator">-&gt;</span> input<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="get-方法-获得迭代器中的第-x-个元素" tabindex="-1"><a class="header-anchor" href="#get-方法-获得迭代器中的第-x-个元素" aria-hidden="true">#</a> get 方法：获得迭代器中的第 x 个元素</h2><p>第二个参数从 0 开始算起。</p><p>伪代码如下：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// Apple</span>\n<span class="token class-name">Iterators</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Pear&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Peach&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Banana&quot;</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Pear</span>\n<span class="token class-name">Iterators</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Pear&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Peach&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Banana&quot;</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Peach</span>\n<span class="token class-name">Iterators</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Pear&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Peach&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Banana&quot;</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="filter-方法-过滤、选中符合条件的项" tabindex="-1"><a class="header-anchor" href="#filter-方法-过滤、选中符合条件的项" aria-hidden="true">#</a> filter 方法：过滤、选中符合条件的项</h2><p>伪代码如下：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// { Pear Peach }</span>\n<span class="token class-name">Iterators</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Pear&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Peach&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Banana&quot;</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n    item <span class="token operator">-&gt;</span> item<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="find-方法-返回符合条件的第一个元素" tabindex="-1"><a class="header-anchor" href="#find-方法-返回符合条件的第一个元素" aria-hidden="true">#</a> find 方法：返回符合条件的第一个元素</h2><p>伪代码如下：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// Pear</span>\n<span class="token class-name">Iterators</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Pear&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Peach&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Banana&quot;</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n    item <span class="token operator">-&gt;</span> item<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="transform-方法-对迭代器元素做转换" tabindex="-1"><a class="header-anchor" href="#transform-方法-对迭代器元素做转换" aria-hidden="true">#</a> transform 方法：对迭代器元素做转换</h2><p>伪代码如下：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// { 5, 4, 5, 6 }</span>\n<span class="token class-name">Iterators</span><span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>\n    list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n    item <span class="token operator">-&gt;</span> item<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面的例子中我们将字符串转换成了其长度，<strong>transform</strong> 方法输出的是另外一个 Iterator 。</p>',24),p={render:function(n,s){return t}}}}]);