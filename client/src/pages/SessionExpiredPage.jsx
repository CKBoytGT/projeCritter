import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SessionExpiredPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, "5000");
  });

  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <h2 className="text-indigo-650 mb-2 max-w-[400px] text-3xl font-extrabold italic drop-shadow-[0.3rem_0.3rem_#bbf7d0]">
        Login expired!
      </h2>
      <p className="font-medium">You will be redirected in five seconds.</p>
      <p>
        <a href="/" className="font-bold uppercase hover:underline">
          « Back to homepage
        </a>
      </p>
    </div>
  );
};

export default SessionExpiredPage;
