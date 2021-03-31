import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";

const classOptions = [
  { value: "barbarian", label: "Barbarian" },
  { value: "bard", label: "Bard" },
  { value: "cleric", label: "Cleric" },
  { value: "druid", label: "Druid" },
  { value: "fighter", label: "Fighter" },
  { value: "monk", label: "Monk" },
  { value: "paladin", label: "Paladin" },
  { value: "ranger", label: "Ranger" },
  { value: "rogue", label: "Rogue" },
  { value: "sorcerer", label: "Sorcerer" },
  { value: "warlock", label: "Warlock" },
  { value: "wizard", label: "Wizard" },
  { value: null, label: "Select" },
];

const SearchBar = ({ selectedClass, setSelectedClass }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const searchBarUpdate = (event) => {
    setSearch(event);
  };

  const fetchSpell = async (event) => {
    event.preventDefault();
    try {
      let url = "https://www.dnd5eapi.co/api/spells";

      if (search) {
        url = url + `/${search}`;
      } else {
        return;
      }

      // if (search) {
      //   url = url + `&y=${this.state.year}`
      // }

      const results = await axios.get(url);

      if (results.data.Error) {
        setError(results.data.Error);
      } else {
        setError("");
        this.props.updateSearchResults(results.data.Search);
      }
    } catch (error) {
      console.log("You have an error", error);
    }
  };

  return (
    <div className="searchbar_container">
      <div>{error ? <h3 className="banner-container">{error}</h3> : null}</div>
      <div className="searchbar_inner_container">
        <form onSubmit={fetchSpell} className="searchbar-form-container">
          <label className="searchbar-header">Spell:</label>
          <input
            className="searchbar_form_input"
            value={search}
            required
            onChange={searchBarUpdate}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        <div className="searchbar-selector-container">
          <label className="searchbar-header">Search by class:</label>
          <Select
            options={classOptions}
            className="searchbar-select-input"
            onChange={(event) => {
              setSelectedClass(event.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
