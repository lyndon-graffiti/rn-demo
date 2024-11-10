import { useState } from "react";

export const useSearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const options = [
    `${searchText}街道`,
    `${searchText}小区`,
    `${searchText}小镇`,
  ];

  const search = () => {
    alert(searchText);
  };

  const showSearchOptions = (text: string) => {
    setSearchText(text);
    setShowSearch(true);
  };

  const hideSearchOptions = (text: string) => {
    setSearchText(text);
    setShowSearch(false);
  };

  return {
    state: {
      options,
      searchText,
      showSearch,
    },
    search,
    hideSearchOptions,
    showSearchOptions,
  };
};
