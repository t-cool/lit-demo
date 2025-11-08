import { LitElement, html, css } from 'lit';

/**
 * インタラクティブなコンポーネント
 * 状態を持ち、ユーザーのクリックに反応する
 */
class CounterButton extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .counter-container {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 1em;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.2);
    }

    button:active {
      transform: translateY(0);
    }

    .count-display {
      font-size: 1.5em;
      font-weight: bold;
      color: #667eea;
    }

    .reset-btn {
      background: #e74c3c;
      padding: 8px 16px;
      font-size: 0.9em;
    }
  `;

  static properties = {
    count: { type: Number }
  };

  constructor() {
    super();
    this.count = 0;
  }

  _increment() {
    this.count++;
  }

  _reset() {
    this.count = 0;
  }

  render() {
    return html`
      <div class="counter-container">
        <button @click=${this._increment}>
          🚀 クリック!
        </button>
        <span class="count-display">
          クリック数: ${this.count}
        </span>
        ${this.count > 0 ? html`
          <button class="reset-btn" @click=${this._reset}>
            🔄 リセット
          </button>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('counter-button', CounterButton);
