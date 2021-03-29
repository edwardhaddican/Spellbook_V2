import axios from 'axios'
import {setCharacter} from './character'

const initialState = {
  characters: []
}

// Action Types
const SET_CHARACTERS = 'SET_CHARACTERS'
const ADD_CHARACTERS = 'ADD_CHARACTERS'
const DELETE_CHARACTER = 'DELETE_CHARACTER'
const EDIT_CHARACTER = 'EDIT_CHARACTER'

// Actions Creators
export const setCharacters = characters => {
  return {
    type: SET_CHARACTERS,
    characters
  }
}

export const addCharacter = character => {
  return {
    type: ADD_CHARACTERS,
    character
  }
}

export const removeCharacter = characterId => {
  return {
    type: DELETE_CHARACTER,
    characterId
  }
}

export const updateCharacter= character => {
  return {
    type: EDIT_CHARACTER,
    character
  }
}

// Thunk Creators  pick up from here!!!!!!!!
export const fetchProducts = category => {
  return async dispatch => {
    try {
      if (!category || category.category === 'all-products') {
        const res = await axios.get('/api/products')
        dispatch(setProducts(res.data))
      } else {
        const res = await axios.get(
          `/api/products/category/${category.category}`
        )
        dispatch(setProducts(res.data))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const createProduct = newProductData => {
  return async dispatch => {
    const {data} = await axios.post('/api/products', newProductData)
    dispatch(addProduct(data))
  }
}

export const deleteProduct = id => {
  return async dispatch => {
    await axios.delete('/api/products/' + id)
    dispatch(removeProduct(id))
  }
}

export const editProduct = product => {
  return async dispatch => {
    const {data} = await axios.put('/api/products/' + product.id, product)
    dispatch(updateProduct(data))
    dispatch(setProduct(data))
  }
}

// Products Reducer
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.products}
    case ADD_PRODUCTS:
      return {...state, products: state.products.concat([action.product])}
    case DELETE_PRODUCT: {
      const allProducts = state.products
      const filteredProducts = allProducts.filter(
        product => product.id !== action.productId
      )
      state.products = filteredProducts
      return {...state}
    }
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.product.id) {
            return action.product
          } else {
            return product
          }
        })
      }
    default:
      return state
  }
}

export default productsReducer
