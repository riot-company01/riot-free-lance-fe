/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  name: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
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

/** 開発言語 */
export type Development_Language = {
  __typename?: 'development_language';
  /** An object relationship */
  skill?: Maybe<Skills>;
  skill_id?: Maybe<Scalars['Int']['output']>;
  worl_id: Scalars['Int']['output'];
};

/** order by aggregate values of table "development_language" */
export type Development_Language_Aggregate_Order_By = {
  avg?: InputMaybe<Development_Language_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Development_Language_Max_Order_By>;
  min?: InputMaybe<Development_Language_Min_Order_By>;
  stddev?: InputMaybe<Development_Language_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Development_Language_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Development_Language_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Development_Language_Sum_Order_By>;
  var_pop?: InputMaybe<Development_Language_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Development_Language_Var_Samp_Order_By>;
  variance?: InputMaybe<Development_Language_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "development_language" */
export type Development_Language_Arr_Rel_Insert_Input = {
  data: Array<Development_Language_Insert_Input>;
};

/** order by avg() on columns of table "development_language" */
export type Development_Language_Avg_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  worl_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "development_language". All fields are combined with a logical 'AND'. */
export type Development_Language_Bool_Exp = {
  _and?: InputMaybe<Array<Development_Language_Bool_Exp>>;
  _not?: InputMaybe<Development_Language_Bool_Exp>;
  _or?: InputMaybe<Array<Development_Language_Bool_Exp>>;
  skill?: InputMaybe<Skills_Bool_Exp>;
  skill_id?: InputMaybe<Int_Comparison_Exp>;
  worl_id?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for inserting data into table "development_language" */
export type Development_Language_Insert_Input = {
  skill?: InputMaybe<Skills_Obj_Rel_Insert_Input>;
  skill_id?: InputMaybe<Scalars['Int']['input']>;
  worl_id?: InputMaybe<Scalars['Int']['input']>;
};

/** order by max() on columns of table "development_language" */
export type Development_Language_Max_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  worl_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "development_language" */
export type Development_Language_Min_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  worl_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "development_language" */
export type Development_Language_Mutation_Response = {
  __typename?: 'development_language_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Development_Language>;
};

/** Ordering options when selecting data from "development_language". */
export type Development_Language_Order_By = {
  skill?: InputMaybe<Skills_Order_By>;
  skill_id?: InputMaybe<Order_By>;
  worl_id?: InputMaybe<Order_By>;
};

/** select columns of table "development_language" */
export enum Development_Language_Select_Column {
  /** column name */
  SkillId = 'skill_id',
  /** column name */
  WorlId = 'worl_id'
}

/** order by stddev() on columns of table "development_language" */
export type Development_Language_Stddev_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  worl_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "development_language" */
export type Development_Language_Stddev_Pop_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  worl_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "development_language" */
export type Development_Language_Stddev_Samp_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  worl_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "development_language" */
export type Development_Language_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Development_Language_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Development_Language_Stream_Cursor_Value_Input = {
  skill_id?: InputMaybe<Scalars['Int']['input']>;
  worl_id?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "development_language" */
export type Development_Language_Sum_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  worl_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "development_language" */
export type Development_Language_Var_Pop_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  worl_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "development_language" */
export type Development_Language_Var_Samp_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  worl_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "development_language" */
export type Development_Language_Variance_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  worl_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** insert data into the table: "development_language" */
  insert_development_language?: Maybe<Development_Language_Mutation_Response>;
  /** insert a single row into the table: "development_language" */
  insert_development_language_one?: Maybe<Development_Language>;
  /** insert data into the table: "project" */
  insert_project?: Maybe<Project_Mutation_Response>;
  /** insert a single row into the table: "project" */
  insert_project_one?: Maybe<Project>;
  /** insert data into the table: "skills" */
  insert_skills?: Maybe<Skills_Mutation_Response>;
  /** insert a single row into the table: "skills" */
  insert_skills_one?: Maybe<Skills>;
  /** insert data into the table: "work" */
  insert_work?: Maybe<Work_Mutation_Response>;
  /** insert a single row into the table: "work" */
  insert_work_one?: Maybe<Work>;
};


/** mutation root */
export type Mutation_RootInsert_Development_LanguageArgs = {
  objects: Array<Development_Language_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Development_Language_OneArgs = {
  object: Development_Language_Insert_Input;
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
export type Mutation_RootInsert_SkillsArgs = {
  objects: Array<Skills_Insert_Input>;
  on_conflict?: InputMaybe<Skills_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Skills_OneArgs = {
  object: Skills_Insert_Input;
  on_conflict?: InputMaybe<Skills_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorkArgs = {
  objects: Array<Work_Insert_Input>;
  on_conflict?: InputMaybe<Work_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_OneArgs = {
  object: Work_Insert_Input;
  on_conflict?: InputMaybe<Work_On_Conflict>;
};

/** Boolean expression to compare columns of type "name". All fields are combined with logical 'AND'. */
export type Name_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['name']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['name']['input']>>;
  _eq?: InputMaybe<Array<Scalars['name']['input']>>;
  _gt?: InputMaybe<Array<Scalars['name']['input']>>;
  _gte?: InputMaybe<Array<Scalars['name']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['name']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['name']['input']>>;
  _lte?: InputMaybe<Array<Scalars['name']['input']>>;
  _neq?: InputMaybe<Array<Scalars['name']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['name']['input']>>>;
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

/** 案件情報 */
export type Project = {
  __typename?: 'project';
  /** 業務内容 */
  businessContent?: Maybe<Scalars['String']['output']>;
  /** 事業内容 */
  contentBusiness?: Maybe<Scalars['String']['output']>;
  /** 開発環境 */
  developmentEnvironment?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** キーワード */
  keyword: Array<Scalars['name']['output']>;
  /** 求める人材 */
  personnelSought: Scalars['String']['output'];
  /** 単価 */
  price: Scalars['String']['output'];
  /** 案件名 */
  projectName: Scalars['String']['output'];
  /** 募集背景 */
  recruitmentBackground?: Maybe<Scalars['String']['output']>;
  /** 募集人数 */
  recruitmentNumber: Scalars['String']['output'];
  /** 必須スキル */
  requiredSkills: Scalars['String']['output'];
  riotDetail?: Maybe<Scalars['String']['output']>;
  /** 歓迎スキル */
  welcomeSkills: Scalars['String']['output'];
  /** 稼働条件 */
  workingConditions: Scalars['String']['output'];
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
  keyword?: InputMaybe<Name_Array_Comparison_Exp>;
  personnelSought?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<String_Comparison_Exp>;
  projectName?: InputMaybe<String_Comparison_Exp>;
  recruitmentBackground?: InputMaybe<String_Comparison_Exp>;
  recruitmentNumber?: InputMaybe<String_Comparison_Exp>;
  requiredSkills?: InputMaybe<String_Comparison_Exp>;
  riotDetail?: InputMaybe<String_Comparison_Exp>;
  welcomeSkills?: InputMaybe<String_Comparison_Exp>;
  workingConditions?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "project" */
export enum Project_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectPkey = 'project_pkey'
}

/** input type for inserting data into table "project" */
export type Project_Insert_Input = {
  /** 業務内容 */
  businessContent?: InputMaybe<Scalars['String']['input']>;
  /** 事業内容 */
  contentBusiness?: InputMaybe<Scalars['String']['input']>;
  /** 開発環境 */
  developmentEnvironment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** キーワード */
  keyword?: InputMaybe<Array<Scalars['name']['input']>>;
  /** 求める人材 */
  personnelSought?: InputMaybe<Scalars['String']['input']>;
  /** 単価 */
  price?: InputMaybe<Scalars['String']['input']>;
  /** 案件名 */
  projectName?: InputMaybe<Scalars['String']['input']>;
  /** 募集背景 */
  recruitmentBackground?: InputMaybe<Scalars['String']['input']>;
  /** 募集人数 */
  recruitmentNumber?: InputMaybe<Scalars['String']['input']>;
  /** 必須スキル */
  requiredSkills?: InputMaybe<Scalars['String']['input']>;
  /** 歓迎スキル */
  welcomeSkills?: InputMaybe<Scalars['String']['input']>;
  /** 稼働条件 */
  workingConditions?: InputMaybe<Scalars['String']['input']>;
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
  keyword?: InputMaybe<Order_By>;
  personnelSought?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  projectName?: InputMaybe<Order_By>;
  recruitmentBackground?: InputMaybe<Order_By>;
  recruitmentNumber?: InputMaybe<Order_By>;
  requiredSkills?: InputMaybe<Order_By>;
  riotDetail?: InputMaybe<Order_By>;
  welcomeSkills?: InputMaybe<Order_By>;
  workingConditions?: InputMaybe<Order_By>;
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
  Keyword = 'keyword',
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
  RiotDetail = 'riotDetail',
  /** column name */
  WelcomeSkills = 'welcomeSkills',
  /** column name */
  WorkingConditions = 'workingConditions'
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
  businessContent?: InputMaybe<Scalars['String']['input']>;
  /** 事業内容 */
  contentBusiness?: InputMaybe<Scalars['String']['input']>;
  /** 開発環境 */
  developmentEnvironment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** キーワード */
  keyword?: InputMaybe<Array<Scalars['name']['input']>>;
  /** 求める人材 */
  personnelSought?: InputMaybe<Scalars['String']['input']>;
  /** 単価 */
  price?: InputMaybe<Scalars['String']['input']>;
  /** 案件名 */
  projectName?: InputMaybe<Scalars['String']['input']>;
  /** 募集背景 */
  recruitmentBackground?: InputMaybe<Scalars['String']['input']>;
  /** 募集人数 */
  recruitmentNumber?: InputMaybe<Scalars['String']['input']>;
  /** 必須スキル */
  requiredSkills?: InputMaybe<Scalars['String']['input']>;
  riotDetail?: InputMaybe<Scalars['String']['input']>;
  /** 歓迎スキル */
  welcomeSkills?: InputMaybe<Scalars['String']['input']>;
  /** 稼働条件 */
  workingConditions?: InputMaybe<Scalars['String']['input']>;
};

/** placeholder for update columns of table "project" (current role has no relevant permissions) */
export enum Project_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "development_language" */
  development_language: Array<Development_Language>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "skills" */
  skills: Array<Skills>;
  /** fetch data from the table: "skills" using primary key columns */
  skills_by_pk?: Maybe<Skills>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "work" */
  work: Array<Work>;
  /** fetch data from the table: "work" using primary key columns */
  work_by_pk?: Maybe<Work>;
};


export type Query_RootDevelopment_LanguageArgs = {
  distinct_on?: InputMaybe<Array<Development_Language_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Development_Language_Order_By>>;
  where?: InputMaybe<Development_Language_Bool_Exp>;
};


export type Query_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Query_RootProject_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSkillsArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Query_RootSkills_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootWorkArgs = {
  distinct_on?: InputMaybe<Array<Work_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_Order_By>>;
  where?: InputMaybe<Work_Bool_Exp>;
};


export type Query_RootWork_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** スキル */
export type Skills = {
  __typename?: 'skills';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "skills". All fields are combined with a logical 'AND'. */
export type Skills_Bool_Exp = {
  _and?: InputMaybe<Array<Skills_Bool_Exp>>;
  _not?: InputMaybe<Skills_Bool_Exp>;
  _or?: InputMaybe<Array<Skills_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "skills" */
export enum Skills_Constraint {
  /** unique or primary key constraint on columns "id" */
  SkillsPkey = 'skills_pkey'
}

/** input type for inserting data into table "skills" */
export type Skills_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** response of any mutation on the table "skills" */
export type Skills_Mutation_Response = {
  __typename?: 'skills_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Skills>;
};

/** input type for inserting object relation for remote table "skills" */
export type Skills_Obj_Rel_Insert_Input = {
  data: Skills_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Skills_On_Conflict>;
};

/** on_conflict condition type for table "skills" */
export type Skills_On_Conflict = {
  constraint: Skills_Constraint;
  update_columns?: Array<Skills_Update_Column>;
  where?: InputMaybe<Skills_Bool_Exp>;
};

/** Ordering options when selecting data from "skills". */
export type Skills_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "skills" */
export enum Skills_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "skills" */
export type Skills_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Skills_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Skills_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** placeholder for update columns of table "skills" (current role has no relevant permissions) */
export enum Skills_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "development_language" */
  development_language: Array<Development_Language>;
  /** fetch data from the table in a streaming manner: "development_language" */
  development_language_stream: Array<Development_Language>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table in a streaming manner: "project" */
  project_stream: Array<Project>;
  /** fetch data from the table: "skills" */
  skills: Array<Skills>;
  /** fetch data from the table: "skills" using primary key columns */
  skills_by_pk?: Maybe<Skills>;
  /** fetch data from the table in a streaming manner: "skills" */
  skills_stream: Array<Skills>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "work" */
  work: Array<Work>;
  /** fetch data from the table: "work" using primary key columns */
  work_by_pk?: Maybe<Work>;
  /** fetch data from the table in a streaming manner: "work" */
  work_stream: Array<Work>;
};


export type Subscription_RootDevelopment_LanguageArgs = {
  distinct_on?: InputMaybe<Array<Development_Language_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Development_Language_Order_By>>;
  where?: InputMaybe<Development_Language_Bool_Exp>;
};


export type Subscription_RootDevelopment_Language_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Development_Language_Stream_Cursor_Input>>;
  where?: InputMaybe<Development_Language_Bool_Exp>;
};


export type Subscription_RootProjectArgs = {
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


export type Subscription_RootSkillsArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Subscription_RootSkills_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSkills_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Skills_Stream_Cursor_Input>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootWorkArgs = {
  distinct_on?: InputMaybe<Array<Work_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_Order_By>>;
  where?: InputMaybe<Work_Bool_Exp>;
};


export type Subscription_RootWork_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootWork_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Work_Stream_Cursor_Input>>;
  where?: InputMaybe<Work_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['String']['output'];
  last_seen: Scalars['timestamptz']['output'];
  name: Scalars['String']['output'];
  slackUrl?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slackUrl?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slackUrl?: InputMaybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  SlackUrl = 'slackUrl'
}

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slackUrl?: InputMaybe<Scalars['String']['input']>;
};

/** 案件一覧を管理するテーブル */
export type Work = {
  __typename?: 'work';
  contractType?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  developmentLanguages: Array<Development_Language>;
  id: Scalars['Int']['output'];
  location?: Maybe<Scalars['String']['output']>;
  maxMonthlyPrice?: Maybe<Scalars['Int']['output']>;
  maxWorkHours?: Maybe<Scalars['Int']['output']>;
  minMonthlyPrice?: Maybe<Scalars['Int']['output']>;
  minWorkHours?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
};


/** 案件一覧を管理するテーブル */
export type WorkDevelopmentLanguagesArgs = {
  distinct_on?: InputMaybe<Array<Development_Language_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Development_Language_Order_By>>;
  where?: InputMaybe<Development_Language_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "work". All fields are combined with a logical 'AND'. */
export type Work_Bool_Exp = {
  _and?: InputMaybe<Array<Work_Bool_Exp>>;
  _not?: InputMaybe<Work_Bool_Exp>;
  _or?: InputMaybe<Array<Work_Bool_Exp>>;
  contractType?: InputMaybe<String_Comparison_Exp>;
  developmentLanguages?: InputMaybe<Development_Language_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  maxMonthlyPrice?: InputMaybe<Int_Comparison_Exp>;
  maxWorkHours?: InputMaybe<Int_Comparison_Exp>;
  minMonthlyPrice?: InputMaybe<Int_Comparison_Exp>;
  minWorkHours?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "work" */
export enum Work_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkPkey = 'work_pkey'
}

/** input type for inserting data into table "work" */
export type Work_Insert_Input = {
  contractType?: InputMaybe<Scalars['String']['input']>;
  developmentLanguages?: InputMaybe<Development_Language_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxMonthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  maxWorkHours?: InputMaybe<Scalars['Int']['input']>;
  minMonthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  minWorkHours?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** response of any mutation on the table "work" */
export type Work_Mutation_Response = {
  __typename?: 'work_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Work>;
};

/** on_conflict condition type for table "work" */
export type Work_On_Conflict = {
  constraint: Work_Constraint;
  update_columns?: Array<Work_Update_Column>;
  where?: InputMaybe<Work_Bool_Exp>;
};

/** Ordering options when selecting data from "work". */
export type Work_Order_By = {
  contractType?: InputMaybe<Order_By>;
  developmentLanguages_aggregate?: InputMaybe<Development_Language_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  maxMonthlyPrice?: InputMaybe<Order_By>;
  maxWorkHours?: InputMaybe<Order_By>;
  minMonthlyPrice?: InputMaybe<Order_By>;
  minWorkHours?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "work" */
export enum Work_Select_Column {
  /** column name */
  ContractType = 'contractType',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  MaxMonthlyPrice = 'maxMonthlyPrice',
  /** column name */
  MaxWorkHours = 'maxWorkHours',
  /** column name */
  MinMonthlyPrice = 'minMonthlyPrice',
  /** column name */
  MinWorkHours = 'minWorkHours',
  /** column name */
  Title = 'title'
}

/** Streaming cursor of the table "work" */
export type Work_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Work_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Work_Stream_Cursor_Value_Input = {
  contractType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxMonthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  maxWorkHours?: InputMaybe<Scalars['Int']['input']>;
  minMonthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  minWorkHours?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** placeholder for update columns of table "work" (current role has no relevant permissions) */
export enum Work_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

export type GetAllProjectQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProjectQuery = { __typename?: 'query_root', project: Array<{ __typename?: 'project', id: number, keyword: Array<any>, projectName: string, price: string }> };

export type GetDetailProjectQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetDetailProjectQuery = { __typename?: 'query_root', project: Array<{ __typename?: 'project', id: number, businessContent?: string | null, contentBusiness?: string | null, developmentEnvironment?: string | null, keyword: Array<any>, personnelSought: string, price: string, projectName: string, recruitmentBackground?: string | null, recruitmentNumber: string, requiredSkills: string, welcomeSkills: string, workingConditions: string }> };

export type GetSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkillsQuery = { __typename?: 'query_root', skills: Array<{ __typename?: 'skills', id: number, name?: string | null, type?: string | null }> };

export type GetUserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name: string, last_seen: any, slackUrl?: string | null }> };

export type GetWorkQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkQuery = { __typename?: 'query_root', work: Array<{ __typename?: 'work', contractType?: string | null, id: number, location?: string | null, maxMonthlyPrice?: number | null, maxWorkHours?: number | null, minMonthlyPrice?: number | null, minWorkHours?: number | null, title: string, developmentLanguages: Array<{ __typename?: 'development_language', skill?: { __typename?: 'skills', name?: string | null, type?: string | null, id: number } | null }> }> };


export const GetAllProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllProject"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keyword"}},{"kind":"Field","name":{"kind":"Name","value":"projectName"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<GetAllProjectQuery, GetAllProjectQueryVariables>;
export const GetDetailProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDetailProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"businessContent"}},{"kind":"Field","name":{"kind":"Name","value":"contentBusiness"}},{"kind":"Field","name":{"kind":"Name","value":"developmentEnvironment"}},{"kind":"Field","name":{"kind":"Name","value":"keyword"}},{"kind":"Field","name":{"kind":"Name","value":"personnelSought"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"projectName"}},{"kind":"Field","name":{"kind":"Name","value":"recruitmentBackground"}},{"kind":"Field","name":{"kind":"Name","value":"recruitmentNumber"}},{"kind":"Field","name":{"kind":"Name","value":"requiredSkills"}},{"kind":"Field","name":{"kind":"Name","value":"welcomeSkills"}},{"kind":"Field","name":{"kind":"Name","value":"workingConditions"}}]}}]}}]} as unknown as DocumentNode<GetDetailProjectQuery, GetDetailProjectQueryVariables>;
export const GetSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<GetSkillsQuery, GetSkillsQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"last_seen"}},{"kind":"Field","name":{"kind":"Name","value":"slackUrl"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetWorkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWork"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"work"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"maxMonthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxWorkHours"}},{"kind":"Field","name":{"kind":"Name","value":"minMonthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"minWorkHours"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"developmentLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetWorkQuery, GetWorkQueryVariables>;