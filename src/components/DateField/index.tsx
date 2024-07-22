import React, { ChangeEvent, useMemo } from "react";
import { DateFieldProps } from "./types";
import FieldError from "../FieldError";
import { formatDate } from "../../utils/dateUtils";
import { DateInput } from "./styled";

function DateField({
  id,
  value,
  onChange,
  ...inputProps
}: DateFieldProps) {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const date = (value && new Date(value).getTime()) || undefined;
    onChange?.(id, date);
  };
  const dateValue = useMemo(
    () => value && formatDate(new Date(value), "yyyy-mm-dd"),
    [value]
  );
  return (
    <DateInput
      {...inputProps}
      value={dateValue}
      type="date"
      onChange={onChangeHandler}
    />
  );
}
export default FieldError<DateFieldProps>(DateField);
