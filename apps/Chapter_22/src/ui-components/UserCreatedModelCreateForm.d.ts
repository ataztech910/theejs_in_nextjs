/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserCreatedModelCreateFormInputValues = {
    position?: number[];
    size?: number[];
    color?: string;
    isVisible?: boolean;
    name?: string;
};
export declare type UserCreatedModelCreateFormValidationValues = {
    position?: ValidationFunction<number>;
    size?: ValidationFunction<number>;
    color?: ValidationFunction<string>;
    isVisible?: ValidationFunction<boolean>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCreatedModelCreateFormOverridesProps = {
    UserCreatedModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    isVisible?: PrimitiveOverrideProps<SwitchFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserCreatedModelCreateFormProps = React.PropsWithChildren<{
    overrides?: UserCreatedModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserCreatedModelCreateFormInputValues) => UserCreatedModelCreateFormInputValues;
    onSuccess?: (fields: UserCreatedModelCreateFormInputValues) => void;
    onError?: (fields: UserCreatedModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserCreatedModelCreateFormInputValues) => UserCreatedModelCreateFormInputValues;
    onValidate?: UserCreatedModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserCreatedModelCreateForm(props: UserCreatedModelCreateFormProps): React.ReactElement;
