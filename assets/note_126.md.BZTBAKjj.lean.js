import{d as h,u as p,k as r,c as a,l as i,t,a as k,e as n,a3 as o,o as e}from"./chunks/framework.7ep0oyv4.js";const d=o(`<h1 id="java字符串相关类的底层原理" tabindex="-1">Java字符串相关类的底层原理 <a class="header-anchor" href="#java字符串相关类的底层原理" aria-label="Permalink to &quot;Java字符串相关类的底层原理&quot;">​</a></h1><h2 id="字符串存储的内存原理" tabindex="-1">字符串存储的内存原理 <a class="header-anchor" href="#字符串存储的内存原理" aria-label="Permalink to &quot;字符串存储的内存原理&quot;">​</a></h2><ul><li>直接赋值会复用字符串常量池中的（相同字符串的地址相同）<div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;s3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;s3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s2);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div></li><li><code>new</code>出来不会复用，而是开辟一个新的空间（相同字符串的地址不同）<div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;s1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;s1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s2);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre></div></li></ul><h2 id="号比较的到底是什么" tabindex="-1">‘==’号比较的到底是什么？ <a class="header-anchor" href="#号比较的到底是什么" aria-label="Permalink to &quot;‘==’号比较的到底是什么？&quot;">​</a></h2><ul><li>基本数据类型比较<strong>数据值</strong></li><li>引用数据类型比较<strong>地址值</strong></li></ul>`,5),E=["href"],g=["href"],u={key:1,style:{margin:"0 5px"}},c=["href"],f=JSON.parse('{"title":"Java字符串相关类的底层原理","description":"","frontmatter":{"prev":{"text":"笔记","link":"/笔记"}},"headers":[],"params":{"id":126,"title":"Java字符串相关类的底层原理","userId":1,"releaseTime":"2024-07-15T18:57:31.000+00:00","updateTime":"10/11/2024, 5:04:29 AM","isPublic":"公开","typeId":14,"sourceUrl":"https://xnote.xclhove.top/note/preview/126","prev":{"link":"./92#vue设置路径别名","text":"上一篇：vue设置路径别名"},"next":{"link":"./125#Java中一个对象的内存图","text":"下一篇：Java中一个对象的内存图"}},"relativePath":"note/126.md","filePath":"note/126.md"}'),y={name:"note/126.md"},b=h({...y,setup(m){const{params:l}=p();return r(()=>{document.title=l.value.title}),(s,v)=>(e(),a("div",null,[d,i("p",null,"最近更新："+t(s.$params.updateTime),1),i("p",null,[k("原文链接："),i("a",{target:"_blank",href:s.$params.sourceUrl},t(s.$params.title),9,E)]),i("span",null,[s.$params.prev?(e(),a("a",{key:0,class:"prev",href:s.$params.prev.link},t(s.$params.prev.text),9,g)):n("",!0),s.$params.prev&&s.$params.next?(e(),a("span",u,"|")):n("",!0),s.$params.next?(e(),a("a",{key:2,href:s.$params.next.link},t(s.$params.next.text),9,c)):n("",!0)])]))}});export{f as __pageData,b as default};
