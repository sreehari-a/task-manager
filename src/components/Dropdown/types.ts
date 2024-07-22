import { ReactNode } from "react"

export type DropdownOption<T> = {
    label: string | ReactNode;
    value: T;
};

export type DropdownProps<T> = {
    value: T;
    id: string;
    options: DropdownOption<T>[];
    onChange: (id: string, val: T) => void; 
    fullWidth?: boolean;
}