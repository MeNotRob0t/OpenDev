<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — 开源 AI 编码代理的变体。</p>

---

> [!IMPORTANT]
> OpenDev **非** 由 OpenCode 团队构建，且与其**无任何关联**。
> 本项目是 [OpenCode](https://github.com/anomalyco/opencode) 的一个变体，由
> [anomalyco](https://github.com/anomalyco) 创建，后者是最初的开源 AI 编码代理。
> 上游代码库的所有致谢归属于 OpenCode 作者与贡献者。

---

### 什么是 OpenDev？

OpenDev 是 OpenCode 的个人变体，一个运行在你终端中的开源 AI 编码代理。它构建于 OpenCode 代码库之上，带有针对我的工作方式调整的本地修改和配置。

完整的上游功能集、文档和社区，请参阅
[**OpenCode**](https://github.com/anomalyco/opencode) 及其文档 [**opencode.ai**](https://opencode.ai/docs)。

### 安装

OpenDev 通过 [Bun](https://bun.sh) 从源码运行。

```bash
# 安装依赖
bun install

# 运行开发服务器
bun dev

#如果你想，也可以构建它

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

对于上游二进制安装（未修改的 OpenCode），请参阅
[官方安装程序](https://opencode.ai/install)。

### 文档

OpenDev 的配置方式与 OpenCode 相同。关于 OpenCode 如何配置，请前往上游文档
[**opencode.ai/docs**](https://opencode.ai/docs)。

### 贡献

这是一个个人项目，但欢迎贡献

---

**致谢：** 基于 [OpenCode](https://github.com/anomalyco/opencode) 由 [anomalyco](https://github.com/anomalyco) 构建。