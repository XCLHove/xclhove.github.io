import{d as c,u as p,k as d,c as o,l as t,t as a,a as l,e as r,a3 as s,o as i}from"./chunks/framework.7ep0oyv4.js";const m=s('<h1 id="springboot启动流程" tabindex="-1">SpringBoot启动流程 <a class="header-anchor" href="#springboot启动流程" aria-label="Permalink to &quot;SpringBoot启动流程&quot;">​</a></h1><p><code>SpringBoot</code>启动，其本质就是加载各种配置信息，然后初始化IOC容器并返回。</p><p>首先，在启动类执行<code>SpringApplication.run</code>时，<code>run</code>方法主要做两件事：</p><ol><li>创建<code>SpringApplication</code>对象；</li><li>执行<code>SpringApplication</code>对象的<code>run</code>方法。</li></ol><p>其次，创建<code>SpringApplication</code>时，构造方法主要做三件事情：</p><ol><li>确认web应用类型，一般是<code>Servlet</code>类型，<code>Servlet</code>类型将来会启动一个<code>tomcat</code>；</li><li>从<code>spring.factories</code>配置文件中加载默认的<code>ApplicationContextInitializer</code>和<code>ApplicationListener</code>;</li><li>记录当前的主启动类，将来用作包扫描。</li></ol><p>最后，对象创建好了以后，调用<code>SpringApplication</code>对象的<code>run</code>方法，主要做四件事情：</p><ol><li>准备<code>Enviroment</code>对象，它里面会封装一些当前应用运行环境的参数，如<code>环境变量</code>等等；</li><li>实例化容器，这里仅仅是创建<code>AppicationContext</code>对象；</li><li>容器创建完成后会为容器做一些准备工作，如为容器设置<code>Enviroment</code>、<code>BeanFactory</code>、<code>BeanFactoryPostProccessor</code>，并加载主类对应的<code>Definition</code>；</li><li>刷新容器（refresh），在这里会创建真正的<code>Bean</code>实例。</li></ol><p><code>SpringBoot</code>启动的核心就两部，创建<code>SpringApplication</code>对象和执行<code>run</code>方法，在<code>run</code>方法中会真正的实例化容器，并创建容器中需要的Bean实例，最终返回。</p>',9),u=["href"],g=["href"],h={key:1,style:{margin:"0 5px"}},S=["href"],_=JSON.parse('{"title":"SpringBoot启动流程","description":"","frontmatter":{"prev":{"text":"笔记","link":"/笔记"}},"headers":[],"params":{"id":102,"title":"SpringBoot启动流程","userId":1,"releaseTime":"2024-05-31T09:47:28.000+00:00","updateTime":"10/11/2024, 5:03:32 AM","isPublic":"公开","typeId":9,"sourceUrl":"https://xnote.xclhove.top/note/preview/102","prev":{"link":"./115#springboot2整合swagger2","text":"上一篇：springboot2整合swagger2"},"next":{"link":"./122#SpringBoot Bean的循环依赖","text":"下一篇：SpringBoot Bean的循环依赖"}},"relativePath":"note/102.md","filePath":"note/102.md"}'),f={name:"note/102.md"},$=c({...f,setup(B){const{params:n}=p();return d(()=>{document.title=n.value.title}),(e,v)=>(i(),o("div",null,[m,t("p",null,"最近更新："+a(e.$params.updateTime),1),t("p",null,[l("原文链接："),t("a",{target:"_blank",href:e.$params.sourceUrl},a(e.$params.title),9,u)]),t("span",null,[e.$params.prev?(i(),o("a",{key:0,class:"prev",href:e.$params.prev.link},a(e.$params.prev.text),9,g)):r("",!0),e.$params.prev&&e.$params.next?(i(),o("span",h,"|")):r("",!0),e.$params.next?(i(),o("a",{key:2,href:e.$params.next.link},a(e.$params.next.text),9,S)):r("",!0)])]))}});export{_ as __pageData,$ as default};
