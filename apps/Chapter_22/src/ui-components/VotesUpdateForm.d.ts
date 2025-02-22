/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Votes } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VotesUpdateFormInputValues = {
    user?: string;
    vote?: number;
};
export declare type VotesUpdateFormValidationValues = {
    user?: ValidationFunction<string>;
    vote?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VotesUpdateFormOverridesProps = {
    VotesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    vote?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VotesUpdateFormProps = React.PropsWithChildren<{
    overrides?: VotesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    votes?: Votes;
    onSubmit?: (fields: VotesUpdateFormInputValues) => VotesUpdateFormInputValues;
    onSuccess?: (fields: VotesUpdateFormInputValues) => void;
    onError?: (fields: VotesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VotesUpdateFormInputValues) => VotesUpdateFormInputValues;
    onValidate?: VotesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VotesUpdateForm(props: VotesUpdateFormProps): React.ReactElement;
