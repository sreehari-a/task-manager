import { useMemo, useState } from "react";
import Dropdown from "../Dropdown";
import { PriorityConfig, StatusConfig } from "../../common/config";
import {
  Card,
  Description,
  PriorityView,
  StatusOption,
  TaskWrapper,
  Title,
  TopSection,
} from "./styled";
import { Status, Task, TaskCardProps } from "./types";
import { useDispatch } from "react-redux";
import TaskEditForm from "../EditTask";
import { deleteTask, updateTask } from "../../reducers/task.reducer";
import IconButton from "../Button/IconButton";
import EditIcon from "../../assets/svgs/edit.svg";
import DeleteIcon from "../../assets/svgs/delete.svg";
import ConfirmModal from "../ConfirmModal";

function TaskCard({ task, onChangeStatus, id }: TaskCardProps) {
  const { title, description, status, dueDate, priority } = task;

  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const dispatch = useDispatch();

  const createTask = () => {
    setOpenCreateTask(true);
  };

  const closeCreateModal = () => setOpenCreateTask(false);

  const changeNewTask = (id: string, task: Task) => {
    closeCreateModal();
    dispatch(
      updateTask({
        id,
        task,
      })
    );
  };

  const dateString = useMemo(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return formatter.format(dueDate);
  }, [dueDate]);

  const statusOptions = StatusConfig.map((config) => ({
    label: (
      <StatusOption color={config.color} bgcolor={config.bgcolor}>
        {config.label}
      </StatusOption>
    ),
    value: config.value,
  }));

  const onStatusChange = (_name: string, status: Status) =>
    onChangeStatus(id, { ...task, status });

  const onDeleteTask = () => {
    dispatch(deleteTask({ id }));
  };

  const onDeleteIconClick = () => setShowConfirmModal(true);

  const onCloseDeleteModal = () => setShowConfirmModal(false);

  const { color, bgcolor } = PriorityConfig.filter((item) => item.value === priority)[0];
  return (
    <TaskWrapper>
      <Card>
        <TopSection>
          <Title>
            {title}
            <IconButton onClick={createTask}>
              <img src={EditIcon} alt="Edit" />
            </IconButton>
          </Title>
          <div>
            <Dropdown<Status>
              value={status}
              options={statusOptions}
              onChange={onStatusChange}
              id={"status"}
            ></Dropdown>
          </div>
        </TopSection>
        <PriorityView color={color} bgcolor={bgcolor}>
          {priority}
        </PriorityView>
        <Description>{description}</Description>
        <TopSection>
          <div>Due on: {dateString}</div>
          <IconButton onClick={onDeleteIconClick}>
            <img src={DeleteIcon} alt="Edit" />
          </IconButton>
        </TopSection>
      </Card>
      {openCreateTask && (
        <TaskEditForm
          id={task.id}
          onCloseModal={closeCreateModal}
          task={task}
          onSubmitTask={changeNewTask}
          open={openCreateTask}
        />
      )}
      {showConfirmModal && (
        <ConfirmModal
          modalTitle={`Confire Delete Task ${task.title}`}
          modalBody={`Are you sure you want to delete task ${task.title}`}
          primaryButtonClick={onDeleteTask}
          secondaryButtonClick={onCloseDeleteModal}
          primaryButtonText="Yes"
          secondaryButtonText="No"
          onCloseModal={onCloseDeleteModal}
        />
      )}
    </TaskWrapper>
  );
}

export default TaskCard;
