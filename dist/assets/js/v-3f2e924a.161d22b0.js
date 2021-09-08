"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[941],{35839:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-3f2e924a",path:"/docker-install/01-mysql.html",title:"Docker MySQL",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装及测试",slug:"安装及测试",children:[]},{level:2,title:"容器中的配置文件和数据的存储",slug:"容器中的配置文件和数据的存储",children:[]},{level:2,title:"配置与挂载",slug:"配置与挂载",children:[]},{level:2,title:"初始化数据库",slug:"初始化数据库",children:[]}],filePathRelative:"docker-install/01-mysql.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},68394:(s,n,a)=>{a.r(n),a.d(n,{default:()=>o});var e=a(66252);const l=(0,e._)("h1",{id:"docker-mysql",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#docker-mysql","aria-hidden":"true"},"#"),(0,e.Uk)(" Docker MySQL")],-1),p=(0,e.Uk)("MySQL 的 Docker 镜像在 dockerhub 上的地址："),r={href:"https://hub.docker.com/_/mysql",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Uk)("https://hub.docker.com/_/mysql"),c=(0,e.uE)('<p>当前<small>（2021-04-02）</small>的 <strong>latest</strong> 和 <strong>8.0.23</strong> 是同一个镜像 。另外，<strong>5.7</strong> 版本和 <strong>5.7.33</strong> 是同一个镜像。</p><h2 id="安装及测试" tabindex="-1"><a class="header-anchor" href="#安装及测试" aria-hidden="true">#</a> 安装及测试</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 查询中央仓库</span>\ndocker search -f is-official<span class="token operator">=</span>true mysql\n\n<span class="token comment"># 从中央仓库下载</span>\ndocker pull mysql:5.7.33\n\n<span class="token comment"># 或，直接导入已有的镜像文件</span>\n<span class="token comment"># docker load -i mysql-5.7.33.tar</span>\n\n<span class="token comment"># 查看本地镜像</span>\ndocker images\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>会出现类似如下内容：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>REPOSITORY      TAG       IMAGE ID       CREATED        SIZE\nmysql           <span class="token number">5.7</span>.33    a70d36bc331a   <span class="token number">2</span> months ago   449MB\nmysql           <span class="token number">8.0</span>.23    c8562eaf9d81   <span class="token number">2</span> months ago   546MB\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>运行容器：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 删除曾经已有的同名容器 </span>\ndocker <span class="token function">rm</span> -f mysql-test\n \n  <span class="token comment"># 创建并运行 mysql 容器的语法</span>\ndocker run <span class="token punctuation">\\</span>\n  -d <span class="token punctuation">\\</span>\n  --name <span class="token operator">&lt;</span>指定容器名<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>\n  -p <span class="token operator">&lt;</span>指定宿主机端口<span class="token operator">&gt;</span>:3306 <span class="token punctuation">\\</span>\n  -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token operator">&lt;</span>指定root登录密码<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>\n  mysql:5.7.33\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>例如：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run            <span class="token punctuation">\\</span>\n  -d                  <span class="token punctuation">\\</span>\n  --name mysql-3306   <span class="token punctuation">\\</span>\n  -p <span class="token number">3306</span>:3306        <span class="token punctuation">\\</span>\n  -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>\n  mysql:5.7.33\n\n<span class="token comment"># docker run -d --name mysql-3306 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7.33</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>验证安装成功</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 查看容器的运行信息</span>\ndocker <span class="token function">ps</span>\n\n<span class="token comment"># 进入 mysql-test 容器</span>\ndocker <span class="token builtin class-name">exec</span> -it mysql-test /bin/bash\n\n<span class="token comment"># 执行 mysql-cli 的连接命令</span>\nmysql -uroot -p123456\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3>后续可选操作：</h3><ul><li><p>对 root 的远程连接授权</p><p>容器逻辑上等价于另一台电脑。而在 mysql 中，root 用户默认只能从 MySQL Server 所在的电脑上登陆，无法从『另一台』电脑通过远程连接的方式登陆。</p><p>当然，这种『默认』行为是可以配置的。</p><p>按上述命令，从容器内部连接到 MySQL Server，执行如下 SQL 语句：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">use</span> mysql<span class="token punctuation">;</span>\n<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token keyword">user</span><span class="token punctuation">,</span> host <span class="token keyword">from</span> <span class="token keyword">user</span><span class="token punctuation">;</span>\n<span class="token operator">&gt;</span> <span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>\n<span class="token operator">&gt;</span> flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>从容器外部连接</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> mysql -h <span class="token operator">&lt;</span>宿主机IP<span class="token operator">&gt;</span> -P <span class="token operator">&lt;</span>宿主机端口号<span class="token operator">&gt;</span> -u root -p <span class="token operator">&lt;</span>root登陆密码<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h2 id="容器中的配置文件和数据的存储" tabindex="-1"><a class="header-anchor" href="#容器中的配置文件和数据的存储" aria-hidden="true">#</a> 容器中的配置文件和数据的存储</h2><p>MySQL Server 的数据的存储目录是容器中的</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/var/lib/mysql/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr><p>Docker MySQL Server 的配置文件是容器中的</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/etc/mysql/my.cnf \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在同级的目录下中还有一个 <strong>mysql.cnf</strong> 配置文件，其实，<strong>my.cnf</strong> 和 <strong>mysql.cnf</strong> 是同一个文件。<small><strong>my.cnf</strong> 是 <strong>mysql.cnf</strong> 的链接。</small></p><p>其实这个 <strong>my.cnf</strong> 配置文件只是个『引子』，它配置了：让 MySQL Server 去加载</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/etc/mysql/conf.d/*.cnf\n/etc/mysql/mysql.conf.d/*.cnf\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>按惯例：</p><ul><li><p><strong>mysql.conf.d</strong> 下的 <strong>mysqld.cnf</strong> 配置文件中放的是 MySQL Server 约定俗成的、通常不会轻易变动的配置。<br><small>例如，数据文件的存储位置。绝大多数情况下，我们不会动这个目录及其下的配置文件的内容。</small></p></li><li><p><strong>conf.d</strong> 下的配置文件中放的是根据具体情况、具体场景 MySQL Server 可能会进行调整的配置。<br><small>例如，MySQL Server 的字符集。未来，我们通过 <strong>-v</strong> 映射的就是这个目录。</small></p></li></ul></blockquote><p>容器中的 <strong>conf.d</strong> 下有 3 个配置文件，这 3 个配置文件的有效的内容加起来总共就是如下内容：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[mysqld]\nskip-host-cache\nskip-name-resolve\n\n[mysqldump]\nquick\nquote-names\nmax_allowed_packet\t= 16M\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="配置与挂载" tabindex="-1"><a class="header-anchor" href="#配置与挂载" aria-hidden="true">#</a> 配置与挂载</h2><ul><li><p>删除已存在的同名容器</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker stop mysql-3306\ndocker <span class="token function">rm</span> mysql-3306\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>后续可通过 <em>docker run</em> 的 <strong>--rm</strong> 选项免去『删除』这步操作。</p></li><li><p>创建宿主机挂载目录</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/docker/mysql/3306/<span class="token punctuation">{</span>conf.d,mysql.conf.d,data<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在宿主机的 <strong>conf</strong> 目录下新建任意命名的 <code>.cnf</code> 文件，其中内容见最后。</p><p>这里有一个偷懒的做法：你可以先临时启动一个 mysql 的 docker 容器<small>（不挂载自定义配置文件）</small>，然后再通过 docker cp 命令将它的默认配置拷贝出来。</p></li><li><p>创建并运行容器</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run <span class="token punctuation">\\</span>\n  -d <span class="token punctuation">\\</span>\n  --rm <span class="token punctuation">\\</span>\n  --name mysql-3306 <span class="token punctuation">\\</span>\n  -v ~/docker/mysql/3306/conf.d:/etc/mysql/conf.d <span class="token punctuation">\\</span>\n  -v ~/docker/mysql/3306/mysql.conf.d:/etc/mysql/mysql.conf.d <span class="token punctuation">\\</span>\n  -v ~/docker/mysql/3306/data:/var/lib/mysql <span class="token punctuation">\\</span>\n  -p <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>\n  -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>\n  mysql:5.7.33\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p>新建配置文件 <strong>mysql.cnf</strong> ：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[mysqld]\nserver-id = 1 \ncharacter-set-server = utf8mb4\nskip-host-cache\nskip-name-resolve\n\n[mysqldump]\nquick\nquote-names\nmax_allowed_packet\t= 16M\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p><strong>server-id</strong>： 给 MySQL Server 分配一个独一无二的 ID 编号；</p></li><li><p><strong>character-set-server</strong>：设置 Mysql Server 存储字符串数据时使用的默认的字符集。<small>该配置项替代了老版本中的 <strong>default-character-set</strong> 配置项。</small></p></li><li><p><strong>skip-name-resolve</strong>： 不把 IP 地址解析为主机名，以客户端的 IP 地址为依据检查其操作权限。</p></li><li><p>如果以 docker-compse 的方式启动：</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">mysql-3306</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>5.7.33\n    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;bridge&quot;</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span><span class="token number">3306</span>\n    <span class="token key atrule">mem_limit</span><span class="token punctuation">:</span> 512m <span class="token comment"># 限定 docker 容器内存大小</span>\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=123456\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro\n      <span class="token punctuation">-</span> ~/docker/3306/data<span class="token punctuation">:</span>/var/lib/mysql\n      <span class="token punctuation">-</span> ./docker/3306/conf.d<span class="token punctuation">:</span>/etc/mysql/conf.d\n      <span class="token punctuation">-</span> ./docker/3306/mysql.conf.d<span class="token punctuation">:</span>/etc/mysql/mysql.conf.d\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment"># network_mode: &quot;host&quot; 无需端口映射</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>启动命令：<strong>docker-compose up -d mysql-3306</strong></p></li></ul><h2 id="初始化数据库" tabindex="-1"><a class="header-anchor" href="#初始化数据库" aria-hidden="true">#</a> 初始化数据库</h2><p>mysql 的 docker 镜像有一个功能：它在第一次创建容器<small>（重启不算）</small>时，会到容器内的 <code>/docker-entrypoint-initdb.d</code> 目录下查看有没有 sql 脚本，如果有，就执行 sql 脚本。因此，你可以通过这个功能来完成数据库的创建等初始化工作。</p><p>你可以在某个目录下创建 .sql 脚本，并在其中写上建库、建表等 SQL 语句，然后将这个目录映射成 <code>/docker-entrypoint-initdb.d</code> 。</p>',30),o={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e._)("p",null,[p,(0,e._)("a",r,[t,(0,e.Wm)(a)])]),c],64)}}}}]);