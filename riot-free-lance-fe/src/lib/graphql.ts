import { gql } from '@apollo/client';

export const GetProjectList =gql`
 query MyQuery {
  project {
    id
  }
}
`;