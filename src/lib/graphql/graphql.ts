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
  /** delete data from the table: "user_to_works" */
  delete_user_to_works?: Maybe<User_To_Works_Mutation_Response>;
  /** delete single row from the table: "user_to_works" */
  delete_user_to_works_by_pk?: Maybe<User_To_Works>;
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
  /** insert data into the table: "user_to_works" */
  insert_user_to_works?: Maybe<User_To_Works_Mutation_Response>;
  /** insert a single row into the table: "user_to_works" */
  insert_user_to_works_one?: Maybe<User_To_Works>;
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
  /** update data of the table: "user_to_works" */
  update_user_to_works?: Maybe<User_To_Works_Mutation_Response>;
  /** update single row of the table: "user_to_works" */
  update_user_to_works_by_pk?: Maybe<User_To_Works>;
  /** update multiples rows of table: "user_to_works" */
  update_user_to_works_many?: Maybe<Array<Maybe<User_To_Works_Mutation_Response>>>;
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
export type Mutation_RootDelete_User_To_WorksArgs = {
  where: User_To_Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_To_Works_By_PkArgs = {
  user_id: Scalars['String']['input'];
  work_id: Scalars['Int']['input'];
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
export type Mutation_RootInsert_User_To_WorksArgs = {
  objects: Array<User_To_Works_Insert_Input>;
  on_conflict?: InputMaybe<User_To_Works_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_To_Works_OneArgs = {
  object: User_To_Works_Insert_Input;
  on_conflict?: InputMaybe<User_To_Works_On_Conflict>;
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
export type Mutation_RootUpdate_User_To_WorksArgs = {
  _inc?: InputMaybe<User_To_Works_Inc_Input>;
  _set?: InputMaybe<User_To_Works_Set_Input>;
  where: User_To_Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_To_Works_By_PkArgs = {
  _inc?: InputMaybe<User_To_Works_Inc_Input>;
  _set?: InputMaybe<User_To_Works_Set_Input>;
  pk_columns: User_To_Works_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_To_Works_ManyArgs = {
  updates: Array<User_To_Works_Updates>;
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
  /** fetch data from the table: "user_to_works" */
  user_to_works: Array<User_To_Works>;
  /** fetch aggregated fields from the table: "user_to_works" */
  user_to_works_aggregate: User_To_Works_Aggregate;
  /** fetch data from the table: "user_to_works" using primary key columns */
  user_to_works_by_pk?: Maybe<User_To_Works>;
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


export type Query_RootUser_To_WorksArgs = {
  distinct_on?: InputMaybe<Array<User_To_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_To_Works_Order_By>>;
  where?: InputMaybe<User_To_Works_Bool_Exp>;
};


export type Query_RootUser_To_Works_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_To_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_To_Works_Order_By>>;
  where?: InputMaybe<User_To_Works_Bool_Exp>;
};


export type Query_RootUser_To_Works_By_PkArgs = {
  user_id: Scalars['String']['input'];
  work_id: Scalars['Int']['input'];
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
  /** fetch data from the table: "user_to_works" */
  user_to_works: Array<User_To_Works>;
  /** fetch aggregated fields from the table: "user_to_works" */
  user_to_works_aggregate: User_To_Works_Aggregate;
  /** fetch data from the table: "user_to_works" using primary key columns */
  user_to_works_by_pk?: Maybe<User_To_Works>;
  /** fetch data from the table in a streaming manner: "user_to_works" */
  user_to_works_stream: Array<User_To_Works>;
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


export type Subscription_RootUser_To_WorksArgs = {
  distinct_on?: InputMaybe<Array<User_To_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_To_Works_Order_By>>;
  where?: InputMaybe<User_To_Works_Bool_Exp>;
};


export type Subscription_RootUser_To_Works_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_To_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_To_Works_Order_By>>;
  where?: InputMaybe<User_To_Works_Bool_Exp>;
};


export type Subscription_RootUser_To_Works_By_PkArgs = {
  user_id: Scalars['String']['input'];
  work_id: Scalars['Int']['input'];
};


export type Subscription_RootUser_To_Works_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_To_Works_Stream_Cursor_Input>>;
  where?: InputMaybe<User_To_Works_Bool_Exp>;
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

/** columns and relationships of "user_to_works" */
export type User_To_Works = {
  __typename?: 'user_to_works';
  application: Scalars['Boolean']['output'];
  favorite: Scalars['Boolean']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String']['output'];
  /** An object relationship */
  work: Works;
  work_id: Scalars['Int']['output'];
};

/** aggregated selection of "user_to_works" */
export type User_To_Works_Aggregate = {
  __typename?: 'user_to_works_aggregate';
  aggregate?: Maybe<User_To_Works_Aggregate_Fields>;
  nodes: Array<User_To_Works>;
};

export type User_To_Works_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<User_To_Works_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_To_Works_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<User_To_Works_Aggregate_Bool_Exp_Count>;
};

export type User_To_Works_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_To_Works_Select_Column_User_To_Works_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_To_Works_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_To_Works_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_To_Works_Select_Column_User_To_Works_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_To_Works_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_To_Works_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_To_Works_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_To_Works_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_to_works" */
export type User_To_Works_Aggregate_Fields = {
  __typename?: 'user_to_works_aggregate_fields';
  avg?: Maybe<User_To_Works_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_To_Works_Max_Fields>;
  min?: Maybe<User_To_Works_Min_Fields>;
  stddev?: Maybe<User_To_Works_Stddev_Fields>;
  stddev_pop?: Maybe<User_To_Works_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_To_Works_Stddev_Samp_Fields>;
  sum?: Maybe<User_To_Works_Sum_Fields>;
  var_pop?: Maybe<User_To_Works_Var_Pop_Fields>;
  var_samp?: Maybe<User_To_Works_Var_Samp_Fields>;
  variance?: Maybe<User_To_Works_Variance_Fields>;
};


/** aggregate fields of "user_to_works" */
export type User_To_Works_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_To_Works_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_to_works" */
export type User_To_Works_Aggregate_Order_By = {
  avg?: InputMaybe<User_To_Works_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_To_Works_Max_Order_By>;
  min?: InputMaybe<User_To_Works_Min_Order_By>;
  stddev?: InputMaybe<User_To_Works_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_To_Works_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_To_Works_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_To_Works_Sum_Order_By>;
  var_pop?: InputMaybe<User_To_Works_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_To_Works_Var_Samp_Order_By>;
  variance?: InputMaybe<User_To_Works_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_to_works" */
export type User_To_Works_Arr_Rel_Insert_Input = {
  data: Array<User_To_Works_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_To_Works_On_Conflict>;
};

/** aggregate avg on columns */
export type User_To_Works_Avg_Fields = {
  __typename?: 'user_to_works_avg_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_to_works" */
export type User_To_Works_Avg_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_to_works". All fields are combined with a logical 'AND'. */
export type User_To_Works_Bool_Exp = {
  _and?: InputMaybe<Array<User_To_Works_Bool_Exp>>;
  _not?: InputMaybe<User_To_Works_Bool_Exp>;
  _or?: InputMaybe<Array<User_To_Works_Bool_Exp>>;
  application?: InputMaybe<Boolean_Comparison_Exp>;
  favorite?: InputMaybe<Boolean_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  work?: InputMaybe<Works_Bool_Exp>;
  work_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_to_works" */
export enum User_To_Works_Constraint {
  /** unique or primary key constraint on columns "user_id", "work_id" */
  UserToWorksPkey = 'user_to_works_pkey'
}

/** input type for incrementing numeric columns in table "user_to_works" */
export type User_To_Works_Inc_Input = {
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_to_works" */
export type User_To_Works_Insert_Input = {
  application?: InputMaybe<Scalars['Boolean']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work?: InputMaybe<Works_Obj_Rel_Insert_Input>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type User_To_Works_Max_Fields = {
  __typename?: 'user_to_works_max_fields';
  user_id?: Maybe<Scalars['String']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "user_to_works" */
export type User_To_Works_Max_Order_By = {
  user_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_To_Works_Min_Fields = {
  __typename?: 'user_to_works_min_fields';
  user_id?: Maybe<Scalars['String']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "user_to_works" */
export type User_To_Works_Min_Order_By = {
  user_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_to_works" */
export type User_To_Works_Mutation_Response = {
  __typename?: 'user_to_works_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_To_Works>;
};

/** on_conflict condition type for table "user_to_works" */
export type User_To_Works_On_Conflict = {
  constraint: User_To_Works_Constraint;
  update_columns?: Array<User_To_Works_Update_Column>;
  where?: InputMaybe<User_To_Works_Bool_Exp>;
};

/** Ordering options when selecting data from "user_to_works". */
export type User_To_Works_Order_By = {
  application?: InputMaybe<Order_By>;
  favorite?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  work?: InputMaybe<Works_Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_to_works */
export type User_To_Works_Pk_Columns_Input = {
  user_id: Scalars['String']['input'];
  work_id: Scalars['Int']['input'];
};

/** select columns of table "user_to_works" */
export enum User_To_Works_Select_Column {
  /** column name */
  Application = 'application',
  /** column name */
  Favorite = 'favorite',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkId = 'work_id'
}

/** select "user_to_works_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_to_works" */
export enum User_To_Works_Select_Column_User_To_Works_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Application = 'application',
  /** column name */
  Favorite = 'favorite'
}

/** select "user_to_works_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_to_works" */
export enum User_To_Works_Select_Column_User_To_Works_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Application = 'application',
  /** column name */
  Favorite = 'favorite'
}

/** input type for updating data in table "user_to_works" */
export type User_To_Works_Set_Input = {
  application?: InputMaybe<Scalars['Boolean']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type User_To_Works_Stddev_Fields = {
  __typename?: 'user_to_works_stddev_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_to_works" */
export type User_To_Works_Stddev_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_To_Works_Stddev_Pop_Fields = {
  __typename?: 'user_to_works_stddev_pop_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_to_works" */
export type User_To_Works_Stddev_Pop_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_To_Works_Stddev_Samp_Fields = {
  __typename?: 'user_to_works_stddev_samp_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_to_works" */
export type User_To_Works_Stddev_Samp_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_to_works" */
export type User_To_Works_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_To_Works_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_To_Works_Stream_Cursor_Value_Input = {
  application?: InputMaybe<Scalars['Boolean']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_To_Works_Sum_Fields = {
  __typename?: 'user_to_works_sum_fields';
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user_to_works" */
export type User_To_Works_Sum_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_to_works" */
export enum User_To_Works_Update_Column {
  /** column name */
  Application = 'application',
  /** column name */
  Favorite = 'favorite',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkId = 'work_id'
}

export type User_To_Works_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_To_Works_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_To_Works_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_To_Works_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_To_Works_Var_Pop_Fields = {
  __typename?: 'user_to_works_var_pop_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_to_works" */
export type User_To_Works_Var_Pop_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_To_Works_Var_Samp_Fields = {
  __typename?: 'user_to_works_var_samp_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_to_works" */
export type User_To_Works_Var_Samp_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_To_Works_Variance_Fields = {
  __typename?: 'user_to_works_variance_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_to_works" */
export type User_To_Works_Variance_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  first_name?: Maybe<Scalars['String']['output']>;
  first_name_kana?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  last_name_kana?: Maybe<Scalars['String']['output']>;
  mail?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  tel?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  works: Array<User_To_Works>;
  /** An aggregate relationship */
  works_aggregate: User_To_Works_Aggregate;
};


/** columns and relationships of "users" */
export type UsersWorksArgs = {
  distinct_on?: InputMaybe<Array<User_To_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_To_Works_Order_By>>;
  where?: InputMaybe<User_To_Works_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_To_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_To_Works_Order_By>>;
  where?: InputMaybe<User_To_Works_Bool_Exp>;
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
  first_name?: InputMaybe<String_Comparison_Exp>;
  first_name_kana?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  last_name_kana?: InputMaybe<String_Comparison_Exp>;
  mail?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tel?: InputMaybe<String_Comparison_Exp>;
  works?: InputMaybe<User_To_Works_Bool_Exp>;
  works_aggregate?: InputMaybe<User_To_Works_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  first_name?: InputMaybe<Scalars['String']['input']>;
  first_name_kana?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_name_kana?: InputMaybe<Scalars['String']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
  works?: InputMaybe<User_To_Works_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  first_name?: Maybe<Scalars['String']['output']>;
  first_name_kana?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_name_kana?: Maybe<Scalars['String']['output']>;
  mail?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tel?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  first_name?: Maybe<Scalars['String']['output']>;
  first_name_kana?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_name_kana?: Maybe<Scalars['String']['output']>;
  mail?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
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

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  first_name?: InputMaybe<Order_By>;
  first_name_kana?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_name_kana?: InputMaybe<Order_By>;
  mail?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
  works_aggregate?: InputMaybe<User_To_Works_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  FirstName = 'first_name',
  /** column name */
  FirstNameKana = 'first_name_kana',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastNameKana = 'last_name_kana',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  Tel = 'tel'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  first_name?: InputMaybe<Scalars['String']['input']>;
  first_name_kana?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_name_kana?: InputMaybe<Scalars['String']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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
  first_name?: InputMaybe<Scalars['String']['input']>;
  first_name_kana?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_name_kana?: InputMaybe<Scalars['String']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  FirstName = 'first_name',
  /** column name */
  FirstNameKana = 'first_name_kana',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastNameKana = 'last_name_kana',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
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
  /** An array relationship */
  users: Array<User_To_Works>;
  /** An aggregate relationship */
  users_aggregate: User_To_Works_Aggregate;
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


/** 案件一覧を管理するテーブル */
export type WorksUsersArgs = {
  distinct_on?: InputMaybe<Array<User_To_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_To_Works_Order_By>>;
  where?: InputMaybe<User_To_Works_Bool_Exp>;
};


/** 案件一覧を管理するテーブル */
export type WorksUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_To_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_To_Works_Order_By>>;
  where?: InputMaybe<User_To_Works_Bool_Exp>;
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
  users?: InputMaybe<User_To_Works_Bool_Exp>;
  users_aggregate?: InputMaybe<User_To_Works_Aggregate_Bool_Exp>;
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
  users?: InputMaybe<User_To_Works_Arr_Rel_Insert_Input>;
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
  users_aggregate?: InputMaybe<User_To_Works_Aggregate_Order_By>;
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

export type GetFavoriteQueryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetFavoriteQueryQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', works: Array<{ __typename?: 'user_to_works', application: boolean, favorite: boolean, work: { __typename?: 'works', contractType?: string | null, createAt: any, description: string, id: number, isClosed: boolean, location?: string | null, maxMonthlyPrice?: number | null, maxWorkHours?: number | null, minMonthlyPrice?: number | null, minWorkHours?: number | null, title: string, languages: Array<{ __typename?: 'work_to_detail', skill?: { __typename?: 'skills', id: number, name?: string | null, type?: string | null } | null }> } }> }> };

export type GetUserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name: string }> };

export type GetWorkQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetWorkQuery = { __typename?: 'query_root', works_by_pk?: { __typename?: 'works', id: number, title: string, contractType?: string | null, location?: string | null, maxMonthlyPrice?: number | null, maxWorkHours?: number | null, minMonthlyPrice?: number | null, minWorkHours?: number | null, description: string, createAt: any, isClosed: boolean, languages: Array<{ __typename?: 'work_to_detail', skill?: { __typename?: 'skills', id: number, name?: string | null, type?: string | null } | null }> } | null };

export type GetWorksQueryVariables = Exact<{
  where?: InputMaybe<Works_Bool_Exp>;
  order_by?: InputMaybe<Array<Works_Order_By> | Works_Order_By>;
}>;


export type GetWorksQuery = { __typename?: 'query_root', works: Array<{ __typename?: 'works', id: number, isClosed: boolean, title: string, contractType?: string | null, location?: string | null, maxMonthlyPrice?: number | null, maxWorkHours?: number | null, minMonthlyPrice?: number | null, minWorkHours?: number | null, description: string, createAt: any, languages: Array<{ __typename?: 'work_to_detail', skill?: { __typename?: 'skills', id: number, name?: string | null, type?: string | null } | null }> }> };


export const GetAllProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllProject"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keyword"}},{"kind":"Field","name":{"kind":"Name","value":"projectName"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<GetAllProjectQuery, GetAllProjectQueryVariables>;
export const GetDetailProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDetailProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"businessContent"}},{"kind":"Field","name":{"kind":"Name","value":"contentBusiness"}},{"kind":"Field","name":{"kind":"Name","value":"developmentEnvironment"}},{"kind":"Field","name":{"kind":"Name","value":"keyword"}},{"kind":"Field","name":{"kind":"Name","value":"personnelSought"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"projectName"}},{"kind":"Field","name":{"kind":"Name","value":"recruitmentBackground"}},{"kind":"Field","name":{"kind":"Name","value":"recruitmentNumber"}},{"kind":"Field","name":{"kind":"Name","value":"requiredSkills"}},{"kind":"Field","name":{"kind":"Name","value":"welcomeSkills"}},{"kind":"Field","name":{"kind":"Name","value":"workingConditions"}}]}}]}}]} as unknown as DocumentNode<GetDetailProjectQuery, GetDetailProjectQueryVariables>;
export const GetSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkills"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skillsWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"skills_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[]}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"worksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"work_to_detail_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[]}}]}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ttl"},"value":{"kind":"IntValue","value":"600"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skillsWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"works_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"worksWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSkillsQuery, GetSkillsQueryVariables>;
export const GetFavoriteQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFavoriteQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"works"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"works"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"application"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"application"}},{"kind":"Field","name":{"kind":"Name","value":"favorite"}},{"kind":"Field","name":{"kind":"Name","value":"work"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractType"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isClosed"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"maxMonthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxWorkHours"}},{"kind":"Field","name":{"kind":"Name","value":"minMonthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"minWorkHours"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFavoriteQueryQuery, GetFavoriteQueryQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ttl"},"value":{"kind":"IntValue","value":"600"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetWorkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWork"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ttl"},"value":{"kind":"IntValue","value":"600"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"works_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contractType"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"maxMonthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxWorkHours"}},{"kind":"Field","name":{"kind":"Name","value":"minMonthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"minWorkHours"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}},{"kind":"Field","name":{"kind":"Name","value":"isClosed"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetWorkQuery, GetWorkQueryVariables>;
export const GetWorksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"works_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[]}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"works_order_by"}}}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ttl"},"value":{"kind":"IntValue","value":"600"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"works"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isClosed"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contractType"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"maxMonthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxWorkHours"}},{"kind":"Field","name":{"kind":"Name","value":"minMonthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"minWorkHours"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetWorksQuery, GetWorksQueryVariables>;