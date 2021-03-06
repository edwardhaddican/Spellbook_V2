import axios from "axios";
import { setCharacter } from "./character";

const initialState = [];

// Action Types
const SET_CHARACTERS = "SET_CHARACTERS";
const ADD_CHARACTERS = "ADD_CHARACTERS";
const DELETE_CHARACTER = "DELETE_CHARACTER";
const EDIT_CHARACTER = "EDIT_CHARACTER";

// Actions Creators
export const setCharacters = (characters) => {
  return {
    type: SET_CHARACTERS,
    characters,
  };
};

export const addCharacter = (character) => {
  return {
    type: ADD_CHARACTERS,
    character,
  };
};

export const removeCharacter = (characterId) => {
  return {
    type: DELETE_CHARACTER,
    characterId,
  };
};

export const updateCharacter = (character) => {
  return {
    type: EDIT_CHARACTER,
    character,
  };
};

// Thunk Creators
export const fetchCharacters = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/characters");
      dispatch(setCharacters(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createCharacter = (newCharacterData, history) => {
  return async (dispatch) => {
    const { data } = await axios.post("/api/characters", newCharacterData);
    console.log("data in create character", data);
    history.push(`/characters/${data.id}`);
    dispatch(addCharacter(data));
  };
};

export const deleteCharacter = (id) => {
  return async (dispatch) => {
    await axios.delete("/api/characters/" + id);
    dispatch(removeCharacter(id));
  };
};

export const editCharacter = (character) => {
  return async (dispatch) => {
    const { data } = await axios.put(
      "/api/characters/" + character.id,
      character
    );
    dispatch(updateCharacter(data));
    dispatch(setCharacter(data));
  };
};

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
