import{_ as s,o as a,c as p,Q as l}from"./chunks/framework.35bd0d1d.js";const g=JSON.parse('{"title":"支持 RVV1.0 扩展的构建和使用","description":"","frontmatter":{"title":"支持 RVV1.0 扩展的构建和使用"},"headers":[],"relativePath":"zh/sdk/gcc13-rv64gcv/rv64gcv_compile_and_use.md","filePath":"zh/sdk/gcc13-rv64gcv/rv64gcv_compile_and_use.md","lastUpdated":1698734633000}'),n={name:"zh/sdk/gcc13-rv64gcv/rv64gcv_compile_and_use.md"},e=l(`<p>安装构建依赖 (如有后续构建提示缺失，可根据错误信息全依赖)</p><p>::: tabs ::: code-tab bash Ubuntu 环境</p><p>apt-get install -y make diffutils autoconf automake autotools-dev curl python3 python3-pip libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev ninja-build git cmake libglib2.0-dev :::</p><p>::: code-tab bash OpenEuler/RevyOS环境</p><p>dnf install -y make diffutils autoconf automake python3 libmpc-devel mpfr-devel gmp-devel gawk bison flex texinfo patchutils gcc gcc-c++ zlib-devel expat-devel :::</p><p>::: code-tab bash Fedora/CentOS环境</p><p>sudo yum install -y make diffutils autoconf automake python3 libmpc-devel mpfr-devel gmp-devel gawk bison flex texinfo patchutils gcc gcc-c++ zlib-devel expat-devel ::: :::</p><p>下载 riscv-gnu-toolchain:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/ruyisdk/riscv-gnu-toolchain</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/ruyisdk/riscv-gnu-toolchain</span></span></code></pre></div><p>构建准备------进入 riscv-gnu-toolchain 目录，建立 build 文件夹，用于存放构建生成的工具链：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">riscv-gnu-toolchain</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">riscv-gnu-toolchain</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span></code></pre></div><p>配置构建参数，以启用不同扩展</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#支持RVV1.0扩展的构建（rv64gcv）</span></span>
<span class="line"><span style="color:#B392F0;">./configure</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--prefix=</span><span style="color:#E1E4E8;">$PWD</span><span style="color:#79B8FF;">/build</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-arch=rv64gcv</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#支持RVV1.0扩展的构建（rv64gcv）</span></span>
<span class="line"><span style="color:#6F42C1;">./configure</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--prefix=</span><span style="color:#24292E;">$PWD</span><span style="color:#005CC5;">/build</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-arch=rv64gcv</span></span></code></pre></div><p>配置完成后进行构建（如果出现报错，请记录错误信息并进行反馈）</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">linux</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-j</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">nproc</span><span style="color:#9ECBFF;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">linux</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-j</span><span style="color:#24292E;"> </span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">nproc</span><span style="color:#032F62;">)</span></span></code></pre></div><p>构建完成后，检查是否构建成功 (这里以标准 64 位工具链为例，32 位工具链注意替换工具链名称)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">build/bin/riscv64-unknown-linux-gnu-gcc</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">build/bin/riscv64-unknown-linux-gnu-gcc</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre></div><p>RuyiSDK 是</p>`,18),o=[e];function c(t,i,r,d,y,u){return a(),p("div",null,o)}const h=s(n,[["render",c]]);export{g as __pageData,h as default};
