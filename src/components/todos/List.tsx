import { Todo } from "../../API/todoApi";

interface Props {
  id: number;
  todo: string;
  setList: Function;
  fixHandler(id: number): void;
}

function List({ id, todo, fixHandler, setList }: Props) {
  const CallTodo = new Todo(localStorage.getItem("token")!);

  const deleteHandler = () => {
    CallTodo.deleteTodo(id).then((res) => {
      CallTodo.getTodo().then((res) => {
        setList(res.data);
      });
    });
  };

  return (
    <div className="w-full">
      <label className="w-2/3 border-2 border-indigo-100">
        <span className="w-2/3">{todo}</span>
      </label>
      <button
        className="btn"
        onClick={() => fixHandler(id)}
        data-testid="modify-button"
      >
        수정
      </button>
      <button
        className="btn"
        onClick={deleteHandler}
        data-testid="delete-button"
      >
        삭제
      </button>
    </div>
  );
}

export default List;
