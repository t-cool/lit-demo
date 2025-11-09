# Lit デモサイト

Google Lit を使った Web コンポーネントのデモンストレーションサイトです。

## このサイトについて

Lit は Google が開発した軽量で高速な Web コンポーネントライブラリです。
このデモサイトでは、Lit の主要な機能を実際に動かしながら学ぶことができます。

**特に注目**: [Shadow DOM と Lit - 薄いラッパーの真実](https://t-cool.github.com/lit-demo/shadow-dom-guide.html) では、Litがブラウザ標準のShadow DOM APIに対する「薄いラッパー」であることを、素のJavaScriptとの比較を通じて詳しく解説しています。

## デモ内容

### メインページ (`/`)
1. **基本的なコンポーネント** - 最もシンプルな Lit コンポーネントの作成
2. **プロパティとリアクティブ性** - データバインディングの仕組み
3. **インタラクティブなコンポーネント** - イベント処理とステート管理

### Shadow DOM ガイド (`/shadow-dom-guide.html`)
**Litが本当に「薄いラッパー」であることを証明するページ**

- 📚 Shadow DOMの基本構造の解説
- 🔍 素のJavaScriptとLitのコード比較（同じカウンターコンポーネント）
- 🎯 完全な1対1マッピングの説明
- 📊 コードサイズとボイラープレート削減の定量的分析
- ✅ Litが提供する便利な糖衣構文の理解

このページでは、同じ機能を持つカウンターコンポーネントを素のJavaScript（約65行）とLit（約40行）で実装し、**Litがブラウザ標準APIの上に構築された薄い層**であることを実証します。

## セットアップ

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

## 技術スタック

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

## プロジェクト構造

```
lit-demo/
├── src/
│   ├── components/          # コンポーネント
│   │   ├── hello-world.js       # Lit: シンプルなコンポーネント
│   │   ├── greeting-card.js     # Lit: プロパティ付きコンポーネント
│   │   ├── counter-button.js    # Lit: インタラクティブコンポーネント
│   │   ├── styled-card.js       # Lit: スタイル付きコンポーネント
│   │   ├── input-demo.js        # Lit: フォーム連携
│   │   ├── todo-list.js         # Lit: リスト表示
│   │   ├── vanilla-counter.js   # 素のJS: Shadow DOM実装
│   │   └── lit-counter.js       # Lit: 同じ機能の実装
│   └── main.js              # エントリーポイント
├── index.html               # メインページ
├── shadow-dom-guide.html    # Shadow DOM vs Lit ガイド
├── package.json
└── vite.config.js
```

## 🔗 参考リンク

- [Lit 公式サイト](https://lit.dev/)
- [Lit ドキュメント](https://lit.dev/docs/)
- [Web Components 入門](https://developer.mozilla.org/ja/docs/Web/Web_Components)

## 📝 ライセンス

MIT
