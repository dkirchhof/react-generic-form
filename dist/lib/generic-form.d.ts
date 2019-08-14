import * as React from "react";
import { ValidationFunction } from "./validators";
export declare type FieldOptions<T> = {
    [k in keyof T]: IFieldOption<T, T[k]>;
};
export declare type Fields<T> = {
    [k in keyof T]: IField<T[k]>;
};
export interface IFieldOption<T, F> {
    validators?: ValidationFunction<T, F>[];
}
export interface IField<T> {
    name: string;
    errors: string[];
    value: T;
}
export interface IGenericFormProps<T> extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
    fieldOptions: FieldOptions<T>;
    initialValues: T;
    children: (props: IGenericFormChildProps<T>) => React.ReactElement | React.ReactElement[];
    onSubmit: (event: React.FormEvent<HTMLFormElement>, result: IGenericFormResult<T>, actions: IGenericFormActions) => void;
}
export interface IGenericFormChildProps<T> {
    fields: Fields<T>;
    isSubmitting: boolean;
}
export interface IGenericFormResult<T> {
    fields: Fields<T>;
    isValid: boolean;
    values: T;
}
export interface IGenericFormActions {
    setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const GenericForm: <T extends any>(props: IGenericFormProps<T>) => JSX.Element;
