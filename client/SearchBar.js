import React from "react";
import Axios from "axios";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const searchBarUpdate = (event) => {
    setSearch(event);
  };

  const fetchSpell = async () => {
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
    <div className="searchbar-container">
      <div>
        <h2>Spell</h2>
        {error ? <h3 className="banner-container">{error}</h3> : null}
      </div>
      <div>
        <form onSubmit={fetchSpell} className="searchbar-inner-container">
          <div className="title-searchbar input-group">
            <label>Spell:</label>
            <input value={search} required onChange={searchBarUpdate} />
          </div>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
