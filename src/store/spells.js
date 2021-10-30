import axios from "axios";

const initialState = [];

// Action Types
const SET_SPELLS = "SET_SPELLS";

// Actions Creators
export const setSpells = (spells) => {
  return {
    type: SET_SPELLS,
    spells,
  };
};

//needs to grab spells from my database
// Thunk Creators
export const fetchSpells = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/spells");
      dispatch(setSpells(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

// Spells Reducer
const spellsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPELLS:
      return action.spells;
    default:
      return state;
  }
};

export default spellsReducer;
