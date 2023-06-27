/* eslint-disable */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  _name: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression to compare columns of type "_name". All fields are combined with logical 'AND'. */
export type _Name_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["_name"]["input"]>;
  _gt?: InputMaybe<Scalars["_name"]["input"]>;
  _gte?: InputMaybe<Scalars["_name"]["input"]>;
  _in?: InputMaybe<Array<Scalars["_name"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["_name"]["input"]>;
  _lte?: InputMaybe<Scalars["_name"]["input"]>;
  _neq?: InputMaybe<Scalars["_name"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["_name"]["input"]>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** insert data into the table: "project" */
  insert_project?: Maybe<Project_Mutation_Response>;
  /** insert a single row into the table: "project" */
  insert_project_one?: Maybe<Project>;
};

/** mutation root */
export type Mutation_RootInsert_ProjectArgs = {
  objects: Array<Project_Insert_Input>;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_OneArgs = {
  object: Project_Insert_Input;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** 案件情報 */
export type Project = {
  __typename?: "project";
  /** 業務内容 */
  businessContent?: Maybe<Scalars["String"]["output"]>;
  /** 事業内容 */
  contentBusiness?: Maybe<Scalars["String"]["output"]>;
  /** 開発環境 */
  developmentEnvironment?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  /** キーワード */
  keyword: Scalars["_name"]["output"];
  /** 求める人材 */
  personnelSought: Scalars["String"]["output"];
  /** 単価 */
  price: Scalars["String"]["output"];
  /** 案件名 */
  projectName: Scalars["String"]["output"];
  /** 募集背景 */
  recruitmentBackground?: Maybe<Scalars["String"]["output"]>;
  /** 募集人数 */
  recruitmentNumber: Scalars["String"]["output"];
  /** 必須スキル */
  requiredSkills: Scalars["String"]["output"];
  /** 歓迎スキル */
  welcomeSkills: Scalars["String"]["output"];
  /** 稼働条件 */
  workingConditions: Scalars["String"]["output"];
};

/** Boolean expression to filter rows from the table "project". All fields are combined with a logical 'AND'. */
export type Project_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Bool_Exp>>;
  _not?: InputMaybe<Project_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Bool_Exp>>;
  businessContent?: InputMaybe<String_Comparison_Exp>;
  contentBusiness?: InputMaybe<String_Comparison_Exp>;
  developmentEnvironment?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  keyword?: InputMaybe<_Name_Comparison_Exp>;
  personnelSought?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<String_Comparison_Exp>;
  projectName?: InputMaybe<String_Comparison_Exp>;
  recruitmentBackground?: InputMaybe<String_Comparison_Exp>;
  recruitmentNumber?: InputMaybe<String_Comparison_Exp>;
  requiredSkills?: InputMaybe<String_Comparison_Exp>;
  welcomeSkills?: InputMaybe<String_Comparison_Exp>;
  workingConditions?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "project" */
export enum Project_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectPkey = "project_pkey",
}

/** input type for inserting data into table "project" */
export type Project_Insert_Input = {
  /** 業務内容 */
  businessContent?: InputMaybe<Scalars["String"]["input"]>;
  /** 事業内容 */
  contentBusiness?: InputMaybe<Scalars["String"]["input"]>;
  /** 開発環境 */
  developmentEnvironment?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** キーワード */
  keyword?: InputMaybe<Scalars["_name"]["input"]>;
  /** 求める人材 */
  personnelSought?: InputMaybe<Scalars["String"]["input"]>;
  /** 単価 */
  price?: InputMaybe<Scalars["String"]["input"]>;
  /** 案件名 */
  projectName?: InputMaybe<Scalars["String"]["input"]>;
  /** 募集背景 */
  recruitmentBackground?: InputMaybe<Scalars["String"]["input"]>;
  /** 募集人数 */
  recruitmentNumber?: InputMaybe<Scalars["String"]["input"]>;
  /** 必須スキル */
  requiredSkills?: InputMaybe<Scalars["String"]["input"]>;
  /** 歓迎スキル */
  welcomeSkills?: InputMaybe<Scalars["String"]["input"]>;
  /** 稼働条件 */
  workingConditions?: InputMaybe<Scalars["String"]["input"]>;
};

/** response of any mutation on the table "project" */
export type Project_Mutation_Response = {
  __typename?: "project_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Project>;
};

/** on_conflict condition type for table "project" */
export type Project_On_Conflict = {
  constraint: Project_Constraint;
  update_columns?: Array<Project_Update_Column>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** Ordering options when selecting data from "project". */
export type Project_Order_By = {
  businessContent?: InputMaybe<Order_By>;
  contentBusiness?: InputMaybe<Order_By>;
  developmentEnvironment?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  keyword?: InputMaybe<Order_By>;
  personnelSought?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  projectName?: InputMaybe<Order_By>;
  recruitmentBackground?: InputMaybe<Order_By>;
  recruitmentNumber?: InputMaybe<Order_By>;
  requiredSkills?: InputMaybe<Order_By>;
  welcomeSkills?: InputMaybe<Order_By>;
  workingConditions?: InputMaybe<Order_By>;
};

/** select columns of table "project" */
export enum Project_Select_Column {
  /** column name */
  BusinessContent = "businessContent",
  /** column name */
  ContentBusiness = "contentBusiness",
  /** column name */
  DevelopmentEnvironment = "developmentEnvironment",
  /** column name */
  Id = "id",
  /** column name */
  Keyword = "keyword",
  /** column name */
  PersonnelSought = "personnelSought",
  /** column name */
  Price = "price",
  /** column name */
  ProjectName = "projectName",
  /** column name */
  RecruitmentBackground = "recruitmentBackground",
  /** column name */
  RecruitmentNumber = "recruitmentNumber",
  /** column name */
  RequiredSkills = "requiredSkills",
  /** column name */
  WelcomeSkills = "welcomeSkills",
  /** column name */
  WorkingConditions = "workingConditions",
}

/** Streaming cursor of the table "project" */
export type Project_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Stream_Cursor_Value_Input = {
  /** 業務内容 */
  businessContent?: InputMaybe<Scalars["String"]["input"]>;
  /** 事業内容 */
  contentBusiness?: InputMaybe<Scalars["String"]["input"]>;
  /** 開発環境 */
  developmentEnvironment?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** キーワード */
  keyword?: InputMaybe<Scalars["_name"]["input"]>;
  /** 求める人材 */
  personnelSought?: InputMaybe<Scalars["String"]["input"]>;
  /** 単価 */
  price?: InputMaybe<Scalars["String"]["input"]>;
  /** 案件名 */
  projectName?: InputMaybe<Scalars["String"]["input"]>;
  /** 募集背景 */
  recruitmentBackground?: InputMaybe<Scalars["String"]["input"]>;
  /** 募集人数 */
  recruitmentNumber?: InputMaybe<Scalars["String"]["input"]>;
  /** 必須スキル */
  requiredSkills?: InputMaybe<Scalars["String"]["input"]>;
  /** 歓迎スキル */
  welcomeSkills?: InputMaybe<Scalars["String"]["input"]>;
  /** 稼働条件 */
  workingConditions?: InputMaybe<Scalars["String"]["input"]>;
};

/** placeholder for update columns of table "project" (current role has no relevant permissions) */
export enum Project_Update_Column {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
};

export type Query_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Query_RootProject_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table in a streaming manner: "project" */
  project_stream: Array<Project>;
};

export type Subscription_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Subscription_RootProject_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootProject_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Project_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type GetAllProjectQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProjectQuery = {
  __typename?: "query_root";
  project: Array<{
    __typename?: "project";
    id: number;
    keyword: any;
    projectName: string;
    price: string;
  }>;
};

export type GetDetailProjectQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetDetailProjectQuery = {
  __typename?: "query_root";
  project: Array<{
    __typename?: "project";
    id: number;
    businessContent?: string | null;
    contentBusiness?: string | null;
    developmentEnvironment?: string | null;
    keyword: string[];
    personnelSought: string;
    price: string;
    projectName: string;
    recruitmentBackground?: string | null;
    recruitmentNumber: string;
    requiredSkills: string;
    welcomeSkills: string;
    workingConditions: string;
  }>;
};

export const GetAllProjectDocument = gql`
  query GetAllProject @cached {
    project {
      id
      keyword
      projectName
      price
    }
  }
`;

/**
 * __useGetAllProjectQuery__
 *
 * To run a query within a React component, call `useGetAllProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProjectQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProjectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllProjectQuery,
    GetAllProjectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllProjectQuery, GetAllProjectQueryVariables>(
    GetAllProjectDocument,
    options
  );
}
export function useGetAllProjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllProjectQuery,
    GetAllProjectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllProjectQuery, GetAllProjectQueryVariables>(
    GetAllProjectDocument,
    options
  );
}
export type GetAllProjectQueryHookResult = ReturnType<
  typeof useGetAllProjectQuery
>;
export type GetAllProjectLazyQueryHookResult = ReturnType<
  typeof useGetAllProjectLazyQuery
>;
export type GetAllProjectQueryResult = Apollo.QueryResult<
  GetAllProjectQuery,
  GetAllProjectQueryVariables
>;
export const GetDetailProjectDocument = gql`
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

/**
 * __useGetDetailProjectQuery__
 *
 * To run a query within a React component, call `useGetDetailProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDetailProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDetailProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDetailProjectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDetailProjectQuery,
    GetDetailProjectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDetailProjectQuery, GetDetailProjectQueryVariables>(
    GetDetailProjectDocument,
    options
  );
}
export function useGetDetailProjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDetailProjectQuery,
    GetDetailProjectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDetailProjectQuery,
    GetDetailProjectQueryVariables
  >(GetDetailProjectDocument, options);
}
export type GetDetailProjectQueryHookResult = ReturnType<
  typeof useGetDetailProjectQuery
>;
export type GetDetailProjectLazyQueryHookResult = ReturnType<
  typeof useGetDetailProjectLazyQuery
>;
export type GetDetailProjectQueryResult = Apollo.QueryResult<
  GetDetailProjectQuery,
  GetDetailProjectQueryVariables
>;
