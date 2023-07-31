import useMove from "../hooks/useMove";

function SingIn() {
  const move = useMove();

  const goSignUp = () => {
    move("SignUp");
  };
  return (
    <div className="frame">
      <span>SignIn</span>
      <div className="flex flex-col gap-2">
        <input data-testid="email-input" placeholder="이메일" />
        <input data-testid="password-input" placeholder="비밀번호" />
        <button
          className="bg-orange-600"
          onClick={goSignUp}
          data-testid="signup-button"
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

export default SingIn;
