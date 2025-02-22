/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVotes = /* GraphQL */ `
  mutation CreateVotes(
    $input: CreateVotesInput!
    $condition: ModelVotesConditionInput
  ) {
    createVotes(input: $input, condition: $condition) {
      id
      user
      vote
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateVotes = /* GraphQL */ `
  mutation UpdateVotes(
    $input: UpdateVotesInput!
    $condition: ModelVotesConditionInput
  ) {
    updateVotes(input: $input, condition: $condition) {
      id
      user
      vote
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteVotes = /* GraphQL */ `
  mutation DeleteVotes(
    $input: DeleteVotesInput!
    $condition: ModelVotesConditionInput
  ) {
    deleteVotes(input: $input, condition: $condition) {
      id
      user
      vote
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createComments = /* GraphQL */ `
  mutation CreateComments(
    $input: CreateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    createComments(input: $input, condition: $condition) {
      id
      user
      comment
      position
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateComments = /* GraphQL */ `
  mutation UpdateComments(
    $input: UpdateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    updateComments(input: $input, condition: $condition) {
      id
      user
      comment
      position
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteComments = /* GraphQL */ `
  mutation DeleteComments(
    $input: DeleteCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    deleteComments(input: $input, condition: $condition) {
      id
      user
      comment
      position
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
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
      _version
      _deleted
      _lastChangedAt
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
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
