import{d as r,u as l,k as o,c as s,l as a,t,a as h,e as n,a3 as d,o as i}from"./chunks/framework.7ep0oyv4.js";const k=d(`<h1 id="centos7关闭邮件服务" tabindex="-1">Centos7关闭邮件服务 <a class="header-anchor" href="#centos7关闭邮件服务" aria-label="Permalink to &quot;Centos7关闭邮件服务&quot;">​</a></h1><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postfix</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postfix</span></span></code></pre></div>`,2),m=["href"],c=["href"],u={key:1,style:{margin:"0 5px"}},F=["href"],v=JSON.parse('{"title":"Centos7关闭邮件服务","description":"","frontmatter":{"prev":{"text":"笔记","link":"/笔记"}},"headers":[],"params":{"id":58,"title":"Centos7关闭邮件服务","userId":1,"releaseTime":"2024-01-28T01:38:42.000+00:00","updateTime":"10/11/2024, 4:58:03 AM","isPublic":"公开","typeId":4,"sourceUrl":"https://xnote.xclhove.top/note/preview/58","prev":{"link":"./85#flatpak设置国内镜像源","text":"上一篇：flatpak设置国内镜像源"},"next":{"link":"./105#SpringBoot IOC容器初始化流程","text":"下一篇：SpringBoot IOC容器初始化流程"}},"relativePath":"note/58.md","filePath":"note/58.md"}'),g={name:"note/58.md"},B=r({...g,setup(f){const{params:p}=l();return o(()=>{document.title=p.value.title}),(e,y)=>(i(),s("div",null,[k,a("p",null,"最近更新："+t(e.$params.updateTime),1),a("p",null,[h("原文链接："),a("a",{target:"_blank",href:e.$params.sourceUrl},t(e.$params.title),9,m)]),a("span",null,[e.$params.prev?(i(),s("a",{key:0,class:"prev",href:e.$params.prev.link},t(e.$params.prev.text),9,c)):n("",!0),e.$params.prev&&e.$params.next?(i(),s("span",u,"|")):n("",!0),e.$params.next?(i(),s("a",{key:2,href:e.$params.next.link},t(e.$params.next.text),9,F)):n("",!0)])]))}});export{v as __pageData,B as default};
