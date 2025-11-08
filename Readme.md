# Lit デモサイト 🔥

Google Lit を使った Web コンポーネントのデモンストレーションサイトです。

## 🎯 このサイトについて

Lit は Google が開発した軽量で高速な Web コンポーネントライブラリです。
このデモサイトでは、Lit の主要な機能を実際に動かしながら学ぶことができます。

## ✨ デモ内容

1. **基本的なコンポーネント** - 最もシンプルな Lit コンポーネントの作成
2. **プロパティとリアクティブ性** - データバインディングの仕組み
3. **インタラクティブなコンポーネント** - イベント処理とステート管理
4. **スタイリング** - スコープ付きスタイルの実装
5. **入力フォーム** - フォーム要素との連携
6. **リスト表示** - 配列データの効率的なレンダリング

## 🚀 セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開くとデモサイトが表示されます。

### ビルド

```bash
npm run build
```

## 📚 技術スタック

- **Lit** (v3.1.0) - Web コンポーネントライブラリ
- **Vite** (v5.0.0) - 高速なビルドツール

## 🎓 学習ポイント

### Lit の主な特徴

- ⚡ **軽量**: わずか 5KB の小さなライブラリ
- 🚀 **高速**: 効率的な DOM 更新
- 🎯 **シンプル**: 学習コストが低い
- 🔧 **標準準拠**: Web 標準に基づいた実装

### コンポーネントの基本構造

```javascript
import { LitElement, html, css } from 'lit';

class MyElement extends LitElement {
  // スタイル定義
  static styles = css`
    :host {
      display: block;
    }
  `;

  // リアクティブプロパティ
  static properties = {
    name: { type: String }
  };

  // レンダリング
  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
    `;
  }
}

customElements.define('my-element', MyElement);
```

## 📁 プロジェクト構造

```
lit-demo/
├── src/
│   ├── components/          # Lit コンポーネント
│   │   ├── hello-world.js
│   │   ├── greeting-card.js
│   │   ├── counter-button.js
│   │   ├── styled-card.js
│   │   ├── input-demo.js
│   │   └── todo-list.js
│   └── main.js              # エントリーポイント
├── index.html               # メインHTML
├── package.json
└── vite.config.js
```

## 🔗 参考リンク

- [Lit 公式サイト](https://lit.dev/)
- [Lit ドキュメント](https://lit.dev/docs/)
- [Web Components 入門](https://developer.mozilla.org/ja/docs/Web/Web_Components)

## 📝 ライセンス

MIT
