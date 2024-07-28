import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../graphql/queries/project.query";
import { GET_MOOD } from "../graphql/queries/project.query";
import Button from "../components/ui/Button";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import Modal from "../components/ui/Modal";
import AddTaskForm from "../components/AddTaskForm";
import EditProjectForm from "../components/EditProjectForm";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Critter from "../components/Critter";
import TaskColumn from "../components/TaskColumn";
import ProjectPageSkeleton from "../components/ui/ProjectPageSkeleton";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [critterOpen, setCritterOpen] = useState(true); // for hiding critter on mobile view

  const { loading, data, error } = useQuery(GET_PROJECT, {
    variables: { projectId: id },
  });
  const {
    loading: moodLoading,
    data: moodData,
    error: moodError,
  } = useQuery(GET_MOOD, {
    variables: { projectId: id },
  });

  // critter age calculation
  const calcAge = (date) => {
    const createdDate = new Date(date);
    const today = new Date();
    return Math.floor(
      (today.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24),
    );
  };

  // move user to expiration notice if login expired
  useEffect(() => {
    if (error && error.message === "Unauthorized.") {
      navigate("/expired");
      window.location.reload();
    }
  });

  // move user back to dashboard if they delete a project from the project's page
  useEffect(() => {
    if (!loading && data?.project === null) {
      navigate("/dashboard");
    }
  });

  if (loading) {
    return <ProjectPageSkeleton />;
  } else if (error) {
    return (
      <div className="flex h-full grow items-center justify-center">
        <p className="border border-red-800 bg-red-100 p-2 text-center text-sm font-medium text-red-800">
          <span className="font-bold">ERROR: </span>
          {error.message}{" "}
          <a
            href="/dashboard"
            className="mt-1 block text-xs font-bold uppercase hover:underline"
          >
            « Return to dashboard
          </a>
        </p>
      </div>
    );
  }
  // prevent loading content if there's no data - will redirect to dashboard once loaded
  else if (!loading && data?.project === null) {
    return;
  } else {
    return (
      <>
        {/* top row */}
        <div className="mb-2 flex w-full flex-col items-center justify-between sm:flex-row">
          <h2 className="text-indigo-650 mb-2 text-center text-2xl font-extrabold sm:mb-0 sm:text-left">
            {data?.project.projectName}
          </h2>
          <div className="flex gap-4">
            <Button
              touchTargetSize="medium"
              onClick={() => setAddModalOpen(true)}
              className="w-fit"
            >
              <FaPlus className="mr-1" />
              Add Task
            </Button>
            <Modal
              title={"Add Task"}
              open={addModalOpen}
              onClose={() => setAddModalOpen(false)}
            >
              <AddTaskForm
                projectId={id}
                closeModal={() => setAddModalOpen(false)}
              />
            </Modal>
            <Button
              touchTargetSize="medium"
              onClick={() => setEditModalOpen(true)}
              className="w-fit"
            >
              <FaEdit className="mr-1" />
              Edit Project
            </Button>
            <Modal
              title={"Edit Project"}
              open={editModalOpen}
              onClose={() => setEditModalOpen(false)}
            >
              <EditProjectForm
                project={{
                  _id: id,
                  projectName: data?.project.projectName,
                  critterName: data?.project.critterName,
                  critterSpecies: data?.project.critterSpecies,
                  createdAt: data?.project.createdAt,
                }}
                closeModal={setEditModalOpen}
                page="project"
              />
            </Modal>
          </div>
        </div>
        {/* main content */}
        <div className="flex flex-col gap-4 md:max-h-[36rem] md:grow md:flex-row md:items-stretch">
          {/* critter cointainer */}
          <div className="flex w-full flex-col items-center justify-between gap-4 rounded-xl border-4 border-indigo-100 bg-indigo-100 px-4 py-4 sm:px-2 sm:py-1 md:min-w-[210px] md:grow md:basis-1/5">
            <div
              className={`flex w-full flex-row ${
                critterOpen ? "justify-end" : "justify-between"
              } items-center`}
            >
              <h3 className="w-full text-xl font-bold">
                {data?.project.critterName}
              </h3>
              <Button
                style="icon"
                className="shrink-0 text-2xl md:hidden"
                onClick={() =>
                  setCritterOpen((prevCritterOpen) => !prevCritterOpen)
                }
              >
                {critterOpen ? (
                  <>
                    <FaRegEyeSlash className="fill-indigo-600" />
                    <span className="sr-only">Close Critter View</span>
                  </>
                ) : (
                  <>
                    <FaRegEye className="fill-indigo-600" />
                    <span className="sr-only">Open Critter View</span>
                  </>
                )}
              </Button>
            </div>
            <div
              className={`w-full grow items-center justify-center md:p-4 ${
                !critterOpen ? "hidden md:flex" : "flex"
              }`}
            >
              <div className="flex w-full flex-col items-start justify-center gap-2">
                <Critter
                  species={data?.project.critterSpecies}
                  mood={
                    moodLoading
                      ? "Content"
                      : moodError
                        ? "Content"
                        : moodData?.critterMood.mood
                  }
                />
                <ul>
                  <li>
                    <span className="font-semibold">Age:</span>{" "}
                    {calcAge(data?.project.createdAt)}{" "}
                    {calcAge(data?.project.createdAt) === 1 ? "day" : "days"}
                  </li>
                  <li>
                    <span className="font-semibold">Mood:</span>{" "}
                    {moodLoading ? (
                      "Loading..."
                    ) : moodError ? (
                      <span className="font-semibold text-red-600">ERROR</span>
                    ) : moodData?.critterMood.mood === "Wiped-Out" ? (
                      <span className="font-semibold text-red-600">
                        Wiped Out!
                      </span>
                    ) : (
                      moodData?.critterMood.mood
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* task container */}
          <div className="scrollbar-thin scrollbar-thumb-indigo-650 scrollbar-track-transparent flex w-full flex-col gap-4 md:grow md:basis-4/5 md:flex-row md:items-stretch md:overflow-x-auto md:pb-[0.29rem] md:pr-[0.29rem]">
            <TaskColumn projectId={id} columnState="Backlog" />
            <TaskColumn projectId={id} columnState="Ready" />
            <TaskColumn projectId={id} columnState="In Progress" />
            <TaskColumn projectId={id} columnState="Done" />
          </div>
        </div>
      </>
    );
  }
};

export default ProjectPage;
