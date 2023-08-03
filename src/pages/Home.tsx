import { useNavigate } from "react-router-dom";
function Home() {
  const btnObj = [{ text: "signin" }, { text: "signup" }, { text: "todo" }];
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const pageHandler = (page: string) => {
    if (token) {
      navigate("/todo");
    } else if (!token) {
      navigate(`/${page}`);
      page === "todo" && navigate("/signin");
    }
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
