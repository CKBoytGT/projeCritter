import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/queries/project.query";
import Button from "../components/ui/Button";
import { FaPlus } from "react-icons/fa6";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ProjectRow from "../components/ProjectRow";
import Modal from "../components/ui/Modal";
import AddProjectForm from "../components/AddProjectForm";

const DashboardPage = ({ userData }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { data, loading, error } = useQuery(GET_PROJECTS);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center text-indigo-500">
        <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
        <Button
          touchTargetSize="medium"
          onClick={() => setModalOpen(true)}
          className="w-fit mb-2"
        >
          <FaPlus className="mr-1 shrink-0" />
          Add Project
        </Button>
      </div>
      <div className="mx-auto w-full max-w-2xl">
        <h3 className="text-lg font-bold mb-2">Current Projects:</h3>
        {error && (
          <p className="mx-auto border border-red-800 p-2 bg-red-100 text-sm text-red-800">
            Error: {error.message}
          </p>
        )}
        {loading && <LoadingSpinner />}
        {!loading && data.projects.length === 0 && (
          <p className="flex justify-center items-center grow w-full h-full text-center">
            No current projects to show.
          </p>
        )}
        <table className="w-full">
          <tbody className="flex flex-col gap-4">
            {!loading &&
              data.projects.map((project) => (
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
        <AddProjectForm userData={userData} closeModal={setModalOpen} />
      </Modal>
    </>
  );
};

export default DashboardPage;
