# Lit入門：インタラクティブなWebコンポーネントを作ろう！

こんにちは！このチュートリアルへようこそ。ここでは、Googleが開発したWebコンポーネントライブラリ「Lit（リット）」の基本的な使い方を学びます。

## 🎯 学習目標

このチュートリアルを終える頃には、あなたはLitを使って**シンプルでインタラクティブなWebコンポーネントを一人で作成できる**ようになります。具体的には、ボタンをクリックすると数字が増減する「カウンター」を自力で実装できるようになることを目指します。

### 🤔 Litってなに？

Litは、**高速で軽量、そしてWeb標準に準拠した**Webコンポーネントを簡単に作成するためのライブラリです。HTML、CSS、JavaScriptの知識があれば、再利用可能でカプセル化されたコンポーネントを直感的に作ることができます。

### ✨ 完成イメージ

最終的に、このようなカウンターコンポーネントを作成します。

![カウンターコンポーネントの完成イメージ](https://storage.googleapis.com/agent-sandbox-project-images/lit-counter-final.png)

---

## 🛠️ 1. 準備をしよう（環境構築）

Litを始めるのに、複雑な環境構築は必要ありません。必要なのは、最新のWebブラウザ（Chrome, Firefox, Safariなど）と、お気に入りのテキストエディタ（VS Codeなど）だけです。

このチュートリアルでは、Viteというツールを使って、すぐに開発を始められる環境を構築します。Viteは、数秒でLitプロジェクトの雛形を作成してくれる便利なツールです。

ターミナル（コマンドプロンプトやPowerShell）を開いて、以下のコマンドを順番に実行してください。

**1. プロジェクトを作成する**
```bash
npm create vite@latest my-lit-project -- --template lit-ts
```
> `lit-ts` を指定することで、TypeScriptを使ったテンプレートが作成されます。

**2. プロジェクトのディレクトリに移動する**
```bash
cd my-lit-project
```

**3. 必要なパッケージをインストールする**
```bash
npm install
```

**4. 開発サーバーを起動する**
```bash
npm run dev
```

`Local: http://localhost:5173/` のようなURLが表示されたら、そのURLをブラウザで開いてください。「Lit Vite TypeScript」と書かれたページが表示されれば準備完了です！

### 📂 ファイル構成

エディタで `my-lit-project` フォルダを開いてみましょう。たくさんのファイルがありますが、このチュートリアルで主に触るのは以下の2つだけです。

*   `index.html`: Webページの本体です。ここで作成したコンポーネントを呼び出します。
*   `src/my-element.ts`: コンポーネントの見た目や動きを定義するファイルです。

---

## 🚀 2. 最初のLitコンポーネント（Hello World）

まずは、画面に「Hello, Lit!」と表示するだけの、最もシンプルなコンポーネントを作成してみましょう。

`src/my-element.ts` を開き、内容をすべて削除してから、以下のコードを貼り付けてください。

```typescript
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * 画面に「Hello, Lit!」と表示するだけのシンプルなコンポーネント
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `

  render() {
    return html`
      <h1>Hello, Lit!</h1>
    `
  }
}
```

ブラウザをリロードすると、画面の表示が「Hello, Lit!」に変わるはずです。

### 📜 コードの解説

*   **`import { ... } from 'lit'`**: Litライブラリから必要な機能（`LitElement`, `html`, `css`）を読み込んでいます。
*   **`@customElement('my-element')`**: `MyElement`というクラスを、`<my-element>`というHTMLタグとして定義するための「デコレータ」です。これにより、`index.html`で`<my-element></my-element>`と書くだけでこのコンポーネントを呼び出せるようになります。
*   **`export class MyElement extends LitElement`**: 私たちが作るコンポーネントは、すべてLitの基本クラスである`LitElement`を「継承」して作成します。
*   **`static styles = css\` ... \``**: コンポーネントの見た目を定義するCSSです。ここに書いたスタイルは、このコンポーネントの内部にのみ適用され、他の部分に影響を与えません（Shadow DOMという技術で実現されています）。
*   **`render() { ... }`**: このコンポーネントが画面にどのように表示されるかを定義するメソッドです。
*   **`return html\` ... \``**: `html`で囲まれた部分は、Litが効率的に処理できる特別なHTMLテンプレートです。ここにコンポーネントの見た目を記述します。

---

## 🔄 3. データと見た目を連動させる（プロパティ）

静的なコンテンツを表示するだけでは面白くありませんね。次は、コンポーネントに「状態（データ）」を持たせ、そのデータと見た目を連動させてみましょう。Litではこれを**プロパティ**を使って実現します。

`src/my-element.ts` を以下のように書き換えてください。

