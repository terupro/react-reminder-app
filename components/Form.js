import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const dispach = useDispatchTodos();

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    dispach({ type: "todo/add", todo: newTodo });

    setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
