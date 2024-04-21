import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      _id
      projectName
      critterName
      critterSpecies
      createdAt
    }
  }
`;

export const GET_PROJECT = gql`
  query GetProject($projectId: ID!) {
    project(projectId: $projectId) {
      projectName
      critterName
      critterSpecies
      createdAt
    }
  }
`;
