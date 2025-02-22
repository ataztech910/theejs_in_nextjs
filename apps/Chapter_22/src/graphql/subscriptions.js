/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVotes = /* GraphQL */ `
  subscription OnCreateVotes($filter: ModelSubscriptionVotesFilterInput) {
    onCreateVotes(filter: $filter) {
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
export const onUpdateVotes = /* GraphQL */ `
  subscription OnUpdateVotes($filter: ModelSubscriptionVotesFilterInput) {
    onUpdateVotes(filter: $filter) {
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
export const onDeleteVotes = /* GraphQL */ `
  subscription OnDeleteVotes($filter: ModelSubscriptionVotesFilterInput) {
    onDeleteVotes(filter: $filter) {
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
export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments($filter: ModelSubscriptionCommentsFilterInput) {
    onCreateComments(filter: $filter) {
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
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments($filter: ModelSubscriptionCommentsFilterInput) {
    onUpdateComments(filter: $filter) {
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
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments($filter: ModelSubscriptionCommentsFilterInput) {
    onDeleteComments(filter: $filter) {
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
export const onCreateUserCreatedModel = /* GraphQL */ `
  subscription OnCreateUserCreatedModel(
    $filter: ModelSubscriptionUserCreatedModelFilterInput
  ) {
    onCreateUserCreatedModel(filter: $filter) {
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
export const onUpdateUserCreatedModel = /* GraphQL */ `
  subscription OnUpdateUserCreatedModel(
    $filter: ModelSubscriptionUserCreatedModelFilterInput
  ) {
    onUpdateUserCreatedModel(filter: $filter) {
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
export const onDeleteUserCreatedModel = /* GraphQL */ `
  subscription OnDeleteUserCreatedModel(
    $filter: ModelSubscriptionUserCreatedModelFilterInput
  ) {
    onDeleteUserCreatedModel(filter: $filter) {
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
