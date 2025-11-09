import { LitElement, html, css } from 'lit';

/**
 * Litで実装したカウンター
 * VanillaCounterと全く同じ機能だが、コードははるかにシンプル
 */
class LitCounter extends LitElement {
  // 3. スタイルを定義（cssタグ付きテンプレート）
  static styles = css`
    :host {
      display: block;
    }

    .container {
      font-family: sans-serif;
      padding: 20px;
      background: #f0f0f0;
      border-radius: 8px;
    }

    button {
      background: #667eea;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background: #5568d3;
    }

    .count {
      font-size: 24px;
      margin: 10px 0;
      color: #333;
    }
  `;

  // 2. リアクティブプロパティ（変更を自動追跡）
  static properties = {
    count: { type: Number }
  };

  constructor() {
    super(); // LitElementもHTMLElementを継承
    // 1. Shadow DOMは自動的に作成される
    this.count = 0;
  }

  // 4. HTMLテンプレートを宣言的に定義
  render() {
    return html`
      <div class="container">
        <h3>Lit版</h3>
        <div class="count">カウント: ${this.count}</div>
        <!-- 5. イベントリスナーも宣言的に -->
        <button @click=${() => this.count++}>
          クリック
        </button>
      </div>
    `;
    // 6. DOMの更新は自動的に行われる
  }
}

customElements.define('lit-counter', LitCounter);
