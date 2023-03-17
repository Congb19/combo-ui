import{C as c,a as y}from"./chunks/index.17b7672c.js";import{o as r,y as i,z as p,D as t,b as a,x as s,a as l,c as C,N as A}from"./chunks/framework.2bc6aaf2.js";const h=s("br",null,null,-1),m=l("ToLight"),u=l("  "),d=l("ToDark"),g=s("br",null,null,-1),_={setup(D){let o=e=>{document.getElementsByTagName("html")[0].className=e};return(e,n)=>(r(),i(a(y),null,{default:p(()=>[h,t(a(c),{clean:"",onC_click:n[0]||(n[0]=F=>a(o)("light"))},{default:p(()=>[m]),_:1}),u,t(a(c),{clean:"",onC_click:n[1]||(n[1]=F=>a(o)("dark"))},{default:p(()=>[d]),_:1}),g]),_:1}))}},T=s("h1",{id:"theme-主题",tabindex:"-1"},[l("Theme 主题 "),s("a",{class:"header-anchor",href:"#theme-主题","aria-label":'Permalink to "Theme 主题"'},"​")],-1),b=s("p",null,"Combo UI 提供了两种默认主题（light、dark）、两种切换默认主题的方法（useTheme、ThemeProvider）、自定义主题。",-1),v=s("p",null,"默认情况下，Combo UI 的主题会自动跟随系统的深色模式开关变化。",-1),f=A(`<h2 id="usetheme" tabindex="-1">useTheme <a class="header-anchor" href="#usetheme" aria-label="Permalink to &quot;useTheme&quot;">​</a></h2><p>在组件内使用 useTheme 控制应用主题。</p><p>请确保在非 SSR 的环境中使用。如果在 SSR 中使用，请确保在组件挂载后再调用 useTheme。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">CButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">clean</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@c_click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">changeTheme(&#39;dark&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">ToLight</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">CButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">CButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">clean</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@c_click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">changeTheme(&#39;dark&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">ToDark</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">CButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {{ currentTheme }}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useTheme</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@congb19/combo-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> currentTheme</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> systemTheme</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> changeTheme </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTheme</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="themeprovider" tabindex="-1">ThemeProvider <a class="header-anchor" href="#themeprovider" aria-label="Permalink to &quot;ThemeProvider&quot;">​</a></h2><p>将你的应用嵌套在 CThemeProvider 内控制应用主题。</p><p>在这种情况下，控制主题的方法是，手动给外层 html 元素赋予 className (&#39;light&#39; 或 &#39;dark&#39;)。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">CThemeProvider</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">your-app</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">your-app</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">CThemeProvider</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> global </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementByTagName</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">global</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">className </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dark</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="自定义主题" tabindex="-1">自定义主题 <a class="header-anchor" href="#自定义主题" aria-label="Permalink to &quot;自定义主题&quot;">​</a></h2><p>将主题 css 文件通过文本字符串的形式引入，并通过 changeTheme 方法引入即可。</p><p>在这种情况下，Combo UI 的主题将不再跟随系统变化，完全由应用自己控制。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useTheme</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@congb19/combo-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> customTheme </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> changeTheme </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTheme</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">changeTheme</span><span style="color:#A6ACCD;">(customTheme)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="todo" tabindex="-1">todo <a class="header-anchor" href="#todo" aria-label="Permalink to &quot;todo&quot;">​</a></h2><ul><li>主题生成器</li><li>使用主题生成器生成自定义主题 css 文件。</li></ul>`,15),x=JSON.parse('{"title":"Theme 主题","description":"","frontmatter":{},"headers":[],"relativePath":"guides/theme.md"}'),k={name:"guides/theme.md"},q=Object.assign(k,{setup(D){return(o,e)=>(r(),C("div",null,[T,b,v,t(_),f]))}});export{x as __pageData,q as default};
