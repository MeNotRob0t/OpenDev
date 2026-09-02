<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — 開源 AI 編碼代理的變體。</p>

---

> [!IMPORTANT]
> OpenDev **非** 由 OpenCode 團隊構建，且與其**無任何關聯**。
> 本專案是 [OpenCode](https://github.com/anomalyco/opencode) 的一個變體，由
> [anomalyco](https://github.com/anomalyco) 創建，後者是最初的開源 AI 編碼代理。
> 上游代碼庫的所有致謝歸屬於 OpenCode 作者與貢獻者。

---

### 什麼是 OpenDev？

OpenDev 是 OpenCode 的個人變體，一個運行在你終端機中的開源 AI 編碼代理。它構建於 OpenCode 代碼庫之上，帶有針對我的工作方式調整的本地修改和配置。

完整的上游功能集、文檔和社群，請參閱
[**OpenCode**](https://github.com/anomalyco/opencode) 及其文檔 [**opencode.ai**](https://opencode.ai/docs)。

### 安裝

OpenDev 通過 [Bun](https://bun.sh) 從原始碼運行。

```bash
# 安裝依賴
bun install

# 運行開發伺服器
bun dev

#如果你想，也可以構建它

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

對於上游二進位安裝（未修改的 OpenCode），請參閱
[官方安裝程式](https://opencode.ai/install)。

### 文檔

OpenDev 的配置方式與 OpenCode 相同。關於 OpenCode 如何配置，請前往上游文檔
[**opencode.ai/docs**](https://opencode.ai/docs)。

### 貢獻

這是一個個人專案，但歡迎貢獻

---

**致謝：** 基於 [OpenCode](https://github.com/anomalyco/opencode) 由 [anomalyco](https://github.com/anomalyco) 構建。