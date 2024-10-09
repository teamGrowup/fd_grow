import LoginForm from "../../../components/auth/LoginForm";

export default function LoginScreen() {
  return (
    <div className="px-3">
      <h2 className="text-2xl font-bold text-center my-[60px]">로그인</h2>

      <LoginForm />
    </div>
  );
}
