import { FadeLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
      <h3>잠시만 기다려주세요.</h3>
      <FadeLoader />
    </div>
  );
};

export default LoadingPage;
