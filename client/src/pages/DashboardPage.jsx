import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/queries/project.query";
import Button from "../components/ui/Button";
import { FaPlus } from "react-icons/fa6";
import ProjectRow from "../components/ProjectRow";
import Modal from "../components/ui/Modal";
import AddProjectForm from "../components/AddProjectForm";

const DashboardPage = ({ userId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { data, loading, error } = useQuery(GET_PROJECTS);

  if (loading) {
    return (
      <div className="animate-pulse">
        <span className="sr-only">Loading dashboard...</span>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
          <div className="h-8 bg-indigo-100 rounded-full w-36 mb-2 sm:mb-0"></div>
          <div className="h-9 w-32 bg-indigo-100 rounded-lg"></div>
        </div>
        <div className="mx-auto w-full max-w-2xl">
          <div className="mb-2 rounded-full h-8 w-36 bg-indigo-100"></div>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl h-24 bg-indigo-100"></div>
            <div className="rounded-xl h-24 bg-indigo-100"></div>
            <div className="rounded-xl h-24 bg-indigo-100"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center grow h-full">
        <p className="border border-red-800 p-2 bg-red-100 text-sm text-red-800 text-center font-medium">
          <span className="font-semibold">
            Error getting projects for dashboard:{" "}
          </span>
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 ">
        <h2 className="mb-2 sm:mb-0 text-indigo-500 text-2xl font-bold">
          Dashboard
        </h2>
        <Button
          touchTargetSize="medium"
          onClick={() => setModalOpen(true)}
          className="mb-2 w-fit"
        >
          <FaPlus className="mr-1 shrink-0" />
          Add Project
        </Button>
      </div>
      <div className="mx-auto w-full max-w-2xl">
        <h3 className="mb-2 text-lg font-bold">Current Projects:</h3>
        {!data.projects || data?.projects?.length === 0 ? (
          <div className="p-4 rounded-xl text-center bg-indigo-50 font-medium">
            <p className="font-bold">No current projects to show!</p>
            <p>
              Get started by clicking the <strong>+ Add Project</strong> button.
            </p>
          </div>
        ) : (
          ""
        )}
        <table className="w-full">
          <tbody className="flex flex-col gap-4">
            {data?.projects?.map((project) => (
              <ProjectRow key={project._id} project={project} />
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        title={"Add Project"}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <AddProjectForm userId={userId} closeModal={setModalOpen} />
      </Modal>
    </>
  );
};

export default DashboardPage;
