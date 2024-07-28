import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_PROJECTS } from "../graphql/queries/project.query";
import Button from "../components/ui/Button";
import { FaPlus } from "react-icons/fa6";
import ProjectRow from "../components/ProjectRow";
import Modal from "../components/ui/Modal";
import DashboardPageSkeleton from "../components/ui/DashboardPageSkeleton";
import AddProjectForm from "../components/AddProjectForm";

const DashboardPage = ({ userId }) => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const { data, loading, error } = useQuery(GET_PROJECTS);

  // move user to expiration notice if login expired
  useEffect(() => {
    if (error && error.message === "Unauthorized.") {
      navigate("/expired");
      window.location.reload();
    }
  });

  if (loading) {
    return <DashboardPageSkeleton />;
  }

  if (error) {
    return (
      <div className="flex h-full grow items-center justify-center">
        <p className="border border-red-800 bg-red-100 p-2 text-center text-sm font-medium text-red-800">
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
      <div className="mb-2 flex flex-col items-center justify-between sm:flex-row">
        <h2 className="text-indigo-650 mb-2 text-2xl font-extrabold sm:mb-0">
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
        <h3 className="mb-2 text-xl font-bold drop-shadow-[0.2rem_0.2rem_#bbf7d0]">
          Current Projects:
        </h3>
        {!data.projects || data?.projects?.length === 0 ? (
          <div className="rounded-xl bg-indigo-50 p-4 text-center font-medium">
            <p className="font-bold">No current projects to show!</p>
            <p>
              Get started by clicking the <strong>+ Add Project</strong> button.
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="flex w-full flex-col gap-3">
          {data?.projects?.map((project) => (
            <ProjectRow key={project._id} project={project} />
          ))}
        </div>
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
