import Button from "../components/ui/Button";

const ProjectPage = () => {
  return (
    <>
      {/* TODO: populate name from project id */}
      <h2 className="text-2xl font-bold mb-2">Project Name</h2>
      <div className="flex flex-col md:flex-row md:items-stretch md:grow gap-4 md:max-h-[40rem]">
        <div className="flex flex-col md:grow md:basis-1/5 gap-4 w-full">
          <div className="rounded-xl">Critter Goes Here</div>
          <Button>Test</Button>
        </div>
        <div className="flex flex-col md:flex-row md:items-stretch md:grow md:basis-4/5 gap-4 w-full">
          <div className="border-4 border-black rounded-xl w-full grow">
            test
          </div>
          <div className="border-4 border-black rounded-xl w-full grow">
            test
          </div>
          <div className="border-4 border-black rounded-xl w-full grow">
            test
          </div>
          <div className="border-4 border-black rounded-xl w-full grow">
            test
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
