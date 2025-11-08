import { LitElement, html, css } from 'lit';

/**
 * TODOリストのデモ
 * 配列のレンダリングと動的なリスト操作
 */
class TodoList extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .todo-container {
      background: #f5f5f5;
      padding: 20px;
      border-radius: 8px;
    }

    .add-todo {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    input {
      flex: 1;
      padding: 12px;
      font-size: 1em;
      border: 2px solid #ddd;
      border-radius: 6px;
      transition: border-color 0.3s;
    }

    input:focus {
      outline: none;
      border-color: #667eea;
    }

    button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 1em;
      border-radius: 6px;
      cursor: pointer;
      transition: transform 0.2s;
    }

    button:hover {
      transform: translateY(-2px);
    }

    .todo-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .todo-item {
      background: white;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }

    .todo-item:hover {
      transform: translateX(5px);
    }

    .todo-item.completed {
      opacity: 0.6;
      text-decoration: line-through;
    }

    .todo-text {
      flex: 1;
    }

    .todo-actions {
      display: flex;
      gap: 10px;
    }

    .todo-actions button {
      padding: 6px 12px;
      font-size: 0.9em;
    }

    .complete-btn {
      background: #27ae60;
    }

    .delete-btn {
      background: #e74c3c;
    }

    .empty-state {
      text-align: center;
      padding: 40px;
      color: #999;
    }
  `;

  static properties = {
    todos: { type: Array },
    newTodoText: { type: String }
  };

  constructor() {
    super();
    this.todos = [
      { id: 1, text: 'Lit について学ぶ', completed: true },
      { id: 2, text: 'コンポーネントを作成する', completed: false },
      { id: 3, text: 'アプリケーションを構築する', completed: false }
    ];
    this.newTodoText = '';
  }

  _handleInput(e) {
    this.newTodoText = e.target.value;
  }

  _addTodo() {
    if (this.newTodoText.trim()) {
      this.todos = [
        ...this.todos,
        {
          id: Date.now(),
          text: this.newTodoText,
          completed: false
        }
      ];
      this.newTodoText = '';
    }
  }

  _toggleComplete(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  _deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this._addTodo();
    }
  }

  render() {
    return html`
      <div class="todo-container">
        <div class="add-todo">
          <input
            type="text"
            placeholder="新しいタスクを入力..."
            .value=${this.newTodoText}
            @input=${this._handleInput}
            @keypress=${this._handleKeyPress}
          />
          <button @click=${this._addTodo}>➕ 追加</button>
        </div>

        ${this.todos.length > 0 ? html`
          <ul class="todo-list">
            ${this.todos.map(todo => html`
              <li class="todo-item ${todo.completed ? 'completed' : ''}">
                <span class="todo-text">
                  ${todo.completed ? '✅' : '⭕'} ${todo.text}
                </span>
                <div class="todo-actions">
                  <button
                    class="complete-btn"
                    @click=${() => this._toggleComplete(todo.id)}
                  >
                    ${todo.completed ? '↩️ 戻す' : '✓ 完了'}
                  </button>
                  <button
                    class="delete-btn"
                    @click=${() => this._deleteTodo(todo.id)}
                  >
                    🗑️ 削除
                  </button>
                </div>
              </li>
            `)}
          </ul>
        ` : html`
          <div class="empty-state">
            <p>📝 タスクがありません。上から追加してください！</p>
          </div>
        `}
      </div>
    `;
  }
}

customElements.define('todo-list', TodoList);
