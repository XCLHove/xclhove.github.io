import{d as i,u as o,k as c,c as a,l as n,t as p,a as d,e as l,a3 as r,o as e}from"./chunks/framework.7ep0oyv4.js";const h=r(`<h1 id="centos7编译安装php5-6" tabindex="-1">CentOS7编译安装php5.6 <a class="header-anchor" href="#centos7编译安装php5-6" aria-label="Permalink to &quot;CentOS7编译安装php5.6&quot;">​</a></h1><p>在CentOS 7上编译安装PHP 5.6并启用PHP-FPM，您可以按照以下最小安装命令进行操作：</p><ol><li>首先，确保您的系统已安装必要的编译工具和依赖项。运行以下命令安装它们：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>sudo yum install epel-release</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo yum install gcc gcc-c++ make automake autoconf \\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    libtool-ltdl-devel gd-devel freetype-devel libxml2-devel \\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    libjpeg-devel libpng-devel openssl-devel curl-devel \\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    libmcrypt-devel libxslt-devel bzip2-devel libzip-devel</span></span></code></pre></div><ol start="2"><li>下载PHP 5.6的源代码包。您可以从PHP 官方网站下载稳定版本的源代码包，然后将其解压缩到您喜欢的目录。例如，使用以下命令下载并解压缩：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>wget https://www.php.net/distributions/php-5.6.40.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tar -zxvf php-5.6.40.tar.gz</span></span></code></pre></div><ol start="3"><li>进入解压后的PHP源代码目录：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>cd php-5.6.40</span></span></code></pre></div><ol start="4"><li>配置编译选项并启用PHP-FPM。运行以下命令：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>./configure --prefix=/usr/local/php5.6 \\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    --with-config-file-path=/usr/local/php5.6/etc \\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    --enable-fpm \\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    --with-fpm-user=apache \\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    --with-fpm-group=apache</span></span></code></pre></div><p>这将配置PHP编译选项，并启用PHP-FPM。</p><ol start="5"><li>编译和安装PHP。运行以下命令：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>make</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo make install</span></span></code></pre></div><p>这将编译并安装PHP到指定的目录。</p><ol start="6"><li>创建PHP-FPM配置文件。复制默认的PHP-FPM配置文件到正确的位置：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>sudo cp /usr/local/php5.6/etc/php-fpm.conf.default /usr/local/php5.6/etc/php-fpm.conf</span></span></code></pre></div><ol start="7"><li>启动PHP-FPM服务。运行以下命令：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>sudo /usr/local/php5.6/sbin/php-fpm</span></span></code></pre></div><p>现在，PHP 5.6和PHP-FPM已成功安装并启动。</p><p>请注意，PHP 5.6已于2018年停止维护，并且不再接收安全更新。强烈建议您升级到更新的PHP版本，以确保您的应用程序的安全性和性能。</p>`,20),u=["href"],v=["href"],m={key:1,style:{margin:"0 5px"}},g=["href"],y=JSON.parse('{"title":"CentOS7编译安装php5.6","description":"","frontmatter":{"prev":{"text":"笔记","link":"/笔记"}},"headers":[],"params":{"id":20,"title":"CentOS7编译安装php5.6","userId":1,"releaseTime":"2024-01-28T01:38:42.000+00:00","updateTime":"10/11/2024, 4:52:25 AM","isPublic":"公开","typeId":4,"sourceUrl":"https://xnote.xclhove.top/note/preview/20","prev":{"link":"./5#less介绍","text":"上一篇：less介绍"},"next":{"link":"./10#宝塔面板关闭安全入口","text":"下一篇：宝塔面板关闭安全入口"}},"relativePath":"note/20.md","filePath":"note/20.md"}'),P={name:"note/20.md"},C=i({...P,setup(b){const{params:t}=o();return c(()=>{document.title=t.value.title}),(s,k)=>(e(),a("div",null,[h,n("p",null,"最近更新："+p(s.$params.updateTime),1),n("p",null,[d("原文链接："),n("a",{target:"_blank",href:s.$params.sourceUrl},p(s.$params.title),9,u)]),n("span",null,[s.$params.prev?(e(),a("a",{key:0,class:"prev",href:s.$params.prev.link},p(s.$params.prev.text),9,v)):l("",!0),s.$params.prev&&s.$params.next?(e(),a("span",m,"|")):l("",!0),s.$params.next?(e(),a("a",{key:2,href:s.$params.next.link},p(s.$params.next.text),9,g)):l("",!0)])]))}});export{y as __pageData,C as default};
