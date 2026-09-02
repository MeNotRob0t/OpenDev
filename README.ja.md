<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — オープンソースAIコーディングエージェントのバリアント。</p>

---

> [!IMPORTANT]
> OpenDev は OpenCode チームによって構築されたもの**ではなく**、一切**関連していません**。
> このプロジェクトは [OpenCode](https://github.com/anomalyco/opencode) のバリアントであり、
> 元のオープンソースAIコーディングエージェントである [anomalyco](https://github.com/anomalyco) によるものです。
> アップストリームのコードベースに関するすべてのクレジットは OpenCode の作者と貢献者に帰属します。

---

### OpenDev とは？

OpenDev は OpenCode の個人的なバリアントであり、ターミナルで実行されるオープンソースAIコーディングエージェントです。ローカルでの変更と、私の作業スタイルに合わせた設定を加えた OpenCode のコードベースの上に構築されています。

完全なアップストリーム機能セット、ドキュメント、コミュニティについては、
[**OpenCode**](https://github.com/anomalyco/opencode) とそのドキュメント [**opencode.ai**](https://opencode.ai/docs) を参照してください。

### インストール

OpenDev は [Bun](https://bun.sh) でソースから実行されます。

```bash
# 依存関係をインストール
bun install

# 開発サーバーを実行
bun dev

# 希望すればビルドも可能

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

アップストリームのバイナリインストール（未変更の OpenCode）については、
[公式インストーラー](https://opencode.ai/install) を参照してください。

### ドキュメント

OpenDev は OpenCode と同じ方法で設定されます。OpenCode の設定方法については、アップストリームのドキュメント [**opencode.ai/docs**](https://opencode.ai/docs) を参照してください。

### 貢献

これは個人プロジェクトですが、貢献は歓迎します

---

**クレジット:** [OpenCode](https://github.com/anomalyco/opencode) に基づき [anomalyco](https://github.com/anomalyco) によって構築。