"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[9445],{97878:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-0644b23e",path:"/java/05-exception.html",title:"异常的作用",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"方法作者面对的一个问题",slug:"方法作者面对的一个问题",children:[]},{level:2,title:"没有异常的编程世界是怎么玩的",slug:"没有异常的编程世界是怎么玩的",children:[{level:3,title:"方案一",slug:"方案一",children:[]},{level:3,title:"方案二",slug:"方案二",children:[]},{level:3,title:"方案三",slug:"方案三",children:[]}]},{level:2,title:"从语法层面解决上述问题：异常",slug:"从语法层面解决上述问题-异常",children:[]},{level:2,title:"异常堆栈",slug:"异常堆栈",children:[]}],filePathRelative:"java/05-exception.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},25764:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(66252).uE)('<h1 id="异常的作用" tabindex="-1"><a class="header-anchor" href="#异常的作用" aria-hidden="true">#</a> 异常的作用</h1><h2 id="方法作者面对的一个问题" tabindex="-1"><a class="header-anchor" href="#方法作者面对的一个问题" aria-hidden="true">#</a> 方法作者面对的一个问题</h2><p>虽然我们面前的代码都是我们一个人编写的，但是我们需要清楚的是，在编码过程中涉及到两个角色：『<strong>类、方法的作者</strong>』和『<strong>类、方法的使用者</strong>』。</p><p>只不过，<strong>我们一个人同时扮演了这两个角色</strong>。<small>认识清这一点很重要。</small></p><p>方法的使用者调用某个方法，逻辑上，相当于方法的使用者『要求』方法的作者去执行某个操作，造成某种效果或得到某些数据。但是方法的作者去执行这项任务时有可能执行成功，也有可能执行失败。例如：</p><blockquote><p>你调用一个 DAO 方法去删除数据库中的某条数据，但是在执行期间，数据库所在的服务器可能断电，也可能断网，从而导致客户端<small>（你的代码）</small>和数据库服务器连接断开，那么，这个 DAO 方法的执行当然就不会成功。</p></blockquote><p>简单来说就是，你去调用一个方法，没有人能保证这个方法的执行一定就会成功的！就算被调方法的代码是 100% 正确的，你调用方法最后的结果也不一定是执行成功。例如上例就是。</p><p>那方法的作者如何告知方法的使用者：<strong>你要我去执行的事情没能成功完成，我执行失败了，并且失败原因是 xxx</strong> ？</p><h2 id="没有异常的编程世界是怎么玩的" tabindex="-1"><a class="header-anchor" href="#没有异常的编程世界是怎么玩的" aria-hidden="true">#</a> 没有异常的编程世界是怎么玩的</h2><p>上述问题不单单是 Java 程序员要面对的问题，在 Java 之前，甚至是在 C++ 之前，程序员就要面对并解决这个问题。</p><blockquote><p>有没有更偏门的、小众的编程语言早于 C++ 提出异常的概念这？个我没有深入研究，但是在通用语言中，C++ 是第一个提出『异常』语法特性的编程语言。C++ 之前的『著名语言』中，都没有异常的概念。</p></blockquote><h3 id="方案一" tabindex="-1"><a class="header-anchor" href="#方案一" aria-hidden="true">#</a> 方案一</h3><p>对于『告知调用者调用方法失败』，最简单最容易想到的办法是返回一个 boolean 值，用 boolean 值的 true 和 false 来表示『调用成功』和『调用失败』：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>    <span class="token comment">// 情况 1 导致的失败</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>    <span class="token comment">// 情况 2 导致的失败</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>    <span class="token comment">// 情况 3 导致的失败</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>    <span class="token comment">// 成功</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>上面的代码很好理解，但是『返回 boolean 值』这种方案很明显地有一个缺陷：可以表示成功和失败，<strong>但是无法表示失败的原因</strong>。</p><p><code>doSomething()</code> 方法的调用者在获得返回值 false 之后，能得知该方法执行失败，但不知道具体的失败原因。</p><h3 id="方案二" tabindex="-1"><a class="header-anchor" href="#方案二" aria-hidden="true">#</a> 方案二</h3><p>为了解决方案一的缺陷，程序员想出了方案二：返回一个 int 值，0 表示成功，非 0 值表示失败，非 0 值又可称<strong>错误码</strong>。</p><p>上面的代码就会改造成如下形式：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>    <span class="token comment">// 情况 1 导致的失败</span>\n        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>    <span class="token comment">// 情况 2 导致的失败</span>\n        <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>    <span class="token comment">// 情况 3 导致的失败</span>\n        <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>    <span class="token comment">// 成功</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>方法的调用者可以通过 <code>doSomething()</code> 方法的返回值来得知成功与否，以及失败的原因。</p><p>但是方案二仍有两个缺陷：</p><ol><li><p>返回的错误码是<strong>无语义</strong>的。即，错误码只是一个代号，如果没有配套的文档进行说明，方法调用者单凭错误码无法得知错误的原因。</p></li><li><p>返回 0 或错误码会『占用』返回值类型。如果方法本身在执行正常时需要返回一个字符串，那么这个方法<strong>不可能有时返回字符串，有时返回 int</strong>，因为方法返回值类型只能有一个。</p></li></ol><h3 id="方案三" tabindex="-1"><a class="header-anchor" href="#方案三" aria-hidden="true">#</a> 方案三</h3><p>方案二的缺陷不是不能解决：</p><ul><li><p>可以通过枚举来让错误码语义化，解决方案一的第一个缺陷；</p></li><li><p>可以通过结果参数，或者是联合体/结构体/类来包装返回值，解决方案二的第二个缺陷。</p></li></ul><p>但是上述的改进都是程序员层面“强行”想出的解决办法，而并非编程语言本身所提供的“便利”，需要程序员进行“额外”的编码才能达到预期的必要的效果。</p><p>在发现『告知方法调用者方法调用失败，并且失败原因是 xxx』是编程必要需求时，开始要求从编程语言本身的语法层面上解决这个需求。</p><h2 id="从语法层面解决上述问题-异常" tabindex="-1"><a class="header-anchor" href="#从语法层面解决上述问题-异常" aria-hidden="true">#</a> 从语法层面解决上述问题：异常</h2><p>异常概念的提出就是要从编程语言的语法层面上解决『返回错误信息』的问题。</p><p>相较于上述的方案三，异常从语法层面上弥补了方案二的缺陷：</p><ul><li><p>通过自定义异常来代替错误码，实现错误码所没有的语义话；</p></li><li><p>异常是从被调方法中抛出，而不是返回，因此异常不会占用方法返回值类型。</p></li></ul><p>上述的代码在引入异常概念后将会变成如下形式：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>    <span class="token comment">// 情况 1 导致的失败</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">XxxException</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>    <span class="token comment">// 情况 2 导致的失败</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">YyyException</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>    <span class="token comment">// 情况 3 导致的失败</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ZzzException</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n    <span class="token keyword">return</span> <span class="token string">&quot;该返回啥返回啥&quot;</span><span class="token punctuation">;</span>    <span class="token comment">// 成功</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="异常堆栈" tabindex="-1"><a class="header-anchor" href="#异常堆栈" aria-hidden="true">#</a> 异常堆栈</h2><p>在 Java 中，异常类本身代表着一种错误原因/种类，在异常对象中还包含着整个异常链。</p><p>即，a 方法执行不成功是因为其中的代码在调用 b 方法执行失败；而 b 方法执行失败，是因为它在调用 c 方法时 c 方法执行失败；而 c 方法执行失败的原因又是它在执行 d 方法时调用 e 时 e 方法执行失败 ...，直到最终的最底层原因。</p>',37),e={render:function(n,s){return p}}}}]);