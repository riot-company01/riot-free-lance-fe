/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetAllProject @cached {\n  project {\n    id\n    keyword\n    projectName\n    price\n  }\n}\n\nquery GetDetailProject($id: Int) @cached {\n  project(where: {id: {_eq: $id}}) {\n    id\n    businessContent\n    contentBusiness\n    developmentEnvironment\n    keyword\n    personnelSought\n    price\n    projectName\n    recruitmentBackground\n    recruitmentNumber\n    requiredSkills\n    welcomeSkills\n    workingConditions\n  }\n}": types.GetAllProjectDocument,
    "query GetSkills($skillsWhere: skills_bool_exp = {_and: []}, $worksWhere: work_to_detail_bool_exp = {_and: []}) @cached(ttl: 600) {\n  skills(where: $skillsWhere) {\n    id\n    type\n    name\n    works_aggregate(where: $worksWhere) {\n      aggregate {\n        count\n      }\n    }\n  }\n}": types.GetSkillsDocument,
    "mutation InsertAppliedMutation($id: String!, $workId: Int!) {\n  insert_user_to_apply_works_one(\n    object: {userId: $id, workId: $workId, isApplicated: true}\n  ) {\n    isApplicated\n  }\n}\n\nmutation DeleteApplicatedMutation($id: String!, $workId: Int!) {\n  delete_user_to_apply_works_by_pk(userId: $id, workId: $workId) {\n    isApplicated\n  }\n}": types.InsertAppliedMutationDocument,
    "query GetApplied($id: String) {\n  users(\n    where: {userToApplyWorks: {userId: {_eq: $id}, isApplicated: {_eq: true}}}\n  ) {\n    userToApplyWorks {\n      isApplicated\n      workId\n      work {\n        contractType\n        createAt\n        description\n        id\n        isClosed\n        location\n        maxMonthlyPrice\n        maxWorkHours\n        minMonthlyPrice\n        minWorkHours\n        title\n        isClosed\n        languages {\n          skill {\n            id\n            name\n            type\n          }\n        }\n      }\n    }\n  }\n}\n\nquery GetAppliedWorks($id: String) {\n  users(where: {id: {_eq: $id}}) {\n    userToApplyWorks {\n      isApplicated\n      workId\n    }\n  }\n}": types.GetAppliedDocument,
    "mutation InsertFavoriteMutation($id: String!, $workId: Int!) {\n  insert_user_to_favorite_works_one(\n    object: {userId: $id, workId: $workId, isFavorited: true}\n  ) {\n    isFavorited\n  }\n}\n\nmutation DeleteFavoritedMutation($id: String!, $workId: Int!) {\n  delete_user_to_favorite_works_by_pk(userId: $id, workId: $workId) {\n    isFavorited\n  }\n}": types.InsertFavoriteMutationDocument,
    "query GetFavoried($id: String) {\n  users(\n    where: {userToFavoriteWorks: {userId: {_eq: $id}, isFavorited: {_eq: true}}}\n  ) {\n    userToFavoriteWorks {\n      isFavorited\n      workId\n      work {\n        contractType\n        createAt\n        description\n        id\n        isClosed\n        location\n        maxMonthlyPrice\n        maxWorkHours\n        minMonthlyPrice\n        minWorkHours\n        title\n        isClosed\n        languages {\n          skill {\n            id\n            name\n            type\n          }\n        }\n      }\n    }\n  }\n}\n\nquery GetFavoriteWorks($id: String) {\n  users(where: {id: {_eq: $id}}) {\n    userToFavoriteWorks {\n      isFavorited\n      workId\n    }\n  }\n}": types.GetFavoriedDocument,
    "mutation EditProfile($id: String!, $userName: String, $userNameKana: String, $mail: String, $tel: String) {\n  update_users_by_pk(\n    pk_columns: {id: $id}\n    _set: {userName: $userName, userNameKana: $userNameKana, mail: $mail, tel: $tel}\n  ) {\n    userName\n    userNameKana\n    mail\n    tel\n  }\n}": types.EditProfileDocument,
    "query GetUser($id: String) @cached(ttl: 0) {\n  users(where: {id: {_eq: $id}}) {\n    userName\n    userNameKana\n    mail\n    tel\n  }\n}\n\nquery GetUserToWorks($id: String) {\n  users(where: {id: {_eq: $id}}) {\n    userToApplyWorks {\n      workId\n      isApplicated\n    }\n    userToFavoriteWorks {\n      workId\n      isFavorited\n    }\n  }\n}": types.GetUserDocument,
    "query GetWork($id: Int!) @cached(ttl: 600) {\n  works_by_pk(id: $id) {\n    id\n    title\n    contractType\n    location\n    maxMonthlyPrice\n    maxWorkHours\n    minMonthlyPrice\n    minWorkHours\n    description\n    createAt\n    isClosed\n    languages {\n      skill {\n        id\n        name\n        type\n      }\n    }\n  }\n}\n\nquery GetWorks($where: works_bool_exp = {_and: []}, $order_by: [works_order_by!] = {}) @cached(ttl: 600) {\n  works(where: $where, order_by: $order_by) {\n    id\n    isClosed\n    title\n    contractType\n    location\n    maxMonthlyPrice\n    maxWorkHours\n    minMonthlyPrice\n    minWorkHours\n    description\n    createAt\n    languages {\n      skill {\n        id\n        name\n        type\n      }\n    }\n  }\n}": types.GetWorkDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllProject @cached {\n  project {\n    id\n    keyword\n    projectName\n    price\n  }\n}\n\nquery GetDetailProject($id: Int) @cached {\n  project(where: {id: {_eq: $id}}) {\n    id\n    businessContent\n    contentBusiness\n    developmentEnvironment\n    keyword\n    personnelSought\n    price\n    projectName\n    recruitmentBackground\n    recruitmentNumber\n    requiredSkills\n    welcomeSkills\n    workingConditions\n  }\n}"): (typeof documents)["query GetAllProject @cached {\n  project {\n    id\n    keyword\n    projectName\n    price\n  }\n}\n\nquery GetDetailProject($id: Int) @cached {\n  project(where: {id: {_eq: $id}}) {\n    id\n    businessContent\n    contentBusiness\n    developmentEnvironment\n    keyword\n    personnelSought\n    price\n    projectName\n    recruitmentBackground\n    recruitmentNumber\n    requiredSkills\n    welcomeSkills\n    workingConditions\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetSkills($skillsWhere: skills_bool_exp = {_and: []}, $worksWhere: work_to_detail_bool_exp = {_and: []}) @cached(ttl: 600) {\n  skills(where: $skillsWhere) {\n    id\n    type\n    name\n    works_aggregate(where: $worksWhere) {\n      aggregate {\n        count\n      }\n    }\n  }\n}"): (typeof documents)["query GetSkills($skillsWhere: skills_bool_exp = {_and: []}, $worksWhere: work_to_detail_bool_exp = {_and: []}) @cached(ttl: 600) {\n  skills(where: $skillsWhere) {\n    id\n    type\n    name\n    works_aggregate(where: $worksWhere) {\n      aggregate {\n        count\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation InsertAppliedMutation($id: String!, $workId: Int!) {\n  insert_user_to_apply_works_one(\n    object: {userId: $id, workId: $workId, isApplicated: true}\n  ) {\n    isApplicated\n  }\n}\n\nmutation DeleteApplicatedMutation($id: String!, $workId: Int!) {\n  delete_user_to_apply_works_by_pk(userId: $id, workId: $workId) {\n    isApplicated\n  }\n}"): (typeof documents)["mutation InsertAppliedMutation($id: String!, $workId: Int!) {\n  insert_user_to_apply_works_one(\n    object: {userId: $id, workId: $workId, isApplicated: true}\n  ) {\n    isApplicated\n  }\n}\n\nmutation DeleteApplicatedMutation($id: String!, $workId: Int!) {\n  delete_user_to_apply_works_by_pk(userId: $id, workId: $workId) {\n    isApplicated\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetApplied($id: String) {\n  users(\n    where: {userToApplyWorks: {userId: {_eq: $id}, isApplicated: {_eq: true}}}\n  ) {\n    userToApplyWorks {\n      isApplicated\n      workId\n      work {\n        contractType\n        createAt\n        description\n        id\n        isClosed\n        location\n        maxMonthlyPrice\n        maxWorkHours\n        minMonthlyPrice\n        minWorkHours\n        title\n        isClosed\n        languages {\n          skill {\n            id\n            name\n            type\n          }\n        }\n      }\n    }\n  }\n}\n\nquery GetAppliedWorks($id: String) {\n  users(where: {id: {_eq: $id}}) {\n    userToApplyWorks {\n      isApplicated\n      workId\n    }\n  }\n}"): (typeof documents)["query GetApplied($id: String) {\n  users(\n    where: {userToApplyWorks: {userId: {_eq: $id}, isApplicated: {_eq: true}}}\n  ) {\n    userToApplyWorks {\n      isApplicated\n      workId\n      work {\n        contractType\n        createAt\n        description\n        id\n        isClosed\n        location\n        maxMonthlyPrice\n        maxWorkHours\n        minMonthlyPrice\n        minWorkHours\n        title\n        isClosed\n        languages {\n          skill {\n            id\n            name\n            type\n          }\n        }\n      }\n    }\n  }\n}\n\nquery GetAppliedWorks($id: String) {\n  users(where: {id: {_eq: $id}}) {\n    userToApplyWorks {\n      isApplicated\n      workId\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation InsertFavoriteMutation($id: String!, $workId: Int!) {\n  insert_user_to_favorite_works_one(\n    object: {userId: $id, workId: $workId, isFavorited: true}\n  ) {\n    isFavorited\n  }\n}\n\nmutation DeleteFavoritedMutation($id: String!, $workId: Int!) {\n  delete_user_to_favorite_works_by_pk(userId: $id, workId: $workId) {\n    isFavorited\n  }\n}"): (typeof documents)["mutation InsertFavoriteMutation($id: String!, $workId: Int!) {\n  insert_user_to_favorite_works_one(\n    object: {userId: $id, workId: $workId, isFavorited: true}\n  ) {\n    isFavorited\n  }\n}\n\nmutation DeleteFavoritedMutation($id: String!, $workId: Int!) {\n  delete_user_to_favorite_works_by_pk(userId: $id, workId: $workId) {\n    isFavorited\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetFavoried($id: String) {\n  users(\n    where: {userToFavoriteWorks: {userId: {_eq: $id}, isFavorited: {_eq: true}}}\n  ) {\n    userToFavoriteWorks {\n      isFavorited\n      workId\n      work {\n        contractType\n        createAt\n        description\n        id\n        isClosed\n        location\n        maxMonthlyPrice\n        maxWorkHours\n        minMonthlyPrice\n        minWorkHours\n        title\n        isClosed\n        languages {\n          skill {\n            id\n            name\n            type\n          }\n        }\n      }\n    }\n  }\n}\n\nquery GetFavoriteWorks($id: String) {\n  users(where: {id: {_eq: $id}}) {\n    userToFavoriteWorks {\n      isFavorited\n      workId\n    }\n  }\n}"): (typeof documents)["query GetFavoried($id: String) {\n  users(\n    where: {userToFavoriteWorks: {userId: {_eq: $id}, isFavorited: {_eq: true}}}\n  ) {\n    userToFavoriteWorks {\n      isFavorited\n      workId\n      work {\n        contractType\n        createAt\n        description\n        id\n        isClosed\n        location\n        maxMonthlyPrice\n        maxWorkHours\n        minMonthlyPrice\n        minWorkHours\n        title\n        isClosed\n        languages {\n          skill {\n            id\n            name\n            type\n          }\n        }\n      }\n    }\n  }\n}\n\nquery GetFavoriteWorks($id: String) {\n  users(where: {id: {_eq: $id}}) {\n    userToFavoriteWorks {\n      isFavorited\n      workId\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation EditProfile($id: String!, $userName: String, $userNameKana: String, $mail: String, $tel: String) {\n  update_users_by_pk(\n    pk_columns: {id: $id}\n    _set: {userName: $userName, userNameKana: $userNameKana, mail: $mail, tel: $tel}\n  ) {\n    userName\n    userNameKana\n    mail\n    tel\n  }\n}"): (typeof documents)["mutation EditProfile($id: String!, $userName: String, $userNameKana: String, $mail: String, $tel: String) {\n  update_users_by_pk(\n    pk_columns: {id: $id}\n    _set: {userName: $userName, userNameKana: $userNameKana, mail: $mail, tel: $tel}\n  ) {\n    userName\n    userNameKana\n    mail\n    tel\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUser($id: String) @cached(ttl: 0) {\n  users(where: {id: {_eq: $id}}) {\n    userName\n    userNameKana\n    mail\n    tel\n  }\n}\n\nquery GetUserToWorks($id: String) {\n  users(where: {id: {_eq: $id}}) {\n    userToApplyWorks {\n      workId\n      isApplicated\n    }\n    userToFavoriteWorks {\n      workId\n      isFavorited\n    }\n  }\n}"): (typeof documents)["query GetUser($id: String) @cached(ttl: 0) {\n  users(where: {id: {_eq: $id}}) {\n    userName\n    userNameKana\n    mail\n    tel\n  }\n}\n\nquery GetUserToWorks($id: String) {\n  users(where: {id: {_eq: $id}}) {\n    userToApplyWorks {\n      workId\n      isApplicated\n    }\n    userToFavoriteWorks {\n      workId\n      isFavorited\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetWork($id: Int!) @cached(ttl: 600) {\n  works_by_pk(id: $id) {\n    id\n    title\n    contractType\n    location\n    maxMonthlyPrice\n    maxWorkHours\n    minMonthlyPrice\n    minWorkHours\n    description\n    createAt\n    isClosed\n    languages {\n      skill {\n        id\n        name\n        type\n      }\n    }\n  }\n}\n\nquery GetWorks($where: works_bool_exp = {_and: []}, $order_by: [works_order_by!] = {}) @cached(ttl: 600) {\n  works(where: $where, order_by: $order_by) {\n    id\n    isClosed\n    title\n    contractType\n    location\n    maxMonthlyPrice\n    maxWorkHours\n    minMonthlyPrice\n    minWorkHours\n    description\n    createAt\n    languages {\n      skill {\n        id\n        name\n        type\n      }\n    }\n  }\n}"): (typeof documents)["query GetWork($id: Int!) @cached(ttl: 600) {\n  works_by_pk(id: $id) {\n    id\n    title\n    contractType\n    location\n    maxMonthlyPrice\n    maxWorkHours\n    minMonthlyPrice\n    minWorkHours\n    description\n    createAt\n    isClosed\n    languages {\n      skill {\n        id\n        name\n        type\n      }\n    }\n  }\n}\n\nquery GetWorks($where: works_bool_exp = {_and: []}, $order_by: [works_order_by!] = {}) @cached(ttl: 600) {\n  works(where: $where, order_by: $order_by) {\n    id\n    isClosed\n    title\n    contractType\n    location\n    maxMonthlyPrice\n    maxWorkHours\n    minMonthlyPrice\n    minWorkHours\n    description\n    createAt\n    languages {\n      skill {\n        id\n        name\n        type\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;