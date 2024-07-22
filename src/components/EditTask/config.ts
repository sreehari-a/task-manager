import { InputTypes } from "../GenericField/config"
import { PriorityOptions, StatusOptions } from "../../common/config"
import { PRIORITY, Status } from "../TaskCard/types"



export const FormFieldConfig = [
    {
        key: "title",
        label: "Title",
        type: InputTypes.TEXTFIELD,
        placeholder: "Enter maximum 15 characters",
        validate: (value: string) => (
            value.length > 15 ? "Title cannot be more than 15 charcters" : ""
        )
    },
    {
        key: "description",
        label: "Description",
        type: InputTypes.TEXTAREA, 
        rows: 4,
    },
    {
        key: "priority",
        label: "Priority",
        type: InputTypes.DROPDOWN,
        optionType: PRIORITY,
        options: PriorityOptions
    },
    {
        key: "dueDate",
        label: "Due Date",
        type: InputTypes.DATE,
        minDate: new Date()
    },
    {
        key: "status",
        label: "Status",
        type: InputTypes.DROPDOWN,
        optionType: Status,
        options: StatusOptions
    },
]