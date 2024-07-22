import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { FormError, TaskEditProps } from "./types";
import Modal from "../Modal";
import { FormFieldConfig } from "./config";
import { ButtonGroup, Label } from "./styled";
import { PRIORITY, Status, Task } from "../TaskCard/types";
import Button from "../Button";
import GenericField from "../GenericField";
import { theme } from "../../common/theme";

const defaultTaskValues = {
  priority: PRIORITY.MEDIUM,
  status: Status.TO_DO,
};

function TaskEditForm({
  id,
  task,
  onSubmitTask,
  onCloseModal,
}: TaskEditProps) {
  const [taskForm, setTaskForm] = useState({ ...defaultTaskValues, ...task, id: id });
  const [taskFormErrors, setTaskFormErrors] = useState<FormError<Task>>({});

  const setFormError = (id?: string, error?: boolean) => {
    if (id) {
      setTaskFormErrors({ ...taskFormErrors, [id]: error });
    }
  };

  const onChangeText = (id: string, value: string) => {
    if (value.length >= 0) {
      setTaskForm({ ...taskForm, [id]: value });
    }
  };

  function onChangeDropdown<T>(id: string, value: T) {
    setTaskForm({ ...taskForm, [id]: value });
  }

  function onChangeDate(id: string, value?: number) {
    if (value && (new Date(value))?.toDateString()) {
      setTaskForm({ ...taskForm, [id]: value });
    }
  }

  const saveTask = (e) => {
    onSubmitTask(id, taskForm as Task);
  };


  const enableSubmit = useMemo(() => {
    return (
      taskForm.title &&
      taskForm.description &&
      taskForm.priority &&
      taskForm.status &&
      taskForm.dueDate &&
      !taskFormErrors["title"]
    );
  }, [taskForm, taskFormErrors]);
  return (
    <Modal
      title={task?.title || "Create New Task"}
      onCloseModal={onCloseModal}
    >
      {FormFieldConfig.map((field) => (
        <>
          <Label htmlFor={field.key}>{field.label}</Label>
          <GenericField
            field={field}
            taskForm={taskForm}
            onChangeDate={onChangeDate}
            onChangeText={onChangeText}
            onChangeDropdown={onChangeDropdown}
            setFormError={setFormError}
          />
        </>
      ))}
      <ButtonGroup>
        <Button
          color={theme.colors.WHITE}
          bgcolor={theme.colors.BLUE}
          onClick={saveTask}
          buttonText="Save"
          disabled={!enableSubmit}
        />
        <Button
          color={theme.colors.DARK_GREY}
          bgcolor={theme.colors.LIGHT_GREY}
          onClick={() => onCloseModal?.()}
          buttonText="Cancel"
        />
      </ButtonGroup>
    </Modal>
  );
}

export default TaskEditForm;
