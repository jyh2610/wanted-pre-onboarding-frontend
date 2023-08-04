import { useState } from "react";
import { Todo } from "../../API/todoApi";

function TodoForm() {
  const [input, setInput] = useState("");
  const token: string = localStorage.getItem("token")!;
  const todo = new Todo(token);
  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    todo.createTodo(input).then(() => todo.getTodo());
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={formHandler}
        value={input}
        data-testid="new-todo-input"
      />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
}

export default TodoForm;
