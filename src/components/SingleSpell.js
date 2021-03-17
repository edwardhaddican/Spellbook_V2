import React, {useState, useEffect} from "react";
import Axios from "axios";

const SingleSpell = () => {
  const [currentSpell, setCurrentSpell] = useState({});
  const [error, setError] = useState("");

  const fetchSingleSpell = async () => {
    try {
      let url = "https://www.dnd5eapi.co/api/spells/";
      let endOfUrl = this.props.match.params.spellIndex;

      const response = await Axios.get(url + endOfUrl);

      if (response.data.Error) {
        setError(response.data.Error);
      } else {
        setError("");
        setCurrentSpell(response.data);
      }
    } catch (error) {
      console.log("You have an error", error);
    }
  };

  useEffect(()=>{
    fetchSingleSpell()
  }, [fetchSingleSpell])

  return !currentSpell.name ? (
    <h1>Loading...</h1>
  ) : (
    <div className="single-spell-container">
      <h1>{currentSpell.name}</h1>
      <p>Spell Level: {currentSpell.level}</p>
      <p>Casting Time: {currentSpell.casting_time}</p>

      {currentSpell.damage ? (
        <div>
          <p>Damage Type: {currentSpell.damage.damage_type.name}</p>
          <p>Damage: {currentSpell.damage.damage_at_slot_level[2]}</p>
        </div>
      ) : null}

      {currentSpell.higher_level ? (
        <p>At Higher Levels: {currentSpell.higher_level[0]}</p>
      ) : null}
      <p>Duration: {currentSpell.duration}</p>

      <p>Components: {currentSpell.components}</p>
      <p>Material: {currentSpell.material}</p>
      <p>Concentration: {currentSpell.concentration.toString()}</p>

      <p>Description: {currentSpell.desc}</p>
    </div>
  );
};

export default SingleSpell;
