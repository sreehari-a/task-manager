import { formatDate } from "../../utils/dateUtils";
import DateField from "../DateField";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import { InputTypes } from "./config";
import { FieldPropType } from "./types";

function GenericField<T>({
  field,
  taskForm,
  onChangeText,
  onChangeDropdown,
  onChangeDate,
  setFormError,
}: FieldPropType<T>) {
  switch (field.type) {
    case InputTypes.TEXTFIELD:
    case InputTypes.TEXTAREA:
      return (
        //@ts-ignore
        <TextField
          id={field.key}
          value={taskForm[field?.key] || ""}
          placeholder={field.placeholder}
          onChangeValue={onChangeText}
          textarea={field.type === InputTypes.TEXTAREA}
          rows={field.rows}
          onValidationError={setFormError}
          validate={field.validate}
        />
      );
    case InputTypes.DROPDOWN:
      return (
        <Dropdown
          id={field.key}
          value={taskForm[field?.key] || field.options[0].value}
          options={field.options}
          onChange={onChangeDropdown}
          fullWidth
        ></Dropdown>
      );
    case InputTypes.DATE:
      const minDate = formatDate(field?.minDate, "yyyy-mm-dd");
      return (
        <DateField
          id={field.key}
          value={taskForm[field?.key]}
          onChange={onChangeDate}
          min={minDate}
        ></DateField>
      );
  }
}
export default GenericField;