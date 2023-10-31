import{_ as s,o as a,c as l,Q as e}from"./chunks/framework.35bd0d1d.js";const E=JSON.parse('{"title":"Ruyi 包管理器","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ruyi-package/index.md","filePath":"zh/ruyi-package/index.md","lastUpdated":1698734633000}'),p={name:"zh/ruyi-package/index.md"},n=e(`<h1 id="ruyi-包管理器" tabindex="-1">Ruyi 包管理器 <a class="header-anchor" href="#ruyi-包管理器" aria-label="Permalink to &quot;Ruyi 包管理器&quot;">​</a></h1><p>Ruyi 包管理器是设计为用于 RuyiSDK 的包管理器，用于管理工具链。</p><h2 id="安装包管理器" tabindex="-1">安装包管理器 <a class="header-anchor" href="#安装包管理器" aria-label="Permalink to &quot;安装包管理器&quot;">​</a></h2><p>目前，您可以从 <a href="https://mirror.iscas.ac.cn/ruyisdk/ruyi/testing/" target="_blank" rel="noreferrer">Ruyi Mirror</a> 下载预编译二进制文件并将其重命名为 <code>ruyi</code>。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://mirror.iscas.ac.cn/ruyisdk/ruyi/testing/ruyi.20231030</span></span>
<span class="line"><span style="color:#B392F0;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ruyi.20231030</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ruyi</span></span>
<span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ruyi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://mirror.iscas.ac.cn/ruyisdk/ruyi/testing/ruyi.20231030</span></span>
<span class="line"><span style="color:#6F42C1;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ruyi.20231030</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ruyi</span></span>
<span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ruyi</span></span></code></pre></div><p>然后将 <code>ruyi</code> 可执行文件加入 <code>$PATH</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> PATH</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$PATH</span><span style="color:#9ECBFF;">:/home/ruyi/&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> PATH</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$PATH</span><span style="color:#032F62;">:/home/ruyi/&quot;</span></span></code></pre></div><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><h3 id="update" tabindex="-1">Update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;Update&quot;">​</a></h3><ul><li>将 RuyiSDK 元数据同步到本地存储</li><li>默认情况下，存储库克隆到 <code>$XDG_CACHE_HOME/ruyi/packages-index</code></li><li>如果 <code>$XDG_CACHE_HOME</code> 未设置，则默认为 <code>~/.cache</code></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span></code></pre></div><h3 id="list" tabindex="-1">List <a class="header-anchor" href="#list" aria-label="Permalink to &quot;List&quot;">​</a></h3><ul><li>列出可用的工具链</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span></code></pre></div><h3 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h3><p>安装一个选定的包。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plct-20231026</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plct-20231026</span></span></code></pre></div><h3 id="移除一个包" tabindex="-1">移除一个包 <a class="header-anchor" href="#移除一个包" aria-label="Permalink to &quot;移除一个包&quot;">​</a></h3><p>TODO: 移除一个选定的包</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remove</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plct-20231026</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remove</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plct-20231026</span></span></code></pre></div><h3 id="列出可用的-profiles" tabindex="-1">列出可用的 Profiles <a class="header-anchor" href="#列出可用的-profiles" aria-label="Permalink to &quot;列出可用的 Profiles&quot;">​</a></h3><p>TODO: 列出所有可用的 Profiles</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">profiles</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#032F62;">profiles</span></span></code></pre></div><h3 id="设置一个-project" tabindex="-1">设置一个 Project <a class="header-anchor" href="#设置一个-project" aria-label="Permalink to &quot;设置一个 Project&quot;">​</a></h3><p>TODO: 设置一个 Project</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#cd path/to/your/project</span></span>
<span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--profile=milkv-duo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#cd path/to/your/project</span></span>
<span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">setup</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--profile=milkv-duo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span></code></pre></div><h3 id="使用工具链编译" tabindex="-1">使用工具链编译 <a class="header-anchor" href="#使用工具链编译" aria-label="Permalink to &quot;使用工具链编译&quot;">​</a></h3><p>使用工具链。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./.ruyirc</span></span>
<span class="line"><span style="color:#6A737D;">#do something</span></span>
<span class="line"><span style="color:#B392F0;">./configure</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--host=riscv64-plct-linux-gnu</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">make</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./.ruyirc</span></span>
<span class="line"><span style="color:#6A737D;">#do something</span></span>
<span class="line"><span style="color:#6F42C1;">./configure</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--host=riscv64-plct-linux-gnu</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">make</span></span></code></pre></div><h1 id="cmake-meson" tabindex="-1">cmake &amp; meson <a class="header-anchor" href="#cmake-meson" aria-label="Permalink to &quot;cmake &amp; meson&quot;">​</a></h1><p>cmake &amp; meson 支持尚不可用。</p>`,31),o=[n];function t(c,r,i,d,y,h){return a(),l("div",null,o)}const F=s(p,[["render",t]]);export{E as __pageData,F as default};
