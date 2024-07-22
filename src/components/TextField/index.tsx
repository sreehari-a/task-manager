import React, { ChangeEvent, memo } from "react";
import { TextFieldProps } from "./types";
import { Input, TextArea } from "./styled";
import FieldError from "../FieldError";

function TextField({
  id,
  value,
  onBlur,
  onChangeValue,
  textarea,
  ...inputProps
}: TextFieldProps) {
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.value;
    onChangeValue?.(id, value);
  };
  const onBlurInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.value;
    onBlur?.(id, value);
  };
  const InputElement =
    textarea ? TextArea : Input;
  return (
    <InputElement
      type="text"
      key={id}
      value={value}
      id={id}
      onChange={onChangeInput}
      onBlur={onBlurInput}
      {...inputProps}
    />
  );
}
export default FieldError(TextField);
