import { Task } from "../TaskCard/types";

export type TaskEditProps = {
    title?: string;
    task?: Task;
    id: string;
    onSubmitTask: (id: string, task: Task) => void;
    onCloseModal?: () => void;
    open?: boolean;
}
export type FormError<T> = {
    [b in keyof T]?:  boolean;
}