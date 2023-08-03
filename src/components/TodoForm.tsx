import { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");
  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form>
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
