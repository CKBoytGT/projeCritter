import { FaRegHeart } from "react-icons/fa";
import CritterHead from "../components/CritterHead";

const HomePage = ({ loadingAuth, userName }) => {
  let randomNum = Math.ceil(Math.random() * 3);

  return (
    <>
      {userName && (
        <div className="mx-auto w-fit rounded-xl bg-emerald-100 p-2 text-center text-sm font-medium">
          <p>
            Welcome back, {userName}!{" "}
            <a
              href="/dashboard"
              className="block font-bold uppercase hover:underline sm:inline"
            >
              Go to dashboard »
            </a>
          </p>
        </div>
      )}
      <div className="flex w-full grow items-center justify-center py-4">
        <div className="flex max-w-[800px] flex-col items-center justify-center gap-2 sm:gap-8 lg:flex-row">
          {/* critter window */}
          <div className="size-64 2xl:size-72 shrink-0 grow rounded-xl border-4 border-black shadow-[0.5rem_0.5rem_#bbf7d0]">
            <div className="bg-indigo-650 flex w-full items-center justify-between gap-4 rounded-t-md border-b-4 border-black px-2 py-1 text-white">
              <p className="text-center text-xl font-bold">Your Critter</p>
              <FaRegHeart className="size-6" />
            </div>
            <div className="p-2 lg:p-6">
              <CritterHead
                species={loadingAuth ? 0 : randomNum}
                mood="Chipper"
              />
            </div>
          </div>
          {/* text */}
          <div className="max-w-[400px] p-2 text-center sm:p-0 lg:max-w-[700px] lg:text-left">
            <h2 className="text-indigo-650 mb-2 max-w-[400px] text-3xl 2xl:text-[2.125rem] 2xl:leading-9 font-extrabold italic drop-shadow-[0.3rem_0.3rem_#bbf7d0]">
              Meet your new accountability buddy!
            </h2>
            <p className="font-medium">
              Tired of plain, boring productivity apps? projeCritter presents a
              new approach to tracking tasks: an interactive virtual pet that
              visually reacts to the health of your project!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
