import { useEffect, useState } from "react";
import { Filter } from "../components/TaskCard/types";

function useFilter<T>(array: T[], filterObj: Filter<T>) {
  const [filteredObjects, setFilteredObjects] = useState<T[]>([]);
  const filterObjects = (arr: T[]) => {
    return arr.filter((item: any) => {
      let isValid = true;
      if (filterObj) {
        for (let [key, value] of Object.entries(filterObj)) {
          if (typeof value === "string") {
            if (value.length > 0) {
              const text = item?.[key]?.toLowerCase?.();
              const searchText = value?.toLowerCase?.();
              if (text?.includes?.(searchText)) {
                isValid = true;
                break;
              } else {
                isValid = false;
              }
            }
          } else if (value && value?.length > 0) {
            if (!value?.includes?.(item?.[key])) {
              isValid = false;
              break;
            }
          }
        }
      }
      return isValid;
    });
  };

  useEffect(() => {
    setFilteredObjects(filterObjects(array));
  }, [array, filterObj]);

  return filteredObjects;
}

export default useFilter;
