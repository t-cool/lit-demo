import { LitElement, html, css } from 'lit';

/**
 * フォーム入力のデモ
 * 入力値をリアルタイムで表示する
 */
class InputDemo extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .input-container {
      background: #f5f5f5;
      padding: 20px;
      border-radius: 8px;
    }

    label {
      display: block;
      margin-bottom: 8px;
      color: #333;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 12px;
      font-size: 1em;
      border: 2px solid #ddd;
      border-radius: 6px;
      box-sizing: border-box;
      transition: border-color 0.3s;
    }

    input:focus {
      outline: none;
      border-color: #667eea;
    }

    .output {
      margin-top: 20px;
      padding: 15px;
      background: white;
      border-radius: 6px;
      border-left: 4px solid #667eea;
    }

    .output strong {
      color: #667eea;
    }
  `;

  static properties = {
    inputValue: { type: String }
  };

  constructor() {
    super();
    this.inputValue = '';
  }

  _handleInput(e) {
    this.inputValue = e.target.value;
  }

  render() {
    return html`
      <div class="input-container">
        <label for="name-input">📝 お名前を入力してください:</label>
        <input
          id="name-input"
          type="text"
          placeholder="ここに入力..."
          @input=${this._handleInput}
          .value=${this.inputValue}
        />

        ${this.inputValue ? html`
          <div class="output">
            <strong>入力内容:</strong> ${this.inputValue}
            <br>
            <strong>文字数:</strong> ${this.inputValue.length}
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('input-demo', InputDemo);
