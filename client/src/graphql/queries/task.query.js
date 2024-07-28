import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query GetTasks($projectId: ID!, $taskState: String) {
    tasks(projectId: $projectId, taskState: $taskState) {
      _id
      taskBody
      taskState
    }
  }
`;

export const GET_TASK = gql`
  query GetTask($taskId: ID!) {
    task(taskId: $taskId) {
      taskBody
      taskState
    }
  }
`;
