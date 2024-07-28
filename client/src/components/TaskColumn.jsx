import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_TASKS } from "../graphql/queries/task.query";
import Button from "./ui/Button";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import TaskListItem from "./TaskListItem";

const TaskColumn = ({ projectId, columnState }) => {
  const navigate = useNavigate();

  const [columnOpen, setColumnOpen] = useState(true); // for hiding column on mobile view

  const { loading, data, error } = useQuery(GET_TASKS, {
    variables: { projectId: projectId, taskState: columnState },
  });

  // move user to expiration notice if login expired
  useEffect(() => {
    if (error && error.message === "Unauthorized.") {
      navigate("/expired");
      window.location.reload();
    }
  });

  if (loading) {
    return (
      <div className="flex w-full animate-pulse flex-col rounded-xl border-4 border-indigo-100 bg-indigo-100 md:min-w-[210px]">
        <span className="sr-only">Loading tasks...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full flex-col items-center justify-center rounded-xl border border-red-800 bg-red-100 p-4 text-center font-medium text-red-800 md:min-w-[210px]">
        <p>
          <span className="font-semibold">
            Error getting {columnState} tasks:{" "}
          </span>
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col rounded-xl border-4 border-black shadow-[0.3rem_0.3rem_#bbf7d0] md:min-w-[210px]">
      <div
        className={`flex w-full flex-row items-center justify-between md:justify-start ${
          columnOpen ? "rounded-t-md" : "rounded-md md:rounded-b-none"
        } px-2 py-1 ${
          columnOpen ? "border-b-4" : "border-b-none md:border-b-4"
        } bg-indigo-650 border-black text-white`}
      >
        <h3 className="text-lg font-bold">{columnState}</h3>
        <Button
          style="icon"
          className="shrink-0 text-2xl md:hidden"
          onClick={() => setColumnOpen((prevColumnOpen) => !prevColumnOpen)}
        >
          {columnOpen ? (
            <>
              <FaRegEyeSlash />
              <span className="sr-only">{`Close ${columnState}`}</span>
            </>
          ) : (
            <>
              <FaRegEye />
              <span className="sr-only">{`Open ${columnState}`}</span>
            </>
          )}
        </Button>
      </div>

      <div
        className={`${
          !columnOpen && "hidden md:block"
        } scrollbar-thin scrollbar-thumb-indigo-650 scrollbar-track-transparent p-2 md:overflow-y-auto`}
      >
        {!data.tasks || data?.tasks?.length === 0 ? (
          <p className="p-2 text-sm italic text-neutral-600">
            {columnState === "Backlog"
              ? "All clear!"
              : columnState === "Ready"
                ? "Nothing to start on."
                : columnState === "In Progress"
                  ? "Nothing in progress."
                  : "Nothing complete yet!"}
          </p>
        ) : (
          ""
        )}
        <ul>
          {data?.tasks?.map((task) => (
            <TaskListItem
              key={task._id}
              taskId={task._id}
              initTaskState={task.taskState}
            >
              {task.taskBody}
            </TaskListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskColumn;
