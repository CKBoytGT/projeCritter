import Button from "./ui/Button";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaChevronUp,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import EditTaskForm from "../components/EditTaskForm";
import Modal from "../components/ui/Modal";
import { UPDATE_TASK } from "../graphql/mutations/task.mutation";

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
      toast("Error moving task.", {
        style: {
          border: "1px solid #991b1b",
          borderRadius: "0",
          boxShadow: "none",
          background: "#fee2e2",
          color: "#991b1b",
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "500",
        },
      });
    }
  };

  return (
    // note: padding is on inner elements to create more clickable area
    <li className="mb-2 flex flex-col items-center justify-between rounded-md bg-indigo-100 transition-colors hover:bg-indigo-200 motion-reduce:transition-none md:flex-row md:items-stretch">
      {taskState !== "Backlog" && (
        <div className="flex w-full rounded-t-lg bg-indigo-200 md:w-auto md:rounded-l-lg md:rounded-tr-none">
          <Button
            style="icon"
            disabled={loading}
            onClick={() => handleMove("backward")}
            className="w-full text-indigo-800 md:text-black"
          >
            <FaChevronLeft className="hidden md:block" />
            <FaChevronUp className="block md:hidden" />
            <span className="ml-1 text-xs font-semibold uppercase md:sr-only">
              {`Move to ${
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
        className="grow p-2 text-center text-sm font-semibold leading-4 md:text-left md:font-medium"
        onClick={() => setModalOpen(true)}
      >
        {children}
      </button>
      {taskState !== "Done" && (
        <div className="flex w-full rounded-b-lg bg-indigo-200 md:w-auto md:rounded-r-lg md:rounded-bl-none">
          <Button
            style="icon"
            disabled={loading}
            onClick={() => handleMove()}
            className="w-full text-indigo-800 md:text-black"
          >
            <FaChevronRight className="hidden md:block" />
            <FaChevronDown className="block md:hidden" />
            <span className="ml-1 text-xs font-semibold uppercase md:sr-only">
              {`Move to ${
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
