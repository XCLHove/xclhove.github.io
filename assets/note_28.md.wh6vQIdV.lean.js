import{d as r,u as i,k as o,c as s,l as n,t as e,a as c,e as t,a3 as d,o as p}from"./chunks/framework.7ep0oyv4.js";const m=d(`<h1 id="mysql创建用户并授权" tabindex="-1">MySQL创建用户并授权 <a class="header-anchor" href="#mysql创建用户并授权" aria-label="Permalink to &quot;MySQL创建用户并授权&quot;">​</a></h1><p>MySQL创建用户并授权SQL:</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>create user user@localhost</span></span>
<span class="line"><span>    identified by &#39;password&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>grant alter, </span></span>
<span class="line"><span>alter routine, </span></span>
<span class="line"><span>create, </span></span>
<span class="line"><span>create routine, </span></span>
<span class="line"><span>create temporary tables,</span></span>
<span class="line"><span>create view, </span></span>
<span class="line"><span>delete, </span></span>
<span class="line"><span>drop, </span></span>
<span class="line"><span>event, </span></span>
<span class="line"><span>execute, </span></span>
<span class="line"><span>grant option, </span></span>
<span class="line"><span>index, </span></span>
<span class="line"><span>insert, </span></span>
<span class="line"><span>lock tables, </span></span>
<span class="line"><span>references, </span></span>
<span class="line"><span>select, </span></span>
<span class="line"><span>show view, </span></span>
<span class="line"><span>trigger, </span></span>
<span class="line"><span>update on databasename.* to user@localhost;</span></span></code></pre></div>`,3),u=["href"],h=["href"],v={key:1,style:{margin:"0 5px"}},k=["href"],_=JSON.parse('{"title":"MySQL创建用户并授权","description":"","frontmatter":{"prev":{"text":"笔记","link":"/笔记"}},"headers":[],"params":{"id":28,"title":"MySQL创建用户并授权","userId":1,"releaseTime":"2024-01-28T01:38:42.000+00:00","updateTime":"10/11/2024, 4:55:25 AM","isPublic":"公开","typeId":6,"sourceUrl":"https://xnote.xclhove.top/note/preview/28","prev":{"link":"./6#npm使用国内镜像加速","text":"上一篇：npm使用国内镜像加速"},"next":{"link":"./13#Linux下jdk8环境变量配置","text":"下一篇：Linux下jdk8环境变量配置"}},"relativePath":"note/28.md","filePath":"note/28.md"}'),y={name:"note/28.md"},$=r({...y,setup(f){const{params:l}=i();return o(()=>{document.title=l.value.title}),(a,g)=>(p(),s("div",null,[m,n("p",null,"最近更新："+e(a.$params.updateTime),1),n("p",null,[c("原文链接："),n("a",{target:"_blank",href:a.$params.sourceUrl},e(a.$params.title),9,u)]),n("span",null,[a.$params.prev?(p(),s("a",{key:0,class:"prev",href:a.$params.prev.link},e(a.$params.prev.text),9,h)):t("",!0),a.$params.prev&&a.$params.next?(p(),s("span",v,"|")):t("",!0),a.$params.next?(p(),s("a",{key:2,href:a.$params.next.link},e(a.$params.next.text),9,k)):t("",!0)])]))}});export{_ as __pageData,$ as default};
