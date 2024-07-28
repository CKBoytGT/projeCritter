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
    <div className="flex flex-col justify-center items-center grow w-full h-full">
      <h2 className="mb-2 text-3xl text-indigo-650 font-extrabold max-w-[400px] italic drop-shadow-[0.3rem_0.3rem_#bbf7d0]">
        Login expired!
      </h2>
      <p className="font-medium">You will be redirected in five seconds.</p>
      <p>
        <a href="/" className="font-bold hover:underline uppercase">
          « Back to homepage
        </a>
      </p>
    </div>
  );
};

export default SessionExpiredPage;
