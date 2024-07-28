const AboutPage = () => {
  // TODO: more detailed instructions
  return (
    <div className="w-full">
      <h2 className="mb-2 text-indigo-500 text-2xl font-extrabold">About</h2>
      <div className="mx-auto w-fit">
        <h3 className="mb-2 text-xl font-bold drop-shadow-[0.2rem_0.2rem_#bbf7d0]">
          What is projeCritter?
        </h3>
        <p className="max-w-[700px]">
          projeCritter is a project tracking app combined with a virtual pet.
          Each project you create comes with a {'"'}critter{'"'} that changes
          its mood based on the status of your project. If you have too many
          tasks in certain categories, your critter will get increasingly
          overwhelmed—just like you must be!—until it becomes <em>wiped out</em>
          . To improve your critter{"'"}s mood, you must move tasks in to the{" "}
          {'"'}Done{'"'} column or otherwise get them off your plate.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
