export const Filter = ({ onSortChange }) => {
  return (
    <select
      onChange={(e) => onSortChange(e.target.value)}
      className="w-full ml-5 sm:w-40 md:w-56 p-2 sm:p-1 text-sm sm:text-xs md:text-sm border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:ml-2"
    >
      <option value="asc">По возрастанию</option>
      <option value="desc">По убыванию</option>
    </select>
  );
};