import axios from "axios";
import { setSpell} from "./spell";


//maybe i do not need setSpell?
const initialState = [];

// Action Types
const SET_SPELLS = "SET_SPELLS";
const ADD_SPELL = "ADD_SPELL";
const DELETE_SPELL = "DELETE_SPELL";
const EDIT_SPELL = "EDIT_SPELL";

// Actions Creators
export const setSpells = (spells) => {
  return {
    type: SET_SPELLS,
    spells,
  };
};

export const addSpell= (spell) => {
  return {
    type: ADD_SPELL,
    spell,
  };
};

export const removeSpell = (spellId) => {
  return {
    type: DELETE_SPELL,
    spellId,
  };
};


//idk if this one is necssary. the user will need to be able to edit their personal list of spells, but they will not be editing the spell itself
export const updateSpell = (spell) => {
  return {
    type: EDIT_SPELL,
    spell,
  };
};


//needs to grab spells from my database
// Thunk Creators
export const fetchSpells = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/allspells");
      dispatch(setSpells(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addSpellToList = (spellId, characterId) => {
  return async (dispatch) => {

    //will need to grab the spell data here and the use that to send along with the post request

    const spellData

    const { data } = await axios.post(`/api/characters/${characterId}`, spellData);
    console.log("data in create character", data);
    // history.push(`/characters/${data.id}`);
    dispatch(addSpell(data));
  };
};

export const deleteSpellFromList = (spellId, characterId) => {
  return async (dispatch) => {
    await axios.delete(`/api/characters/${characterId}`);
    dispatch(removeSpell(spellId));
  };
};


//idk if this is actually necessary, because the delete and add spell are really what is going to be used to edit this page?

// export const editCharacter = (character) => {
//   return async (dispatch) => {
//     const { data } = await axios.put(
//       "/api/characters/" + character.id,
//       character
//     );
//     dispatch(updateCharacter(data));
//     dispatch(setCharacter(data));
//   };
// };

// Character Reducer
const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return action.characters;
    case ADD_CHARACTERS:
      return state.concat([action.character]);
    case DELETE_CHARACTER: {
      const filteredCharacters = state.filter(
        (character) => character.id !== action.characterId
      );
      return filteredCharacters;
    }
    case EDIT_CHARACTER:
      return state.map((character) => {
        if (character.id === action.character.id) {
          return action.character;
        } else {
          return character;
        }
      });
    default:
      return state;
  }
};

export default charactersReducer;
