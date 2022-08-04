import React, { useState } from "react";

export const Item = ({ todo, complete, updateTodo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);

  const editMode = () => {
    const newTodo = {
      ...todo,
      editing: !todo.editing,
    };
    updateTodo(newTodo);
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      content: editingContent,
      editing: !todo.editing,
    };
    updateTodo(newTodo);
  };

  return (
    <div key={todo.id}>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        <span onDoubleClick={editMode}>
          {todo.editing ? (
            <input
              type="text"
              placeholder="入力してね"
              value={editingContent}
              onChange={(e) => setEditingContent(e.target.value)}
            />
          ) : (
            todo.content
          )}
        </span>
      </form>
      <button onClick={() => complete(todo.id)}>完了</button>
    </div>
  );
};
