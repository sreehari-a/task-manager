import { InputTypes } from "./config";

export type FieldPropType<T> = {
    field: FieldObj<T, any>,
    taskForm: T,
    onChangeText: (id: string, value: string) => void,
    onChangeDropdown: (id: string, value?: Date | undefined) => void,
    onChangeDate: (id: string, value?: number | undefined) => void,
    setFormError: () => void;
}

type CommonProperties<T>={
    key: keyof T;
    label: string;
}

type TextFieldProps = {
    type: InputTypes.TEXTFIELD;
    placeholder: string;
    validate?: (value: string) => string;
}
type TextAreaProps = {
    type: InputTypes.TEXTAREA;
    validate?: (value: string) => string;
    rows: number;
}
type DropdownProps<U> = {
    type: InputTypes.DROPDOWN;
    validate?: (value: U) => string;
    options: {value: U, label: JSX.Element}[]
}
type DateProps= {
    type: InputTypes.DATE;
    validate?: (value: number) => string;
    minDate: Date,
}

export type FieldObj<T, U> = CommonProperties<T> & (TextFieldProps | TextAreaProps | DropdownProps<U> | DateProps)