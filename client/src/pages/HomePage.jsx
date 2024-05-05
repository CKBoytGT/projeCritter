import { FaRegHeart } from "react-icons/fa";

const HomePage = () => {
  // TODO: add critter to window
  return (
    <div className="flex justify-center items-center grow w-full py-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 sm:gap-8 max-w-[800px]">
        <div className="border-4 border-black rounded-xl aspect-square md:w-auto md:grow md:shrink-0 shadow-[0.3rem_0.3rem_#bbf7d0]">
          <div className="flex justify-between items-center gap-4 px-2 py-1 w-full rounded-t-md border-b-4 border-black bg-indigo-500 text-white">
            <p className="text-xl font-bold text-center">
              Your critter awaits!
            </p>
            <FaRegHeart className="size-6" />
          </div>
        </div>
        <div className="p-2 sm:p-0 max-w-[400px] md:max-w-[700px] text-center md:text-left">
          <h2 className="mb-2 text-3xl text-indigo-500 font-extrabold max-w-[400px] italic drop-shadow-[0.3rem_0.3rem_#bbf7d0]">
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
  );
};

export default HomePage;
