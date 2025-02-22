/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserCreatedModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserCreatedModelUpdateFormInputValues = {
    position?: number[];
    size?: number[];
    color?: string;
    isVisible?: boolean;
    name?: string;
};
export declare type UserCreatedModelUpdateFormValidationValues = {
    position?: ValidationFunction<number>;
    size?: ValidationFunction<number>;
    color?: ValidationFunction<string>;
    isVisible?: ValidationFunction<boolean>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCreatedModelUpdateFormOverridesProps = {
    UserCreatedModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    isVisible?: PrimitiveOverrideProps<SwitchFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserCreatedModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserCreatedModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userCreatedModel?: UserCreatedModel;
    onSubmit?: (fields: UserCreatedModelUpdateFormInputValues) => UserCreatedModelUpdateFormInputValues;
    onSuccess?: (fields: UserCreatedModelUpdateFormInputValues) => void;
    onError?: (fields: UserCreatedModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserCreatedModelUpdateFormInputValues) => UserCreatedModelUpdateFormInputValues;
    onValidate?: UserCreatedModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserCreatedModelUpdateForm(props: UserCreatedModelUpdateFormProps): React.ReactElement;
