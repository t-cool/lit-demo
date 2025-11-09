import { LitElement, html, css } from 'lit';

class CounterButton extends LitElement {
  static properties = {
    count: { type: Number }
  };

  static styles = css`
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      background: #333;
      color: white;
      border: none;
      border-radius: 4px;
      transition: background 0.2s;
    }

    button:hover {
      background: #555;
    }
  `;

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <button @click=${() => this.count++}>
        クリック数: ${this.count}
      </button>
    `;
  }
}

customElements.define('counter-button', CounterButton);
