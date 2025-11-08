import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * プロパティを持つコンポーネント
 * @property デコレータでリアクティブなプロパティを定義
 */
class GreetingCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 10px 0;
    }

    .card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      display: inline-block;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .card p {
      margin: 0;
      font-size: 1.2em;
    }
  `;

  static properties = {
    name: { type: String }
  };

  constructor() {
    super();
    this.name = 'ゲスト';
  }

  render() {
    return html`
      <div class="card">
        <p>👤 こんにちは、${this.name}さん！</p>
      </div>
    `;
  }
}

customElements.define('greeting-card', GreetingCard);
