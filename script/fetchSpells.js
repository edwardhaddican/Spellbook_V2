// import React, { useState, useEffect, useCallback } from "react";
// import Axios from "axios";

// const fetchAllSpellsFromAPI = useCallback(async () => {
//   const [allSpells, setAllSpells] = useState([]);
//   const [classSpells, setClassSpells] = useState({});
//   const [error, setError] = useState("");
//   try {
//     let url = "https://www.dnd5eapi.co/api/spells";

//     const response = await Axios.get(url);

//     if (response.data.Error) {
//       setError(response.data.Error);
//     } else {
//       setError("");
//       setAllSpells(response.data.results);
//       setClassSpells(response.data.results);
//     }
//   } catch (error) {
//     console.log("You have an error", error);
//   }
// }, [setAllSpells, setClassSpells, setError]);


// let spellIndex = props.match.params.spellIndex;

// const fetchSingleSpell = useCallback(async () => {
//   try {
//     let url = "https://www.dnd5eapi.co/api/spells/";

//     const response = await Axios.get(url + spellIndex);

//     if (response.data.Error) {
//       setError(response.data.Error);
//     } else {
//       setError("");
//       setCurrentSpell(response.data);

//       if (response.data.damage && response.data.damage.damage_at_slot_level) {
//         setDamageObj(response.data.damage.damage_at_slot_level);
//         setDamageObjKeys(
//           Object.keys(response.data.damage.damage_at_slot_level)
//         );
//       }
//     }
//   } catch (error) {
//     console.log("You have an error", error);
//   }
// }, [spellIndex]);







// const classSpellList = useCallback(async () => {
//   try {
//     let url = "https://www.dnd5eapi.co";

//     const response = await Axios.get(url + "/api/classes");

//     const promises = response.data.results.map((element) => {
//       return Axios.get(`${url}${element.url}/spells`);
//     });

//     const classSpellResults = await Promise.all(promises);

//     const classSpells = classSpellResults.reduce((result, element, index) => {
//       const playerClass = response.data.results[index].index;
//       result[playerClass] = element.data.results;
//       return result;
//     }, {});
//     setClassSpells(classSpells);
//   } catch (err) {
//     setError(err);
//     console.log("You have an error", error);
//   }
// }, [setClassSpells, setError]);

// useEffect(() => {
//   allSpellList();
//   classSpellList();
// }, [allSpellList, classSpellList]);













// const makeFirstLetterCap = (currentSelectedClass) => {
//   const arrayOfLetters = currentSelectedClass.split("");
//   let firstLetter = arrayOfLetters.shift();
//   firstLetter = firstLetter.toUpperCase();
//   arrayOfLetters.unshift(firstLetter);
//   let fullWord = arrayOfLetters.join("");
//   return fullWord;
// };

// // const searchForSpellByLevel = (spellLevel) => {
// //   if(spellLevel){

// //   }

// // };

// export default fetchAllSpellsFromAPI;






// this is part of the url to search by schools: "/api/magic-schools/evocation
