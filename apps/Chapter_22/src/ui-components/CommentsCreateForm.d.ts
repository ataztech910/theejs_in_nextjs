/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CommentsCreateFormInputValues = {
    user?: string;
    comment?: string;
    position?: number[];
};
export declare type CommentsCreateFormValidationValues = {
    user?: ValidationFunction<string>;
    comment?: ValidationFunction<string>;
    position?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentsCreateFormOverridesProps = {
    CommentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommentsCreateFormProps = React.PropsWithChildren<{
    overrides?: CommentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CommentsCreateFormInputValues) => CommentsCreateFormInputValues;
    onSuccess?: (fields: CommentsCreateFormInputValues) => void;
    onError?: (fields: CommentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommentsCreateFormInputValues) => CommentsCreateFormInputValues;
    onValidate?: CommentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CommentsCreateForm(props: CommentsCreateFormProps): React.ReactElement;
