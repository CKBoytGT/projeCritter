import { useState } from "react";
import Button from "./ui/Button";
import InputField from "./ui/InputField";
import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../graphql/mutations/task.mutation";

const AddTaskForm = ({ projectId, closeModal }) => {
  const [taskData, setTaskData] = useState({
    projectId: projectId,
    taskBody: "",
    taskState: "Backlog",
  });
  const [warning, setWarning] = useState("");

  // TODO: change when relationships are added
  const [createTask, { loading }] = useMutation(CREATE_TASK, {
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

      await createTask({ variables: { input: taskData } });

      closeModal(false);

      setTaskData({
        projectId: projectId,
        taskBody: "",
        taskState: "Backlog",
      });
    } catch (err) {
      console.error("Error creating task: ", err);
      setWarning(err.message);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputField
        label="Task Description"
        id="add-taskBody"
        name="taskBody"
        value={taskData.taskBody}
        onChange={handleChange}
      />
      <InputField
        label="Task Status"
        inputType="select"
        id="add-taskState"
        name="taskState"
        value={taskData.taskState}
        onChange={handleChange}
      >
        <option value={"Backlog"}>Backlog</option>
        <option value={"Ready"}>Ready</option>
        <option value={"In Progress"}>In Progress</option>
        <option value={"Done"}>Done</option>
      </InputField>
      <Button
        type="submit"
        className="mx-auto mt-1 max-w-fit"
        disabled={loading}
      >
        {loading ? "Loading..." : "Add Task"}
      </Button>
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

export default AddTaskForm;
