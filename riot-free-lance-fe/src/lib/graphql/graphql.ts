/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "project" */
  delete_project?: Maybe<Project_Mutation_Response>;
  /** delete single row from the table: "project" */
  delete_project_by_pk?: Maybe<Project>;
  /** insert data into the table: "project" */
  insert_project?: Maybe<Project_Mutation_Response>;
  /** insert a single row into the table: "project" */
  insert_project_one?: Maybe<Project>;
  /** update data of the table: "project" */
  update_project?: Maybe<Project_Mutation_Response>;
  /** update single row of the table: "project" */
  update_project_by_pk?: Maybe<Project>;
  /** update multiples rows of table: "project" */
  update_project_many?: Maybe<Array<Maybe<Project_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ProjectArgs = {
  where: Project_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_By_PkArgs = {
  id: Scalars['Int']['input'];
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


/** mutation root */
export type Mutation_RootUpdate_ProjectArgs = {
  _inc?: InputMaybe<Project_Inc_Input>;
  _set?: InputMaybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_By_PkArgs = {
  _inc?: InputMaybe<Project_Inc_Input>;
  _set?: InputMaybe<Project_Set_Input>;
  pk_columns: Project_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_ManyArgs = {
  updates: Array<Project_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** 案件一覧 */
export type Project = {
  __typename?: 'project';
  /** 業務内容 */
  businessContent: Scalars['String']['output'];
  /** 事業内容 */
  contentBusiness: Scalars['String']['output'];
  /** 開発環境 */
  developmentEnvironment: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** 求める人材 */
  personnelSought: Scalars['String']['output'];
  /** 単価 */
  price: Scalars['Int']['output'];
  /** 案件名 */
  projectName: Scalars['String']['output'];
  /** 募集背景 */
  recruitmentBackground: Scalars['String']['output'];
  /** 募集人数 */
  recruitmentNumber: Scalars['Int']['output'];
  /** 必須スキル */
  requiredSkills: Scalars['String']['output'];
  /** 歓迎スキル */
  welcomeSkills: Scalars['String']['output'];
  /** 稼働条件 */
  workingConditions: Scalars['String']['output'];
};

/** aggregated selection of "project" */
export type Project_Aggregate = {
  __typename?: 'project_aggregate';
  aggregate?: Maybe<Project_Aggregate_Fields>;
  nodes: Array<Project>;
};

/** aggregate fields of "project" */
export type Project_Aggregate_Fields = {
  __typename?: 'project_aggregate_fields';
  avg?: Maybe<Project_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Project_Max_Fields>;
  min?: Maybe<Project_Min_Fields>;
  stddev?: Maybe<Project_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Sum_Fields>;
  var_pop?: Maybe<Project_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Var_Samp_Fields>;
  variance?: Maybe<Project_Variance_Fields>;
};


/** aggregate fields of "project" */
export type Project_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Project_Avg_Fields = {
  __typename?: 'project_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 単価 */
  price?: Maybe<Scalars['Float']['output']>;
  /** 募集人数 */
  recruitmentNumber?: Maybe<Scalars['Float']['output']>;
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
  personnelSought?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  projectName?: InputMaybe<String_Comparison_Exp>;
  recruitmentBackground?: InputMaybe<String_Comparison_Exp>;
  recruitmentNumber?: InputMaybe<Int_Comparison_Exp>;
  requiredSkills?: InputMaybe<String_Comparison_Exp>;
  welcomeSkills?: InputMaybe<String_Comparison_Exp>;
  workingConditions?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "project" */
export enum Project_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectPkey = 'project_pkey'
}

/** input type for incrementing numeric columns in table "project" */
export type Project_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  /** 単価 */
  price?: InputMaybe<Scalars['Int']['input']>;
  /** 募集人数 */
  recruitmentNumber?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "project" */
export type Project_Insert_Input = {
  /** 業務内容 */
  businessContent?: InputMaybe<Scalars['String']['input']>;
  /** 事業内容 */
  contentBusiness?: InputMaybe<Scalars['String']['input']>;
  /** 開発環境 */
  developmentEnvironment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** 求める人材 */
  personnelSought?: InputMaybe<Scalars['String']['input']>;
  /** 単価 */
  price?: InputMaybe<Scalars['Int']['input']>;
  /** 案件名 */
  projectName?: InputMaybe<Scalars['String']['input']>;
  /** 募集背景 */
  recruitmentBackground?: InputMaybe<Scalars['String']['input']>;
  /** 募集人数 */
  recruitmentNumber?: InputMaybe<Scalars['Int']['input']>;
  /** 必須スキル */
  requiredSkills?: InputMaybe<Scalars['String']['input']>;
  /** 歓迎スキル */
  welcomeSkills?: InputMaybe<Scalars['String']['input']>;
  /** 稼働条件 */
  workingConditions?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Project_Max_Fields = {
  __typename?: 'project_max_fields';
  /** 業務内容 */
  businessContent?: Maybe<Scalars['String']['output']>;
  /** 事業内容 */
  contentBusiness?: Maybe<Scalars['String']['output']>;
  /** 開発環境 */
  developmentEnvironment?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** 求める人材 */
  personnelSought?: Maybe<Scalars['String']['output']>;
  /** 単価 */
  price?: Maybe<Scalars['Int']['output']>;
  /** 案件名 */
  projectName?: Maybe<Scalars['String']['output']>;
  /** 募集背景 */
  recruitmentBackground?: Maybe<Scalars['String']['output']>;
  /** 募集人数 */
  recruitmentNumber?: Maybe<Scalars['Int']['output']>;
  /** 必須スキル */
  requiredSkills?: Maybe<Scalars['String']['output']>;
  /** 歓迎スキル */
  welcomeSkills?: Maybe<Scalars['String']['output']>;
  /** 稼働条件 */
  workingConditions?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Project_Min_Fields = {
  __typename?: 'project_min_fields';
  /** 業務内容 */
  businessContent?: Maybe<Scalars['String']['output']>;
  /** 事業内容 */
  contentBusiness?: Maybe<Scalars['String']['output']>;
  /** 開発環境 */
  developmentEnvironment?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** 求める人材 */
  personnelSought?: Maybe<Scalars['String']['output']>;
  /** 単価 */
  price?: Maybe<Scalars['Int']['output']>;
  /** 案件名 */
  projectName?: Maybe<Scalars['String']['output']>;
  /** 募集背景 */
  recruitmentBackground?: Maybe<Scalars['String']['output']>;
  /** 募集人数 */
  recruitmentNumber?: Maybe<Scalars['Int']['output']>;
  /** 必須スキル */
  requiredSkills?: Maybe<Scalars['String']['output']>;
  /** 歓迎スキル */
  welcomeSkills?: Maybe<Scalars['String']['output']>;
  /** 稼働条件 */
  workingConditions?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "project" */
export type Project_Mutation_Response = {
  __typename?: 'project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  personnelSought?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  projectName?: InputMaybe<Order_By>;
  recruitmentBackground?: InputMaybe<Order_By>;
  recruitmentNumber?: InputMaybe<Order_By>;
  requiredSkills?: InputMaybe<Order_By>;
  welcomeSkills?: InputMaybe<Order_By>;
  workingConditions?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project */
export type Project_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "project" */
export enum Project_Select_Column {
  /** column name */
  BusinessContent = 'businessContent',
  /** column name */
  ContentBusiness = 'contentBusiness',
  /** column name */
  DevelopmentEnvironment = 'developmentEnvironment',
  /** column name */
  Id = 'id',
  /** column name */
  PersonnelSought = 'personnelSought',
  /** column name */
  Price = 'price',
  /** column name */
  ProjectName = 'projectName',
  /** column name */
  RecruitmentBackground = 'recruitmentBackground',
  /** column name */
  RecruitmentNumber = 'recruitmentNumber',
  /** column name */
  RequiredSkills = 'requiredSkills',
  /** column name */
  WelcomeSkills = 'welcomeSkills',
  /** column name */
  WorkingConditions = 'workingConditions'
}

/** input type for updating data in table "project" */
export type Project_Set_Input = {
  /** 業務内容 */
  businessContent?: InputMaybe<Scalars['String']['input']>;
  /** 事業内容 */
  contentBusiness?: InputMaybe<Scalars['String']['input']>;
  /** 開発環境 */
  developmentEnvironment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** 求める人材 */
  personnelSought?: InputMaybe<Scalars['String']['input']>;
  /** 単価 */
  price?: InputMaybe<Scalars['Int']['input']>;
  /** 案件名 */
  projectName?: InputMaybe<Scalars['String']['input']>;
  /** 募集背景 */
  recruitmentBackground?: InputMaybe<Scalars['String']['input']>;
  /** 募集人数 */
  recruitmentNumber?: InputMaybe<Scalars['Int']['input']>;
  /** 必須スキル */
  requiredSkills?: InputMaybe<Scalars['String']['input']>;
  /** 歓迎スキル */
  welcomeSkills?: InputMaybe<Scalars['String']['input']>;
  /** 稼働条件 */
  workingConditions?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Project_Stddev_Fields = {
  __typename?: 'project_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 単価 */
  price?: Maybe<Scalars['Float']['output']>;
  /** 募集人数 */
  recruitmentNumber?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Project_Stddev_Pop_Fields = {
  __typename?: 'project_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 単価 */
  price?: Maybe<Scalars['Float']['output']>;
  /** 募集人数 */
  recruitmentNumber?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Project_Stddev_Samp_Fields = {
  __typename?: 'project_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 単価 */
  price?: Maybe<Scalars['Float']['output']>;
  /** 募集人数 */
  recruitmentNumber?: Maybe<Scalars['Float']['output']>;
};

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
  businessContent?: InputMaybe<Scalars['String']['input']>;
  /** 事業内容 */
  contentBusiness?: InputMaybe<Scalars['String']['input']>;
  /** 開発環境 */
  developmentEnvironment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** 求める人材 */
  personnelSought?: InputMaybe<Scalars['String']['input']>;
  /** 単価 */
  price?: InputMaybe<Scalars['Int']['input']>;
  /** 案件名 */
  projectName?: InputMaybe<Scalars['String']['input']>;
  /** 募集背景 */
  recruitmentBackground?: InputMaybe<Scalars['String']['input']>;
  /** 募集人数 */
  recruitmentNumber?: InputMaybe<Scalars['Int']['input']>;
  /** 必須スキル */
  requiredSkills?: InputMaybe<Scalars['String']['input']>;
  /** 歓迎スキル */
  welcomeSkills?: InputMaybe<Scalars['String']['input']>;
  /** 稼働条件 */
  workingConditions?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Project_Sum_Fields = {
  __typename?: 'project_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  /** 単価 */
  price?: Maybe<Scalars['Int']['output']>;
  /** 募集人数 */
  recruitmentNumber?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "project" */
export enum Project_Update_Column {
  /** column name */
  BusinessContent = 'businessContent',
  /** column name */
  ContentBusiness = 'contentBusiness',
  /** column name */
  DevelopmentEnvironment = 'developmentEnvironment',
  /** column name */
  Id = 'id',
  /** column name */
  PersonnelSought = 'personnelSought',
  /** column name */
  Price = 'price',
  /** column name */
  ProjectName = 'projectName',
  /** column name */
  RecruitmentBackground = 'recruitmentBackground',
  /** column name */
  RecruitmentNumber = 'recruitmentNumber',
  /** column name */
  RequiredSkills = 'requiredSkills',
  /** column name */
  WelcomeSkills = 'welcomeSkills',
  /** column name */
  WorkingConditions = 'workingConditions'
}

export type Project_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Project_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Project_Set_Input>;
  /** filter the rows which have to be updated */
  where: Project_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Project_Var_Pop_Fields = {
  __typename?: 'project_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 単価 */
  price?: Maybe<Scalars['Float']['output']>;
  /** 募集人数 */
  recruitmentNumber?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Project_Var_Samp_Fields = {
  __typename?: 'project_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 単価 */
  price?: Maybe<Scalars['Float']['output']>;
  /** 募集人数 */
  recruitmentNumber?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Project_Variance_Fields = {
  __typename?: 'project_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 単価 */
  price?: Maybe<Scalars['Float']['output']>;
  /** 募集人数 */
  recruitmentNumber?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
};


export type Query_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Query_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Query_RootProject_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table in a streaming manner: "project" */
  project_stream: Array<Project>;
};


export type Subscription_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Subscription_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Subscription_RootProject_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProject_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'query_root', project: Array<{ __typename?: 'project', id: number }> };


export const MyQueryDocument = gql`
    query MyQuery {
  project {
    id
  }
}
    `;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(baseOptions?: Apollo.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
      }
export function useMyQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
        }
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQueryQueryResult = Apollo.QueryResult<MyQueryQuery, MyQueryQueryVariables>;