```typescript
import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    /* ... スタイルは変更なし ... */
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `

  /**
   * コンポーネントが持つメッセージ（状態）
   */
  @property()
  message: string = 'プロパティのテスト'

  render() {
    return html`
      <h1>${this.message}</h1>
    `
  }
}
```

ブラウザで確認すると、「プロパティのテスト」と表示されているはずです。

### 📜 コードの解説

*   **`@property()`**: このデコレータを付けると、その変数は「リアクティブプロパティ」になります。リアクティブプロパティの値が**変更されると、Litがそれを自動で検知し、`render`メソッドを再実行して画面を更新**してくれます。
*   **`message: string = '...'`**: `message`という名前のプロパティを定義し、初期値を設定しています。
*   **`${this.message}`**: `render`メソッドの中で、`${...}`という構文を使うと、プロパティの値をHTMLに埋め込むことができます。

---

## 👆 4. ユーザーの操作に応える（イベント）

プロパティを使えば、データが変わると見た目が変わることが分かりました。では、そのデータを変えるきっかけ、例えば「ボタンがクリックされた時」のようなユーザー操作を処理するにはどうすればよいでしょうか。それには**イベント**を使います。

`src/my-element.ts` をさらに書き換えて、ボタンを追加してみましょう。

```typescript
import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    /* ... スタイルは変更なし ... */
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
    .message { margin-bottom: 1rem; }
  `

  @property()
  message: string = 'ボタンを押してください'

  render() {
    return html`
      <div class="message">${this.message}</div>
      <button @click=${this._changeMessage}>メッセージ変更</button>
    `
  }

  /**
   * ボタンがクリックされたときに呼び出されるメソッド
   */
  private _changeMessage() {
    this.message = 'ボタンがクリックされました！'
  }
}
```

ブラウザで「メッセージ変更」ボタンをクリックしてみてください。メッセージが変われば成功です！

### 📜 コードの解説

*   **`<button @click=${...}>`**: `@click`は、クリックイベントを監視するためのLitの特別な構文です。ユーザーがこのボタンをクリックすると、`=${...}`で指定されたメソッドが実行されます。
*   **`this._changeMessage`**: イベントによって実行するメソッド（イベントハンドラ）を指定しています。
*   **`_changeMessage() { ... }`**: イベントハンドラの本体です。この中で`this.message`プロパティの値を新しい文字列に書き換えています。
*   **プロパティの更新 → 自動で再描画**: `this.message`が更新されたので、Litは自動的に`render`メソッドを再実行します。その結果、新しいメッセージが画面に表示されるという仕組みです。

---

## ✏️ 5. 演習：カウンターを作ってみよう！

おめでとうございます！これでLitの基本的な要素はすべて学びました。

*   **コンポーネント**: `LitElement`を継承して作るUIの部品
*   **プロパティ**: `@property`で定義する、コンポーネントの状態
*   **イベント**: `@click`などで検知する、ユーザーのアクション

これらの知識を組み合わせて、最初の目標だった「カウンターコンポーネント」を完成させましょう！

### 📋 仕様

1.  現在のカウント数を表示する。
2.  「+1」ボタンと「-1」ボタンを配置する。
3.  「+1」ボタンをクリックすると、カウント数が1増える。
4.  「-1」ボタンをクリックすると、カウント数が1減る。

`src/my-element.ts`を以下のコードに書き換えて、カウンターを完成させてみてください。TODOコメントをヒントに、メソッドの中身を実装してみましょう。

```typescript
import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
    .count-display {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .buttons {
      display: flex;
      gap: 0.5rem;
    }
    button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  `

  @property({ type: Number })
  count: number = 0

  render() {
    return html`
      <div class="count-display">${this.count}</div>
      <div class="buttons">
        <button @click=${this._increment}>+1</button>
        <button @click=${this._decrement}>-1</button>
      </div>
    `
  }

  // TODO: カウントを1増やすメソッドを定義する。
  private _increment() {
    // ここに count プロパティを1増やす処理を書いてください
  }

  // TODO: カウントを1減らすメソッドを定義する。
  private _decrement() {
    // ここに count プロパティを1減らす処理を書いてください
  }
}
```

### 💡 ヒント

*   カウント数を保存するには、`@property()`デコレータを付けた数値型の変数が必要です。
*   ボタンのクリックイベントには`@click`を使います。
*   メソッドの中でプロパティの値を変更するには、`this.propertyName = ...`のように書きます。`++`や`--`といった演算子も使えます。

---
<details>
  <summary>クリックして解答例を見る</summary>

  ```typescript
  import { LitElement, html, css } from 'lit'
  import { customElement, property } from 'lit/decorators.js'

  @customElement('my-element')
  export class MyElement extends LitElement {
    static styles = css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
      .count-display {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
      .buttons {
        display: flex;
        gap: 0.5rem;
      }
      button {
        font-size: 1rem;
        padding: 0.5rem 1rem;
      }
    `

    @property({ type: Number })
    count: number = 0

    render() {
      return html`
        <div class="count-display">${this.count}</div>
        <div class="buttons">
          <button @click=${this._increment}>+1</button>
          <button @click=${this._decrement}>-1</button>
        </div>
      `
    }

    private _increment() {
      this.count++
    }

    private _decrement() {
      this.count--
    }
  }
  ```
</details>

---

## 🎉 まとめと次のステップ

このチュートリアルでは、Litの核心的な概念である**コンポーネント**、**プロパティ**、**イベント**について学び、それらを組み合わせて簡単なインタラクティブアプリケーションを作成しました。

Litの世界はまだまだ奥が深いです。ここからさらに学習を進めるために、以下のリソースが役立つでしょう。

*   **[Lit公式サイト](https://lit.dev/)**: すべての公式情報がここにあります。
*   **[インタラクティブチュートリアル](https://lit.dev/tutorials/intro-to-lit/)**: より多くの機能を対話形式で学べます。
*   **[コンポーネントのライフサイクル](https://lit.dev/docs/components/lifecycle/)**: コンポーネントが作成されてから破棄されるまでの流れについて学べます。
*   **[テンプレートの高度な使い方](https://lit.dev/docs/templates/overview/)**: `map`を使った繰り返しや、`ifDefined`を使った条件分岐など、より複雑なUIを構築する方法を学べます。

これで、Lit入門チュートリアルは終了です。学習お疲れ様でした！
