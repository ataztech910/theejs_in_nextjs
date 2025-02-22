/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserCreatedModel = /* GraphQL */ `
  mutation CreateUserCreatedModel(
    $input: CreateUserCreatedModelInput!
    $condition: ModelUserCreatedModelConditionInput
  ) {
    createUserCreatedModel(input: $input, condition: $condition) {
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
export const updateUserCreatedModel = /* GraphQL */ `
  mutation UpdateUserCreatedModel(
    $input: UpdateUserCreatedModelInput!
    $condition: ModelUserCreatedModelConditionInput
  ) {
    updateUserCreatedModel(input: $input, condition: $condition) {
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
  }
`;
export const deleteUserCreatedModel = /* GraphQL */ `
  mutation DeleteUserCreatedModel(
    $input: DeleteUserCreatedModelInput!
    $condition: ModelUserCreatedModelConditionInput
  ) {
    deleteUserCreatedModel(input: $input, condition: $condition) {
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
