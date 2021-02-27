import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchVal, setSearchVal] = useState("");
  const onInputSearch = (e) => {
    setSearchVal(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearch(searchVal);
    //logic for search in API
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="search">Search Video</label>
          <input
            id="search"
            type="text"
            value={searchVal}
            onChange={onInputSearch}
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
