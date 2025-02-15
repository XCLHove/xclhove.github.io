import{d as h,u as p,k,c as i,l as a,t as n,a as r,e,a3 as E,o as t}from"./chunks/framework.7ep0oyv4.js";const d=E(`<h1 id="jedis连接池" tabindex="-1">Jedis连接池 <a class="header-anchor" href="#jedis连接池" aria-label="Permalink to &quot;Jedis连接池&quot;">​</a></h1><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@author</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> xclhove</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JedisConnectionFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JedisPool JEDIS_POOL;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        JedisPoolConfig jedisPoolConfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JedisPoolConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 最大连接数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        jedisPoolConfig.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setMaxTotal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 最大空闲连接数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        jedisPoolConfig.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setMaxIdle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 最小空闲连接数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        jedisPoolConfig.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setMinIdle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        jedisPoolConfig.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setMaxWait</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Duration.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ofSeconds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        JEDIS_POOL </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JedisPool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(jedisPoolConfig, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Jedis </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getJedis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JEDIS_POOL.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getResource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2),o=["href"],g=["href"],y={key:1,style:{margin:"0 5px"}},c=["href"],m=JSON.parse('{"title":"Jedis连接池","description":"","frontmatter":{"prev":{"text":"笔记","link":"/笔记"}},"headers":[],"params":{"id":132,"title":"Jedis连接池","userId":1,"releaseTime":"2024-07-17T14:58:21.000+00:00","updateTime":"7/17/2024, 2:58:21 PM","isPublic":"公开","typeId":19,"sourceUrl":"https://xnote.xclhove.top/note/preview/132","prev":{"link":"./130#Redis命令","text":"上一篇：Redis命令"},"next":{"link":"./106#植物大战僵尸杂交版v2.1无法开启3D加速解决办法","text":"下一篇：植物大战僵尸杂交版v2.1无法开启3D加速解决办法"}},"relativePath":"note/132.md","filePath":"note/132.md"}'),F={name:"note/132.md"},A=h({...F,setup(u){const{params:l}=p();return k(()=>{document.title=l.value.title}),(s,D)=>(t(),i("div",null,[d,a("p",null,"最近更新："+n(s.$params.updateTime),1),a("p",null,[r("原文链接："),a("a",{target:"_blank",href:s.$params.sourceUrl},n(s.$params.title),9,o)]),a("span",null,[s.$params.prev?(t(),i("a",{key:0,class:"prev",href:s.$params.prev.link},n(s.$params.prev.text),9,g)):e("",!0),s.$params.prev&&s.$params.next?(t(),i("span",y,"|")):e("",!0),s.$params.next?(t(),i("a",{key:2,href:s.$params.next.link},n(s.$params.next.text),9,c)):e("",!0)])]))}});export{m as __pageData,A as default};
