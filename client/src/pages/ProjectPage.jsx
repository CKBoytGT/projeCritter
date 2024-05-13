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
      (today.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
    );
  };

  // move user back to dashboard if they delete a project from the project's page
  useEffect(() => {
    if (!loading && data.project === null) {
      navigate("/dashboard");
    }
  });

  if (loading) {
    return <ProjectPageSkeleton />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center grow h-full">
        <p className="border border-red-800 p-2 bg-red-100 text-sm text-red-800 text-center font-medium">
          <span className="font-semibold">Error getting project: </span>
          {error.message}
        </p>
      </div>
    );
  }

  // prevent loading content if there's no data - will redirect to dashboard once loaded
  if (!loading && data.project === null) {
    return;
  }

  return (
    <>
      {/* top row */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 w-full">
        <h2 className="text-2xl font-extrabold mb-2 sm:mb-0 text-indigo-500 text-center sm:text-left">
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
      <div className="flex flex-col md:flex-row md:items-stretch md:grow gap-4 md:max-h-[36rem]">
        {/* critter cointainer */}
        <div className="flex flex-col justify-between items-center md:grow md:basis-1/5 gap-4 w-full md:min-w-[210px] rounded-xl border-4 border-indigo-100 px-4 py-4 sm:px-2 sm:py-1 bg-indigo-100">
          <div
            className={`flex flex-row w-full ${
              critterOpen ? "justify-end" : "justify-between"
            } items-center`}
          >
            <h3 className="w-full text-xl font-bold">
              {data?.project.critterName}
            </h3>
            <Button
              style="icon"
              className="shrink-0 md:hidden text-2xl"
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
            className={`grow w-full justify-center items-center md:p-4 ${
              !critterOpen ? "hidden md:flex" : "flex"
            }`}
          >
            <div className="flex flex-col justify-center items-start gap-2 w-full">
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
                    <span className="text-red-600 font-semibold">ERROR</span>
                  ) : moodData?.critterMood.mood === "Wiped-Out" ? (
                    <span className="text-red-600 font-semibold">
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
        <div className="flex flex-col md:flex-row md:items-stretch md:grow md:basis-4/5 gap-4 md:pr-[0.29rem] md:pb-[0.29rem] w-full md:overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-transparent">
          <TaskColumn projectId={id} columnState="Backlog" />
          <TaskColumn projectId={id} columnState="Ready" />
          <TaskColumn projectId={id} columnState="In Progress" />
          <TaskColumn projectId={id} columnState="Done" />
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
