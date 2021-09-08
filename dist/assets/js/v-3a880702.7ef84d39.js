"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[9780],{92095:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-3a880702",path:"/spring-cloud/03-netflix-ribbon.html",title:"RestTemplate 和 Ribbon",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. RestTemplate",slug:"_1-resttemplate",children:[{level:3,title:"1.1 RestTemplate 和它的小伙伴",slug:"_1-1-resttemplate-和它的小伙伴",children:[]},{level:3,title:"1.2 RestTemplate 实现远程调用",slug:"_1-2-resttemplate-实现远程调用",children:[]},{level:3,title:"1.3 请求头和响应头",slug:"_1-3-请求头和响应头",children:[]},{level:3,title:"1.4 RestTemplate 底层实现的切换",slug:"_1-4-resttemplate-底层实现的切换",children:[]}]},{level:2,title:"2. 客户端负载均衡器：Ribbon",slug:"_2-客户端负载均衡器-ribbon",children:[{level:3,title:"2.1 Ribbon 在 RestTemplate 中的负载均衡",slug:"_2-1-ribbon-在-resttemplate-中的负载均衡",children:[]},{level:3,title:"2.2 Ribbon 的执行原理",slug:"_2-2-ribbon-的执行原理",children:[]},{level:3,title:"2.3 负载均衡策略和 IRule 接口",slug:"_2-3-负载均衡策略和-irule-接口",children:[]},{level:3,title:"2.4 Ribbon 的饥饿加载",slug:"_2-4-ribbon-的饥饿加载",children:[]},{level:3,title:"2.5 Ribbon 的超时和超时重试",slug:"_2-5-ribbon-的超时和超时重试",children:[]}]}],filePathRelative:"spring-cloud/03-netflix-ribbon.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},154:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(66252).uE)('<h1 id="resttemplate-和-ribbon" tabindex="-1"><a class="header-anchor" href="#resttemplate-和-ribbon" aria-hidden="true">#</a> RestTemplate 和 Ribbon</h1><p>在 Spring Cloud 体系中，发起远程调用，本质上就是发起 HTTP 请求。</p><p>服务的提供者本质上就是一个 RESTful 风格的 Web 服务，因此，在知道其 API 的情况下我们只要能够发出 HTTP 请求，实际上就『调用』到了这个服务。</p><h2 id="_1-resttemplate" tabindex="-1"><a class="header-anchor" href="#_1-resttemplate" aria-hidden="true">#</a> 1. RestTemplate</h2><blockquote><p>你的项目只要直接或间接引入了 <strong>spring-web</strong> 包，你就可以使用 <strong>RestTemplate</strong> 。</p></blockquote><h3 id="_1-1-resttemplate-和它的小伙伴" tabindex="-1"><a class="header-anchor" href="#_1-1-resttemplate-和它的小伙伴" aria-hidden="true">#</a> 1.1 RestTemplate 和它的小伙伴</h3><p>RestTemplate 类似于 Slf4J，它本身并没有做『更多』的什么事情，它的主要功能和目的是对背后真正干活的“人”做二次包装，以提供统一的、简洁的使用方式。</p><p>在默认的<small>（未引入其它包的）</small>情况下，在 RestTemplate 背后真正干活的是 JDK 中的网络相关类：HttpURLConnection 。如此之外，RestTemplate 还支持使用 HttpClient 和 OkHTTP 库，<small>前提是，你要额外引入这两个包</small>。</p><p>当然，无论 RestTemplate 背后是谁在真正地处理 HTTP 请求和响应，RestTemplate 对外提供的接口都是一致的，并且更简洁。</p><blockquote><p>引用并使用 apache 基金会的 httpclient 。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.httpcomponents<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>httpclient<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote><p><img src="https://hemiao3000.gitee.io/java-note-img/images/spring-cloud/img/RestTemplate-1.png" alt="RestTemplate-1"></p><p><strong>RestTemplate</strong> 提供的常用方法是以 HTTP 协议中的 6 个动词开头的：</p><table><thead><tr><th style="text-align:left;">HTTP Method</th><th style="text-align:left;">常用方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">GET</td><td style="text-align:left;">getForObject</td><td style="text-align:left;">发起 GET 请求响应对象</td></tr><tr><td style="text-align:left;">GET</td><td style="text-align:left;">getForEntity</td><td style="text-align:left;">发起 GET 请求响应结果、包含响应对象、请求头、状态码等 HTTP 协议详细内容</td></tr><tr><td style="text-align:left;">POST</td><td style="text-align:left;">postForObject</td><td style="text-align:left;">发起 POST 请求响应对象</td></tr><tr><td style="text-align:left;">POST</td><td style="text-align:left;">postForEntity</td><td style="text-align:left;">发起 POST 请求响应结果、包含响应对象、请求头、状态码等 HTTP 协议详细内容</td></tr><tr><td style="text-align:left;">DELETE</td><td style="text-align:left;">delete</td><td style="text-align:left;">发起 HTTP 的 DELETE 方法请求</td></tr><tr><td style="text-align:left;">PUT</td><td style="text-align:left;">put</td><td style="text-align:left;">发起 HTTP 的 PUT 方法请求</td></tr></tbody></table><p>这些方法的名称清楚地表明它们发出的是何种 HTTP 请求，而名称中包含的第二部分表示返回的内容。</p><h3 id="_1-2-resttemplate-实现远程调用" tabindex="-1"><a class="header-anchor" href="#_1-2-resttemplate-实现远程调用" aria-hidden="true">#</a> 1.2 RestTemplate 实现远程调用</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n\n    <span class="token comment">// 真实使用场景中，它可以配置为单例</span>\n    <span class="token class-name">RestTemplate</span> restTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 发送远程的http请求的地址</span>\n    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;http://127.0.0.1:8080/hello&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 发送到远程服务的参数</span>\n    <span class="token class-name">MultiValueMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedMultiValueMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    params<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    params<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;phoneNo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;13214409773&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    params<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;HttpClient 测试远程服务调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 通过 RestTemplate 对象发送 post 请求</span>\n    <span class="token class-name">String</span> str <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">postForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//  Xxx obj = restTemplate.postForObject(url, params, Xxx.class);</span>\n\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_1-3-请求头和响应头" tabindex="-1"><a class="header-anchor" href="#_1-3-请求头和响应头" aria-hidden="true">#</a> 1.3 请求头和响应头</h3><p>有时候你可能有些额外的信息需要附带在请求头中发送到后台，此时，你可以使用如下形式的代码：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">RestTemplate</span> restTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;http://47.xxx.xxx.96/register/checkEmail&quot;</span><span class="token punctuation">;</span>\n\n<span class="token class-name">HttpHeaders</span> headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nheaders<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token class-name">MediaType</span><span class="token punctuation">.</span>APPLICATION_FORM_URLENCODED<span class="token punctuation">)</span><span class="token punctuation">;</span>\nheaders<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nheaders<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nheaders<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">MultiValueMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedMultiValueMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nparams<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nparams<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nparams<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">HttpEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MultiValueMap</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">Xxx</span> obj <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">postForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token class-name">Xxx</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>如果我们想获取更多的 HTTP 响应信息<small>（例如响应头）</small>，可以使用 <strong>postForEntity</strong> 方法。如下：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> entity <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">postForEntity</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 查看响应的状态码</span>\n<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entity<span class="token punctuation">.</span><span class="token function">getStatusCodeValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 查看响应的响应体</span>\n<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entity<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 查看响应头</span>\n<span class="token class-name">HttpHeaders</span> headMap <span class="token operator">=</span> entity<span class="token punctuation">.</span><span class="token function">getHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> m <span class="token operator">:</span> headMap<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> m<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_1-4-resttemplate-底层实现的切换" tabindex="-1"><a class="header-anchor" href="#_1-4-resttemplate-底层实现的切换" aria-hidden="true">#</a> 1.4 RestTemplate 底层实现的切换</h3><p>RestTemplate 底层实现最常用的有以下三种：</p><ul><li><p><strong>SimpleClientHttpRequestFactory</strong> <small>封装 JDK 的 URLConnection。默认实现</small></p></li><li><p><strong>HttpComponentsClientHttpRequestFactory</strong> <small>封装第三方类库 HttpClient</small></p></li><li><p><strong>OkHttp3ClientHttpRequestFactory</strong> <small>封装封装第三方类库 OKHttp</small></p></li></ul><blockquote><p>HttpClient 使用率更高，而 OKHttp 的执行效率最高。</p></blockquote><p>所以，在你将 RestTemplate 配置成单例时，你可以指定它使用何种底层库：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>\n<span class="token keyword">public</span> <span class="token class-name">RestTemplate</span> <span class="token function">restTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">RestTemplate</span> restTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认实现</span>\n<span class="token comment">//  RestTemplate restTemplate = new RestTemplate(new SimpleClientHttpRequestFactory()); // 等同默认实现</span>\n<span class="token comment">//  RestTemplate restTemplate = new RestTemplate(new HttpComponentsClientHttpRequestFactory()); // 使用 HttpClient</span>\n<span class="token comment">//  RestTemplate restTemplate = new RestTemplate(new OkHttp3ClientHttpRequestFactory()); // 使用 OkHttp</span>\n    <span class="token keyword">return</span> restTemplate<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在实际的应用中，只需要选择上面的代码中的其中一种 RestTemplate Bean 即可。当然，无论 RestTemplate 底层使用何种网络库，我们对于它的使用方式都是统一的。</p><h2 id="_2-客户端负载均衡器-ribbon" tabindex="-1"><a class="header-anchor" href="#_2-客户端负载均衡器-ribbon" aria-hidden="true">#</a> 2. 客户端负载均衡器：Ribbon</h2><h3 id="_2-1-ribbon-在-resttemplate-中的负载均衡" tabindex="-1"><a class="header-anchor" href="#_2-1-ribbon-在-resttemplate-中的负载均衡" aria-hidden="true">#</a> 2.1 Ribbon 在 RestTemplate 中的负载均衡</h3><p>在你没有意识到 Ribbon<small>（读作 [ˈrɪbən] ）</small>存在的时候，Ribbon 就已经可以在你的项目中<small>（配合 RestTemplate）</small>起作用了。</p><p>为你的 RestTemplate 的 @Bean 加上 <strong>@LoadBalanced</strong> 注解：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>\n<span class="token annotation punctuation">@LoadBalanced</span> <span class="token comment">// 它来自于 spring-cloud-starter-netflix-eureka-client </span>\n<span class="token class-name">RestTemplate</span> <span class="token function">restTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>@LoadBalanced 注解背后就是 Spring AOP 动态代理的思想。</p></blockquote><p>你循环调用 RestTemplate，以目标服务在 Eureka Server 上注册的名字来代替 URL 中的 IP 地址，你就会发现有负载均衡的效果：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;http://SELF-DEPARTMENT/hello&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">String</span> str <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">postForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这里之所以能出现负载均衡现象是因为：</p><ol><li><p>你的项目间接引用到了 Ribbon，<em>spring-cloud-starter-netflix-eureka-client</em> 包中已经包含了 ribbon；</p><p>当然，你也可以单独引用（<strong>spring-cloud-starter-netflix-eureka-ribbon</strong>），不过，逻辑上这就是一句啰嗦的废话。</p></li><li><p>你的项目是一个 Eureka Client 项目，当它启动时，它会去 Ereuka Server 上拉取已注册的所有的服务的 IP 地址等相关信息；</p></li><li><p>当你通过 RestTemplate 以『<strong>application name</strong>』为依据发出请求时，Ribbon 会参与进来，会将 application-name『<strong>替换</strong>』成上述第 2 步中查到的 IP 地址。</p></li><li><p>在『<strong>替换</strong>』的过程中，它以某种规则轮流使用同一个服务的多个实例的 IP 地址，从而实现负载均衡效果。这里的『<strong>某种规则</strong>』指的就是负载策略。</p></li><li><p>默认的负载策略是轮循。</p></li></ol><blockquote><p>这里需要注意的是，使用了 <strong>@LoadBalanced</strong> 注解之后，RestTemplate 的 URL 中不能再出现 IP:Port，哪怕只有一个单点，也只能出现目标服务在 Eureka Server 上注册的 name。反之亦然。</p></blockquote><p><strong>Spring Cloud Ribbon</strong> 不像注册中心<small>（Eureka Server）</small>、配置中心<small>（Config Server）</small>、网关<small>（Gateway）</small>那样独立部署、运行。它更像是一个工具类<small>（库）</small>，『<strong>嵌套</strong>』在各个组件中配合其它组件使用。</p><h3 id="_2-2-ribbon-的执行原理" tabindex="-1"><a class="header-anchor" href="#_2-2-ribbon-的执行原理" aria-hidden="true">#</a> 2.2 Ribbon 的执行原理</h3><p>Ribbon 是以拦截器的方式『<strong>参与</strong>』到 RestTemplate 的请求发送功能中的。</p><p>当我们 RestTemplate 执行请求操作时，就会被 Ribbon 的拦截器拦截。Ribbon 通过 <code>request.getURI()</code> 方法求能获得 RestTemplate 所发出的请求的 URI，不过此时 URI 中的内容是目标服务的 <em>application-name</em> 而非 IP 。</p><p>由于我们的项目作为 Eureka Client 能够从 Eureka Server 上拉取到 application-name 所对应的一个<small>（或多个）</small>IP 地址及端口信息，因此，Ribbon 会根据某种『<strong>规则</strong>』<small>（算法）</small>获取到目标服务的真实的访问路径。</p><p>最后，Ribbon 放行 RestTemplate，让它向目标服务继续发起请求<small>（并获取返回）</small>。</p><h3 id="_2-3-负载均衡策略和-irule-接口" tabindex="-1"><a class="header-anchor" href="#_2-3-负载均衡策略和-irule-接口" aria-hidden="true">#</a> 2.3 负载均衡策略和 IRule 接口</h3><p>前面提到过的『<strong>规则</strong>』、『<strong>算法</strong>』就是『<strong>负载均衡策略</strong>』。</p><p>Ribbon 内置了 8 种负载均衡策略<small>（其实是 7 种）</small>，它们都直接或间接实现了 <strong>IRule</strong> 接口：</p><p>其中常见的有：</p><ol><li><p><em>RandomRule</em></p><p>随机策略。随机选择目标服务的实例。</p></li><li><p><strong>RoundRobinRule</strong>（默认策略）</p><p>轮询策略。按顺序循环选择目标服务的实例。</p></li><li><p><strong>WeightedResponseTimeRule</strong></p><p>根据响应时间分配一个 Weight（权重），响应时间越长，Weight 越小，被选中的可能性越低。</p><p>这个策略以前版本中被称作 <em>ResponseTimeWeightedRule</em> 。</p></li><li><p><strong>BestAvailablRule</strong></p><p>这种策略下，Ribbon 会观测、统计目标服务的各个实例的运行状况、并发量。</p><p>当再次发起对目标服务的访问时，Ribbon 会先过滤掉因为多次访问故障而被标记为 Error 的 实例。然后选择一个并发量<small>（ActiveRequestCount）</small>最小的实例发起访问。</p><p>俗话说就是：先去掉不能干活的，然后在能干活的里面找一个最闲的。</p></li></ol><blockquote><p>上述 4 种策略简单高效，使用较多。而 <em>AvailabilityFilteringRule</em> 和 <em>ZoneAvoidanceRule</em> 策略需要结合断路、超时等参数配置，使用起来比较复杂，容易进坑，所以使用较少。</p></blockquote><hr><p>Ribbon 默认的负载均衡策略是：轮询，如果我们想调整一下负载均衡策略，可以通过如下的配置。在『服务消费者』的服务中<small>（即使用 RestTemplate 发起请求的一方）</small>，做 Ribbon 负载均衡策略的调整。</p><p>目前最简单的方式就是：</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">SELF-DEPARTMENT</span><span class="token punctuation">:</span>\n  <span class="token key atrule">ribbon</span><span class="token punctuation">:</span>\n    <span class="token key atrule">NFLoadBalancerRuleClassName</span><span class="token punctuation">:</span> com.netflix.loadbalancer.RandomRule\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>注意，以上配置的仅针对 application-name 为 SELF-DEPARTMENT 的微服务有效。即，若你要调用多个不同的微服务，你要对它们一一配置。</p><h3 id="_2-4-ribbon-的饥饿加载" tabindex="-1"><a class="header-anchor" href="#_2-4-ribbon-的饥饿加载" aria-hidden="true">#</a> 2.4 Ribbon 的饥饿加载</h3><p>默认情况下，服务消费方调用服务提供方接口的时候，第一次请求会慢一些，甚至会超时，而之后的调用就没有问题了。</p><p>这是因为 Ribbon 进行客户端负载均衡的 Client 并不是在服务启动的时候就初始化好的，而是在调用的时候才会去创建相应的 Client，所以第一次调用的耗时不仅仅包含发送HTTP请求的时间，还包含了创建 RibbonClient 的时间，这样一来如果创建时间速度较慢，同时设置的超时时间又比较短的话，很容易就会出现上面所描述的现象。</p><p>你可以通过启用 Ribbon 的饥饿加载（即，立即加载）模式，并指定在项目启动时就要加载的服务：</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">ribbon</span><span class="token punctuation">:</span>\n  <span class="token key atrule">eager-load</span><span class="token punctuation">:</span>\n    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>   <span class="token comment"># 开启饥饿加载</span>\n    <span class="token key atrule">clients</span><span class="token punctuation">:</span> aservice<span class="token punctuation">-</span>sms<span class="token punctuation">,</span> xxx<span class="token punctuation">,</span> xxx  <span class="token comment"># 需要饥饿加载的服务</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-5-ribbon-的超时和超时重试" tabindex="-1"><a class="header-anchor" href="#_2-5-ribbon-的超时和超时重试" aria-hidden="true">#</a> 2.5 Ribbon 的超时和超时重试</h3><p>理论上，Ribbon 是有超时设置，以及超时之后的重试功能的。但是，在 RestTemplate 和 Ribbon 结合的方案中，Ribbon 的超时设置和重试设置的配置方式一直在变动，因此有很多『配置无效』的现象，十分诡异。</p><p>考虑到我们在后续的项目中不会使用 RestTemplate 和 Ribbon 整合，而是使用 OpenFeign ，因此，这里就不展开解释了。</p>',64),p={render:function(n,s){return t}}}}]);