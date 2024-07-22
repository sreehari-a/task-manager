import { Filter } from "../TaskCard/types";

export type TaskFilterProps<T> = {
    open: boolean;
    onClose?: () => void;
    onApplyFilter: (filter: Filter<T>) => void;
    filterConfig: FilterConfigType<T>;
    appliedFilters: Filter<T>,
}

export type FilterConfigType<T> = {
    label: string;
    key: keyof T;
    config: {
        label: string;
        value: any;
        color: string;
        bgcolor: string;
    }[]
}[]