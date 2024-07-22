import React, { useCallback, useMemo, useState } from "react";
import { ButtonSection, TasksWrapper } from "./styled";
import TaskCard from "../../components/TaskCard";
import { Filter, Task } from "../../components/TaskCard/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addTask, setFilter, updateTask } from "../../reducers/task.reducer";
import Button from "../../components/Button";
import TaskEditForm from "../../components/EditTask";
import useFilter from "../../hooks/useFilter";
import { FilterConfig } from "../../common/config";
import FilterBox from "../../components/FilterBox";
import SearchBar from "../../components/TextField/searchField";
import FilterIcon from "../../assets/svgs/filter-white.svg";
import { theme } from "../../common/theme";

function Tasks() {
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const tasks = useSelector((state: RootState) => state?.tasks?.tasks);
  const filter = useSelector((state: RootState) => state?.tasks?.filter);

  const filteredTasks = useFilter(tasks, filter);

  const dispatch = useDispatch();

  const onChangeStatus = (id: string, task: Task) => {
    dispatch(
      updateTask({
        id,
        task,
      })
    );
  };
  const createTask = useCallback(() => {
    setOpenCreateTask(true);
  }, []);

  const closeCreateModal = useCallback(() => {
    console.log("closeCreateModal");
    setOpenCreateTask(false);
  }, []);

  const addNewTask = useCallback((_id: string, task: Task) => {
    closeCreateModal();
    dispatch(addTask({ task }));
  }, []);

  const showFilter = () => setOpenFilter(true);
  const closeFilter = () => setOpenFilter(false);

  const onApplyFilter = (newFilter: Filter<Task>) => {
    dispatch(setFilter({ filter: {...newFilter} }));
  };

  const onSearch = (value: string) => {
    const updatedFilter = {
      ...filter,
      ["title"]: value,
      ["description"]: value,
    };
    dispatch(setFilter({ filter: updatedFilter }));
  };

  const nextId = useMemo(() => {
    const lastItemId = tasks[tasks.length-1]?.id || "0";
    return (Number(lastItemId) + 1).toString();
  },[tasks])

  return (
    <>
      <SearchBar text={filter.title as string} onSearch={onSearch} />
      <TasksWrapper>
        <ButtonSection>
          <Button
            color={theme.colors.WHITE}
            bgcolor={theme.colors.BLUE}
            onClick={createTask}
            buttonText="Create"
            icon={<>&#43;</>}
          />
          <Button
            color={theme.colors.WHITE}
            bgcolor={theme.colors.BLUE}
            onClick={showFilter}
            buttonText="Filter"
            icon={<img src={FilterIcon} height={"16px"} />}
          />
        </ButtonSection>
        {filteredTasks.map((task) => (
          <React.Fragment key={task.title}>
            <TaskCard
              id={task.id}
              task={{ ...task }}
              onChangeStatus={onChangeStatus}
            />
          </React.Fragment>
        ))}
        {openCreateTask && (
          <TaskEditForm
            id={nextId}
            onCloseModal={closeCreateModal}
            onSubmitTask={addNewTask}
          />
        )}
        <FilterBox<Task>
          open={openFilter}
          onClose={closeFilter}
          onApplyFilter={onApplyFilter}
          filterConfig={FilterConfig}
          appliedFilters={filter}
        />
      </TasksWrapper>
    </>
  );
}

export default Tasks;
