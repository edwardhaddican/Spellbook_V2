import React from "react";
import Axios from "axios";
// import SearchBar from './SearchBar'
import { Link } from "react-router-dom";

const AllSpells = () => {
  const [allSpells, setAllSpells] = useState([]);
  const [error, setError] = useState("");
  const [classSpells, setClassSpells] = useState({});
  const [displayedSpells, setDisplayedSpells] = useState([]);
  const [currentClass, setCurrentClass] = useState("");

  const allSpellList = async () => {
    try {
      let url = "https://www.dnd5eapi.co/api/spells";

      const response = await Axios.get(url);

      if (response.data.Error) {
        setError(results.data.Error);
      } else {
        setError("");
        setAllSpells(response.data.results);
        setClassSpells(response.data.results);

        console.log("state", allSpells);
      }
    } catch (error) {
      console.log("You have an error", error);
    }
  };

  const classSpellList = async () => {
    try {
      let url = "https://www.dnd5eapi.co";

      const response = await Axios.get(url + "/api/classes");

      const promises = response.data.results.map((element) => {
        return Axios.get(`${url}${element.url}/spells`);
      });

      const classSpellResults = await Promise.all(promises);

      const classSpells = classSpellResults.reduce((result, element, index) => {
        const playerClass = response.data.results[index].index;
        result[playerClass] = element.data.results;
        return result;
      }, {});

      setClassSpells(classSpells);
    } catch (error) {
      console.log("You have an error", error);
    }
  };

  return (
    <div>
      <h1>All Spells</h1>
      {/* <SearchBar /> */}
      <div>
        {this.state.allSpells.map((spell) => {
          // console.log('eee', spell)
          return (
            <div key={spell.index}>
              <Link to={`/allSpells/${spell.index}`}>{spell.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSpells;
