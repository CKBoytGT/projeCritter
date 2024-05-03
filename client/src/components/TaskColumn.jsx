import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../graphql/queries/task.query";
import TaskListItem from "./TaskListItem";

//TODO: make columns hideable in mobile like the critter container
const TaskColumn = ({ projectId, columnState }) => {
  const { loading, data, error } = useQuery(GET_TASKS, {
    variables: { projectId: projectId, taskState: columnState },
  });

  if (loading) {
    return (
      <div className="flex flex-col rounded-xl w-full md:min-w-[210px] border-4 border-indigo-100 bg-indigo-100 animate-pulse">
        <span className="sr-only">Loading tasks...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center rounded-xl w-full md:min-w-[210px] border border-red-800 p-4 bg-red-100 text-red-800 text-center font-medium">
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
    <div className="flex flex-col shadow-[0.3rem_0.3rem_#bbf7d0] border-4 border-black rounded-xl w-full md:min-w-[210px]">
      <h3 className="text-lg font-bold px-2 py-1 rounded-t-md border-b-4 border-black bg-indigo-500 text-white">
        {columnState}
      </h3>
      <div className="p-2 md:overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-transparent">
        {!data.tasks || data?.tasks?.length === 0 ? (
          <p className="p-2 text-sm text-neutral-600 italic">
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
