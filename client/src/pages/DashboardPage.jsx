import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/queries/project.query";
import Button from "../components/ui/Button";
import { FaPlus } from "react-icons/fa6";
import ProjectRow from "../components/ProjectRow";
import Modal from "../components/ui/Modal";
import DashboardPageSkeleton from "../components/ui/DashboardPageSkeleton";
import AddProjectForm from "../components/AddProjectForm";

const DashboardPage = ({ userId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { data, loading, error } = useQuery(GET_PROJECTS);

  if (loading) {
    return <DashboardPageSkeleton />;
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
