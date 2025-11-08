import { LitElement, html, css } from 'lit';

/**
 * スタイリングの例
 * Shadow DOM により、スタイルはコンポーネント内にカプセル化される
 */
class StyledCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    }

    h3 {
      margin: 0 0 15px 0;
      font-size: 1.5em;
    }

    p {
      margin: 0;
      line-height: 1.6;
      opacity: 0.95;
    }

    .badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      padding: 5px 12px;
      border-radius: 20px;
      margin-top: 15px;
      font-size: 0.9em;
    }
  `;

  render() {
    return html`
      <div class="card">
        <h3>🎨 スタイル付きカード</h3>
        <p>
          このカードは Lit の css タグを使ってスタイリングされています。
          スタイルは Shadow DOM によってカプセル化されているため、
          他の要素に影響を与えません。
        </p>
        <span class="badge">✨ スコープ付きスタイル</span>
      </div>
    `;
  }
}

customElements.define('styled-card', StyledCard);
