import React from "react";
import { useLoading } from "../contexts/LoadingContext";

const SearchBar = ({ searchQuery, onSearchChange }) => {
  const { loading } = useLoading();
  if (loading) {
    return null;
  }
  return (
    <div className="mb-3 w-full sm:w-96 mx-auto">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 block w-full flex-auto rounded border border-solid border-neutral-300 bg-transparent px-3 py-2 text-base font-normal leading-tight text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
