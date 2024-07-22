import { useState } from "react";
import Drawer from "../Drawer";
import { FilterConfigType, TaskFilterProps } from "./types";
import {
  DrawerSections,
  FooterButtons,
  Label,
  LeftSection,
  OptionObj,
  RightSection,
  Tab,
} from "./styled";
import Button from "../Button";
import { Filter } from "../TaskCard/types";
import { theme } from "../../common/theme";

function FilterBox<T>({ open, onClose, onApplyFilter, filterConfig, appliedFilters }: TaskFilterProps<T>) {
  const [selectedFilter, setSelectedFilter] = useState<FilterConfigType<T>[number]>(filterConfig[0]);
  const [filterObj, setFilterObj] = useState<Filter<T>>(appliedFilters || {});
  const { key, config } = selectedFilter;
  const selectedFilterValues = filterObj?.[key as keyof T] || [];

  const onClickCheckBox = (value: string) => {
    let filterObjSelected = [...selectedFilterValues];
    if (filterObjSelected.includes(value)) {
      filterObjSelected = filterObjSelected.filter((val) => val !== value);
    } else {
      filterObjSelected.push(value);
    }
    setFilterObj({ ...filterObj, [key]: filterObjSelected });
  };

  const applyFilter = () => {
    onApplyFilter(filterObj);
    onClose?.();
  };

  const resetFilters = () => {
    setFilterObj({});
    onApplyFilter({});
  };
  return (
    <Drawer
      open={open}
      onClose={onClose}
      header="Filter Tasks"
      footer={
        <FooterButtons>
          <Button
            buttonText="Reset Filters"
            bgcolor={theme.colors.WHITE}
            border={`1px solid ${theme.colors.BLUE}`}
            color={theme.colors.BLUE}
            onClick={resetFilters}
          ></Button>
          <Button
            buttonText="Apply"
            bgcolor={theme.colors.BLUE}
            color="#fff"
            onClick={applyFilter}
          ></Button>
        </FooterButtons>
      }
    >
      <DrawerSections>
        <LeftSection>
          {filterConfig.map((filter) => {
            const selectFilter = () => setSelectedFilter(filter);
            return (
              <Tab
                onClick={selectFilter}
                selected={filter.key === selectedFilter.key}
                key={filter.label}
              >
                {filter.label}
              </Tab>
            );
          })}
        </LeftSection>
        <RightSection>
          {config &&
            config.map(({ label, value }) => {
              const handleCheckBoxClick = () => onClickCheckBox(value);
              const checked = selectedFilterValues.includes(value);
              const id= `${String(key)}-${value}`;
              return (
                <OptionObj key={id}>
                  <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckBoxClick}
                  />
                  <Label htmlFor={id}>
                    {label.toLowerCase()}
                  </Label>
                </OptionObj>
              );
            })}
        </RightSection>
      </DrawerSections>
    </Drawer>
  );
}
export default FilterBox;
