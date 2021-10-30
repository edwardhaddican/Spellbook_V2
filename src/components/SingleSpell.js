import React, { useState } from "react";
import { useSelector } from "react-redux";

const SingleSpell = (props) => {
  const [error, setError] = useState("");
  const [damageObj, setDamageObj] = useState({});
  const [damageObjKeys, setDamageObjKeys] = useState([]);

  let spellIndex = props.match.params.spellIndex;

  const allSpells = useSelector((state) => {
    return state.spells;
  });

  const currentSpell = allSpells
    ? allSpells.find((spell) => {
        console.log(spell);
        return spell.index === spellIndex;
      })
    : null;

  return !currentSpell || !currentSpell.name ? (
    <h1>Loading...</h1>
  ) : (
    <div className="single-spell-container">
      <h1 className="spell_text_header">{currentSpell.name}</h1>
      <p>
        <span className="spell-property-header">Spell Level:</span>{" "}
        {currentSpell.level === 0 ? "Cantrip" : currentSpell.level}
      </p>

      {currentSpell.school ? (
        <p>
          {" "}
          <span className="spell-property-header">School: </span>{" "}
          {currentSpell.school}
        </p>
      ) : null}

      <p>
        {" "}
        <span className="spell-property-header">Casting Time:</span>{" "}
        {currentSpell.casting_time}
      </p>

      {currentSpell.damage_type ? (
        <p>
          <span className="spell-property-header">Damage Type: </span>
          {currentSpell.damage_type}
        </p>
      ) : null}

      {currentSpell.area_of_effect_size ? (
        <p>
          <span className="spell-property-header">Area of Effect Size: </span>
          {currentSpell.area_of_effect_size}
        </p>
      ) : null}

      {currentSpell.area_of_effect_type ? (
        <p>
          <span className="spell-property-header">Area of Effect Type: </span>
          {currentSpell.area_of_effect_type}
        </p>
      ) : null}

      {currentSpell.dc_type ? (
        <p>
          <span className="spell-property-header">DC Type: </span>
          {currentSpell.dc_type}
        </p>
      ) : null}

      {currentSpell.dc_success ? (
        <p>
          <span className="spell-property-header">Damage Type: </span>
          {currentSpell.dc_success}
        </p>
      ) : null}

      {currentSpell.higher_level ? (
        <p>
          {" "}
          <span className="spell-property-header">At Higher Levels: </span>{" "}
          {currentSpell.higher_level[0]}
        </p>
      ) : null}

      {currentSpell.damage_at_slot_level
        ? Object.keys(JSON.parse(currentSpell.damage_at_slot_level)).map(
            (key) => {
              const value = JSON.parse(currentSpell.damage_at_slot_level)[key];
              return (
                <p key={value}>
                  <span className="spell-property-header">Level {key}:</span>{" "}
                  {value}
                </p>
              );
            }
          )
        : null}

      {currentSpell.range ? (
        <p>
          {" "}
          <span className="spell-property-header">Range: </span>{" "}
          {currentSpell.range}
        </p>
      ) : null}

      <p>
        <span className="spell-property-header">Duration: </span>{" "}
        {currentSpell.duration}
      </p>

      <p>
        {" "}
        <span className="spell-property-header">Components:</span>{" "}
        {currentSpell.components}
      </p>
      <p>
        {" "}
        <span className="spell-property-header">Material:</span>{" "}
        {currentSpell.material ? currentSpell.material : "none"}
      </p>
      <p>
        {" "}
        <span className="spell-property-header">Concentration:</span>{" "}
        {currentSpell.concentration.toString()}
      </p>

      <p>
        {" "}
        <span className="spell-property-header">Description:</span>{" "}
        {currentSpell.description.join("\n")}
      </p>

      {currentSpell.ritual ? (
        <p>
          {" "}
          <span className="spell-property-header">Ritual: </span>{" "}
          {currentSpell.ritual}
        </p>
      ) : null}
    </div>
  );
};

export default SingleSpell;
