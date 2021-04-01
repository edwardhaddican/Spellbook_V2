import React, { useState } from "react";
import Select from "react-select";
import { createCharacter } from "../store/characters";

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
];

const NewCharacterForm = () => {
  const [newCharacter, setNewCharacter] = useState({
    characterName: "",
    level: 1,
    class: "",
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
  });

  const setNewCharacterHelper = (key, value) => {
    setNewCharacter({
      ...newCharacter,
      [key]: value,
    });
  };

  return (
    <div className="new-character-form-main-container">
      <form className="new-character-form-inner-container">
        <div className="new-character-form-item">
          <label className="new-character-form-label">Name</label>
          <input
            onChange={(event) => {
              setNewCharacterHelper("characterName", event.target.value);
            }}
          />
        </div>
        <div className="new-character-form-item">
          <label className="new-character-form-label">Level</label>
          <Select
            options={levelOptions}
            className="searchbar-select-input"
            onChange={(event) => {
              setNewCharacterHelper("level", event.value);
            }}
          />
        </div>

        <div className="new-character-form-item">
          <label className="new-character-form-label">Class</label>
          <Select
            options={classOptions}
            className="searchbar-select-input"
            onChange={(event) => {
              setNewCharacterHelper("class", event.value);
            }}
          />
        </div>

        <div className="form-str-dex-con-container">
          <div className="new-character-form-item">
            <label className="new-character-form-label" >
              Strength
            </label>
            <input
              onChange={(event) => {
                setNewCharacterHelper("strength", event.target.value);
              }}
            />
          </div>
          <div className="new-character-form-item">
            <label className="new-character-form-label">Dexterity</label>
            <input
              onChange={(event) => {
                setNewCharacterHelper("dexterity", event.target.value);
              }}
            />
          </div>
          <div className="new-character-form-item">
            <label className="new-character-form-label">Constitution</label>
            <input
              onChange={(event) => {
                setNewCharacterHelper("constitution", event.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-int-wis-cha-container">
          <div className="new-character-form-item">
            <label className="new-character-form-label">Intelligence</label>
            <input
              onChange={(event) => {
                setNewCharacterHelper("intelligence", event.target.value);
              }}
            />
          </div>
          <div className="new-character-form-item">
            <label className="new-character-form-label">Wisdom</label>
            <input
              onChange={(event) => {
                setNewCharacterHelper("wisdom", event.target.value);
              }}
            />
          </div>
          <div className="new-character-form-item">
            <label className="new-character-form-label">Charisma</label>
            <input
              onChange={(event) => {
                setNewCharacterHelper("charisma", event.target.value);
              }}
            />
          </div>
        </div>

        <div className="new-character-form-button">
          <button
            className="button"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              console.log("newCharacter", newCharacter);
              createCharacter(newCharacter);

              setNewCharacter({
                characterName: "",
                level: 1,
                class: "",
                strength: 8,
                dexterity: 8,
                constitution: 8,
                intelligence: 8,
                wisdom: 8,
                charisma: 8,
              });
            }}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCharacterForm;
