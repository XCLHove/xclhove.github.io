import{d as l,u as o,k as h,c as a,l as i,t as e,a as r,e as p,a3 as d,o as t}from"./chunks/framework.7ep0oyv4.js";const c=d('<h1 id="解决-windows-10-端口被-hyper-v-随机保留-占用-的问题" tabindex="-1">解决 Windows 10 端口被 Hyper-V 随机保留（占用）的问题 <a class="header-anchor" href="#解决-windows-10-端口被-hyper-v-随机保留-占用-的问题" aria-label="Permalink to &quot;解决 Windows 10 端口被 Hyper-V 随机保留（占用）的问题&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>执行以下命令可能需要管理员权限</p></div><h2 id="_1-问题背景" tabindex="-1">1. 问题背景 <a class="header-anchor" href="#_1-问题背景" aria-label="Permalink to &quot;1. 问题背景&quot;">​</a></h2><ol><li>Windows 中有一个「TCP 动态端口范围」，处在这个范围内的端口，有时候会被一些服务占用。在 Windows Vista（或 Windows Server 2008）之前，动态端口范围是 <code>1025</code> 到 <code>5000</code>；在 Windows Vista（或 Windows Server 2008）之后，新的默认起始端口为 <code>49152</code>，新的默认结束端口为 <code>65535</code>。</li><li>如果安装了 <code>Hyper-V</code>，那么 <code>Hyper-V</code> 会为容器宿主网络服务（Windows Container Host Networking Service）随机保留一些端口号使用。</li></ol><p>使用以下命令可以查看目前「TCP 动态端口」的范围</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> int</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ipv4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dynamicport</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp</span></span></code></pre></div><p><img src="https://xnote.xclhove.top/api/image/name/dbf98f2c-bd33-4728-ac35-fa34285c8130.png" alt="image.png"> 使用以下命令可以查看当前所有已经被征用了的端口</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> int</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ipv4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> excludedportrange</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> protocol=tcp</span></span></code></pre></div><p><img src="https://xnote.xclhove.top/api/image/name/0c23a816-c722-4f7b-8351-39f78a0eecaf.png" alt="image.png"></p><p>如果这些被征用的端口范围随机挑选到8088、8000、3000等 Web 开发常用端口，那开发就会受到影响；如果挑选到其他应用软件要调用的端口，那这些应用软件就会受到影响，可以说非常坑爹了……</p><h2 id="_2-解决方法" tabindex="-1">2. 解决方法 <a class="header-anchor" href="#_2-解决方法" aria-label="Permalink to &quot;2. 解决方法&quot;">​</a></h2><p>解决方法很简单，就是重新设置一下「TCP 动态端口范围」，让Hyper-V只在我们设定的范围内保留端口即可。可以以<strong>管理员权限</strong>运行下面的命令，将「TCP 动态端口范围」重新设定为<code>49152-65535</code>。如果你觉得这个范围太大，还可以改小一点。</p><p><strong>ipv4</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> int</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ipv4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dynamic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">49152</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16384</span></span></code></pre></div><p><strong>ipv6</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> int</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ipv6</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dynamic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">49152</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16384</span></span></code></pre></div><h2 id="_3-附-移除win10协议-tcp-端口排除范围" tabindex="-1">3. 附：移除win10协议 tcp 端口排除范围 <a class="header-anchor" href="#_3-附-移除win10协议-tcp-端口排除范围" aria-label="Permalink to &quot;3. 附：移除win10协议 tcp 端口排除范围&quot;">​</a></h2><p>要使用命令行移除Windows 10中的TCP端口排除范围，您可以按照以下步骤进行操作：</p><ol><li><p>打开命令提示符。您可以按下Win + R键，在运行框中输入&quot;cmd&quot;，然后按下Enter键来打开命令提示符。</p></li><li><p>在命令提示符中，输入以下命令以查看当前的TCP端口排除范围：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>netsh int ipv4 show excludedportrange protocol=tcp</span></span></code></pre></div><p>或者，如果您使用的是IPv6协议，可以使用以下命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>netsh int ipv6 show excludedportrange protocol=tcp</span></span></code></pre></div></li><li><p>根据显示的结果，找到要移除的TCP端口排除范围的起始端口和结束端口。</p></li><li><p>使用以下命令移除TCP端口排除范围，将<code>start_port</code>和<code>end_port</code>替换为实际的起始端口和结束端口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>netsh int ipv4 delete excludedportrange protocol=tcp startport=start_port numberofports=(end_port - start_port + 1)</span></span></code></pre></div><p>或者，如果您使用的是IPv6协议，可以使用以下命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>netsh int ipv6 delete excludedportrange protocol=tcp startport=start_port numberofports=(end_port - start_port + 1)</span></span></code></pre></div><p>请确保将<code>start_port</code>和<code>end_port</code>替换为实际的起始端口和结束端口值，并确保括号中的表达式计算出要删除的端口数量。</p></li><li><p>执行命令后，命令提示符将显示成功删除TCP端口排除范围的消息。</p></li></ol><p>请注意，执行这些命令可能需要<strong>管理员权限</strong>。确保以管理员身份运行命令提示符。</p>',20),k=["href"],g=["href"],F={key:1,style:{margin:"0 5px"}},u=["href"],b=JSON.parse('{"title":"解决 Windows 10 端口被 Hyper-V 随机保留（占用）的问题","description":"","frontmatter":{"prev":{"text":"笔记","link":"/笔记"}},"headers":[],"params":{"id":78,"title":"解决 Windows 10 端口被 Hyper-V 随机保留（占用）的问题","userId":1,"releaseTime":"2024-01-28T01:38:42.000+00:00","updateTime":"1/28/2024, 1:38:42 AM","isPublic":"公开","typeId":18,"sourceUrl":"https://xnote.xclhove.top/note/preview/78","prev":{"link":"./47#vite/vue Top-level await","text":"上一篇：vite/vue Top-level await"},"next":{"link":"./88#由于无法应用有效的许可证或旁加载策略，部晋程序包来源为Unsigned的程序包失败，可能需要开发者许可证或企业旁加载配置","text":"下一篇：由于无法应用有效的许可证或旁加载策略，部晋程序包来源为Unsigned的程序包失败，可能需要开发者许可证或企业旁加载配置"}},"relativePath":"note/78.md","filePath":"note/78.md"}'),v={name:"note/78.md"},B=l({...v,setup(m){const{params:n}=o();return h(()=>{document.title=n.value.title}),(s,y)=>(t(),a("div",null,[c,i("p",null,"最近更新："+e(s.$params.updateTime),1),i("p",null,[r("原文链接："),i("a",{target:"_blank",href:s.$params.sourceUrl},e(s.$params.title),9,k)]),i("span",null,[s.$params.prev?(t(),a("a",{key:0,class:"prev",href:s.$params.prev.link},e(s.$params.prev.text),9,g)):p("",!0),s.$params.prev&&s.$params.next?(t(),a("span",F,"|")):p("",!0),s.$params.next?(t(),a("a",{key:2,href:s.$params.next.link},e(s.$params.next.text),9,u)):p("",!0)])]))}});export{b as __pageData,B as default};
