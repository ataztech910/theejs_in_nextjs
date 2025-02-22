import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





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