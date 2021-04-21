import axios from 'axios'

const initialState = {
  spell: {}
}

// Action Types
const SET_SPELL = 'SET_SPELL'

// Actions Creators
export const setSpell = spell => {
  return {
    type: SET_SPELL,
    spell
  }
}

//need to edit to fetch from my database
// Thunk Creators
export const fetchSpell = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/characters/${id}`)
      dispatch(setSpell(data))
    } catch (error) {
      console.log(error)
    }
  }
}


// Character Reducer
const spellReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPELL:
      return {...state, character: action.product}
    default:
      return state
  }
}

export default spellReducer
