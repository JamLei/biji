"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[6455],{36431:(t,e,l)=>{l.r(e),l.d(e,{data:()=>d});const d={key:"v-02bc214c",path:"/git/202-%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E6%B1%87%E6%80%BB.html",title:"Git 常用命令汇总",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"配置",slug:"配置",children:[]},{level:2,title:"仓库",slug:"仓库",children:[]},{level:2,title:"增加/删除文件",slug:"增加-删除文件",children:[]},{level:2,title:"代码提交",slug:"代码提交",children:[]},{level:2,title:"分支",slug:"分支",children:[]},{level:2,title:"标签",slug:"标签",children:[]},{level:2,title:"远程同步",slug:"远程同步",children:[]},{level:2,title:"查看信息",slug:"查看信息",children:[]}],filePathRelative:"git/202-常用命令汇总.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},22891:(t,e,l)=>{l.r(e),l.d(e,{default:()=>i});const d=(0,l(66252).uE)('<h1 id="git-常用命令汇总" tabindex="-1"><a class="header-anchor" href="#git-常用命令汇总" aria-hidden="true">#</a> Git 常用命令汇总</h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;"><code>git config --list</code></td><td style="text-align:left;">显示当前的 Git 配置</td></tr><tr><td style="text-align:left;"><code>git config -e [--global]</code></td><td style="text-align:left;">编辑 Git 配置文件</td></tr><tr><td style="text-align:left;"><code>git config [--global] user.name &quot;[name]&quot;</code> <br> <code>git config [--global] user.email &quot;[email address]&quot;</code></td><td style="text-align:left;">设置提交代码时的用户信息</td></tr></tbody></table><h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库" aria-hidden="true">#</a> 仓库</h2><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;"><code>git init</code></td><td style="text-align:left;">在当前目录新建一个Git代码库</td></tr><tr><td style="text-align:left;"><code>git init [project-name]</code></td><td style="text-align:left;">新建一个目录，将其初始化为 Git 代码库</td></tr><tr><td style="text-align:left;"><code>git clone [url]</code></td><td style="text-align:left;">下载一个项目和它的整个代码历史</td></tr></tbody></table><h2 id="增加-删除文件" tabindex="-1"><a class="header-anchor" href="#增加-删除文件" aria-hidden="true">#</a> 增加/删除文件</h2><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;"><code>git add [file1] [file2] ...</code></td><td style="text-align:left;">添加指定文件到暂存区</td></tr><tr><td style="text-align:left;"><code>git add [dir]</code></td><td style="text-align:left;">添加指定目录到暂存区，包括子目录</td></tr><tr><td style="text-align:left;"><code>git add .</code></td><td style="text-align:left;">添加当前目录的所有文件到暂存区</td></tr><tr><td style="text-align:left;"><code>$ git add -p</code></td><td style="text-align:left;">添加每个变化前，都会要求确认<br>对于同一个文件的多处变化，可以实现分次提交</td></tr><tr><td style="text-align:left;"><code>git rm [file1] [file2] ...</code></td><td style="text-align:left;">删除工作区文件，并且将这次删除放入暂存区</td></tr><tr><td style="text-align:left;"><code>git rm --cached [file]</code></td><td style="text-align:left;">停止追踪指定文件，但该文件会保留在工作区</td></tr><tr><td style="text-align:left;"><code>git mv [file-original] [file-renamed]</code></td><td style="text-align:left;">改名文件，并且将这个改名放入暂存区</td></tr></tbody></table><h2 id="代码提交" tabindex="-1"><a class="header-anchor" href="#代码提交" aria-hidden="true">#</a> 代码提交</h2><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;"><code>git commit -m [message]</code></td><td style="text-align:left;">提交暂存区到仓库区</td></tr><tr><td style="text-align:left;"><code>git commit [file1] [file2] ... -m [message]</code></td><td style="text-align:left;">提交暂存区的指定文件到仓库区</td></tr><tr><td style="text-align:left;"><code>git commit -a</code></td><td style="text-align:left;">提交工作区自上次commit之后的变化，直接到仓库区</td></tr><tr><td style="text-align:left;"><code>git commit -v</code></td><td style="text-align:left;">提交时显示所有diff信息</td></tr><tr><td style="text-align:left;"><code>git commit --amend -m [message]</code></td><td style="text-align:left;">使用一次新的commit，替代上一次提交<br>如果代码没有任何新变化，则用来改写上一次commit的提交信息</td></tr><tr><td style="text-align:left;"><code>git commit --amend [file1] [file2] ...</code></td><td style="text-align:left;">重做上一次commit，并包括指定文件的新变化</td></tr></tbody></table><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h2><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;"><code>git branch</code></td><td style="text-align:left;">列出所有本地分支</td></tr><tr><td style="text-align:left;"><code>git branch -r</code></td><td style="text-align:left;">列出所有远程分支</td></tr><tr><td style="text-align:left;"><code>git branch -a</code></td><td style="text-align:left;">列出所有本地分支和远程分支</td></tr><tr><td style="text-align:left;"><code>git branch [branch-name]</code></td><td style="text-align:left;">新建一个分支，但依然停留在当前分支</td></tr><tr><td style="text-align:left;"><code>git checkout -b [branch]</code></td><td style="text-align:left;">新建一个分支，并切换到该分支</td></tr><tr><td style="text-align:left;"><code>git branch [branch] [commit]</code></td><td style="text-align:left;">新建一个分支，指向指定 commit</td></tr><tr><td style="text-align:left;"><code>git branch --track [branch] [remote-branch]</code></td><td style="text-align:left;">新建一个分支，与指定的远程分支建立追踪关系</td></tr><tr><td style="text-align:left;"><code>git checkout [branch-name]</code></td><td style="text-align:left;">切换到指定分支，并更新工作区</td></tr><tr><td style="text-align:left;"><code>git checkout -</code></td><td style="text-align:left;">切换到上一个分支</td></tr><tr><td style="text-align:left;"><code>git branch --set-upstream [branch] [remote-branch]</code></td><td style="text-align:left;">建立追踪关系，在现有分支与指定的远程分支之间</td></tr><tr><td style="text-align:left;"><code>git merge [branch]</code></td><td style="text-align:left;">合并指定分支到当前分支</td></tr><tr><td style="text-align:left;"><code>git cherry-pick [commit]</code></td><td style="text-align:left;">选择一个commit，合并进当前分支</td></tr><tr><td style="text-align:left;"><code>git branch -d [branch-name]</code></td><td style="text-align:left;">删除分支</td></tr><tr><td style="text-align:left;"><code>git push origin --delete [branch-name]</code><br><code>git branch -dr [remote/branch]</code></td><td style="text-align:left;">删除远程分支</td></tr></tbody></table><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h2><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;"><code>git tag</code></td><td style="text-align:left;">列出所有tag</td></tr><tr><td style="text-align:left;"><code>git tag [tag]</code></td><td style="text-align:left;">新建一个tag在当前commit</td></tr><tr><td style="text-align:left;"><code>git tag [tag] [commit]</code></td><td style="text-align:left;">新建一个tag在指定commit</td></tr><tr><td style="text-align:left;"><code>git tag -d [tag]</code></td><td style="text-align:left;">删除本地tag</td></tr><tr><td style="text-align:left;"><code>git push origin :refs/tags/[tagName]</code></td><td style="text-align:left;">删除远程tag</td></tr><tr><td style="text-align:left;"><code>git show [tag]</code></td><td style="text-align:left;">查看tag信息</td></tr><tr><td style="text-align:left;"><code>git push [remote] [tag]</code></td><td style="text-align:left;">提交指定tag</td></tr><tr><td style="text-align:left;"><code>git push [remote] --tags</code></td><td style="text-align:left;">提交所有tag</td></tr><tr><td style="text-align:left;"><code>git checkout -b [branch] [tag]</code></td><td style="text-align:left;">新建一个分支，指向某个tag</td></tr></tbody></table><h2 id="远程同步" tabindex="-1"><a class="header-anchor" href="#远程同步" aria-hidden="true">#</a> 远程同步</h2><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;"><code>git fetch [remote]</code></td><td style="text-align:left;">下载远程仓库的所有变动</td></tr><tr><td style="text-align:left;"><code>git remote -v</code></td><td style="text-align:left;">显示所有远程仓库</td></tr><tr><td style="text-align:left;"><code>git remote show [remote]</code></td><td style="text-align:left;">显示某个远程仓库的信息</td></tr><tr><td style="text-align:left;"><code>git remote add [shortname] [url]</code></td><td style="text-align:left;">增加一个新的远程仓库，并命名</td></tr><tr><td style="text-align:left;"><code>git pull [remote] [branch]</code></td><td style="text-align:left;">取回远程仓库的变化，并与本地分支合并</td></tr><tr><td style="text-align:left;"><code>git push [remote] [branch]</code></td><td style="text-align:left;">上传本地指定分支到远程仓库</td></tr><tr><td style="text-align:left;"><code>git push [remote] --force</code></td><td style="text-align:left;">强行推送当前分支到远程仓库，即使有冲突</td></tr><tr><td style="text-align:left;"><code>git push [remote] --all</code></td><td style="text-align:left;">推送所有分支到远程仓库</td></tr></tbody></table><h2 id="查看信息" tabindex="-1"><a class="header-anchor" href="#查看信息" aria-hidden="true">#</a> 查看信息</h2><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;"><code>git status</code></td><td style="text-align:left;">显示有变更的文件</td></tr><tr><td style="text-align:left;"><code>git log</code></td><td style="text-align:left;">显示当前分支的版本历史</td></tr><tr><td style="text-align:left;"><code>git log --stat</code></td><td style="text-align:left;">显示 commit 历史，以及每次 commit 发生变更的文件</td></tr><tr><td style="text-align:left;"><code>git log -S [keyword]</code></td><td style="text-align:left;">搜索提交历史，根据关键词</td></tr><tr><td style="text-align:left;"><code>git log [tag] HEAD --pretty=format:%s</code></td><td style="text-align:left;">显示某个commit之后的所有变动，每个 commit 占据一行</td></tr><tr><td style="text-align:left;"><code>git log [tag] HEAD --grep feature</code></td><td style="text-align:left;">显示某个 commit 之后的所有变动，其“提交说明”必须符合搜索条件</td></tr><tr><td style="text-align:left;"><code>git log --follow [file]</code><br><code>$ git whatchanged [file]</code></td><td style="text-align:left;">显示某个文件的版本历史，包括文件改名</td></tr><tr><td style="text-align:left;"><code>git log -p [file]</code></td><td style="text-align:left;">显示指定文件相关的每一次diff</td></tr><tr><td style="text-align:left;"><code>git log -5 --pretty --oneline</code></td><td style="text-align:left;">显示过去5次提交</td></tr><tr><td style="text-align:left;"><code>git shortlog -sn</code></td><td style="text-align:left;">显示所有提交过的用户，按提交次数排序</td></tr><tr><td style="text-align:left;"><code>git blame [file]</code></td><td style="text-align:left;">显示指定文件是什么人在什么时间修改过</td></tr><tr><td style="text-align:left;"><code>git diff</code></td><td style="text-align:left;">显示暂存区和工作区的差异</td></tr><tr><td style="text-align:left;"><code>git diff --cached [file]</code></td><td style="text-align:left;">显示暂存区和上一个commit的差异</td></tr><tr><td style="text-align:left;"><code>git diff HEAD</code></td><td style="text-align:left;">显示工作区与当前分支最新commit之间的差异</td></tr><tr><td style="text-align:left;"><code>git diff [first-branch]...[second-branch]</code></td><td style="text-align:left;">显示两次提交之间的差异</td></tr><tr><td style="text-align:left;"><code>git diff --shortstat &quot;@{0 day ago}&quot;</code></td><td style="text-align:left;">显示今天你写了多少行代码</td></tr><tr><td style="text-align:left;"><code>git show [commit]</code></td><td style="text-align:left;">显示某次提交的元数据和内容变化</td></tr><tr><td style="text-align:left;"><code>git show --name-only [commit]</code></td><td style="text-align:left;">显示某次提交发生变化的文件</td></tr><tr><td style="text-align:left;"><code>git show [commit]:[filename]</code></td><td style="text-align:left;">显示某次提交时，某个文件的内容</td></tr><tr><td style="text-align:left;"><code>git reflog</code></td><td style="text-align:left;">显示当前分支的最近几次提交</td></tr></tbody></table><h4 id="撤销" tabindex="-1"><a class="header-anchor" href="#撤销" aria-hidden="true">#</a> 撤销</h4><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;"><code>git checkout [file]</code></td><td style="text-align:left;">恢复暂存区的指定文件到工作区</td></tr><tr><td style="text-align:left;"><code>git checkout [commit] [file]</code></td><td style="text-align:left;">恢复某个 commit 的指定文件到暂存区和工作区</td></tr><tr><td style="text-align:left;"><code>git checkout .</code></td><td style="text-align:left;">恢复暂存区的所有文件到工作区</td></tr><tr><td style="text-align:left;"><code>git reset [file]</code></td><td style="text-align:left;">重置暂存区的指定文件，与最近一次提交保持一致，但工作区不变（已修改内容保留）</td></tr><tr><td style="text-align:left;"><code>git reset --hard</code></td><td style="text-align:left;">重置暂存区与工作区，与最近一次提交保持一致，工作区已修改的内容撤销</td></tr><tr><td style="text-align:left;"><code>git reset [commit]</code></td><td style="text-align:left;">重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变</td></tr><tr><td style="text-align:left;"><code>git reset --hard [commit]</code></td><td style="text-align:left;">重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致</td></tr><tr><td style="text-align:left;"><code>git reset --keep [commit]</code></td><td style="text-align:left;">重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变</td></tr><tr><td style="text-align:left;"><code>git revert [commit]</code></td><td style="text-align:left;">新建一个 commit，用来撤销指定 commit<br>后者的所有变化都将被前者抵消，并且应用到当前分支</td></tr><tr><td style="text-align:left;"><code>git stash</code><br><code>git stash pop</code></td><td style="text-align:left;">暂时将未提交的变化移除，稍后再移入</td></tr></tbody></table>',19),i={render:function(t,e){return d}}}}]);