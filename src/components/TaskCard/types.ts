export enum Status {
  TO_DO = "TO_DO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export enum PRIORITY {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export type Task = {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: PRIORITY;
  dueDate: number;
};

export type Filter<T> = {
  [key in keyof T]?: string | string[];
};

export type TaskCardProps = {
  id: string;
  task: Task;
  onChangeStatus: (id: string, task: Task) => void;
};
