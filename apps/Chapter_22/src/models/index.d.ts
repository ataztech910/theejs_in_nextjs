import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerVotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Votes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly vote?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Votes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly vote?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Votes = LazyLoading extends LazyLoadingDisabled ? EagerVotes : LazyVotes

export declare const Votes: (new (init: ModelInit<Votes>) => Votes) & {
  copyOf(source: Votes, mutator: (draft: MutableModel<Votes>) => MutableModel<Votes> | void): Votes;
}

type EagerComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly comment?: string | null;
  readonly position: (number | null)[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly comment?: string | null;
  readonly position: (number | null)[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comments = LazyLoading extends LazyLoadingDisabled ? EagerComments : LazyComments

export declare const Comments: (new (init: ModelInit<Comments>) => Comments) & {
  copyOf(source: Comments, mutator: (draft: MutableModel<Comments>) => MutableModel<Comments> | void): Comments;
}

type EagerUserCreatedModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserCreatedModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly position: (number | null)[];
  readonly size: (number | null)[];
  readonly color?: string | null;
  readonly isVisible?: boolean | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserCreatedModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserCreatedModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly position: (number | null)[];
  readonly size: (number | null)[];
  readonly color?: string | null;
  readonly isVisible?: boolean | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserCreatedModel = LazyLoading extends LazyLoadingDisabled ? EagerUserCreatedModel : LazyUserCreatedModel

export declare const UserCreatedModel: (new (init: ModelInit<UserCreatedModel>) => UserCreatedModel) & {
  copyOf(source: UserCreatedModel, mutator: (draft: MutableModel<UserCreatedModel>) => MutableModel<UserCreatedModel> | void): UserCreatedModel;
}