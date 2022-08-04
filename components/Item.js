import React, { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";

export const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);

  const dispach = useDispatchTodos();

  const editMode = () => {
    const newTodo = {
      ...todo,
      editing: !todo.editing,
    };
    dispach({ type: "todo/update", todo: newTodo });
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      content: editingContent,
      editing: !todo.editing,
    };
    dispach({ type: "todo/update", todo: newTodo });
  };

  const complete = (todo) => {
    dispach({ type: "todo/delete", todo: todo });
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
      <button onClick={() => complete(todo)}>完了</button>
    </div>
  );
};
