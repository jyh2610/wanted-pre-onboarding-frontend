import { useState } from "react";
import TodoFix from "./TodoFix";
import List from "./List";
import { TodoInfo } from "../../pages/TodoPage";
import { Todo } from "../../API/todoApi";

function TodoList({ list, setList }: { list: TodoInfo[]; setList: Function }) {
  const [isSelected, setIsSelected] = useState<number>(0);

  const fixHandler = (id: number) => {
    setIsSelected(id);
  };
  const checkHandler = (item: TodoInfo) => {
    const gettodo = new Todo(localStorage.getItem("token")!);
    const { todo, id, isCompleted } = item;
    gettodo.updateTodo(todo, id, !isCompleted).then((res) => {
      gettodo.getTodo().then((res) => {
        setList(res.data);
      });
    });
  };

  return (
    <ul className="w-2/3">
      {list.map((item) => {
        return (
          <li className="flex">
            <input
              checked={item.isCompleted ? true : false}
              onChange={() => checkHandler(item)}
              type="checkbox"
            />
            {isSelected === item.id ? (
              <TodoFix item={item} fixHandler={fixHandler} setList={setList} />
            ) : (
              <List
                key={item.id}
                fixHandler={fixHandler}
                id={item.id}
                todo={item.todo}
                setList={setList}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
