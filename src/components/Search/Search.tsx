// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { BiSearchAlt } from 'react-icons/bi';

const Search = () => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();
  
//   const handleContentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };
//   const SearchPhoto = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       setQuery("")
//       navigate(`/search/${query}`)
//     }
//   };
  return (
    <form className="w-full my-5 flex items-center justify-center relative">
      <input
        type="text"
        placeholder="Search what you want ..."
        // onKeyDown={SearchPhoto}
        // onChange={handleContentInput}
        className="max-w-[600px] p-2 pr-16 pl-4 rounded-md border border-gray-400 bg-gray-200 w-72 focus:outline-none"
        // value={query}
      />
      {/* <BiSearchAlt className="icon_search" /> */}
    </form>
  );
};

export default Search;