"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[3014],{63990:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-49fd700e",path:"/spring/04-AOP%E5%8E%9F%E7%90%86.html",title:"Spring AOP 的两种实现方案",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"JDK 动态代理",slug:"jdk-动态代理",children:[]},{level:2,title:"cglib 动态代理",slug:"cglib-动态代理",children:[]},{level:2,title:"总结与对比",slug:"总结与对比",children:[]},{level:2,title:"强制使用 Cglib 方案",slug:"强制使用-cglib-方案",children:[]}],filePathRelative:"spring/04-AOP原理.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},916:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(66252).uE)('<h1 id="spring-aop-的两种实现方案" tabindex="-1"><a class="header-anchor" href="#spring-aop-的两种实现方案" aria-hidden="true">#</a> Spring AOP 的两种实现方案</h1><p>Spring AOP 可以利用两种不同的方案实现对目标对象的方法的增强。</p><ul><li><p>JDK 动态代理</p></li><li><p>Cglib 动态代理</p></li></ul><h2 id="jdk-动态代理" tabindex="-1"><a class="header-anchor" href="#jdk-动态代理" aria-hidden="true">#</a> JDK 动态代理</h2><p>JDK 动态代理是 Spring AOP 的默认实现方案。其基本原理如下图：</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/spring/img/spring-aop-jdk-01.png" alt="spring-aop-jdbc"></p><ul><li><p>接口和被代理类</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>\n    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;猫吃鱼&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>代理类</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CatProxy</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">Cat</span> target<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">CatProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行前调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        target<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行后调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li></ul><p>从上述的 UML 图可以看到，JDK 动态代理有一个限制：<strong>它要求被代理对象必须有一个接口</strong> 。</p><p>在整个方案中，如果 <strong><code>Animal</code></strong> 接口并不存在，那么就无法使用 JDK 动态代理方案实现 AOP 功能。</p><h2 id="cglib-动态代理" tabindex="-1"><a class="header-anchor" href="#cglib-动态代理" aria-hidden="true">#</a> cglib 动态代理</h2><p>cglib 是 Spring AOP 的另一个方案，它利用了 cglib 包来实现动态代理功能。</p><p>使用 cglib 需要引入 cglib 包：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.11<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>不过由于 Spring AOP 的 <code>org.springframework.cglib</code> 包中包含了 CGLIB 的相关代码，所以也可以选择导入 Spring AOP 的 Maven 依赖 。</p><p>Cglib 实现的动态代理基本原理如下：</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/spring/img/spring-aop-cglib-01.png" alt="spring-aop-cglib"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;猫吃鱼&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CatProxy</span> <span class="token keyword">extends</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">CatProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行前调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行后调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>cglib 方案没有 jdk 方案的限制，它利用的是继承，因此对 Cat 类有无接口不作要求。不过继承也带来一个代价，那就是如果 Cat 类中有 <strong>final</strong> 方法，那么 CatProxy 无法对 <strong>final</strong> 方法进行增强。</p><h2 id="总结与对比" tabindex="-1"><a class="header-anchor" href="#总结与对比" aria-hidden="true">#</a> 总结与对比</h2><p>JDK 方案和 Cglib 方案各有优缺点。jdk 方案是 Spring AOP 的默认方案，但是在 Spring Boot 中官方建议大家采用 Cglib 方案。</p><p>两种方案各自的缺陷：</p><ul><li>JDK 方案要求被代理对象（Cat）必须是某个接口的实现类。</li><li>Cglib 方案无法增强被代理对象（Cat）的 <strong>final</strong> 方法。</li></ul><p>另外，如果需要代理的对象的体系较复杂（实现了多个接口和较深的继承层次结构），Spring 使用 JDK 实现动态代理时有可能出现问题。这也是 Spring Boot 中建议使用 Cglib 方案的原因。</p><h2 id="强制使用-cglib-方案" tabindex="-1"><a class="header-anchor" href="#强制使用-cglib-方案" aria-hidden="true">#</a> 强制使用 Cglib 方案</h2><p>如果是以 <strong>AspectJ</strong> 注解的方式使用 Spring AOP，那么配置方式是将元素 <strong>&lt;aop:aspectj-autoproxy &gt;</strong> 的 <strong>proxy-target-class</strong> 属性设置为 <strong>true</strong> 。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>aspectj-autoproxy</span> <span class="token attr-name">proxy-target-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果是通过 Java 代码进行配置的话，则使用 <strong>@EnableAspectJAutoProxy(proxyTargetClass=true)</strong> 注解。</p><hr><p>如果是以 <em><code>.xml</code></em> 配置的方式使用 Spring AOP，那么将元素 <em><code>&lt;aop:config&gt;</code></em> 的 <code>proxy-target-class</code> 属性的值设置为 true 。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>config</span> <span class="token attr-name">proxy-target-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    ... <span class="token comment">&lt;!-- 切面配置 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">aop:</span>config</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',31),t={render:function(n,s){return p}}}}]);