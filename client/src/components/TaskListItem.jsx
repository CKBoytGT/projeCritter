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
    <li className="flex justify-between items-center mb-2 p-2 rounded-md bg-indigo-100 hover:bg-indigo-200 transition-colors motion-reduce:transition-none">
      <button
        className="text-sm font-medium leading-4 text-left"
        onClick={() => setModalOpen(true)}
      >
        {children}
      </button>
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
      <div className="flex flex-row items-center shrink-0">
        {taskState !== "Backlog" && (
          <Button
            style="icon"
            disabled={loading}
            onClick={() => handleMove("backward")}
          >
            <FaChevronLeft className="hidden md:block" />
            <FaChevronUp className="block md:hidden" />
            <span className="sr-only">Move Task Backward</span>
          </Button>
        )}
        {taskState !== "Done" && (
          <Button style="icon" disabled={loading} onClick={() => handleMove()}>
            <FaChevronRight className="hidden md:block" />
            <FaChevronDown className="block md:hidden" />
            <span className="sr-only">Move Task Forward</span>
          </Button>
        )}
      </div>
    </li>
  );
};

export default TaskListItem;
