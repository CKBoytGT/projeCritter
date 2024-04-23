import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../graphql/queries/project.query";
import Button from "../components/ui/Button";
import ButtonIconOnly from "../components/ui/ButtonIconOnly";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { FaPlus } from "react-icons/fa6";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Critter from "../components/Critter";
import TaskColumn from "../components/TaskColumn";
import Modal from "../components/ui/Modal";
import AddTaskForm from "../components/AddTaskForm";

const ProjectPage = () => {
  const { id } = useParams();

  const [modalOpen, setModalOpen] = useState(false);
  const [critterOpen, setCritterOpen] = useState(true); // for hiding critter on mobile view

  const { loading, data } = useQuery(GET_PROJECT, {
    variables: { projectId: id },
  });

  // critter age calculation
  const createdDate = new Date(data?.project.createdAt);
  const today = new Date();
  const critterAge = Math.floor(
    (today.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  //TODO: Mood function once tasks can populate
  let mood = "Content";
  // idea: check if completed column has any tasks before changing to joyful mood; if all columns empty, should be content

  return (
    <>
      {/* TODO: replace with skeleton */}
      {loading && <LoadingSpinner />}
      {!loading && data && (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-2 w-full">
            <h2 className="text-2xl font-bold mb-2 text-indigo-500">
              {data?.project.projectName}
            </h2>
            <Button
              style="primary"
              onClick={() => setModalOpen(true)}
              className="w-fit"
            >
              <FaPlus className="mr-1" />
              Add Task
            </Button>
            <Modal
              title={"Add Task"}
              open={modalOpen}
              onClose={() => setModalOpen(false)}
            >
              <AddTaskForm
                projectId={id}
                closeModal={() => setModalOpen(false)}
              />
            </Modal>
          </div>
          <div className="flex flex-col md:flex-row md:items-stretch md:grow gap-4 md:max-h-[36rem]">
            {/* critter cointainer */}
            <div className="flex flex-col justify-between items-center md:grow md:basis-1/5 gap-4 w-full rounded-xl border-4 border-indigo-100 px-4 py-4 sm:px-2 sm:py-1 bg-indigo-100">
              <div
                className={`flex flex-row w-full ${
                  critterOpen ? "justify-end" : "justify-between"
                } items-center`}
              >
                <h3 className="w-full text-lg font-bold">
                  {data?.project.critterName}
                </h3>
                <ButtonIconOnly
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
                </ButtonIconOnly>
              </div>
              <div
                className={`flex grow w-full justify-center items-center md:p-4 ${
                  !critterOpen && "hidden"
                }`}
              >
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <Critter species={data?.project.critterSpecies} mood={mood} />
                  <ul>
                    <li>
                      <span className="font-semibold">Age:</span> {critterAge}{" "}
                      {critterAge === 1 ? "day" : "days"}
                    </li>
                    <li>
                      <span className="font-semibold">Mood:</span> {mood}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-stretch md:grow md:basis-4/5 gap-4 w-full">
              <TaskColumn projectId={id} columnState="Backlog" />
              <TaskColumn projectId={id} columnState="Ready" />
              <TaskColumn projectId={id} columnState="In Progress" />
              <TaskColumn projectId={id} columnState="Done" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectPage;
