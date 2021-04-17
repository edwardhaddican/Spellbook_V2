import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../store/characters";
import { useDispatch, useSelector } from "react-redux";

import testCharDataArray from "./dummyCharData";

import { Link } from "react-router-dom";

const CharacterList = () => {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => {

    return state.characters;
  });
  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  if (!allCharacters) {
    return "loading";
  }

  console.log(allCharacters)
  return (
    <div className="all_characters_outer_container">
      <h1>Characters</h1>
      <span className="all_characters_total_number">
        Total Characters: {allCharacters ? allCharacters.length : "loading"}
      </span>
      <div className="all_characters_inner_container">
        {allCharacters.map((character) => {
          return (
            <div
              key={character.id}
              className="character_container"
            >
              <h3>
                <span className="character_property_header ">
                  Character Name:{" "}
                </span>
                {character.name}
              </h3>
              <div className="image_container">
                <img src={character.imageUrl} alt="The character's portrait" />
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
                {character.attributeStrength}
              </ul>
              <ul>
                <span className="character-property-header ">Dexterity: </span>
                {character.attributeDexterity}
              </ul>
              <ul>
                <span className="character-property-header ">
                  Constitution:{" "}
                </span>{" "}
                {character.attributeConstitution}
              </ul>
              <ul>
                <span className="character-property-header ">
                  Intelligence:{" "}
                </span>
                {character.attributeIntelligence}
              </ul>
              <ul>
                <span className="character-property-header ">Wisdom: </span>
                {character.attributeWisdom}
              </ul>
              <ul>
                <span className="character-property-header ">Charisma: </span>
                {character.attributeCharisma}
              </ul>
              <Link to={`/characters/${character.id}`}>
                <button className="character-spellbook-button">
                  SpellBook
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;
