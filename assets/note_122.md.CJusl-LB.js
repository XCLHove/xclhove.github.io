import{d as i,u as l,k as c,c as t,l as o,t as a,a as d,e as r,a3 as p,o as n}from"./chunks/framework.7ep0oyv4.js";const g=p('<h1 id="springboot-bean的循环依赖" tabindex="-1">SpringBoot Bean的循环依赖 <a class="header-anchor" href="#springboot-bean的循环依赖" aria-label="Permalink to &quot;SpringBoot Bean的循环依赖&quot;">​</a></h1><p>循环依赖：指A依赖B，B又依赖A这样的依赖循环问题。在spring中通过<code>DefaultSingletonBeanRegistry</code>的三个对象缓存区解决循环依赖问题：</p><ul><li><code>singletonObjects</code>：存储实例化完成且完成依赖注入的Bean。</li><li><code>earlySingletonObjects</code>：存储实例化完成但未完成依赖注入的Bean。</li><li><code>singletonFactories</code>：存储创建Bean的ObjectFactory。</li></ul><p>假设现在有A和B，且A依赖B，B又依赖A，则Bean的创建过程是这样的：</p><ol><li>调用A的构造方法实例化A，此时A还未完成依赖注入，封装一个<strong>A的ObjectFactory</strong>并放入<code>singletonFactories</code>。</li><li>处理A的依赖注入，但此时没有B，则调用B的构造方法实例化B，此时B还未完成依赖注入，封装一个<strong>B的ObjectFactory</strong>并放入<code>singletonFactories</code>。</li><li>处理B的依赖注入，找到<code>singletonFactories</code>中<strong>A的ObjectFactroy</strong>，调用该ObjectFactroy的getObject方法得到未完成依赖注入的A（<em>如果需要代理对象，则会自动创建，将来得到的就是代理对象</em>），把A（未完成依赖注入）注入给B，同时把A（未完成依赖注入）放入<code>earlySingletonObjects</code>，将来如果有其他类循环依赖A，则可以直接在<code>earlySingletonObjects</code>中找到，这样<code>singletonFactories</code>中<strong>A的ObjectFactroy</strong>就可以删除了。</li><li>至此，B的依赖注入完成，B就创建完毕了，将B的对象放入<code>singletonObjects</code>，同时删除<code>singletonFactories</code>中<strong>B的ObjectFactroy</strong>。</li><li>B创建完毕，继续A的依赖注入，把B注入给A，此时A也创建完毕，就可以删除<code>earlySingletonObjects</code>中的A（未完成依赖注入）。</li><li>至此，A和B的对象都创建完毕且放入<code>singletonObjects</code>中，将来通过容器获取对象都是从<code>singletonObjects</code>中获取。</li></ol>',5),B=["href"],m=["href"],u={key:1,style:{margin:"0 5px"}},b=["href"],j=JSON.parse('{"title":"SpringBoot Bean的循环依赖","description":"","frontmatter":{"prev":{"text":"笔记","link":"/笔记"}},"headers":[],"params":{"id":122,"title":"SpringBoot Bean的循环依赖","userId":1,"releaseTime":"2024-07-15T16:06:17.000+00:00","updateTime":"10/11/2024, 5:04:04 AM","isPublic":"公开","typeId":9,"sourceUrl":"https://xnote.xclhove.top/note/preview/122","prev":{"link":"./102#SpringBoot启动流程","text":"上一篇：SpringBoot启动流程"},"next":{"link":"./121#SpringBoot Bean生命周期","text":"下一篇：SpringBoot Bean生命周期"}},"relativePath":"note/122.md","filePath":"note/122.md"}'),h={name:"note/122.md"},S=i({...h,setup(A){const{params:s}=l();return c(()=>{document.title=s.value.title}),(e,y)=>(n(),t("div",null,[g,o("p",null,"最近更新："+a(e.$params.updateTime),1),o("p",null,[d("原文链接："),o("a",{target:"_blank",href:e.$params.sourceUrl},a(e.$params.title),9,B)]),o("span",null,[e.$params.prev?(n(),t("a",{key:0,class:"prev",href:e.$params.prev.link},a(e.$params.prev.text),9,m)):r("",!0),e.$params.prev&&e.$params.next?(n(),t("span",u,"|")):r("",!0),e.$params.next?(n(),t("a",{key:2,href:e.$params.next.link},a(e.$params.next.text),9,b)):r("",!0)])]))}});export{j as __pageData,S as default};
