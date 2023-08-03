import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

  const FormValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const testId = event.target.getAttribute("data-testid");
    setForm({
      ...form,
      [testId!]: event.target.value,
    });
  };

  const postData = () => {
    if (type === "in") {
      signForm
        .signin(form["email-input"], form["password-input"])
        .then((res) => {
          if (res) {
            localStorage.setItem("token", res.data.access_token);
            navigate("/todo");
          }
        });
    }
    if (type === "up") {
      signForm
        .signup(form["email-input"], form["password-input"])
        .then((res) => {
          if (res) {
            navigate("/signin");
          }
        });
    }
  };

  return (
    <div className="flex flex-col gap-2">
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
        className="bg-orange-600"
        onClick={postData}
        data-testid="signup-button"
      >
        {type === "up" ? "회원가입" : "로그인"}
      </button>
    </div>
  );
}

export default Form;
