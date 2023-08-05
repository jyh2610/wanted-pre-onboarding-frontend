import { SetStateAction, useState } from "react";
import { Todo } from "../../API/todoApi";
import { TodoInfo } from "../../pages/TodoPage";

interface Props {
  fixHandler: (id: number) => void;
  setList: Function;
  item: TodoInfo;
}
function TodoFix({ fixHandler, item, setList }: Props) {
  const [updateInput, setUpdateInput] = useState<string>(item.todo);
  const token: string = localStorage.getItem("token")!;
  const todo = new Todo(token);

  const inputHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setUpdateInput(e.target.value);
  };

  const fixTodo = () => {
    todo.updateTodo(updateInput, item.id, item.isCompleted).then((res) => {
      todo.getTodo().then((res) => {
        setList(res.data);
        cancelUpdate();
      });
    });
  };

  const cancelUpdate = () => {
    fixHandler(0);
  };

  return (
    <>
      <input
        onChange={inputHandler}
        value={updateInput}
        className="Input"
        data-testid="modify-input"
      />
      <button className="btn" data-testid="submit-button" onClick={fixTodo}>
        제출
      </button>
      <button
        className="btn"
        data-testid="cancel-button"
        onClick={cancelUpdate}
      >
        취소
      </button>
    </>
  );
}

export default TodoFix;
