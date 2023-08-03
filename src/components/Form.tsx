import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sign } from "../API/api";

interface FormState {
  "email-input": string;
  "password-input": string;
}

function Form({ type }: { type: string }) {
  const signForm = new Sign();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    "email-input": "",
    "password-input": "",
  });
  const emailVaild = form["email-input"].includes("@");
  const passwordVaild = form["password-input"].length >= 8;
  const isValid = !(emailVaild && passwordVaild);
  const FormValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const testId = event.target.getAttribute("data-testid");
    setForm({
      ...form,
      [testId!]: event.target.value,
    });
  };

  const postData = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (type === "in") {
      signForm
        .signin(form["email-input"], form["password-input"])
        .then((res) => {
          if (res) {
            localStorage.setItem("token", res.data.access_token);
            alert("로그인 성공");
            navigate("/todo");
          }
        });
    }
    if (type === "up") {
      signForm
        .signup(form["email-input"], form["password-input"])
        .then((res) => {
          if (res) {
            alert("회원가입 완료");
            navigate("/signin");
          }
        });
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    token && navigate("/todo");
  }, [navigate]);
  return (
    <form className="flex flex-col gap-2" onSubmit={postData}>
      <input
        value={form["email-input"]}
        onChange={FormValueHandler}
        data-testid="email-input"
        placeholder="이메일"
      />
      <input
        value={form["password-input"]}
        onChange={FormValueHandler}
        data-testid="password-input"
        placeholder="비밀번호"
      />
      <button
        disabled={isValid}
        className="bg-orange-600"
        data-testid="signup-button"
      >
        {type === "up" ? "회원가입" : "로그인"}
      </button>
    </form>
  );
}

export default Form;
