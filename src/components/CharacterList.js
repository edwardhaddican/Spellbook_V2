import React, { useEffect, useState } from "react";
import testCharDataArray from "./dummyCharData";

const CharacterList = () => {
  const [numberOfCharacters, setNumberOfCharacters] = useState(0);
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    //dummy data:
    setAllCharacters(testCharDataArray);
    setNumberOfCharacters(testCharDataArray.length);
  }, []);

  return (
    <div className="all_characters_outer_container">
      <h1>Characters</h1>
      <span className="all_characters_total_number">
        Total Characters: {numberOfCharacters}
      </span>
      <div className="all_characters_inner_container">
        {allCharacters.map((character) => {
          return (
            <div key={character.id} className="character_container">
              <h3>
                <span className="character_property_header ">
                  Character Name:{" "}
                </span>
                {character.characterName}
              </h3>
              <div className="image_container">
                <img src={character.imageUrl} />
              </div>
              <ul>
                <span className="character_property_header">Level: </span>
                {character.level}
              </ul>
              <ul>
                <span className="character_property_header ">Class: </span>
                {character.class}
              </ul>
              <ul>
                <span className="character-property-header ">Strength: </span>{" "}
                {character.strength}
              </ul>
              <ul>
                <span className="character-property-header ">Dexterity: </span>
                {character.dexterity}
              </ul>
              <ul>
                <span className="character-property-header ">
                  Constitution:{" "}
                </span>{" "}
                {character.constitution}
              </ul>
              <ul>
                <span className="character-property-header ">
                  Intelulgence:{" "}
                </span>
                {character.intelulgence}
              </ul>
              <ul>
                <span className="character-property-header ">Wisdom: </span>
                {character.wisdom}
              </ul>
              <ul>
                <span className="character-property-header ">Charisma: </span>
                {character.charisma}
              </ul>
              <div>
                <button className='character-spellbook-button'>SpellBook</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;
