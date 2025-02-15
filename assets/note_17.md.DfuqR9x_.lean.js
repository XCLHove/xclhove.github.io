import{d as o,u as l,k as i,c as a,l as t,t as s,a as d,e as r,a3 as c,o as n}from"./chunks/framework.7ep0oyv4.js";const m=c(`<h1 id="mysql8创建用户" tabindex="-1">MySQL8创建用户 <a class="header-anchor" href="#mysql8创建用户" aria-label="Permalink to &quot;MySQL8创建用户&quot;">​</a></h1><p>创建用户</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>create user username@localhost</span></span>
<span class="line"><span>    identified by &#39;password&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>grant alter, alter routine, create, create routine, create temporary tables, create view, delete, drop, event, execute, grant option, index, insert, lock tables, references, select, show view, trigger, update on databasename.* to username@localhost;</span></span></code></pre></div>`,3),u=["href"],h=["href"],v={key:1,style:{margin:"0 5px"}},y=["href"],_=JSON.parse('{"title":"MySQL8创建用户","description":"","frontmatter":{"prev":{"text":"笔记","link":"/笔记"}},"headers":[],"params":{"id":17,"title":"MySQL8创建用户","userId":1,"releaseTime":"2024-01-28T01:38:42.000+00:00","updateTime":"10/11/2024, 4:53:30 AM","isPublic":"公开","typeId":6,"sourceUrl":"https://xnote.xclhove.top/note/preview/17","prev":{"link":"./21#Android 7.0 以上去除锁屏密码的方法","text":"上一篇：Android 7.0 以上去除锁屏密码的方法"},"next":{"link":"./27#MySQL查看端口","text":"下一篇：MySQL查看端口"}},"relativePath":"note/17.md","filePath":"note/17.md"}'),k={name:"note/17.md"},$=o({...k,setup(f){const{params:p}=l();return i(()=>{document.title=p.value.title}),(e,g)=>(n(),a("div",null,[m,t("p",null,"最近更新："+s(e.$params.updateTime),1),t("p",null,[d("原文链接："),t("a",{target:"_blank",href:e.$params.sourceUrl},s(e.$params.title),9,u)]),t("span",null,[e.$params.prev?(n(),a("a",{key:0,class:"prev",href:e.$params.prev.link},s(e.$params.prev.text),9,h)):r("",!0),e.$params.prev&&e.$params.next?(n(),a("span",v,"|")):r("",!0),e.$params.next?(n(),a("a",{key:2,href:e.$params.next.link},s(e.$params.next.text),9,y)):r("",!0)])]))}});export{_ as __pageData,$ as default};
