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

const levelOptions = [
  { value: 0, label: 0 },
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: null, label: "Select" },
];

const SearchBar = ({
  selectedClass,
  setSelectedClass,
  selectedSpellLevel,
  setSelectedSpellLevel,
}) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const searchBarUpdate = (event) => {
    setSearch(event.target.value);
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



      const results = await axios.get(url);

      if (results.data.Error) {
        setError(results.data.Error);
      } else {
        setError("");
      }

      console.log("results", results.data)
      //this returns the correct data, however only if the peron uses the correct name and it is not used yet.


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

          <label className="searchbar-header searchbar-header-level">
            Search by level:
          </label>
          <Select
            options={levelOptions}
            className="searchbar-select-input"
            onChange={(event) => {
              setSelectedSpellLevel(event.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
