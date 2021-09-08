"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[5939],{46820:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-05e45eca",path:"/mysql/06-%E4%BA%8B%E5%8A%A1.html",title:"事务",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"事务的概念",slug:"事务的概念",children:[]},{level:2,title:"事务的提交和回滚",slug:"事务的提交和回滚",children:[]},{level:2,title:"事务的开始与结束",slug:"事务的开始与结束",children:[]},{level:2,title:"事务的 ACID 特性",slug:"事务的-acid-特性",children:[]}],filePathRelative:"mysql/06-事务.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},71137:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const e=(0,a(66252).uE)('<h1 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h1><h2 id="事务的概念" tabindex="-1"><a class="header-anchor" href="#事务的概念" aria-hidden="true">#</a> 事务的概念</h2><p><strong>InnoDB</strong> 支持事务机制，而 MyISAM 不支持，这就是 InnoDB 更常见、更常用的原因。</p><p>『事务』（Transaction）是一系列（多条）相关 SQL 语句组成的最小的逻辑工作单元，即，不允许存在一部分执行成功，一部分执行不成功的情况。</p><p>最典型的例子是两个银行账户的转账，不允许存在一个账户上已经扣了钱，但另一个账户新增不成功的情况。</p><p>MySQL 使用 <strong>START TRANSACTION</strong> 来标识一个事务的开始。</p><h2 id="事务的提交和回滚" tabindex="-1"><a class="header-anchor" href="#事务的提交和回滚" aria-hidden="true">#</a> 事务的提交和回滚</h2><p>要永久性地记录事务中 SQL 语句的结果，需要执行 <strong>COMMIT</strong> 语句，从而提交事务。</p><p>要取消 SQL 语句的结果，需要执行 <strong>ROLLBACK</strong> 语句，从而回滚事务，将所有行重新设置为原始状态。</p><blockquote><p>简而言之，COMMIT 就是确认你刚才所执行的 SQL 语句，而 ROLLBACK 就是撤销你刚才所执行的 SQL 语句。</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> dept <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">&#39;SOFTEWARE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;BEI JING&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>\n<span class="token keyword">UPDATE</span> dept <span class="token keyword">SET</span> loc<span class="token operator">=</span><span class="token string">&#39;SHANG HI&#39;</span> <span class="token keyword">WHERE</span> deptno<span class="token operator">=</span><span class="token number">40</span><span class="token punctuation">;</span>\n<span class="token keyword">ROLLBACK</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>需要注意的是：</p><blockquote><ul><li>事务用来管理 <strong>INSERT</strong>、<strong>UPDATE</strong> 和 <strong>DELETE</strong> 语句。</li><li>你不能回退 <strong>SELECT</strong> 语句（这样做也没有意义，因为 SELECT 语句未对数据库造成变化）。</li><li><strong>CREATE</strong> 和 <strong>DROP</strong> 操作即便是回退，也不会被撤销。</li></ul></blockquote><h2 id="事务的开始与结束" tabindex="-1"><a class="header-anchor" href="#事务的开始与结束" aria-hidden="true">#</a> 事务的开始与结束</h2><p>事务既有起点，也有终点。一个事务以 <code>START TRANSACTION;</code> 开始，以 <code>COMMIT;</code> 或 <code>ROLLBACK;</code> 结束。</p><p>默认 MySQL 启用了自动提交机制，即 MySQL 会『帮』你在每一条单独的 SQL 语句前后加上 <code>START TRANSACTION;</code> 和 <code>COMMIT;</code> 。</p><p>自动提交的优缺点十分分明，有点在于<em>无需你人为说明事务的开始和结束</em>，但你<em>无法将两条（或多条）SQL语句放入同一个事务中</em> 。</p><p>取消 MySQL 的的自动提交功能使用命令：<code>SET autocommit = off;</code> 或者是 <code>SET autocommit = 0;</code></p><p>另外，如果在事务正在执行过程中（即事务还未提交），因为外界客观因素导致事务的结束（如断电、硬盘损坏等），事务会自动回滚。</p><h2 id="事务的-acid-特性" tabindex="-1"><a class="header-anchor" href="#事务的-acid-特性" aria-hidden="true">#</a> 事务的 ACID 特性</h2><p>数据库理论对事务采用了更严格的定义，说明事务有 4 个基本特性，称为 ACID 特性。</p><ul><li>原子性（Atomic）：事务是原子的，事务中所包含的 SQL 语句都是一个不可分割的工作单元。</li><li>一致性（Consist）：事务必须确保数据库的数据库的状态保持一致，在事务开始时，数据库的状态时一致的；在事务结束时，数据库状态也必须是一致的。</li><li>隔离性（Isolated）：多个事务可以独立运行，而不会彼此影响。</li><li>持久性（Durable）：一旦事务被提交之后，数据库的变化就会被永久保存下来。</li></ul>',23),t={render:function(s,n){return e}}}}]);