import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import { SearchBar } from "./index.js";
import { Link } from "react-router-dom";
// import pagination from '../utility/pagination'

const AllSpells = () => {
  const [allSpells, setAllSpells] = useState([]);
  const [error, setError] = useState("");
  const [classSpells, setClassSpells] = useState({});
  const [displayedSpells, setDisplayedSpells] = useState([]);
  const [currentClass, setCurrentClass] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);

  //trying to make dummy data to get the pagination working
  // const paginationObject = {
  //   totalItems: 150,
  //   currentPage: 1,
  //   pageSize: 12,
  //   maxPages: 10
  // }

  // pagination(paginationObject)

  const addSpellToMySpellListButton = () => {
    //add funtionality to add spells to each characters own spell list
  };

  const allSpellList = useCallback(async () => {
    try {
      let url = "https://www.dnd5eapi.co/api/spells";

      const response = await Axios.get(url);

      if (response.data.Error) {
        setError(response.data.Error);
      } else {
        setError("");
        setAllSpells(response.data.results);
        setClassSpells(response.data.results);

        console.log("state", allSpells);
      }
    } catch (error) {
      console.log("You have an error", error);
    }
  }, [setAllSpells, setClassSpells, setError]);

  const classSpellList = useCallback(async () => {
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
      console.log("class spells", classSpells);
      setClassSpells(classSpells);
    } catch (error) {
      setError(error);
      console.log("You have an error", error);
    }
  }, [setClassSpells, setError]);

  useEffect(() => {
    allSpellList();
    classSpellList();
  }, [allSpellList, classSpellList]);

  const makeFirstLetterCap = (currentSelectedClass) => {
    const arrayOfLetters = currentSelectedClass.split("");
    let firstLetter = arrayOfLetters.shift();
    firstLetter = firstLetter.toUpperCase();
    arrayOfLetters.unshift(firstLetter);
    let fullWord = arrayOfLetters.join("");
    return fullWord;
  };

  return (
    <div>
      <h1 className="all-spells-header">
        {selectedClass ? `${makeFirstLetterCap(selectedClass)}` : "All Spells"}
      </h1>
      <SearchBar
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />
      <div className="all_spells_single_spell_main_container">
        {selectedClass && classSpells[selectedClass].length >= 1 ? (
          classSpells[selectedClass].map((spell) => {
            return (
              <div
                className="all_spells_single_spell_container"
                key={spell.index}
              >
                <Link to={`/allSpells/${spell.index}`} className="spell_text">
                  {spell.name}
                </Link>
                <button className="all-spells-add-spell-button">+</button>
              </div>
            );
          })
        ) : selectedClass ? (
          <div>
            <p>This Class does not cast spells</p>
          </div>
        ) : (
          allSpells.map((spell) => {
            return (
              <div
                className="all_spells_single_spell_container"
                key={spell.index}
              >
                <Link to={`/allSpells/${spell.index}`} className="spell_text">
                  {spell.name}
                </Link>
                <button className="all-spells-add-spell-button">+</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AllSpells;
