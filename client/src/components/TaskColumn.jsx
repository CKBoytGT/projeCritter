import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../graphql/queries/task.query";
import LoadingSpinner from "./ui/LoadingSpinner";
import TaskListItem from "./TaskListItem";

//TODO: make columns hideable in mobile like the critter container
const TaskColumn = ({ projectId, columnState }) => {
  const { loading, data } = useQuery(GET_TASKS, {
    variables: { projectId: projectId, taskState: columnState },
  });

  return (
    <div className="flex flex-col shadow-[0.3rem_0.3rem_#bbf7d0] border-4 border-black rounded-xl w-full md:min-w-[210px]">
      <h3 className="text-lg font-bold px-2 py-1 rounded-t-md border-b-4 border-black bg-indigo-500 text-white">
        {columnState}
      </h3>
      {loading && (
        <div className="flex justify-center items-center grow">
          <LoadingSpinner />
        </div>
      )}
      <div className="p-2 md:overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-transparent">
        {!loading && data.tasks.length === 0 && (
          <p className="p-2 text-sm text-neutral-600 italic">
            {columnState === "Backlog"
              ? "All clear!"
              : columnState === "Ready"
              ? "Nothing to start on."
              : columnState === "In Progress"
              ? "Nothing in progress."
              : "Nothing complete yet!"}
          </p>
        )}
        <ul>
          {!loading &&
            data.tasks.map((task) => (
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
