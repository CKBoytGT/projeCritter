import { useState } from "react";
import Button from "./ui/Button";
import InputField from "./ui/InputField";
import { useMutation } from "@apollo/client";
import { DELETE_TASK, UPDATE_TASK } from "../graphql/mutations/task.mutation";

const EditTaskForm = ({ taskId, initTaskBody, initTaskState, closeModal }) => {
  const [taskData, setTaskData] = useState({
    _id: taskId,
    taskBody: initTaskBody,
    taskState: initTaskState,
  });
  const [warning, setWarning] = useState("");

  // TODO: change when relationships are added
  const [updateTask, { loading: updateLoading }] = useMutation(UPDATE_TASK, {
    refetchQueries: ["GetTasks"],
  });
  const [deleteTask, { loading: deleteLoading }] = useMutation(DELETE_TASK, {
    refetchQueries: ["GetTasks"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setWarning("");

      await updateTask({ variables: { input: taskData } });

      closeModal(false);
    } catch (err) {
      console.error("Error updating task: ", err);
      setWarning(err.message);
    }
  };

  const handleDelete = async () => {
    console.log(taskId);
    try {
      setWarning("");

      await deleteTask({ variables: { taskId: taskId } });

      closeModal(false);
    } catch (err) {
      console.error("Error deleting project: ", err);
      setWarning(err.message);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputField
        label="Task Description"
        id={`${taskId}-taskBody`}
        name="taskBody"
        value={taskData.taskBody}
        onChange={handleChange}
      />
      <InputField
        label="Task Status"
        inputType="select"
        id={`${taskId}-taskState`}
        name="taskState"
        value={taskData.taskState}
        onChange={handleChange}
      >
        <option value={"Backlog"}>Backlog</option>
        <option value={"Ready"}>Ready</option>
        <option value={"In Progress"}>In Progress</option>
        <option value={"Done"}>Done</option>
      </InputField>
      <div className="flex justify-center items-center gap-4 mx-auto w-fit">
        <Button
          type="submit"
          className="mx-auto mt-1 max-w-fit"
          disabled={updateLoading || deleteLoading}
        >
          {updateLoading ? "Loading..." : "Update"}
        </Button>
        <Button
          type="button"
          style="danger"
          className="mx-auto mt-1 max-w-fit"
          onClick={handleDelete}
          disabled={updateLoading || deleteLoading}
        >
          {deleteLoading ? "Loading..." : "Delete"}
        </Button>
      </div>
      {/* TODO: add delete button */}
      <p
        className={`mx-auto border border-red-800 p-2 bg-red-100 text-sm text-red-800 ${
          !warning && "hidden"
        }`}
      >
        {warning}
      </p>
    </form>
  );
};

export default EditTaskForm;
