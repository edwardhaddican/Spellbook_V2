import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";

const SingleSpell = (props) => {
  const [currentSpell, setCurrentSpell] = useState({});
  const [error, setError] = useState("");
  const [damageObj, setDamageObj] = useState({});
  const [damageObjKeys, setDamageObjKeys] = useState([]);

  let spellIndex = props.match.params.spellIndex;

  const fetchSingleSpell = useCallback(async () => {
    try {
      let url = "https://www.dnd5eapi.co/api/spells/";

      const response = await Axios.get(url + spellIndex);

      if (response.data.Error) {
        setError(response.data.Error);
      } else {
        setError("");
        setCurrentSpell(response.data);
        setDamageObj(response.data.damage.damage_at_slot_level);
        setDamageObjKeys(
          Object.keys(response.data.damage.damage_at_slot_level)
        );
      }
    } catch (error) {
      console.log("You have an error", error);
    }
  }, [spellIndex]);

  useEffect(() => {
    fetchSingleSpell();
  }, []);

  return !currentSpell.name ? (
    <h1>Loading...</h1>
  ) : (
    <div className="single-spell-container">
      <h1 className="spell_text_header">{currentSpell.name}</h1>
      <p>
        <span className="spell-property-header">Spell Level:</span>{" "}
        {currentSpell.level === 0 ? "Cantrip" : currentSpell.level}
      </p>
      <p>
        {" "}
        <span className="spell-property-header">Casting Time:</span>{" "}
        {currentSpell.casting_time}
      </p>

      {currentSpell.damage ? (
        <div>
          <p>
            {" "}
            <span className="spell-property-header">Damage Type:</span>{" "}
            {currentSpell.damage.damage_type.name}
          </p>
          {damageObjKeys.map((key) => {
            return (
              <p key={key}>
                {" "}
                <span className="spell-property-header">
                  Damage at Level {key}:{" "}
                </span>
                {damageObj[key]}
              </p>
            );
          })}
        </div>
      ) : null}

      {currentSpell.higher_level ? (
        <p>
          {" "}
          <span className="spell-property-header">At Higher Levels: </span>{" "}
          {currentSpell.higher_level[0]}
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
        {currentSpell.desc}
      </p>
    </div>
  );
};

export default SingleSpell;
