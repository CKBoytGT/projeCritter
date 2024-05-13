import {
  FaChevronUp,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_TASK } from "../graphql/mutations/task.mutation";
import Modal from "../components/ui/Modal";
import EditTaskForm from "../components/EditTaskForm";
import Button from "./ui/Button";

const TaskListItem = ({ taskId, initTaskState, children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [taskState, setTaskState] = useState(initTaskState);

  const [updateTask, { loading }] = useMutation(UPDATE_TASK, {
    refetchQueries: ["GetTasks", "GetMood"],
  });

  const handleMove = async (direction) => {
    try {
      let newState;
      if (direction === "backward") {
        if (taskState === "Ready") {
          newState = "Backlog";
        } else if (taskState === "In Progress") {
          newState = "Ready";
        } else if (taskState === "Done") {
          newState = "In Progress";
        }
      } else {
        if (taskState === "Backlog") {
          newState = "Ready";
        } else if (taskState === "Ready") {
          newState = "In Progress";
        } else if (taskState === "In Progress") {
          newState = "Done";
        }
      }

      await updateTask({
        variables: { input: { _id: taskId, taskState: newState } },
      });

      setTaskState(newState);
    } catch (err) {
      console.error("Error moving task: ", err);
      // TODO: toast?
    }
  };

  return (
    // note: padding is on inner elements to create more clickable area
    <li className="flex flex-col md:flex-row justify-between items-center md:items-stretch mb-2 rounded-md bg-indigo-100 hover:bg-indigo-200 transition-colors motion-reduce:transition-none">
      {taskState !== "Backlog" && (
        <div className="flex w-full md:w-auto rounded-t-lg md:rounded-t-none md:rounded-l-lg bg-indigo-200">
          <Button
            style="icon"
            disabled={loading}
            onClick={() => handleMove("backward")}
            className="w-full"
          >
            <FaChevronLeft className="hidden md:block" />
            <FaChevronUp className="block md:hidden" />
            <span className="sr-only">
              {`Move task to ${
                taskState === "Ready"
                  ? "Backlog"
                  : taskState === "In Progress"
                  ? "Ready"
                  : "In Progress"
              }`}
            </span>
          </Button>
        </div>
      )}
      <button
        className="grow p-2 text-sm text-left font-medium leading-4"
        onClick={() => setModalOpen(true)}
      >
        {children}
      </button>
      {taskState !== "Done" && (
        <div className="flex w-full md:w-auto rounded-b-lg md:rounded-b-none md:rounded-r-lg bg-indigo-200">
          <Button
            style="icon"
            disabled={loading}
            onClick={() => handleMove()}
            className="w-full"
          >
            <FaChevronRight className="hidden md:block" />
            <FaChevronDown className="block md:hidden" />
            <span className="sr-only">
              {`Move task to ${
                taskState === "Backlog"
                  ? "Ready"
                  : taskState === "Ready"
                  ? "In Progress"
                  : "Done"
              }`}
            </span>
          </Button>
        </div>
      )}
      <Modal
        title="Edit Task"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <EditTaskForm
          taskId={taskId}
          initTaskBody={children}
          initTaskState={taskState}
          closeModal={() => setModalOpen(false)}
        />
      </Modal>
    </li>
  );
};

export default TaskListItem;
