import { FilterConfigType } from "../components/FilterBox/types";
import { StatusOption } from "../components/TaskCard/styled";
import { PRIORITY, Status, Task } from "../components/TaskCard/types";
import { theme } from "./theme";

export const StatusConfig = [
  {
    label: "TO DO",
    value: Status.TO_DO,
    color: theme.colors.DARK_GREY,
    bgcolor: theme.colors.LIGHT_GREY,
  },
  {
    label: "IN PROGRESS",
    value: Status.IN_PROGRESS,
    color: theme.colors.DARK_BLUE,
    bgcolor: theme.colors.LIGHT_BLUE,
  },
  {
    label: "DONE",
    value: Status.DONE,
    color: theme.colors.DARK_GREEN,
    bgcolor: theme.colors.LIGHT_GREEN,
  },
];

export const PriorityConfig = [
  {
    label: PRIORITY.LOW,
    value: PRIORITY.LOW,
    color: theme.colors.DARK_GREEN,
    bgcolor:theme.colors.LIGHT_GREEN,
  },
  {
    label: PRIORITY.MEDIUM,
    value: PRIORITY.MEDIUM,
    color: theme.colors.DARK_BLUE,
    bgcolor: theme.colors.LIGHT_BLUE,
  },
  {
    label: PRIORITY.HIGH,
    value: PRIORITY.HIGH,
    color: theme.colors.DARK_RED,
    bgcolor: theme.colors.LIGHT_RED,
  },
];

export const StatusOptions = StatusConfig.map((config) => ({
  label: (
    <StatusOption color={config.color} bgcolor={config.bgcolor} fullWidth>
      {config.label}
    </StatusOption>
  ),
  value: config.value,
}));

export const PriorityOptions = PriorityConfig.map((config) => ({
  label: (
    <StatusOption color={config.color} bgcolor={config.bgcolor} fullWidth>
      {config.label}
    </StatusOption>
  ),
  value: config.value,
}));

export const FilterConfig: FilterConfigType<Task> = [
    {
        label: "Status",
        key: "status",
        config: StatusConfig,
    },
    {
        label: "Priority",
        key: "priority",
        config: PriorityConfig,
    }
]
