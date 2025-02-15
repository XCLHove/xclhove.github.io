import{d as l,u as h,k as o,c as s,l as e,t as n,a as d,e as t,a3 as r,o as i}from"./chunks/framework.7ep0oyv4.js";const k=r(`<h1 id="ubuntu安装openjdk" tabindex="-1">ubuntu安装openjdk <a class="header-anchor" href="#ubuntu安装openjdk" aria-label="Permalink to &quot;ubuntu安装openjdk&quot;">​</a></h1><p>要在Ubuntu上安装OpenJDK 8、11和17，可以按照以下步骤进行操作：</p><ol><li>打开终端。</li><li>安装OpenJDK 8：</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openjdk-8-jdk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><ol start="3"><li>安装OpenJDK 11：</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openjdk-11-jdk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><ol start="4"><li>安装OpenJDK 17：</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openjdk-17-jdk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><p>在Ubuntu上安装多个版本的OpenJDK后，您可以使用<code>update-alternatives</code>命令来切换默认的Java版本。使用以下命令列出当前系统上已安装的Java版本以及其路径：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update-alternatives</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> java</span></span></code></pre></div><p>您将看到类似以下输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>There are 3 choices for the alternative java (providing /usr/bin/java).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Selection    Path                                            Priority   Status</span></span>
<span class="line"><span>------------------------------------------------------------</span></span>
<span class="line"><span>* 0            /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java   1081      auto mode</span></span>
<span class="line"><span>  1            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1111      manual mode</span></span>
<span class="line"><span>  2            /usr/lib/jvm/java-17-openjdk-amd64/bin/java      1121      manual mode</span></span>
<span class="line"><span>  3            /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java   1081      manual mode</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Press &lt;enter&gt; to keep the current choice[*], or type selection number:</span></span></code></pre></div><p>输入要切换的Java版本的编号，然后按Enter键。</p>`,13),u=["href"],c=["href"],v={key:1,style:{margin:"0 5px"}},m=["href"],C=JSON.parse('{"title":"ubuntu安装openjdk","description":"","frontmatter":{"prev":{"text":"笔记","link":"/笔记"}},"headers":[],"params":{"id":80,"title":"ubuntu安装openjdk","userId":1,"releaseTime":"2024-01-28T01:38:42.000+00:00","updateTime":"10/11/2024, 5:02:32 AM","isPublic":"公开","typeId":4,"sourceUrl":"https://xnote.xclhove.top/note/preview/80","prev":{"link":"./84#在Ubuntu里安装Flatpak软件应用无图标的问题","text":"上一篇：在Ubuntu里安装Flatpak软件应用无图标的问题"},"next":{"link":"./79#ubuntu安装nvidia驱动","text":"下一篇：ubuntu安装nvidia驱动"}},"relativePath":"note/80.md","filePath":"note/80.md"}'),g={name:"note/80.md"},j=l({...g,setup(F){const{params:p}=h();return o(()=>{document.title=p.value.title}),(a,b)=>(i(),s("div",null,[k,e("p",null,"最近更新："+n(a.$params.updateTime),1),e("p",null,[d("原文链接："),e("a",{target:"_blank",href:a.$params.sourceUrl},n(a.$params.title),9,u)]),e("span",null,[a.$params.prev?(i(),s("a",{key:0,class:"prev",href:a.$params.prev.link},n(a.$params.prev.text),9,c)):t("",!0),a.$params.prev&&a.$params.next?(i(),s("span",v,"|")):t("",!0),a.$params.next?(i(),s("a",{key:2,href:a.$params.next.link},n(a.$params.next.text),9,m)):t("",!0)])]))}});export{C as __pageData,j as default};
