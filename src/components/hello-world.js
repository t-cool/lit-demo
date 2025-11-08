import { LitElement, html, css } from 'lit';

/**
 * 最もシンプルな Lit コンポーネント
 * render() メソッドで HTML テンプレートを返すだけ
 */
class HelloWorld extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    h3 {
      color: #667eea;
      font-size: 1.5em;
      margin: 0;
    }
  `;

  render() {
    return html`
      <h3>👋 こんにちは、Lit！</h3>
      <p>これが最もシンプルな Lit コンポーネントです。</p>
    `;
  }
}

customElements.define('hello-world', HelloWorld);
