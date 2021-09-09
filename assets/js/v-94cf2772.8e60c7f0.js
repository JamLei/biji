"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[8927],{92552:(t,e,l)=>{l.r(e),l.d(e,{data:()=>d});const d={key:"v-94cf2772",path:"/redis/04-%E7%BC%93%E5%AD%98%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%80%E8%87%B4%E6%80%A7.html",title:"缓存与数据库一致性",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Cache Aside Pattern",slug:"cache-aside-pattern",children:[{level:3,title:"读流程：",slug:"读流程",children:[]},{level:3,title:"写流程：",slug:"写流程",children:[]}]},{level:2,title:"双写并发问题",slug:"双写并发问题",children:[]},{level:2,title:"读写并发问题",slug:"读写并发问题",children:[]},{level:2,title:"Cache Aside Pattern 方案总结",slug:"cache-aside-pattern-方案总结",children:[]},{level:2,title:"Cache Aside Pattern 方案的改进",slug:"cache-aside-pattern-方案的改进",children:[{level:3,title:"方案 1：延迟删除",slug:"方案-1-延迟删除",children:[]},{level:3,title:"方案 2：借助消息队列，将删存缓存的工作委托给第三方",slug:"方案-2-借助消息队列-将删存缓存的工作委托给第三方",children:[]}]}],filePathRelative:"redis/04-缓存数据库一致性.md",git:{updatedTime:1629826614e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},33572:(t,e,l)=>{l.r(e),l.d(e,{default:()=>a});const d=(0,l(66252).uE)('<h1 id="缓存与数据库一致性" tabindex="-1"><a class="header-anchor" href="#缓存与数据库一致性" aria-hidden="true">#</a> 缓存与数据库一致性</h1><h2 id="cache-aside-pattern" tabindex="-1"><a class="header-anchor" href="#cache-aside-pattern" aria-hidden="true">#</a> Cache Aside Pattern</h2><p>标准的方案，facebook 就是使用这种方式。</p><table><thead><tr><th style="text-align:left;">核心概念</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">失效</td><td style="text-align:left;">应用程序先从 cache 取数据，没有得到，则从数据库中取数据，成功后，放到缓存中。</td></tr><tr><td style="text-align:left;">命中</td><td style="text-align:left;">应用程序从 cache 中取数据，取到后返回。</td></tr><tr><td style="text-align:left;">更新</td><td style="text-align:left;">先把数据存到数据库中，成功后，再让缓存失效。</td></tr></tbody></table><h3 id="读流程" tabindex="-1"><a class="header-anchor" href="#读流程" aria-hidden="true">#</a> 读流程：</h3><table><thead><tr><th style="text-align:center;">步骤</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">读缓存，命中则直接返回</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">如果没命中，读数据库</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">更新缓存</td></tr></tbody></table><h3 id="写流程" tabindex="-1"><a class="header-anchor" href="#写流程" aria-hidden="true">#</a> 写流程：</h3><table><thead><tr><th style="text-align:center;">步骤</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">更新数据库</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">删缓存，使缓存失效</td></tr></tbody></table><h2 id="双写并发问题" tabindex="-1"><a class="header-anchor" href="#双写并发问题" aria-hidden="true">#</a> 双写并发问题</h2><p>Cache Aside Pattern 方案能解决 <code>双写并发</code> 问题：</p><blockquote><p>双写并发：简而言之，<code>张三的写操作</code> 一旦和 <code>李四的写操作</code> 交织在一起，就会导致缓存中的数据错误。</p></blockquote><table><thead><tr><th style="text-align:center;">#</th><th style="text-align:left;">用户</th><th style="text-align:left;">操作</th><th style="text-align:center;">数据库中的值</th><th style="text-align:center;">缓存中的值</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">张三-1</td><td style="text-align:left;">更新数据库</td><td style="text-align:center;"><code>10 -&gt; 20</code></td><td style="text-align:center;">10</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">李四-1</td><td style="text-align:left;">更新数据库</td><td style="text-align:center;"><code>20 -&gt; 30</code></td><td style="text-align:center;">30</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">李四-2</td><td style="text-align:left;">删除缓存</td><td style="text-align:center;"><code>30</code></td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;">张三-2</td><td style="text-align:left;">删除缓存</td><td style="text-align:center;"><code>30</code></td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">7</td><td style="text-align:left;">最终</td><td style="text-align:left;">-</td><td style="text-align:center;"><code>30</code></td><td style="text-align:center;">无</td></tr></tbody></table><h2 id="读写并发问题" tabindex="-1"><a class="header-anchor" href="#读写并发问题" aria-hidden="true">#</a> 读写并发问题</h2><p>Cache Aside Pattern 方案能解决不了全部的 <code>读写并发</code> 问题：</p><blockquote><p>读写并发：简而言之，<code>张三的写操作</code> 一旦和 <code>李四的读操作</code> 交织在一起，就会导致缓存中的数据错误。</p></blockquote><p>一部分的 <code>读写并发</code> 问题，Cache Aside Pattern 方案能解决。例如：</p><table><thead><tr><th style="text-align:center;">#</th><th style="text-align:left;">用户</th><th style="text-align:left;">操作</th><th style="text-align:center;">数据库中的值</th><th style="text-align:center;">缓存中的值</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">李四-1</td><td style="text-align:left;">读缓存，没命中</td><td style="text-align:center;">10</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">张三-1</td><td style="text-align:left;">更新数据库</td><td style="text-align:center;"><code>10 -&gt; 20</code></td><td style="text-align:center;">10</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">张三-2</td><td style="text-align:left;">删除缓存</td><td style="text-align:center;">10</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;">李四-2</td><td style="text-align:left;">读数据库</td><td style="text-align:center;">20</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:left;">李四-3</td><td style="text-align:left;">更新缓存，同步数据</td><td style="text-align:center;">20</td><td style="text-align:center;">20</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:left;">最终</td><td style="text-align:left;">-</td><td style="text-align:center;">20</td><td style="text-align:center;">20</td></tr></tbody></table><p>但是，如果是下面这样的交织时序，Cache Aside Pattern 方案也无能为力：</p><table><thead><tr><th style="text-align:center;">#</th><th style="text-align:left;">用户</th><th style="text-align:left;">操作</th><th style="text-align:center;">数据库中的值</th><th style="text-align:center;">缓存中的值</th></tr></thead><tbody><tr><td style="text-align:center;">2</td><td style="text-align:left;">李四-读-1</td><td style="text-align:left;">读缓存，没命中</td><td style="text-align:center;">10</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">李四-读-2</td><td style="text-align:left;">读数据库</td><td style="text-align:center;">10</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;">张三-写-1</td><td style="text-align:left;">更新数据库</td><td style="text-align:center;"><code>10 -&gt; 20</code></td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:left;">张三-写-2</td><td style="text-align:left;">删除缓存</td><td style="text-align:center;">20</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:left;">李四-读-3</td><td style="text-align:left;">更新缓存</td><td style="text-align:center;">20</td><td style="text-align:center;">10</td></tr><tr><td style="text-align:center;">7</td><td style="text-align:left;">最终</td><td style="text-align:left;">-</td><td style="text-align:center;">20</td><td style="text-align:center;">10</td></tr></tbody></table><h2 id="cache-aside-pattern-方案总结" tabindex="-1"><a class="header-anchor" href="#cache-aside-pattern-方案总结" aria-hidden="true">#</a> Cache Aside Pattern 方案总结</h2><p>这个方案足够简单，容易理解，容易实现。只是面对『<strong>部分读写并发问题无能为力</strong>』，不过，实际上出现这种概率可能非常低，因为这个条件需要发生在读缓存时缓存失效，而且并发着有一个写操作。而实际上数据库的写操作会比读操作慢得多，而且还要锁表，而读操作必需在写操作前进入数据库操作，而又要晚于写操作更新缓存，所有的这些条件都具备的概率基本并不大。</p><h2 id="cache-aside-pattern-方案的改进" tabindex="-1"><a class="header-anchor" href="#cache-aside-pattern-方案的改进" aria-hidden="true">#</a> Cache Aside Pattern 方案的改进</h2><h3 id="方案-1-延迟删除" tabindex="-1"><a class="header-anchor" href="#方案-1-延迟删除" aria-hidden="true">#</a> 方案 1：延迟删除</h3><p>将写操作的『删除 Redis』操作改为异步的延迟删除。例如：更新完数据库，1 秒钟之后再删除缓存。</p><p>这种情况下，读写并发造成的数据不一致问题最多也就存在 1 秒。</p><blockquote><p>这个改进方案的问题在于：你要延迟多久？延迟的时间短了没有解决读写并发问题；延迟的时间越长不一致隐患就越大。</p><p>当然，在一致性要求不是那么高的情况下，有 3、5 秒的窗口期数据不一致很正常。</p></blockquote><h3 id="方案-2-借助消息队列-将删存缓存的工作委托给第三方" tabindex="-1"><a class="header-anchor" href="#方案-2-借助消息队列-将删存缓存的工作委托给第三方" aria-hidden="true">#</a> 方案 2：借助消息队列，将删存缓存的工作委托给第三方</h3><ul><li><p>读数据的人，在发现缓存中没有数据时，不再由他自己来刷新缓存，而是由『别人』来刷新；</p></li><li><p>写数据的人，在更新完数据库之后，不再由他自己来删除缓存，而是由『别人』来删除；</p></li></ul><p>简单来说：『别人』先查后刷，查刷一体 。</p><p>分析：『别人』是串行化接收、处理消息，在更新缓存时，他是先读 DB，再写 Cache ，这个过程中是没有『其它的别人』插入的。</p>',30),a={render:function(t,e){return d}}}}]);