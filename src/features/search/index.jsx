import { useState } from "react";

export const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Поиск по названию..."
      className="w-full sm:w-48 md:w-64 p-2 text-sm sm:text-sm md:text-base border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};