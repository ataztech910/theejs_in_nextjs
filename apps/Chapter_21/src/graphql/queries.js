/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserCreatedModel = /* GraphQL */ `
  query GetUserCreatedModel($id: ID!) {
    getUserCreatedModel(id: $id) {
      id
      position
      size
      color
      isVisible
      name
      createdAt
      updatedAt
    }
  }
`;
export const listUserCreatedModels = /* GraphQL */ `
  query ListUserCreatedModels(
    $filter: ModelUserCreatedModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCreatedModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        position
        size
        color
        isVisible
        name
        createdAt
        updatedAt
        _version
      }
      nextToken
    }
  }
`;
