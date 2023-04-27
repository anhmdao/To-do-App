import React, { useState } from "react";
import { Input } from "antd";


const SearchTask = ({ onSearchChange }) => {
    const [searchValue, setSearchValue] = useState("");
  
    const handleSearchChange = (event) => {
      setSearchValue(event.target.value.toLowerCase());
      // onSearchChange(event.target.value.toLowerCase());
    };

    return(
        <div style={{ marginBottom: "16px" }}>
        <h4>Search:</h4>
        <Input.Search
          placeholder="Search tasks"
          value={searchValue}
          onChange={handleSearchChange}
          enterButton
        />
      </div>
    );
};

export default SearchTask;