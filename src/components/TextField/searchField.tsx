import { ChangeEvent, useEffect, useState } from "react";
import { SearchBarWrapper, SearchImage, SearchInput } from "./styled";
import useDebounce from "../../hooks/useDebounce";
import { SearchBarProps } from "./types";
import SearchIcon from "../../assets/svgs/search.svg";

const SearchBar = ({ onSearch, text }: SearchBarProps) => {
  const [query, setQuery] = useState(text || "");
  const debouncedQuery = useDebounce<string>(query, 500);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <SearchBarWrapper>
      <SearchImage src={SearchIcon} alt="search" />
      <SearchInput
        type="search"
        placeholder="Search... "
        value={query}
        onChange={handleInputChange}
      ></SearchInput>
    </SearchBarWrapper>
  );
};

export default SearchBar;
