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
  date: { input: any; output: any; }
  name: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
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
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
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

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** 都道府県 */
export type Location = {
  __typename?: 'location';
  city: Scalars['String']['output'];
  nearestStation?: Maybe<Scalars['String']['output']>;
  prefecture: Scalars['String']['output'];
};

/** aggregated selection of "location" */
export type Location_Aggregate = {
  __typename?: 'location_aggregate';
  aggregate?: Maybe<Location_Aggregate_Fields>;
  nodes: Array<Location>;
};

/** aggregate fields of "location" */
export type Location_Aggregate_Fields = {
  __typename?: 'location_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Location_Max_Fields>;
  min?: Maybe<Location_Min_Fields>;
};


/** aggregate fields of "location" */
export type Location_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Location_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type Location_Bool_Exp = {
  _and?: InputMaybe<Array<Location_Bool_Exp>>;
  _not?: InputMaybe<Location_Bool_Exp>;
  _or?: InputMaybe<Array<Location_Bool_Exp>>;
  city?: InputMaybe<String_Comparison_Exp>;
  nearestStation?: InputMaybe<String_Comparison_Exp>;
  prefecture?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "location" */
export enum Location_Constraint {
  /** unique or primary key constraint on columns "prefecture" */
  PrefecturePkey = 'prefecture_pkey'
}

/** input type for inserting data into table "location" */
export type Location_Insert_Input = {
  city?: InputMaybe<Scalars['String']['input']>;
  nearestStation?: InputMaybe<Scalars['String']['input']>;
  prefecture?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Location_Max_Fields = {
  __typename?: 'location_max_fields';
  city?: Maybe<Scalars['String']['output']>;
  nearestStation?: Maybe<Scalars['String']['output']>;
  prefecture?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Location_Min_Fields = {
  __typename?: 'location_min_fields';
  city?: Maybe<Scalars['String']['output']>;
  nearestStation?: Maybe<Scalars['String']['output']>;
  prefecture?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "location" */
export type Location_Mutation_Response = {
  __typename?: 'location_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Location>;
};

/** on_conflict condition type for table "location" */
export type Location_On_Conflict = {
  constraint: Location_Constraint;
  update_columns?: Array<Location_Update_Column>;
  where?: InputMaybe<Location_Bool_Exp>;
};

/** Ordering options when selecting data from "location". */
export type Location_Order_By = {
  city?: InputMaybe<Order_By>;
  nearestStation?: InputMaybe<Order_By>;
  prefecture?: InputMaybe<Order_By>;
};

/** primary key columns input for table: location */
export type Location_Pk_Columns_Input = {
  prefecture: Scalars['String']['input'];
};

/** select columns of table "location" */
export enum Location_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  NearestStation = 'nearestStation',
  /** column name */
  Prefecture = 'prefecture'
}

/** input type for updating data in table "location" */
export type Location_Set_Input = {
  city?: InputMaybe<Scalars['String']['input']>;
  nearestStation?: InputMaybe<Scalars['String']['input']>;
  prefecture?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "location" */
export type Location_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Location_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Location_Stream_Cursor_Value_Input = {
  city?: InputMaybe<Scalars['String']['input']>;
  nearestStation?: InputMaybe<Scalars['String']['input']>;
  prefecture?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "location" */
export enum Location_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  NearestStation = 'nearestStation',
  /** column name */
  Prefecture = 'prefecture'
}

export type Location_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Location_Set_Input>;
  /** filter the rows which have to be updated */
  where: Location_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "location" */
  delete_location?: Maybe<Location_Mutation_Response>;
  /** delete single row from the table: "location" */
  delete_location_by_pk?: Maybe<Location>;
  /** delete data from the table: "project" */
  delete_project?: Maybe<Project_Mutation_Response>;
  /** delete single row from the table: "project" */
  delete_project_by_pk?: Maybe<Project>;
  /** delete data from the table: "search" */
  delete_search?: Maybe<Search_Mutation_Response>;
  /** delete single row from the table: "search" */
  delete_search_by_pk?: Maybe<Search>;
  /** delete data from the table: "skills" */
  delete_skills?: Maybe<Skills_Mutation_Response>;
  /** delete single row from the table: "skills" */
  delete_skills_by_pk?: Maybe<Skills>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "work_to_detail" */
  delete_work_to_detail?: Maybe<Work_To_Detail_Mutation_Response>;
  /** delete single row from the table: "work_to_detail" */
  delete_work_to_detail_by_pk?: Maybe<Work_To_Detail>;
  /** delete data from the table: "works" */
  delete_works?: Maybe<Works_Mutation_Response>;
  /** delete single row from the table: "works" */
  delete_works_by_pk?: Maybe<Works>;
  /** insert data into the table: "location" */
  insert_location?: Maybe<Location_Mutation_Response>;
  /** insert a single row into the table: "location" */
  insert_location_one?: Maybe<Location>;
  /** insert data into the table: "project" */
  insert_project?: Maybe<Project_Mutation_Response>;
  /** insert a single row into the table: "project" */
  insert_project_one?: Maybe<Project>;
  /** insert data into the table: "search" */
  insert_search?: Maybe<Search_Mutation_Response>;
  /** insert a single row into the table: "search" */
  insert_search_one?: Maybe<Search>;
  /** insert data into the table: "skills" */
  insert_skills?: Maybe<Skills_Mutation_Response>;
  /** insert a single row into the table: "skills" */
  insert_skills_one?: Maybe<Skills>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "work_to_detail" */
  insert_work_to_detail?: Maybe<Work_To_Detail_Mutation_Response>;
  /** insert a single row into the table: "work_to_detail" */
  insert_work_to_detail_one?: Maybe<Work_To_Detail>;
  /** insert data into the table: "works" */
  insert_works?: Maybe<Works_Mutation_Response>;
  /** insert a single row into the table: "works" */
  insert_works_one?: Maybe<Works>;
  /** update data of the table: "location" */
  update_location?: Maybe<Location_Mutation_Response>;
  /** update single row of the table: "location" */
  update_location_by_pk?: Maybe<Location>;
  /** update multiples rows of table: "location" */
  update_location_many?: Maybe<Array<Maybe<Location_Mutation_Response>>>;
  /** update data of the table: "project" */
  update_project?: Maybe<Project_Mutation_Response>;
  /** update single row of the table: "project" */
  update_project_by_pk?: Maybe<Project>;
  /** update multiples rows of table: "project" */
  update_project_many?: Maybe<Array<Maybe<Project_Mutation_Response>>>;
  /** update data of the table: "search" */
  update_search?: Maybe<Search_Mutation_Response>;
  /** update single row of the table: "search" */
  update_search_by_pk?: Maybe<Search>;
  /** update multiples rows of table: "search" */
  update_search_many?: Maybe<Array<Maybe<Search_Mutation_Response>>>;
  /** update data of the table: "skills" */
  update_skills?: Maybe<Skills_Mutation_Response>;
  /** update single row of the table: "skills" */
  update_skills_by_pk?: Maybe<Skills>;
  /** update multiples rows of table: "skills" */
  update_skills_many?: Maybe<Array<Maybe<Skills_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "work_to_detail" */
  update_work_to_detail?: Maybe<Work_To_Detail_Mutation_Response>;
  /** update single row of the table: "work_to_detail" */
  update_work_to_detail_by_pk?: Maybe<Work_To_Detail>;
  /** update multiples rows of table: "work_to_detail" */
  update_work_to_detail_many?: Maybe<Array<Maybe<Work_To_Detail_Mutation_Response>>>;
  /** update data of the table: "works" */
  update_works?: Maybe<Works_Mutation_Response>;
  /** update single row of the table: "works" */
  update_works_by_pk?: Maybe<Works>;
  /** update multiples rows of table: "works" */
  update_works_many?: Maybe<Array<Maybe<Works_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_LocationArgs = {
  where: Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Location_By_PkArgs = {
  prefecture: Scalars['String']['input'];
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
export type Mutation_RootDelete_SearchArgs = {
  where: Search_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Search_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SkillsArgs = {
  where: Skills_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Skills_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Work_To_DetailArgs = {
  where: Work_To_Detail_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_To_Detail_By_PkArgs = {
  skill_id: Scalars['Int']['input'];
  work_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_WorksArgs = {
  where: Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Works_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_LocationArgs = {
  objects: Array<Location_Insert_Input>;
  on_conflict?: InputMaybe<Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Location_OneArgs = {
  object: Location_Insert_Input;
  on_conflict?: InputMaybe<Location_On_Conflict>;
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
export type Mutation_RootInsert_SearchArgs = {
  objects: Array<Search_Insert_Input>;
  on_conflict?: InputMaybe<Search_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Search_OneArgs = {
  object: Search_Insert_Input;
  on_conflict?: InputMaybe<Search_On_Conflict>;
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
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_To_DetailArgs = {
  objects: Array<Work_To_Detail_Insert_Input>;
  on_conflict?: InputMaybe<Work_To_Detail_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_To_Detail_OneArgs = {
  object: Work_To_Detail_Insert_Input;
  on_conflict?: InputMaybe<Work_To_Detail_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorksArgs = {
  objects: Array<Works_Insert_Input>;
  on_conflict?: InputMaybe<Works_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Works_OneArgs = {
  object: Works_Insert_Input;
  on_conflict?: InputMaybe<Works_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_LocationArgs = {
  _set?: InputMaybe<Location_Set_Input>;
  where: Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Location_By_PkArgs = {
  _set?: InputMaybe<Location_Set_Input>;
  pk_columns: Location_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Location_ManyArgs = {
  updates: Array<Location_Updates>;
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


/** mutation root */
export type Mutation_RootUpdate_SearchArgs = {
  _inc?: InputMaybe<Search_Inc_Input>;
  _set?: InputMaybe<Search_Set_Input>;
  where: Search_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Search_By_PkArgs = {
  _inc?: InputMaybe<Search_Inc_Input>;
  _set?: InputMaybe<Search_Set_Input>;
  pk_columns: Search_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Search_ManyArgs = {
  updates: Array<Search_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SkillsArgs = {
  _inc?: InputMaybe<Skills_Inc_Input>;
  _set?: InputMaybe<Skills_Set_Input>;
  where: Skills_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Skills_By_PkArgs = {
  _inc?: InputMaybe<Skills_Inc_Input>;
  _set?: InputMaybe<Skills_Set_Input>;
  pk_columns: Skills_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Skills_ManyArgs = {
  updates: Array<Skills_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Work_To_DetailArgs = {
  _inc?: InputMaybe<Work_To_Detail_Inc_Input>;
  _set?: InputMaybe<Work_To_Detail_Set_Input>;
  where: Work_To_Detail_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_To_Detail_By_PkArgs = {
  _inc?: InputMaybe<Work_To_Detail_Inc_Input>;
  _set?: InputMaybe<Work_To_Detail_Set_Input>;
  pk_columns: Work_To_Detail_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_To_Detail_ManyArgs = {
  updates: Array<Work_To_Detail_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorksArgs = {
  _inc?: InputMaybe<Works_Inc_Input>;
  _set?: InputMaybe<Works_Set_Input>;
  where: Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Works_By_PkArgs = {
  _inc?: InputMaybe<Works_Inc_Input>;
  _set?: InputMaybe<Works_Set_Input>;
  pk_columns: Works_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Works_ManyArgs = {
  updates: Array<Works_Updates>;
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
  showFlag: Scalars['Boolean']['output'];
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
  showFlag?: InputMaybe<Boolean_Comparison_Exp>;
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
  showFlag?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** キーワード */
  keyword?: Maybe<Array<Scalars['name']['output']>>;
  /** 求める人材 */
  personnelSought?: Maybe<Scalars['String']['output']>;
  /** 単価 */
  price?: Maybe<Scalars['String']['output']>;
  /** 案件名 */
  projectName?: Maybe<Scalars['String']['output']>;
  /** 募集背景 */
  recruitmentBackground?: Maybe<Scalars['String']['output']>;
  /** 募集人数 */
  recruitmentNumber?: Maybe<Scalars['String']['output']>;
  /** 必須スキル */
  requiredSkills?: Maybe<Scalars['String']['output']>;
  riotDetail?: Maybe<Scalars['String']['output']>;
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
  /** キーワード */
  keyword?: Maybe<Array<Scalars['name']['output']>>;
  /** 求める人材 */
  personnelSought?: Maybe<Scalars['String']['output']>;
  /** 単価 */
  price?: Maybe<Scalars['String']['output']>;
  /** 案件名 */
  projectName?: Maybe<Scalars['String']['output']>;
  /** 募集背景 */
  recruitmentBackground?: Maybe<Scalars['String']['output']>;
  /** 募集人数 */
  recruitmentNumber?: Maybe<Scalars['String']['output']>;
  /** 必須スキル */
  requiredSkills?: Maybe<Scalars['String']['output']>;
  riotDetail?: Maybe<Scalars['String']['output']>;
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
  keyword?: InputMaybe<Order_By>;
  personnelSought?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  projectName?: InputMaybe<Order_By>;
  recruitmentBackground?: InputMaybe<Order_By>;
  recruitmentNumber?: InputMaybe<Order_By>;
  requiredSkills?: InputMaybe<Order_By>;
  riotDetail?: InputMaybe<Order_By>;
  showFlag?: InputMaybe<Order_By>;
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
  ShowFlag = 'showFlag',
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
  showFlag?: InputMaybe<Scalars['Boolean']['input']>;
  /** 歓迎スキル */
  welcomeSkills?: InputMaybe<Scalars['String']['input']>;
  /** 稼働条件 */
  workingConditions?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Project_Stddev_Fields = {
  __typename?: 'project_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Project_Stddev_Pop_Fields = {
  __typename?: 'project_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Project_Stddev_Samp_Fields = {
  __typename?: 'project_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
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
  showFlag?: InputMaybe<Scalars['Boolean']['input']>;
  /** 歓迎スキル */
  welcomeSkills?: InputMaybe<Scalars['String']['input']>;
  /** 稼働条件 */
  workingConditions?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Project_Sum_Fields = {
  __typename?: 'project_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
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
  ShowFlag = 'showFlag',
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
};

/** aggregate var_samp on columns */
export type Project_Var_Samp_Fields = {
  __typename?: 'project_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Project_Variance_Fields = {
  __typename?: 'project_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "search" */
  search: Array<Search>;
  /** fetch aggregated fields from the table: "search" */
  search_aggregate: Search_Aggregate;
  /** fetch data from the table: "search" using primary key columns */
  search_by_pk?: Maybe<Search>;
  /** fetch data from the table: "skills" */
  skills: Array<Skills>;
  /** fetch aggregated fields from the table: "skills" */
  skills_aggregate: Skills_Aggregate;
  /** fetch data from the table: "skills" using primary key columns */
  skills_by_pk?: Maybe<Skills>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "work_to_detail" */
  work_to_detail: Array<Work_To_Detail>;
  /** fetch aggregated fields from the table: "work_to_detail" */
  work_to_detail_aggregate: Work_To_Detail_Aggregate;
  /** fetch data from the table: "work_to_detail" using primary key columns */
  work_to_detail_by_pk?: Maybe<Work_To_Detail>;
  /** fetch data from the table: "works" */
  works: Array<Works>;
  /** fetch aggregated fields from the table: "works" */
  works_aggregate: Works_Aggregate;
  /** fetch data from the table: "works" using primary key columns */
  works_by_pk?: Maybe<Works>;
};


export type Query_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_By_PkArgs = {
  prefecture: Scalars['String']['input'];
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


export type Query_RootSearchArgs = {
  distinct_on?: InputMaybe<Array<Search_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Search_Order_By>>;
  where?: InputMaybe<Search_Bool_Exp>;
};


export type Query_RootSearch_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Search_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Search_Order_By>>;
  where?: InputMaybe<Search_Bool_Exp>;
};


export type Query_RootSearch_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSkillsArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Query_RootSkills_AggregateArgs = {
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


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootWork_To_DetailArgs = {
  distinct_on?: InputMaybe<Array<Work_To_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_To_Detail_Order_By>>;
  where?: InputMaybe<Work_To_Detail_Bool_Exp>;
};


export type Query_RootWork_To_Detail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_To_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_To_Detail_Order_By>>;
  where?: InputMaybe<Work_To_Detail_Bool_Exp>;
};


export type Query_RootWork_To_Detail_By_PkArgs = {
  skill_id: Scalars['Int']['input'];
  work_id: Scalars['Int']['input'];
};


export type Query_RootWorksArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootWorks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootWorks_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** 検索するテーブル */
export type Search = {
  __typename?: 'search';
  id: Scalars['Int']['output'];
};

/** aggregated selection of "search" */
export type Search_Aggregate = {
  __typename?: 'search_aggregate';
  aggregate?: Maybe<Search_Aggregate_Fields>;
  nodes: Array<Search>;
};

/** aggregate fields of "search" */
export type Search_Aggregate_Fields = {
  __typename?: 'search_aggregate_fields';
  avg?: Maybe<Search_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Search_Max_Fields>;
  min?: Maybe<Search_Min_Fields>;
  stddev?: Maybe<Search_Stddev_Fields>;
  stddev_pop?: Maybe<Search_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Search_Stddev_Samp_Fields>;
  sum?: Maybe<Search_Sum_Fields>;
  var_pop?: Maybe<Search_Var_Pop_Fields>;
  var_samp?: Maybe<Search_Var_Samp_Fields>;
  variance?: Maybe<Search_Variance_Fields>;
};


/** aggregate fields of "search" */
export type Search_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Search_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Search_Avg_Fields = {
  __typename?: 'search_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "search". All fields are combined with a logical 'AND'. */
export type Search_Bool_Exp = {
  _and?: InputMaybe<Array<Search_Bool_Exp>>;
  _not?: InputMaybe<Search_Bool_Exp>;
  _or?: InputMaybe<Array<Search_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "search" */
export enum Search_Constraint {
  /** unique or primary key constraint on columns "id" */
  SearchPkey = 'search_pkey'
}

/** input type for incrementing numeric columns in table "search" */
export type Search_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "search" */
export type Search_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Search_Max_Fields = {
  __typename?: 'search_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Search_Min_Fields = {
  __typename?: 'search_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "search" */
export type Search_Mutation_Response = {
  __typename?: 'search_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Search>;
};

/** on_conflict condition type for table "search" */
export type Search_On_Conflict = {
  constraint: Search_Constraint;
  update_columns?: Array<Search_Update_Column>;
  where?: InputMaybe<Search_Bool_Exp>;
};

/** Ordering options when selecting data from "search". */
export type Search_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: search */
export type Search_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "search" */
export enum Search_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "search" */
export type Search_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Search_Stddev_Fields = {
  __typename?: 'search_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Search_Stddev_Pop_Fields = {
  __typename?: 'search_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Search_Stddev_Samp_Fields = {
  __typename?: 'search_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "search" */
export type Search_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Search_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Search_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Search_Sum_Fields = {
  __typename?: 'search_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "search" */
export enum Search_Update_Column {
  /** column name */
  Id = 'id'
}

export type Search_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Search_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Search_Set_Input>;
  /** filter the rows which have to be updated */
  where: Search_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Search_Var_Pop_Fields = {
  __typename?: 'search_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Search_Var_Samp_Fields = {
  __typename?: 'search_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Search_Variance_Fields = {
  __typename?: 'search_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** スキル */
export type Skills = {
  __typename?: 'skills';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  works: Array<Work_To_Detail>;
  /** An aggregate relationship */
  works_aggregate: Work_To_Detail_Aggregate;
};


/** スキル */
export type SkillsWorksArgs = {
  distinct_on?: InputMaybe<Array<Work_To_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_To_Detail_Order_By>>;
  where?: InputMaybe<Work_To_Detail_Bool_Exp>;
};


/** スキル */
export type SkillsWorks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_To_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_To_Detail_Order_By>>;
  where?: InputMaybe<Work_To_Detail_Bool_Exp>;
};

/** aggregated selection of "skills" */
export type Skills_Aggregate = {
  __typename?: 'skills_aggregate';
  aggregate?: Maybe<Skills_Aggregate_Fields>;
  nodes: Array<Skills>;
};

/** aggregate fields of "skills" */
export type Skills_Aggregate_Fields = {
  __typename?: 'skills_aggregate_fields';
  avg?: Maybe<Skills_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Skills_Max_Fields>;
  min?: Maybe<Skills_Min_Fields>;
  stddev?: Maybe<Skills_Stddev_Fields>;
  stddev_pop?: Maybe<Skills_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Skills_Stddev_Samp_Fields>;
  sum?: Maybe<Skills_Sum_Fields>;
  var_pop?: Maybe<Skills_Var_Pop_Fields>;
  var_samp?: Maybe<Skills_Var_Samp_Fields>;
  variance?: Maybe<Skills_Variance_Fields>;
};


/** aggregate fields of "skills" */
export type Skills_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Skills_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Skills_Avg_Fields = {
  __typename?: 'skills_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "skills". All fields are combined with a logical 'AND'. */
export type Skills_Bool_Exp = {
  _and?: InputMaybe<Array<Skills_Bool_Exp>>;
  _not?: InputMaybe<Skills_Bool_Exp>;
  _or?: InputMaybe<Array<Skills_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  works?: InputMaybe<Work_To_Detail_Bool_Exp>;
  works_aggregate?: InputMaybe<Work_To_Detail_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "skills" */
export enum Skills_Constraint {
  /** unique or primary key constraint on columns "id" */
  SkillsPkey = 'skills_pkey'
}

/** input type for incrementing numeric columns in table "skills" */
export type Skills_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "skills" */
export type Skills_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  works?: InputMaybe<Work_To_Detail_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Skills_Max_Fields = {
  __typename?: 'skills_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Skills_Min_Fields = {
  __typename?: 'skills_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
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
  works_aggregate?: InputMaybe<Work_To_Detail_Aggregate_Order_By>;
};

/** primary key columns input for table: skills */
export type Skills_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
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

/** input type for updating data in table "skills" */
export type Skills_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Skills_Stddev_Fields = {
  __typename?: 'skills_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Skills_Stddev_Pop_Fields = {
  __typename?: 'skills_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Skills_Stddev_Samp_Fields = {
  __typename?: 'skills_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

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

/** aggregate sum on columns */
export type Skills_Sum_Fields = {
  __typename?: 'skills_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "skills" */
export enum Skills_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

export type Skills_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Skills_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Skills_Set_Input>;
  /** filter the rows which have to be updated */
  where: Skills_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Skills_Var_Pop_Fields = {
  __typename?: 'skills_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Skills_Var_Samp_Fields = {
  __typename?: 'skills_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Skills_Variance_Fields = {
  __typename?: 'skills_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table in a streaming manner: "location" */
  location_stream: Array<Location>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table in a streaming manner: "project" */
  project_stream: Array<Project>;
  /** fetch data from the table: "search" */
  search: Array<Search>;
  /** fetch aggregated fields from the table: "search" */
  search_aggregate: Search_Aggregate;
  /** fetch data from the table: "search" using primary key columns */
  search_by_pk?: Maybe<Search>;
  /** fetch data from the table in a streaming manner: "search" */
  search_stream: Array<Search>;
  /** fetch data from the table: "skills" */
  skills: Array<Skills>;
  /** fetch aggregated fields from the table: "skills" */
  skills_aggregate: Skills_Aggregate;
  /** fetch data from the table: "skills" using primary key columns */
  skills_by_pk?: Maybe<Skills>;
  /** fetch data from the table in a streaming manner: "skills" */
  skills_stream: Array<Skills>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "work_to_detail" */
  work_to_detail: Array<Work_To_Detail>;
  /** fetch aggregated fields from the table: "work_to_detail" */
  work_to_detail_aggregate: Work_To_Detail_Aggregate;
  /** fetch data from the table: "work_to_detail" using primary key columns */
  work_to_detail_by_pk?: Maybe<Work_To_Detail>;
  /** fetch data from the table in a streaming manner: "work_to_detail" */
  work_to_detail_stream: Array<Work_To_Detail>;
  /** fetch data from the table: "works" */
  works: Array<Works>;
  /** fetch aggregated fields from the table: "works" */
  works_aggregate: Works_Aggregate;
  /** fetch data from the table: "works" using primary key columns */
  works_by_pk?: Maybe<Works>;
  /** fetch data from the table in a streaming manner: "works" */
  works_stream: Array<Works>;
};


export type Subscription_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_By_PkArgs = {
  prefecture: Scalars['String']['input'];
};


export type Subscription_RootLocation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Location_Stream_Cursor_Input>>;
  where?: InputMaybe<Location_Bool_Exp>;
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


export type Subscription_RootSearchArgs = {
  distinct_on?: InputMaybe<Array<Search_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Search_Order_By>>;
  where?: InputMaybe<Search_Bool_Exp>;
};


export type Subscription_RootSearch_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Search_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Search_Order_By>>;
  where?: InputMaybe<Search_Bool_Exp>;
};


export type Subscription_RootSearch_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSearch_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Search_Stream_Cursor_Input>>;
  where?: InputMaybe<Search_Bool_Exp>;
};


export type Subscription_RootSkillsArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Subscription_RootSkills_AggregateArgs = {
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


export type Subscription_RootUsers_AggregateArgs = {
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


export type Subscription_RootWork_To_DetailArgs = {
  distinct_on?: InputMaybe<Array<Work_To_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_To_Detail_Order_By>>;
  where?: InputMaybe<Work_To_Detail_Bool_Exp>;
};


export type Subscription_RootWork_To_Detail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_To_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_To_Detail_Order_By>>;
  where?: InputMaybe<Work_To_Detail_Bool_Exp>;
};


export type Subscription_RootWork_To_Detail_By_PkArgs = {
  skill_id: Scalars['Int']['input'];
  work_id: Scalars['Int']['input'];
};


export type Subscription_RootWork_To_Detail_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Work_To_Detail_Stream_Cursor_Input>>;
  where?: InputMaybe<Work_To_Detail_Bool_Exp>;
};


export type Subscription_RootWorksArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootWorks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootWorks_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootWorks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Works_Stream_Cursor_Input>>;
  where?: InputMaybe<Works_Bool_Exp>;
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
  amount_of_money?: Maybe<Scalars['String']['output']>;
  available_day?: Maybe<Scalars['String']['output']>;
  birthday_day: Scalars['String']['output'];
  birthday_mounth: Scalars['String']['output'];
  birthday_year: Scalars['String']['output'];
  commuting_time?: Maybe<Scalars['String']['output']>;
  current_situation: Scalars['String']['output'];
  desired_industries?: Maybe<Array<Scalars['String']['output']>>;
  desired_occupation?: Maybe<Array<Scalars['String']['output']>>;
  desired_skills?: Maybe<Array<Scalars['String']['output']>>;
  file_data?: Maybe<Scalars['String']['output']>;
  file_name?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  first_name_kana?: Maybe<Scalars['String']['output']>;
  frame_work?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  industries?: Maybe<Array<Scalars['String']['output']>>;
  language_libraries?: Maybe<Array<Scalars['String']['output']>>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_name_kana?: Maybe<Scalars['String']['output']>;
  last_seen: Scalars['timestamptz']['output'];
  mail?: Maybe<Scalars['String']['output']>;
  mode_of_operation?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  portfolio?: Maybe<Scalars['String']['output']>;
  prefectures: Scalars['String']['output'];
  preferred_place_of_work?: Maybe<Scalars['String']['output']>;
  professional_experience?: Maybe<Array<Scalars['String']['output']>>;
  project_start_mounth: Scalars['String']['output'];
  project_start_time?: Maybe<Scalars['String']['output']>;
  project_start_year: Scalars['String']['output'];
  self_pr?: Maybe<Scalars['String']['output']>;
  slackUrl?: Maybe<Scalars['String']['output']>;
  tel?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  amount_of_money?: InputMaybe<String_Comparison_Exp>;
  available_day?: InputMaybe<String_Comparison_Exp>;
  birthday_day?: InputMaybe<String_Comparison_Exp>;
  birthday_mounth?: InputMaybe<String_Comparison_Exp>;
  birthday_year?: InputMaybe<String_Comparison_Exp>;
  commuting_time?: InputMaybe<String_Comparison_Exp>;
  current_situation?: InputMaybe<String_Comparison_Exp>;
  desired_industries?: InputMaybe<String_Array_Comparison_Exp>;
  desired_occupation?: InputMaybe<String_Array_Comparison_Exp>;
  desired_skills?: InputMaybe<String_Array_Comparison_Exp>;
  file_data?: InputMaybe<String_Comparison_Exp>;
  file_name?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  first_name_kana?: InputMaybe<String_Comparison_Exp>;
  frame_work?: InputMaybe<String_Array_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  industries?: InputMaybe<String_Array_Comparison_Exp>;
  language_libraries?: InputMaybe<String_Array_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  last_name_kana?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  mail?: InputMaybe<String_Comparison_Exp>;
  mode_of_operation?: InputMaybe<String_Array_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  portfolio?: InputMaybe<String_Comparison_Exp>;
  prefectures?: InputMaybe<String_Comparison_Exp>;
  preferred_place_of_work?: InputMaybe<String_Comparison_Exp>;
  professional_experience?: InputMaybe<String_Array_Comparison_Exp>;
  project_start_mounth?: InputMaybe<String_Comparison_Exp>;
  project_start_time?: InputMaybe<String_Comparison_Exp>;
  project_start_year?: InputMaybe<String_Comparison_Exp>;
  self_pr?: InputMaybe<String_Comparison_Exp>;
  slackUrl?: InputMaybe<String_Comparison_Exp>;
  tel?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  amount_of_money?: InputMaybe<Scalars['String']['input']>;
  available_day?: InputMaybe<Scalars['String']['input']>;
  birthday_day?: InputMaybe<Scalars['String']['input']>;
  birthday_mounth?: InputMaybe<Scalars['String']['input']>;
  birthday_year?: InputMaybe<Scalars['String']['input']>;
  commuting_time?: InputMaybe<Scalars['String']['input']>;
  current_situation?: InputMaybe<Scalars['String']['input']>;
  desired_industries?: InputMaybe<Array<Scalars['String']['input']>>;
  desired_occupation?: InputMaybe<Array<Scalars['String']['input']>>;
  desired_skills?: InputMaybe<Array<Scalars['String']['input']>>;
  file_data?: InputMaybe<Scalars['String']['input']>;
  file_name?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  first_name_kana?: InputMaybe<Scalars['String']['input']>;
  frame_work?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  language_libraries?: InputMaybe<Array<Scalars['String']['input']>>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_name_kana?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  mode_of_operation?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  portfolio?: InputMaybe<Scalars['String']['input']>;
  prefectures?: InputMaybe<Scalars['String']['input']>;
  preferred_place_of_work?: InputMaybe<Scalars['String']['input']>;
  professional_experience?: InputMaybe<Array<Scalars['String']['input']>>;
  project_start_mounth?: InputMaybe<Scalars['String']['input']>;
  project_start_time?: InputMaybe<Scalars['String']['input']>;
  project_start_year?: InputMaybe<Scalars['String']['input']>;
  self_pr?: InputMaybe<Scalars['String']['input']>;
  slackUrl?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  amount_of_money?: Maybe<Scalars['String']['output']>;
  available_day?: Maybe<Scalars['String']['output']>;
  birthday_day?: Maybe<Scalars['String']['output']>;
  birthday_mounth?: Maybe<Scalars['String']['output']>;
  birthday_year?: Maybe<Scalars['String']['output']>;
  commuting_time?: Maybe<Scalars['String']['output']>;
  current_situation?: Maybe<Scalars['String']['output']>;
  desired_industries?: Maybe<Array<Scalars['String']['output']>>;
  desired_occupation?: Maybe<Array<Scalars['String']['output']>>;
  desired_skills?: Maybe<Array<Scalars['String']['output']>>;
  file_data?: Maybe<Scalars['String']['output']>;
  file_name?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  first_name_kana?: Maybe<Scalars['String']['output']>;
  frame_work?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  industries?: Maybe<Array<Scalars['String']['output']>>;
  language_libraries?: Maybe<Array<Scalars['String']['output']>>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_name_kana?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  mail?: Maybe<Scalars['String']['output']>;
  mode_of_operation?: Maybe<Array<Scalars['String']['output']>>;
  name?: Maybe<Scalars['String']['output']>;
  portfolio?: Maybe<Scalars['String']['output']>;
  prefectures?: Maybe<Scalars['String']['output']>;
  preferred_place_of_work?: Maybe<Scalars['String']['output']>;
  professional_experience?: Maybe<Array<Scalars['String']['output']>>;
  project_start_mounth?: Maybe<Scalars['String']['output']>;
  project_start_time?: Maybe<Scalars['String']['output']>;
  project_start_year?: Maybe<Scalars['String']['output']>;
  self_pr?: Maybe<Scalars['String']['output']>;
  slackUrl?: Maybe<Scalars['String']['output']>;
  tel?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  amount_of_money?: Maybe<Scalars['String']['output']>;
  available_day?: Maybe<Scalars['String']['output']>;
  birthday_day?: Maybe<Scalars['String']['output']>;
  birthday_mounth?: Maybe<Scalars['String']['output']>;
  birthday_year?: Maybe<Scalars['String']['output']>;
  commuting_time?: Maybe<Scalars['String']['output']>;
  current_situation?: Maybe<Scalars['String']['output']>;
  desired_industries?: Maybe<Array<Scalars['String']['output']>>;
  desired_occupation?: Maybe<Array<Scalars['String']['output']>>;
  desired_skills?: Maybe<Array<Scalars['String']['output']>>;
  file_data?: Maybe<Scalars['String']['output']>;
  file_name?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  first_name_kana?: Maybe<Scalars['String']['output']>;
  frame_work?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  industries?: Maybe<Array<Scalars['String']['output']>>;
  language_libraries?: Maybe<Array<Scalars['String']['output']>>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_name_kana?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  mail?: Maybe<Scalars['String']['output']>;
  mode_of_operation?: Maybe<Array<Scalars['String']['output']>>;
  name?: Maybe<Scalars['String']['output']>;
  portfolio?: Maybe<Scalars['String']['output']>;
  prefectures?: Maybe<Scalars['String']['output']>;
  preferred_place_of_work?: Maybe<Scalars['String']['output']>;
  professional_experience?: Maybe<Array<Scalars['String']['output']>>;
  project_start_mounth?: Maybe<Scalars['String']['output']>;
  project_start_time?: Maybe<Scalars['String']['output']>;
  project_start_year?: Maybe<Scalars['String']['output']>;
  self_pr?: Maybe<Scalars['String']['output']>;
  slackUrl?: Maybe<Scalars['String']['output']>;
  tel?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  amount_of_money?: InputMaybe<Order_By>;
  available_day?: InputMaybe<Order_By>;
  birthday_day?: InputMaybe<Order_By>;
  birthday_mounth?: InputMaybe<Order_By>;
  birthday_year?: InputMaybe<Order_By>;
  commuting_time?: InputMaybe<Order_By>;
  current_situation?: InputMaybe<Order_By>;
  desired_industries?: InputMaybe<Order_By>;
  desired_occupation?: InputMaybe<Order_By>;
  desired_skills?: InputMaybe<Order_By>;
  file_data?: InputMaybe<Order_By>;
  file_name?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  first_name_kana?: InputMaybe<Order_By>;
  frame_work?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  industries?: InputMaybe<Order_By>;
  language_libraries?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_name_kana?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  mail?: InputMaybe<Order_By>;
  mode_of_operation?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  portfolio?: InputMaybe<Order_By>;
  prefectures?: InputMaybe<Order_By>;
  preferred_place_of_work?: InputMaybe<Order_By>;
  professional_experience?: InputMaybe<Order_By>;
  project_start_mounth?: InputMaybe<Order_By>;
  project_start_time?: InputMaybe<Order_By>;
  project_start_year?: InputMaybe<Order_By>;
  self_pr?: InputMaybe<Order_By>;
  slackUrl?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AmountOfMoney = 'amount_of_money',
  /** column name */
  AvailableDay = 'available_day',
  /** column name */
  BirthdayDay = 'birthday_day',
  /** column name */
  BirthdayMounth = 'birthday_mounth',
  /** column name */
  BirthdayYear = 'birthday_year',
  /** column name */
  CommutingTime = 'commuting_time',
  /** column name */
  CurrentSituation = 'current_situation',
  /** column name */
  DesiredIndustries = 'desired_industries',
  /** column name */
  DesiredOccupation = 'desired_occupation',
  /** column name */
  DesiredSkills = 'desired_skills',
  /** column name */
  FileData = 'file_data',
  /** column name */
  FileName = 'file_name',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  FirstNameKana = 'first_name_kana',
  /** column name */
  FrameWork = 'frame_work',
  /** column name */
  Id = 'id',
  /** column name */
  Industries = 'industries',
  /** column name */
  LanguageLibraries = 'language_libraries',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastNameKana = 'last_name_kana',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Mail = 'mail',
  /** column name */
  ModeOfOperation = 'mode_of_operation',
  /** column name */
  Name = 'name',
  /** column name */
  Portfolio = 'portfolio',
  /** column name */
  Prefectures = 'prefectures',
  /** column name */
  PreferredPlaceOfWork = 'preferred_place_of_work',
  /** column name */
  ProfessionalExperience = 'professional_experience',
  /** column name */
  ProjectStartMounth = 'project_start_mounth',
  /** column name */
  ProjectStartTime = 'project_start_time',
  /** column name */
  ProjectStartYear = 'project_start_year',
  /** column name */
  SelfPr = 'self_pr',
  /** column name */
  SlackUrl = 'slackUrl',
  /** column name */
  Tel = 'tel'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  amount_of_money?: InputMaybe<Scalars['String']['input']>;
  available_day?: InputMaybe<Scalars['String']['input']>;
  birthday_day?: InputMaybe<Scalars['String']['input']>;
  birthday_mounth?: InputMaybe<Scalars['String']['input']>;
  birthday_year?: InputMaybe<Scalars['String']['input']>;
  commuting_time?: InputMaybe<Scalars['String']['input']>;
  current_situation?: InputMaybe<Scalars['String']['input']>;
  desired_industries?: InputMaybe<Array<Scalars['String']['input']>>;
  desired_occupation?: InputMaybe<Array<Scalars['String']['input']>>;
  desired_skills?: InputMaybe<Array<Scalars['String']['input']>>;
  file_data?: InputMaybe<Scalars['String']['input']>;
  file_name?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  first_name_kana?: InputMaybe<Scalars['String']['input']>;
  frame_work?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  language_libraries?: InputMaybe<Array<Scalars['String']['input']>>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_name_kana?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  mode_of_operation?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  portfolio?: InputMaybe<Scalars['String']['input']>;
  prefectures?: InputMaybe<Scalars['String']['input']>;
  preferred_place_of_work?: InputMaybe<Scalars['String']['input']>;
  professional_experience?: InputMaybe<Array<Scalars['String']['input']>>;
  project_start_mounth?: InputMaybe<Scalars['String']['input']>;
  project_start_time?: InputMaybe<Scalars['String']['input']>;
  project_start_year?: InputMaybe<Scalars['String']['input']>;
  self_pr?: InputMaybe<Scalars['String']['input']>;
  slackUrl?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  amount_of_money?: InputMaybe<Scalars['String']['input']>;
  available_day?: InputMaybe<Scalars['String']['input']>;
  birthday_day?: InputMaybe<Scalars['String']['input']>;
  birthday_mounth?: InputMaybe<Scalars['String']['input']>;
  birthday_year?: InputMaybe<Scalars['String']['input']>;
  commuting_time?: InputMaybe<Scalars['String']['input']>;
  current_situation?: InputMaybe<Scalars['String']['input']>;
  desired_industries?: InputMaybe<Array<Scalars['String']['input']>>;
  desired_occupation?: InputMaybe<Array<Scalars['String']['input']>>;
  desired_skills?: InputMaybe<Array<Scalars['String']['input']>>;
  file_data?: InputMaybe<Scalars['String']['input']>;
  file_name?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  first_name_kana?: InputMaybe<Scalars['String']['input']>;
  frame_work?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  language_libraries?: InputMaybe<Array<Scalars['String']['input']>>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_name_kana?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  mode_of_operation?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  portfolio?: InputMaybe<Scalars['String']['input']>;
  prefectures?: InputMaybe<Scalars['String']['input']>;
  preferred_place_of_work?: InputMaybe<Scalars['String']['input']>;
  professional_experience?: InputMaybe<Array<Scalars['String']['input']>>;
  project_start_mounth?: InputMaybe<Scalars['String']['input']>;
  project_start_time?: InputMaybe<Scalars['String']['input']>;
  project_start_year?: InputMaybe<Scalars['String']['input']>;
  self_pr?: InputMaybe<Scalars['String']['input']>;
  slackUrl?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AmountOfMoney = 'amount_of_money',
  /** column name */
  AvailableDay = 'available_day',
  /** column name */
  BirthdayDay = 'birthday_day',
  /** column name */
  BirthdayMounth = 'birthday_mounth',
  /** column name */
  BirthdayYear = 'birthday_year',
  /** column name */
  CommutingTime = 'commuting_time',
  /** column name */
  CurrentSituation = 'current_situation',
  /** column name */
  DesiredIndustries = 'desired_industries',
  /** column name */
  DesiredOccupation = 'desired_occupation',
  /** column name */
  DesiredSkills = 'desired_skills',
  /** column name */
  FileData = 'file_data',
  /** column name */
  FileName = 'file_name',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  FirstNameKana = 'first_name_kana',
  /** column name */
  FrameWork = 'frame_work',
  /** column name */
  Id = 'id',
  /** column name */
  Industries = 'industries',
  /** column name */
  LanguageLibraries = 'language_libraries',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastNameKana = 'last_name_kana',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Mail = 'mail',
  /** column name */
  ModeOfOperation = 'mode_of_operation',
  /** column name */
  Name = 'name',
  /** column name */
  Portfolio = 'portfolio',
  /** column name */
  Prefectures = 'prefectures',
  /** column name */
  PreferredPlaceOfWork = 'preferred_place_of_work',
  /** column name */
  ProfessionalExperience = 'professional_experience',
  /** column name */
  ProjectStartMounth = 'project_start_mounth',
  /** column name */
  ProjectStartTime = 'project_start_time',
  /** column name */
  ProjectStartYear = 'project_start_year',
  /** column name */
  SelfPr = 'self_pr',
  /** column name */
  SlackUrl = 'slackUrl',
  /** column name */
  Tel = 'tel'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** 案件⇄詳細を繋ぐテーブル */
export type Work_To_Detail = {
  __typename?: 'work_to_detail';
  /** An object relationship */
  skill?: Maybe<Skills>;
  skill_id: Scalars['Int']['output'];
  /** An object relationship */
  work?: Maybe<Works>;
  work_id: Scalars['Int']['output'];
};

/** aggregated selection of "work_to_detail" */
export type Work_To_Detail_Aggregate = {
  __typename?: 'work_to_detail_aggregate';
  aggregate?: Maybe<Work_To_Detail_Aggregate_Fields>;
  nodes: Array<Work_To_Detail>;
};

export type Work_To_Detail_Aggregate_Bool_Exp = {
  count?: InputMaybe<Work_To_Detail_Aggregate_Bool_Exp_Count>;
};

export type Work_To_Detail_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Work_To_Detail_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Work_To_Detail_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "work_to_detail" */
export type Work_To_Detail_Aggregate_Fields = {
  __typename?: 'work_to_detail_aggregate_fields';
  avg?: Maybe<Work_To_Detail_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Work_To_Detail_Max_Fields>;
  min?: Maybe<Work_To_Detail_Min_Fields>;
  stddev?: Maybe<Work_To_Detail_Stddev_Fields>;
  stddev_pop?: Maybe<Work_To_Detail_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Work_To_Detail_Stddev_Samp_Fields>;
  sum?: Maybe<Work_To_Detail_Sum_Fields>;
  var_pop?: Maybe<Work_To_Detail_Var_Pop_Fields>;
  var_samp?: Maybe<Work_To_Detail_Var_Samp_Fields>;
  variance?: Maybe<Work_To_Detail_Variance_Fields>;
};


/** aggregate fields of "work_to_detail" */
export type Work_To_Detail_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Work_To_Detail_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "work_to_detail" */
export type Work_To_Detail_Aggregate_Order_By = {
  avg?: InputMaybe<Work_To_Detail_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Work_To_Detail_Max_Order_By>;
  min?: InputMaybe<Work_To_Detail_Min_Order_By>;
  stddev?: InputMaybe<Work_To_Detail_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Work_To_Detail_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Work_To_Detail_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Work_To_Detail_Sum_Order_By>;
  var_pop?: InputMaybe<Work_To_Detail_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Work_To_Detail_Var_Samp_Order_By>;
  variance?: InputMaybe<Work_To_Detail_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "work_to_detail" */
export type Work_To_Detail_Arr_Rel_Insert_Input = {
  data: Array<Work_To_Detail_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Work_To_Detail_On_Conflict>;
};

/** aggregate avg on columns */
export type Work_To_Detail_Avg_Fields = {
  __typename?: 'work_to_detail_avg_fields';
  skill_id?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "work_to_detail" */
export type Work_To_Detail_Avg_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "work_to_detail". All fields are combined with a logical 'AND'. */
export type Work_To_Detail_Bool_Exp = {
  _and?: InputMaybe<Array<Work_To_Detail_Bool_Exp>>;
  _not?: InputMaybe<Work_To_Detail_Bool_Exp>;
  _or?: InputMaybe<Array<Work_To_Detail_Bool_Exp>>;
  skill?: InputMaybe<Skills_Bool_Exp>;
  skill_id?: InputMaybe<Int_Comparison_Exp>;
  work?: InputMaybe<Works_Bool_Exp>;
  work_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_to_detail" */
export enum Work_To_Detail_Constraint {
  /** unique or primary key constraint on columns "work_id", "skill_id" */
  WorkToDetailPkey = 'work_to_detail_pkey'
}

/** input type for incrementing numeric columns in table "work_to_detail" */
export type Work_To_Detail_Inc_Input = {
  skill_id?: InputMaybe<Scalars['Int']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "work_to_detail" */
export type Work_To_Detail_Insert_Input = {
  skill?: InputMaybe<Skills_Obj_Rel_Insert_Input>;
  skill_id?: InputMaybe<Scalars['Int']['input']>;
  work?: InputMaybe<Works_Obj_Rel_Insert_Input>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Work_To_Detail_Max_Fields = {
  __typename?: 'work_to_detail_max_fields';
  skill_id?: Maybe<Scalars['Int']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "work_to_detail" */
export type Work_To_Detail_Max_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Work_To_Detail_Min_Fields = {
  __typename?: 'work_to_detail_min_fields';
  skill_id?: Maybe<Scalars['Int']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "work_to_detail" */
export type Work_To_Detail_Min_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "work_to_detail" */
export type Work_To_Detail_Mutation_Response = {
  __typename?: 'work_to_detail_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_To_Detail>;
};

/** on_conflict condition type for table "work_to_detail" */
export type Work_To_Detail_On_Conflict = {
  constraint: Work_To_Detail_Constraint;
  update_columns?: Array<Work_To_Detail_Update_Column>;
  where?: InputMaybe<Work_To_Detail_Bool_Exp>;
};

/** Ordering options when selecting data from "work_to_detail". */
export type Work_To_Detail_Order_By = {
  skill?: InputMaybe<Skills_Order_By>;
  skill_id?: InputMaybe<Order_By>;
  work?: InputMaybe<Works_Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: work_to_detail */
export type Work_To_Detail_Pk_Columns_Input = {
  skill_id: Scalars['Int']['input'];
  work_id: Scalars['Int']['input'];
};

/** select columns of table "work_to_detail" */
export enum Work_To_Detail_Select_Column {
  /** column name */
  SkillId = 'skill_id',
  /** column name */
  WorkId = 'work_id'
}

/** input type for updating data in table "work_to_detail" */
export type Work_To_Detail_Set_Input = {
  skill_id?: InputMaybe<Scalars['Int']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Work_To_Detail_Stddev_Fields = {
  __typename?: 'work_to_detail_stddev_fields';
  skill_id?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "work_to_detail" */
export type Work_To_Detail_Stddev_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Work_To_Detail_Stddev_Pop_Fields = {
  __typename?: 'work_to_detail_stddev_pop_fields';
  skill_id?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "work_to_detail" */
export type Work_To_Detail_Stddev_Pop_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Work_To_Detail_Stddev_Samp_Fields = {
  __typename?: 'work_to_detail_stddev_samp_fields';
  skill_id?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "work_to_detail" */
export type Work_To_Detail_Stddev_Samp_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "work_to_detail" */
export type Work_To_Detail_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Work_To_Detail_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Work_To_Detail_Stream_Cursor_Value_Input = {
  skill_id?: InputMaybe<Scalars['Int']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Work_To_Detail_Sum_Fields = {
  __typename?: 'work_to_detail_sum_fields';
  skill_id?: Maybe<Scalars['Int']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "work_to_detail" */
export type Work_To_Detail_Sum_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** update columns of table "work_to_detail" */
export enum Work_To_Detail_Update_Column {
  /** column name */
  SkillId = 'skill_id',
  /** column name */
  WorkId = 'work_id'
}

export type Work_To_Detail_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Work_To_Detail_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Work_To_Detail_Set_Input>;
  /** filter the rows which have to be updated */
  where: Work_To_Detail_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Work_To_Detail_Var_Pop_Fields = {
  __typename?: 'work_to_detail_var_pop_fields';
  skill_id?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "work_to_detail" */
export type Work_To_Detail_Var_Pop_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Work_To_Detail_Var_Samp_Fields = {
  __typename?: 'work_to_detail_var_samp_fields';
  skill_id?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "work_to_detail" */
export type Work_To_Detail_Var_Samp_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Work_To_Detail_Variance_Fields = {
  __typename?: 'work_to_detail_variance_fields';
  skill_id?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "work_to_detail" */
export type Work_To_Detail_Variance_Order_By = {
  skill_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** 案件一覧を管理するテーブル */
export type Works = {
  __typename?: 'works';
  contractType?: Maybe<Scalars['String']['output']>;
  createAt: Scalars['date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isClosed: Scalars['Boolean']['output'];
  /** An array relationship */
  languages: Array<Work_To_Detail>;
  /** An aggregate relationship */
  languages_aggregate: Work_To_Detail_Aggregate;
  location?: Maybe<Scalars['String']['output']>;
  maxMonthlyPrice?: Maybe<Scalars['Int']['output']>;
  maxWorkHours?: Maybe<Scalars['Int']['output']>;
  minMonthlyPrice?: Maybe<Scalars['Int']['output']>;
  minWorkHours?: Maybe<Scalars['Int']['output']>;
  publishTitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  work_style: Scalars['String']['output'];
};


/** 案件一覧を管理するテーブル */
export type WorksLanguagesArgs = {
  distinct_on?: InputMaybe<Array<Work_To_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_To_Detail_Order_By>>;
  where?: InputMaybe<Work_To_Detail_Bool_Exp>;
};


/** 案件一覧を管理するテーブル */
export type WorksLanguages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_To_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Work_To_Detail_Order_By>>;
  where?: InputMaybe<Work_To_Detail_Bool_Exp>;
};

/** aggregated selection of "works" */
export type Works_Aggregate = {
  __typename?: 'works_aggregate';
  aggregate?: Maybe<Works_Aggregate_Fields>;
  nodes: Array<Works>;
};

/** aggregate fields of "works" */
export type Works_Aggregate_Fields = {
  __typename?: 'works_aggregate_fields';
  avg?: Maybe<Works_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Works_Max_Fields>;
  min?: Maybe<Works_Min_Fields>;
  stddev?: Maybe<Works_Stddev_Fields>;
  stddev_pop?: Maybe<Works_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Works_Stddev_Samp_Fields>;
  sum?: Maybe<Works_Sum_Fields>;
  var_pop?: Maybe<Works_Var_Pop_Fields>;
  var_samp?: Maybe<Works_Var_Samp_Fields>;
  variance?: Maybe<Works_Variance_Fields>;
};


/** aggregate fields of "works" */
export type Works_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Works_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Works_Avg_Fields = {
  __typename?: 'works_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  maxWorkHours?: Maybe<Scalars['Float']['output']>;
  minMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  minWorkHours?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "works". All fields are combined with a logical 'AND'. */
export type Works_Bool_Exp = {
  _and?: InputMaybe<Array<Works_Bool_Exp>>;
  _not?: InputMaybe<Works_Bool_Exp>;
  _or?: InputMaybe<Array<Works_Bool_Exp>>;
  contractType?: InputMaybe<String_Comparison_Exp>;
  createAt?: InputMaybe<Date_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isClosed?: InputMaybe<Boolean_Comparison_Exp>;
  languages?: InputMaybe<Work_To_Detail_Bool_Exp>;
  languages_aggregate?: InputMaybe<Work_To_Detail_Aggregate_Bool_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  maxMonthlyPrice?: InputMaybe<Int_Comparison_Exp>;
  maxWorkHours?: InputMaybe<Int_Comparison_Exp>;
  minMonthlyPrice?: InputMaybe<Int_Comparison_Exp>;
  minWorkHours?: InputMaybe<Int_Comparison_Exp>;
  publishTitle?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  work_style?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "works" */
export enum Works_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkPkey = 'work_pkey',
  /** unique or primary key constraint on columns "title" */
  WorkTitleKey = 'work_title_key'
}

/** input type for incrementing numeric columns in table "works" */
export type Works_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  maxMonthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  maxWorkHours?: InputMaybe<Scalars['Int']['input']>;
  minMonthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  minWorkHours?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "works" */
export type Works_Insert_Input = {
  contractType?: InputMaybe<Scalars['String']['input']>;
  createAt?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  languages?: InputMaybe<Work_To_Detail_Arr_Rel_Insert_Input>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxMonthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  maxWorkHours?: InputMaybe<Scalars['Int']['input']>;
  minMonthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  minWorkHours?: InputMaybe<Scalars['Int']['input']>;
  publishTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  work_style?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Works_Max_Fields = {
  __typename?: 'works_max_fields';
  contractType?: Maybe<Scalars['String']['output']>;
  createAt?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  maxMonthlyPrice?: Maybe<Scalars['Int']['output']>;
  maxWorkHours?: Maybe<Scalars['Int']['output']>;
  minMonthlyPrice?: Maybe<Scalars['Int']['output']>;
  minWorkHours?: Maybe<Scalars['Int']['output']>;
  publishTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  work_style?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Works_Min_Fields = {
  __typename?: 'works_min_fields';
  contractType?: Maybe<Scalars['String']['output']>;
  createAt?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  maxMonthlyPrice?: Maybe<Scalars['Int']['output']>;
  maxWorkHours?: Maybe<Scalars['Int']['output']>;
  minMonthlyPrice?: Maybe<Scalars['Int']['output']>;
  minWorkHours?: Maybe<Scalars['Int']['output']>;
  publishTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  work_style?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "works" */
export type Works_Mutation_Response = {
  __typename?: 'works_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Works>;
};

/** input type for inserting object relation for remote table "works" */
export type Works_Obj_Rel_Insert_Input = {
  data: Works_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Works_On_Conflict>;
};

/** on_conflict condition type for table "works" */
export type Works_On_Conflict = {
  constraint: Works_Constraint;
  update_columns?: Array<Works_Update_Column>;
  where?: InputMaybe<Works_Bool_Exp>;
};

/** Ordering options when selecting data from "works". */
export type Works_Order_By = {
  contractType?: InputMaybe<Order_By>;
  createAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isClosed?: InputMaybe<Order_By>;
  languages_aggregate?: InputMaybe<Work_To_Detail_Aggregate_Order_By>;
  location?: InputMaybe<Order_By>;
  maxMonthlyPrice?: InputMaybe<Order_By>;
  maxWorkHours?: InputMaybe<Order_By>;
  minMonthlyPrice?: InputMaybe<Order_By>;
  minWorkHours?: InputMaybe<Order_By>;
  publishTitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  work_style?: InputMaybe<Order_By>;
};

/** primary key columns input for table: works */
export type Works_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "works" */
export enum Works_Select_Column {
  /** column name */
  ContractType = 'contractType',
  /** column name */
  CreateAt = 'createAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsClosed = 'isClosed',
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
  PublishTitle = 'publishTitle',
  /** column name */
  Title = 'title',
  /** column name */
  WorkStyle = 'work_style'
}

/** input type for updating data in table "works" */
export type Works_Set_Input = {
  contractType?: InputMaybe<Scalars['String']['input']>;
  createAt?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxMonthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  maxWorkHours?: InputMaybe<Scalars['Int']['input']>;
  minMonthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  minWorkHours?: InputMaybe<Scalars['Int']['input']>;
  publishTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  work_style?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Works_Stddev_Fields = {
  __typename?: 'works_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  maxWorkHours?: Maybe<Scalars['Float']['output']>;
  minMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  minWorkHours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Works_Stddev_Pop_Fields = {
  __typename?: 'works_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  maxWorkHours?: Maybe<Scalars['Float']['output']>;
  minMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  minWorkHours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Works_Stddev_Samp_Fields = {
  __typename?: 'works_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  maxWorkHours?: Maybe<Scalars['Float']['output']>;
  minMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  minWorkHours?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "works" */
export type Works_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Works_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Works_Stream_Cursor_Value_Input = {
  contractType?: InputMaybe<Scalars['String']['input']>;
  createAt?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxMonthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  maxWorkHours?: InputMaybe<Scalars['Int']['input']>;
  minMonthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  minWorkHours?: InputMaybe<Scalars['Int']['input']>;
  publishTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  work_style?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Works_Sum_Fields = {
  __typename?: 'works_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  maxMonthlyPrice?: Maybe<Scalars['Int']['output']>;
  maxWorkHours?: Maybe<Scalars['Int']['output']>;
  minMonthlyPrice?: Maybe<Scalars['Int']['output']>;
  minWorkHours?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "works" */
export enum Works_Update_Column {
  /** column name */
  ContractType = 'contractType',
  /** column name */
  CreateAt = 'createAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsClosed = 'isClosed',
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
  PublishTitle = 'publishTitle',
  /** column name */
  Title = 'title',
  /** column name */
  WorkStyle = 'work_style'
}

export type Works_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Works_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Works_Set_Input>;
  /** filter the rows which have to be updated */
  where: Works_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Works_Var_Pop_Fields = {
  __typename?: 'works_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  maxWorkHours?: Maybe<Scalars['Float']['output']>;
  minMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  minWorkHours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Works_Var_Samp_Fields = {
  __typename?: 'works_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  maxWorkHours?: Maybe<Scalars['Float']['output']>;
  minMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  minWorkHours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Works_Variance_Fields = {
  __typename?: 'works_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  maxWorkHours?: Maybe<Scalars['Float']['output']>;
  minMonthlyPrice?: Maybe<Scalars['Float']['output']>;
  minWorkHours?: Maybe<Scalars['Float']['output']>;
};

export type GetAllProjectQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProjectQuery = { __typename?: 'query_root', project: Array<{ __typename?: 'project', id: number, keyword: Array<any>, projectName: string, price: string }> };

export type GetDetailProjectQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetDetailProjectQuery = { __typename?: 'query_root', project: Array<{ __typename?: 'project', id: number, businessContent?: string | null, contentBusiness?: string | null, developmentEnvironment?: string | null, keyword: Array<any>, personnelSought: string, price: string, projectName: string, recruitmentBackground?: string | null, recruitmentNumber: string, requiredSkills: string, welcomeSkills: string, workingConditions: string }> };

export type GetSkillsQueryVariables = Exact<{
  skillsWhere?: InputMaybe<Skills_Bool_Exp>;
  worksWhere?: InputMaybe<Work_To_Detail_Bool_Exp>;
}>;


export type GetSkillsQuery = { __typename?: 'query_root', skills: Array<{ __typename?: 'skills', id: number, type?: string | null, name?: string | null, works_aggregate: { __typename?: 'work_to_detail_aggregate', aggregate?: { __typename?: 'work_to_detail_aggregate_fields', count: number } | null } }> };

export type UseEditBasicInfoMutationVariables = Exact<{
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastNameKana?: InputMaybe<Scalars['String']['input']>;
  firstNameKana?: InputMaybe<Scalars['String']['input']>;
  birthdayYear?: InputMaybe<Scalars['String']['input']>;
  birthdayMounth?: InputMaybe<Scalars['String']['input']>;
  birthdayDay?: InputMaybe<Scalars['String']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
  prefectures?: InputMaybe<Scalars['String']['input']>;
  currentSituation?: InputMaybe<Scalars['String']['input']>;
}>;


export type UseEditBasicInfoMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', last_name?: string | null, first_name?: string | null, last_name_kana?: string | null, first_name_kana?: string | null, birthday_year: string, birthday_mounth: string, birthday_day: string, mail?: string | null, tel?: string | null, prefectures: string, current_situation: string } | null };

export type GetUserBasicInfoQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserBasicInfoQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', last_name?: string | null, first_name?: string | null, last_name_kana?: string | null, first_name_kana?: string | null, birthday_year: string, birthday_mounth: string, birthday_day: string, mail?: string | null, tel?: string | null, prefectures: string, current_situation: string }> };

export type EditDesiredConditionMutationVariables = Exact<{
  id: Scalars['String']['input'];
  commutingTime?: InputMaybe<Scalars['String']['input']>;
  amountOfMoney?: InputMaybe<Scalars['String']['input']>;
  preferredPlaceOfWork?: InputMaybe<Scalars['String']['input']>;
  desiredOccupation?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  desiredIndustries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  desiredSkills?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  modeOfOperation?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  availableDay?: InputMaybe<Scalars['String']['input']>;
  projectStartTime?: InputMaybe<Scalars['String']['input']>;
  projectStartYear?: InputMaybe<Scalars['String']['input']>;
  projectStartMounth?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditDesiredConditionMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', commuting_time?: string | null, amount_of_money?: string | null, preferred_place_of_work?: string | null, desired_occupation?: Array<string> | null, desired_industries?: Array<string> | null, desired_skills?: Array<string> | null, mode_of_operation?: Array<string> | null, available_day?: string | null, project_start_time?: string | null, project_start_year: string, project_start_mounth: string } | null };

export type GetUserDesiredConditionQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserDesiredConditionQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', commuting_time?: string | null, amount_of_money?: string | null, preferred_place_of_work?: string | null, desired_occupation?: Array<string> | null, desired_industries?: Array<string> | null, desired_skills?: Array<string> | null, mode_of_operation?: Array<string> | null, available_day?: string | null, project_start_time?: string | null, project_start_year: string, project_start_mounth: string }> };

export type EditSkillInfoMutationVariables = Exact<{
  id: Scalars['String']['input'];
  professionalExperience?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  industries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  languageLibraries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  frameWork?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  portfolio?: InputMaybe<Scalars['String']['input']>;
  selfPr?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileData?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditSkillInfoMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', professional_experience?: Array<string> | null, industries?: Array<string> | null, language_libraries?: Array<string> | null, frame_work?: Array<string> | null, portfolio?: string | null, self_pr?: string | null, file_name?: string | null, file_data?: string | null } | null };

export type UploadSkillSheetMutationVariables = Exact<{
  id: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  filedata: Scalars['String']['input'];
}>;


export type UploadSkillSheetMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', file_name?: string | null, file_data?: string | null } | null };

export type GetUserSkillQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserSkillQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', professional_experience?: Array<string> | null, industries?: Array<string> | null, language_libraries?: Array<string> | null, frame_work?: Array<string> | null, portfolio?: string | null, self_pr?: string | null, file_name?: string | null, file_data?: string | null }> };

export type GetSkillSheetQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetSkillSheetQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', file_data?: string | null, file_name?: string | null }> };

export type EditProfileMutationVariables = Exact<{
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastNameKana?: InputMaybe<Scalars['String']['input']>;
  firstNameKana?: InputMaybe<Scalars['String']['input']>;
  birthdayYear?: InputMaybe<Scalars['String']['input']>;
  birthdayMounth?: InputMaybe<Scalars['String']['input']>;
  birthdayDay?: InputMaybe<Scalars['String']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
  prefectures?: InputMaybe<Scalars['String']['input']>;
  currentSituation?: InputMaybe<Scalars['String']['input']>;
  professionalExperience?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  industries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  languageLibraries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  frameWork?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  portfolio?: InputMaybe<Scalars['String']['input']>;
  selfPr?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileData?: InputMaybe<Scalars['String']['input']>;
  commutingTime?: InputMaybe<Scalars['String']['input']>;
  amountOfMoney?: InputMaybe<Scalars['String']['input']>;
  preferredPlaceOfWork?: InputMaybe<Scalars['String']['input']>;
  desiredOccupation?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  desiredIndustries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  desiredSkills?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  modeOfOperation?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  availableDay?: InputMaybe<Scalars['String']['input']>;
  projectStartTime?: InputMaybe<Scalars['String']['input']>;
  projectStartYear?: InputMaybe<Scalars['String']['input']>;
  projectStartMounth?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditProfileMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', last_name?: string | null, first_name?: string | null, last_name_kana?: string | null, first_name_kana?: string | null, birthday_year: string, birthday_mounth: string, birthday_day: string, mail?: string | null, tel?: string | null, prefectures: string, current_situation: string, professional_experience?: Array<string> | null, industries?: Array<string> | null, language_libraries?: Array<string> | null, frame_work?: Array<string> | null, portfolio?: string | null, self_pr?: string | null, file_name?: string | null, file_data?: string | null, commuting_time?: string | null, amount_of_money?: string | null, preferred_place_of_work?: string | null, desired_occupation?: Array<string> | null, desired_industries?: Array<string> | null, desired_skills?: Array<string> | null, mode_of_operation?: Array<string> | null, available_day?: string | null, project_start_time?: string | null, project_start_year: string, project_start_mounth: string } | null };

export type GetUserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', slackUrl?: string | null, last_name?: string | null, first_name?: string | null, last_name_kana?: string | null, first_name_kana?: string | null, birthday_year: string, birthday_mounth: string, birthday_day: string, mail?: string | null, tel?: string | null, prefectures: string, current_situation: string, professional_experience?: Array<string> | null, industries?: Array<string> | null, language_libraries?: Array<string> | null, frame_work?: Array<string> | null, portfolio?: string | null, self_pr?: string | null, file_name?: string | null, file_data?: string | null, commuting_time?: string | null, amount_of_money?: string | null, preferred_place_of_work?: string | null, desired_occupation?: Array<string> | null, desired_industries?: Array<string> | null, desired_skills?: Array<string> | null, mode_of_operation?: Array<string> | null, available_day?: string | null, project_start_time?: string | null, project_start_year: string, project_start_mounth: string }> };

export type GetWorkQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetWorkQuery = { __typename?: 'query_root', works_by_pk?: { __typename?: 'works', id: number, title: string, contractType?: string | null, location?: string | null, maxMonthlyPrice?: number | null, maxWorkHours?: number | null, minMonthlyPrice?: number | null, minWorkHours?: number | null, description: string, createAt: any, languages: Array<{ __typename?: 'work_to_detail', skill?: { __typename?: 'skills', id: number, name?: string | null, type?: string | null } | null }> } | null };

export type GetWorksQueryVariables = Exact<{
  where?: InputMaybe<Works_Bool_Exp>;
  order_by?: InputMaybe<Array<Works_Order_By> | Works_Order_By>;
}>;


export type GetWorksQuery = { __typename?: 'query_root', works: Array<{ __typename?: 'works', id: number, title: string, contractType?: string | null, location?: string | null, maxMonthlyPrice?: number | null, maxWorkHours?: number | null, minMonthlyPrice?: number | null, minWorkHours?: number | null, description: string, createAt: any, languages: Array<{ __typename?: 'work_to_detail', skill?: { __typename?: 'skills', id: number, name?: string | null, type?: string | null } | null }> }> };


export const GetAllProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllProject"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keyword"}},{"kind":"Field","name":{"kind":"Name","value":"projectName"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<GetAllProjectQuery, GetAllProjectQueryVariables>;
export const GetDetailProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDetailProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"businessContent"}},{"kind":"Field","name":{"kind":"Name","value":"contentBusiness"}},{"kind":"Field","name":{"kind":"Name","value":"developmentEnvironment"}},{"kind":"Field","name":{"kind":"Name","value":"keyword"}},{"kind":"Field","name":{"kind":"Name","value":"personnelSought"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"projectName"}},{"kind":"Field","name":{"kind":"Name","value":"recruitmentBackground"}},{"kind":"Field","name":{"kind":"Name","value":"recruitmentNumber"}},{"kind":"Field","name":{"kind":"Name","value":"requiredSkills"}},{"kind":"Field","name":{"kind":"Name","value":"welcomeSkills"}},{"kind":"Field","name":{"kind":"Name","value":"workingConditions"}}]}}]}}]} as unknown as DocumentNode<GetDetailProjectQuery, GetDetailProjectQueryVariables>;
export const GetSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkills"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skillsWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"skills_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[]}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"worksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"work_to_detail_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[]}}]}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ttl"},"value":{"kind":"IntValue","value":"0"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skillsWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"works_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"worksWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSkillsQuery, GetSkillsQueryVariables>;
export const UseEditBasicInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"useEditBasicInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastNameKana"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstNameKana"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"birthdayYear"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"birthdayMounth"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"birthdayDay"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mail"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tel"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prefectures"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currentSituation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"last_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"first_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"last_name_kana"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastNameKana"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"first_name_kana"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstNameKana"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"birthday_year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"birthdayYear"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"birthday_mounth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"birthdayMounth"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"birthday_day"},"value":{"kind":"Variable","name":{"kind":"Name","value":"birthdayDay"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mail"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tel"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"prefectures"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prefectures"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"current_situation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currentSituation"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name_kana"}},{"kind":"Field","name":{"kind":"Name","value":"first_name_kana"}},{"kind":"Field","name":{"kind":"Name","value":"birthday_year"}},{"kind":"Field","name":{"kind":"Name","value":"birthday_mounth"}},{"kind":"Field","name":{"kind":"Name","value":"birthday_day"}},{"kind":"Field","name":{"kind":"Name","value":"mail"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"prefectures"}},{"kind":"Field","name":{"kind":"Name","value":"current_situation"}}]}}]}}]} as unknown as DocumentNode<UseEditBasicInfoMutation, UseEditBasicInfoMutationVariables>;
export const GetUserBasicInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserBasicInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name_kana"}},{"kind":"Field","name":{"kind":"Name","value":"first_name_kana"}},{"kind":"Field","name":{"kind":"Name","value":"birthday_year"}},{"kind":"Field","name":{"kind":"Name","value":"birthday_mounth"}},{"kind":"Field","name":{"kind":"Name","value":"birthday_day"}},{"kind":"Field","name":{"kind":"Name","value":"mail"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"prefectures"}},{"kind":"Field","name":{"kind":"Name","value":"current_situation"}}]}}]}}]} as unknown as DocumentNode<GetUserBasicInfoQuery, GetUserBasicInfoQueryVariables>;
export const EditDesiredConditionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editDesiredCondition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commutingTime"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountOfMoney"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preferredPlaceOfWork"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"desiredOccupation"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"desiredIndustries"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"desiredSkills"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modeOfOperation"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"availableDay"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectStartTime"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectStartYear"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectStartMounth"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"commuting_time"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commutingTime"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amount_of_money"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountOfMoney"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"preferred_place_of_work"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preferredPlaceOfWork"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"desired_occupation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"desiredOccupation"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"desired_industries"},"value":{"kind":"Variable","name":{"kind":"Name","value":"desiredIndustries"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"desired_skills"},"value":{"kind":"Variable","name":{"kind":"Name","value":"desiredSkills"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mode_of_operation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modeOfOperation"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"available_day"},"value":{"kind":"Variable","name":{"kind":"Name","value":"availableDay"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"project_start_time"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectStartTime"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"project_start_year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectStartYear"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"project_start_mounth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectStartMounth"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commuting_time"}},{"kind":"Field","name":{"kind":"Name","value":"amount_of_money"}},{"kind":"Field","name":{"kind":"Name","value":"preferred_place_of_work"}},{"kind":"Field","name":{"kind":"Name","value":"desired_occupation"}},{"kind":"Field","name":{"kind":"Name","value":"desired_industries"}},{"kind":"Field","name":{"kind":"Name","value":"desired_skills"}},{"kind":"Field","name":{"kind":"Name","value":"mode_of_operation"}},{"kind":"Field","name":{"kind":"Name","value":"available_day"}},{"kind":"Field","name":{"kind":"Name","value":"project_start_time"}},{"kind":"Field","name":{"kind":"Name","value":"project_start_year"}},{"kind":"Field","name":{"kind":"Name","value":"project_start_mounth"}}]}}]}}]} as unknown as DocumentNode<EditDesiredConditionMutation, EditDesiredConditionMutationVariables>;
export const GetUserDesiredConditionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserDesiredCondition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commuting_time"}},{"kind":"Field","name":{"kind":"Name","value":"amount_of_money"}},{"kind":"Field","name":{"kind":"Name","value":"preferred_place_of_work"}},{"kind":"Field","name":{"kind":"Name","value":"desired_occupation"}},{"kind":"Field","name":{"kind":"Name","value":"desired_industries"}},{"kind":"Field","name":{"kind":"Name","value":"desired_skills"}},{"kind":"Field","name":{"kind":"Name","value":"mode_of_operation"}},{"kind":"Field","name":{"kind":"Name","value":"available_day"}},{"kind":"Field","name":{"kind":"Name","value":"project_start_time"}},{"kind":"Field","name":{"kind":"Name","value":"project_start_year"}},{"kind":"Field","name":{"kind":"Name","value":"project_start_mounth"}}]}}]}}]} as unknown as DocumentNode<GetUserDesiredConditionQuery, GetUserDesiredConditionQueryVariables>;
export const EditSkillInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editSkillInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"professionalExperience"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"industries"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageLibraries"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frameWork"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"portfolio"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"selfPr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileData"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"professional_experience"},"value":{"kind":"Variable","name":{"kind":"Name","value":"professionalExperience"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"industries"},"value":{"kind":"Variable","name":{"kind":"Name","value":"industries"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"language_libraries"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageLibraries"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"frame_work"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frameWork"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"portfolio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"portfolio"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"self_pr"},"value":{"kind":"Variable","name":{"kind":"Name","value":"selfPr"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"file_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"file_data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileData"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"professional_experience"}},{"kind":"Field","name":{"kind":"Name","value":"industries"}},{"kind":"Field","name":{"kind":"Name","value":"language_libraries"}},{"kind":"Field","name":{"kind":"Name","value":"frame_work"}},{"kind":"Field","name":{"kind":"Name","value":"portfolio"}},{"kind":"Field","name":{"kind":"Name","value":"self_pr"}},{"kind":"Field","name":{"kind":"Name","value":"file_name"}},{"kind":"Field","name":{"kind":"Name","value":"file_data"}}]}}]}}]} as unknown as DocumentNode<EditSkillInfoMutation, EditSkillInfoMutationVariables>;
export const UploadSkillSheetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadSkillSheet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filename"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filedata"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"file_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filename"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"file_data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filedata"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file_name"}},{"kind":"Field","name":{"kind":"Name","value":"file_data"}}]}}]}}]} as unknown as DocumentNode<UploadSkillSheetMutation, UploadSkillSheetMutationVariables>;
export const GetUserSkillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"professional_experience"}},{"kind":"Field","name":{"kind":"Name","value":"industries"}},{"kind":"Field","name":{"kind":"Name","value":"language_libraries"}},{"kind":"Field","name":{"kind":"Name","value":"frame_work"}},{"kind":"Field","name":{"kind":"Name","value":"portfolio"}},{"kind":"Field","name":{"kind":"Name","value":"self_pr"}},{"kind":"Field","name":{"kind":"Name","value":"file_name"}},{"kind":"Field","name":{"kind":"Name","value":"file_data"}}]}}]}}]} as unknown as DocumentNode<GetUserSkillQuery, GetUserSkillQueryVariables>;
export const GetSkillSheetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkillSheet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file_data"}},{"kind":"Field","name":{"kind":"Name","value":"file_name"}}]}}]}}]} as unknown as DocumentNode<GetSkillSheetQuery, GetSkillSheetQueryVariables>;
export const EditProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastNameKana"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstNameKana"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"birthdayYear"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"birthdayMounth"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"birthdayDay"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mail"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tel"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prefectures"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currentSituation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"professionalExperience"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"industries"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageLibraries"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frameWork"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"portfolio"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"selfPr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileData"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commutingTime"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amountOfMoney"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preferredPlaceOfWork"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"desiredOccupation"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"desiredIndustries"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"desiredSkills"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modeOfOperation"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"availableDay"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectStartTime"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectStartYear"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectStartMounth"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"last_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"first_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"last_name_kana"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastNameKana"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"first_name_kana"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstNameKana"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"birthday_year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"birthdayYear"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"birthday_mounth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"birthdayMounth"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"birthday_day"},"value":{"kind":"Variable","name":{"kind":"Name","value":"birthdayDay"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mail"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tel"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"prefectures"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prefectures"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"current_situation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currentSituation"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"professional_experience"},"value":{"kind":"Variable","name":{"kind":"Name","value":"professionalExperience"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"industries"},"value":{"kind":"Variable","name":{"kind":"Name","value":"industries"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"language_libraries"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageLibraries"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"frame_work"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frameWork"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"portfolio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"portfolio"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"self_pr"},"value":{"kind":"Variable","name":{"kind":"Name","value":"selfPr"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"file_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"file_data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileData"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"commuting_time"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commutingTime"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amount_of_money"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amountOfMoney"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"preferred_place_of_work"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preferredPlaceOfWork"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"desired_occupation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"desiredOccupation"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"desired_industries"},"value":{"kind":"Variable","name":{"kind":"Name","value":"desiredIndustries"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"desired_skills"},"value":{"kind":"Variable","name":{"kind":"Name","value":"desiredSkills"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mode_of_operation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modeOfOperation"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"available_day"},"value":{"kind":"Variable","name":{"kind":"Name","value":"availableDay"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"project_start_time"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectStartTime"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"project_start_year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectStartYear"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"project_start_mounth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectStartMounth"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name_kana"}},{"kind":"Field","name":{"kind":"Name","value":"first_name_kana"}},{"kind":"Field","name":{"kind":"Name","value":"birthday_year"}},{"kind":"Field","name":{"kind":"Name","value":"birthday_mounth"}},{"kind":"Field","name":{"kind":"Name","value":"birthday_day"}},{"kind":"Field","name":{"kind":"Name","value":"mail"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"prefectures"}},{"kind":"Field","name":{"kind":"Name","value":"current_situation"}},{"kind":"Field","name":{"kind":"Name","value":"professional_experience"}},{"kind":"Field","name":{"kind":"Name","value":"industries"}},{"kind":"Field","name":{"kind":"Name","value":"language_libraries"}},{"kind":"Field","name":{"kind":"Name","value":"frame_work"}},{"kind":"Field","name":{"kind":"Name","value":"portfolio"}},{"kind":"Field","name":{"kind":"Name","value":"self_pr"}},{"kind":"Field","name":{"kind":"Name","value":"file_name"}},{"kind":"Field","name":{"kind":"Name","value":"file_data"}},{"kind":"Field","name":{"kind":"Name","value":"commuting_time"}},{"kind":"Field","name":{"kind":"Name","value":"amount_of_money"}},{"kind":"Field","name":{"kind":"Name","value":"preferred_place_of_work"}},{"kind":"Field","name":{"kind":"Name","value":"desired_occupation"}},{"kind":"Field","name":{"kind":"Name","value":"desired_industries"}},{"kind":"Field","name":{"kind":"Name","value":"desired_skills"}},{"kind":"Field","name":{"kind":"Name","value":"mode_of_operation"}},{"kind":"Field","name":{"kind":"Name","value":"available_day"}},{"kind":"Field","name":{"kind":"Name","value":"project_start_time"}},{"kind":"Field","name":{"kind":"Name","value":"project_start_year"}},{"kind":"Field","name":{"kind":"Name","value":"project_start_mounth"}}]}}]}}]} as unknown as DocumentNode<EditProfileMutation, EditProfileMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ttl"},"value":{"kind":"IntValue","value":"0"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name_kana"}},{"kind":"Field","name":{"kind":"Name","value":"first_name_kana"}},{"kind":"Field","name":{"kind":"Name","value":"birthday_year"}},{"kind":"Field","name":{"kind":"Name","value":"birthday_mounth"}},{"kind":"Field","name":{"kind":"Name","value":"birthday_day"}},{"kind":"Field","name":{"kind":"Name","value":"mail"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"prefectures"}},{"kind":"Field","name":{"kind":"Name","value":"current_situation"}},{"kind":"Field","name":{"kind":"Name","value":"professional_experience"}},{"kind":"Field","name":{"kind":"Name","value":"industries"}},{"kind":"Field","name":{"kind":"Name","value":"language_libraries"}},{"kind":"Field","name":{"kind":"Name","value":"frame_work"}},{"kind":"Field","name":{"kind":"Name","value":"portfolio"}},{"kind":"Field","name":{"kind":"Name","value":"self_pr"}},{"kind":"Field","name":{"kind":"Name","value":"file_name"}},{"kind":"Field","name":{"kind":"Name","value":"file_data"}},{"kind":"Field","name":{"kind":"Name","value":"commuting_time"}},{"kind":"Field","name":{"kind":"Name","value":"amount_of_money"}},{"kind":"Field","name":{"kind":"Name","value":"preferred_place_of_work"}},{"kind":"Field","name":{"kind":"Name","value":"desired_occupation"}},{"kind":"Field","name":{"kind":"Name","value":"desired_industries"}},{"kind":"Field","name":{"kind":"Name","value":"desired_skills"}},{"kind":"Field","name":{"kind":"Name","value":"mode_of_operation"}},{"kind":"Field","name":{"kind":"Name","value":"available_day"}},{"kind":"Field","name":{"kind":"Name","value":"project_start_time"}},{"kind":"Field","name":{"kind":"Name","value":"project_start_year"}},{"kind":"Field","name":{"kind":"Name","value":"project_start_mounth"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetWorkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWork"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ttl"},"value":{"kind":"IntValue","value":"0"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"works_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contractType"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"maxMonthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxWorkHours"}},{"kind":"Field","name":{"kind":"Name","value":"minMonthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"minWorkHours"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetWorkQuery, GetWorkQueryVariables>;
export const GetWorksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"works_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[]}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"works_order_by"}}}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ttl"},"value":{"kind":"IntValue","value":"0"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"works"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contractType"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"maxMonthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxWorkHours"}},{"kind":"Field","name":{"kind":"Name","value":"minMonthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"minWorkHours"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetWorksQuery, GetWorksQueryVariables>;