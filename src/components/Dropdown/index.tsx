import { useState } from "react";
import {
    ArrowSection,
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  Option,
} from "./styled";
import { DropdownProps } from "./types";
import FieldError from "../FieldError";

function Dropdown<T>(props: DropdownProps<T>) {
  const { value, options, onChange, fullWidth, id } = props;

  const [showOptions, setShowOptions] = useState(false);

  const toggleDropdown = () => setShowOptions((value) => !value);

  const selectedLabel = options.filter?.(
    (item) => item.value === value
  )?.[0]?.label;

  const filteredOptions = options.filter?.(
    (item) => item.value !== value
  );

  return (
    <DropdownContainer fullWidth={fullWidth}>
      <DropdownButton onClick={toggleDropdown}>
        {selectedLabel}
        <ArrowSection> &nbsp; ▼</ArrowSection>
      </DropdownButton>
      {showOptions && (
        <DropdownContent fullWidth={fullWidth} onBlur={toggleDropdown}>
          {filteredOptions.map((option) => {
            const onSelect = () => {
              onChange(id, option.value);
              toggleDropdown();
            };
            return <Option onClick={onSelect}>{option.label}</Option>;
          })}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
}
export default FieldError(Dropdown)
