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
export declare type VotesCreateFormInputValues = {
    user?: string;
    vote?: number;
};
export declare type VotesCreateFormValidationValues = {
    user?: ValidationFunction<string>;
    vote?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VotesCreateFormOverridesProps = {
    VotesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    vote?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VotesCreateFormProps = React.PropsWithChildren<{
    overrides?: VotesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VotesCreateFormInputValues) => VotesCreateFormInputValues;
    onSuccess?: (fields: VotesCreateFormInputValues) => void;
    onError?: (fields: VotesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VotesCreateFormInputValues) => VotesCreateFormInputValues;
    onValidate?: VotesCreateFormValidationValues;
} & React.CSSProperties>;
export default function VotesCreateForm(props: VotesCreateFormProps): React.ReactElement;
