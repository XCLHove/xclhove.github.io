import{d as t,u as h,k,c as i,l as a,t as n,a as r,e as p,a3 as d,o as e}from"./chunks/framework.7ep0oyv4.js";const o=d(`<h1 id="docker-安装-redis" tabindex="-1">docker 安装 redis <a class="header-anchor" href="#docker-安装-redis" aria-label="Permalink to &quot;docker 安装 redis&quot;">​</a></h1><p>命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># commond</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6379:6379</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --requirepass</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123456</span></span></code></pre></div><p>docker-compose:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  redis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis:7.4.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis-7.4.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">6379:6379</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis_data:/data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis_conf:/redis/conf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis_log:/redis/log</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis-server</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/redis/conf/redis.conf</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  redis_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  redis_conf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  redis_log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span></code></pre></div><p>如果是映射到目录而不是数据卷：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建配置文件，否则无法启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /redis/conf/redis.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建日志文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /redis/log/redis.log</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改日志文件权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 666</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /redis/log/redis.log</span></span></code></pre></div>`,7),E=["href"],g=["href"],c={key:1,style:{margin:"0 5px"}},F=["href"],B=JSON.parse('{"title":"docker 安装 redis","description":"","frontmatter":{"prev":{"text":"笔记","link":"/笔记"}},"headers":[],"params":{"id":147,"title":"docker 安装 redis","userId":1,"releaseTime":"2025-02-14T14:35:48.000+00:00","updateTime":"2/15/2025, 12:22:19 PM","isPublic":"公开","typeId":1,"sourceUrl":"https://xnote.xclhove.top/note/preview/147","prev":{"link":"./148#docker 安装 rabbitMQ","text":"上一篇：docker 安装 rabbitMQ"},"next":{"link":"./1#git常用命令","text":"下一篇：git常用命令"}},"relativePath":"note/147.md","filePath":"note/147.md"}'),y={name:"note/147.md"},v=t({...y,setup(C){const{params:l}=h();return k(()=>{document.title=l.value.title}),(s,m)=>(e(),i("div",null,[o,a("p",null,"最近更新："+n(s.$params.updateTime),1),a("p",null,[r("原文链接："),a("a",{target:"_blank",href:s.$params.sourceUrl},n(s.$params.title),9,E)]),a("span",null,[s.$params.prev?(e(),i("a",{key:0,class:"prev",href:s.$params.prev.link},n(s.$params.prev.text),9,g)):p("",!0),s.$params.prev&&s.$params.next?(e(),i("span",c,"|")):p("",!0),s.$params.next?(e(),i("a",{key:2,href:s.$params.next.link},n(s.$params.next.text),9,F)):p("",!0)])]))}});export{B as __pageData,v as default};
