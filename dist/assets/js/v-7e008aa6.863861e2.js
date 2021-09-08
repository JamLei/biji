"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[6115],{88921:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-7e008aa6",path:"/maven/102-%E5%A4%9A%E6%A8%A1%E5%9D%97.html",title:"Maven 多模块（聚合）",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"maven/102-多模块.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},38142:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(66252).uE)('<h1 id="maven-多模块-聚合" tabindex="-1"><a class="header-anchor" href="#maven-多模块-聚合" aria-hidden="true">#</a> Maven 多模块（聚合）</h1><ul><li><p>Maven <strong>继承</strong><small>（父子工程）</small>的目的为了配置文件的复用和配置信息的统一管理；</p></li><li><p>Maven <strong>聚合</strong><small>（多模块工程）</small>目的是项目功能上的拆分；</p></li><li><p>Maven <strong>聚合</strong><small>（多模块工程）</small>功能通常会和继承功能一起使用。<small>这样，多模块工程看起来就像是父子工程的升级版。</small></p></li><li><p>Maven 聚合功能也可以脱离继承单独使用。</p></li></ul><blockquote><p>例如，在 log4j1 时代，log4j 项目的『<strong>产出</strong>』只有一个 <strong>log4j.jar</strong> 包。到了 log4j2 时代，log4j 项目的『<strong>产出</strong>』就变成了两个包：<strong>log4j-api</strong> 和 <strong>log4j-core</strong> 。</p><p>很明显，就是两部分相对独立的代码分别打成了两个包，而并不像以前那样打成一个包。</p></blockquote><p>由于 Maven 多模块项目是父子项目的一种高级形式，因此，多模块项目也是有一个父模块包含一个或多个子模块，不过有几点不同：</p><ol><li><p>多模块项目中，子项目通常是在父项目『<strong>里面</strong>』的。</p></li><li><p>多模块项目中，父项目中会『多出来』一个 <strong>&lt;modules&gt;</strong> 元素。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.codehaus.mojo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>my-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modules</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>child1-module<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>child2-module<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modules</span><span class="token punctuation">&gt;</span></span>\n\n    ...\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li></ol>',5),p={render:function(n,s){return t}}}}]);