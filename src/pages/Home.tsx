import useMove from "../hooks/useMove";

function Home() {
  const btnObj = [{ text: "SignIn" }, { text: "SignUp" }, { text: "Todo" }];
  const navigate = useMove();

  const pageHandler = (page: string) => {
    navigate(page);
  };

  return (
    <main className="frame">
      <div className="pt-4">나만의 ToDoList</div>
      <div className="pb-4 flex gap-5 mt-auto">
        {btnObj.map(({ text }) => (
          <button
            key={text}
            className="py-2 px-4 rounded-lg shadow-md bg-blue-300 hover:bg-sky-700"
            onClick={() => pageHandler(text)}
          >
            {text}
          </button>
        ))}
      </div>
    </main>
  );
}

export default Home;
