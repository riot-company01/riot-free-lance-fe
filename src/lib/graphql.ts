import { gql } from "@apollo/client";

export const GetProjectList = gql`
  query GetAllProject @cached {
    project {
      id
      businessContent
      contentBusiness
      developmentEnvironment
      keyword
      personnelSought
      projectName
      price
      recruitmentBackground
      recruitmentNumber
      welcomeSkills
      requiredSkills
      workingConditions
    }
  }
`;

export const GetDetailProject = gql`
  query GetDetailProject($id: Int) @cached {
    project(where: { id: { _eq: $id } }) {
      id
      businessContent
      contentBusiness
      developmentEnvironment
      keyword
      personnelSought
      price
      projectName
      recruitmentBackground
      recruitmentNumber
      requiredSkills
      welcomeSkills
      workingConditions
    }
  }
`;

export const GetUser = gql`
  query GetUser($id: String) @cached {
    users(where: { id: { _eq: $id } }) {
      id
      name
      last_seen
      slackUrl
    }
  }
`;
