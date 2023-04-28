/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cat = {
  __typename?: 'Cat';
  age: Scalars['Float'];
  color: Scalars['String'];
  dailyPrice: Scalars['Float'];
  favoriteFood: Scalars['String'];
  id: Scalars['String'];
  imgSrc: Scalars['String'];
  monthlyPrice: Scalars['Float'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewCat: Cat;
};


export type MutationAddNewCatArgs = {
  newCatData: NewCatInput;
};

export type NewCatInput = {
  age: Scalars['Int'];
  color: Scalars['String'];
  dailyPrice: Scalars['Int'];
  favoriteFood: Scalars['String'];
  imgSrc: Scalars['String'];
  monthlyPrice: Scalars['Int'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllCats: Array<Cat>;
};

export type GetAllCatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCatsQuery = { __typename?: 'Query', getAllCats: Array<{ __typename?: 'Cat', id: string, name: string, imgSrc: string, age: number, color: string, favoriteFood: string, dailyPrice: number, monthlyPrice: number }> };


export const GetAllCatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllCats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imgSrc"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"favoriteFood"}},{"kind":"Field","name":{"kind":"Name","value":"dailyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"monthlyPrice"}}]}}]}}]} as unknown as DocumentNode<GetAllCatsQuery, GetAllCatsQueryVariables>;