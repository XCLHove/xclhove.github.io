import{d as r,u as o,k as i,c as s,l as e,t as n,a as c,e as t,a3 as d,o as p}from"./chunks/framework.7ep0oyv4.js";const m=d(`<h1 id="浏览器使用js解析jwt" tabindex="-1">浏览器使用js解析jwt <a class="header-anchor" href="#浏览器使用js解析jwt" aria-label="Permalink to &quot;浏览器使用js解析jwt&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function parseJwt(token) {</span></span>
<span class="line"><span>            // 将JWT按照.进行分割，取第二部分（payload部分）</span></span>
<span class="line"><span>            const base64Url = token.split(&#39;.&#39;)[1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 对base64Url进行解码</span></span>
<span class="line"><span>            const base64 = base64Url</span></span>
<span class="line"><span>                .replace(/-/g, &#39;+&#39;)</span></span>
<span class="line"><span>                .replace(/_/g, &#39;/&#39;)</span></span>
<span class="line"><span>            const decodedData = decodeURIComponent(atob(base64)</span></span>
<span class="line"><span>                .split(&#39;&#39;)</span></span>
<span class="line"><span>                .map((c) =&gt; {</span></span>
<span class="line"><span>                return &#39;%&#39; + (&#39;00&#39; + c.charCodeAt(0).toString(16)).slice(-2);</span></span>
<span class="line"><span>            }).join(&#39;&#39;))</span></span>
<span class="line"><span>            const payload = JSON.parse(decodedData)</span></span>
<span class="line"><span>            return JSON.parse(payload[&#39;aud&#39;])</span></span>
<span class="line"><span>        }</span></span></code></pre></div>`,2),u=["href"],h=["href"],v={key:1,style:{margin:"0 5px"}},k=["href"],y=JSON.parse('{"title":"浏览器使用js解析jwt","description":"","frontmatter":{"prev":{"text":"笔记","link":"/笔记"}},"headers":[],"params":{"id":117,"title":"浏览器使用js解析jwt","userId":1,"releaseTime":"2024-07-04T10:33:14.000+00:00","updateTime":"7/4/2024, 10:33:14 AM","isPublic":"公开","typeId":17,"sourceUrl":"https://xnote.xclhove.top/note/preview/117","prev":{"link":"./112#TypeScript 快速入门","text":"上一篇：TypeScript 快速入门"},"next":{"link":"./136#常见排序算法（Java）","text":"下一篇：常见排序算法（Java）"}},"relativePath":"note/117.md","filePath":"note/117.md"}'),f={name:"note/117.md"},_=r({...f,setup(b){const{params:l}=o();return i(()=>{document.title=l.value.title}),(a,g)=>(p(),s("div",null,[m,e("p",null,"最近更新："+n(a.$params.updateTime),1),e("p",null,[c("原文链接："),e("a",{target:"_blank",href:a.$params.sourceUrl},n(a.$params.title),9,u)]),e("span",null,[a.$params.prev?(p(),s("a",{key:0,class:"prev",href:a.$params.prev.link},n(a.$params.prev.text),9,h)):t("",!0),a.$params.prev&&a.$params.next?(p(),s("span",v,"|")):t("",!0),a.$params.next?(p(),s("a",{key:2,href:a.$params.next.link},n(a.$params.next.text),9,k)):t("",!0)])]))}});export{y as __pageData,_ as default};
