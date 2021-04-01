import axios from 'axios'

const initialState = {
  character: {}
}

// Action Types
const SET_CHARACTER = 'SET_CHARACTER'

// Actions Creators
export const setCharacter = character => {
  return {
    type: SET_CHARACTER,
    character
  }
}

// Thunk Creators
export const fetchCharacter = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/characters/${id}`)
      dispatch(setCharacter(data))
    } catch (error) {
      console.log(error)
    }
  }
}


// Character Reducer
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER:
      return {...state, character: action.product}
    default:
      return state
  }
}

export default characterReducer
