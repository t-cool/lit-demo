/**
 * 素のJavaScript + Shadow DOMで実装したカウンター
 * Litを使わない、ブラウザ標準のWeb Components API
 */
class VanillaCounter extends HTMLElement {
  constructor() {
    super();

    // 1. Shadow DOMを作成（カプセル化のため）
    this.attachShadow({ mode: 'open' });

    // 2. 内部状態
    this._count = 0;
  }

  connectedCallback() {
    // 3. スタイルを定義
    const style = document.createElement('style');
    style.textContent = `
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

    // 4. HTMLテンプレートを作成
    const container = document.createElement('div');
    container.className = 'container';

    const title = document.createElement('h3');
    title.textContent = '素のJavaScript版';

    const countDisplay = document.createElement('div');
    countDisplay.className = 'count';
    countDisplay.textContent = `カウント: ${this._count}`;

    const button = document.createElement('button');
    button.textContent = 'クリック';

    // 5. イベントリスナーを手動で設定
    button.addEventListener('click', () => {
      this._count++;
      // 6. 手動でDOMを更新（Litなら自動）
      countDisplay.textContent = `カウント: ${this._count}`;
    });

    // 7. Shadow DOMにすべてを追加
    container.appendChild(title);
    container.appendChild(countDisplay);
    container.appendChild(button);

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);
  }
}

customElements.define('vanilla-counter', VanillaCounter);
