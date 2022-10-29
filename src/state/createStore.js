import { createStore as reduxCreateStore, combineReducers } from "redux"

export const initialState = {
  searchVal: "",
  category: "",
  module: ""
}

export const tools = (state = initialState, action) => {
  switch(action.type) {
    case "SET_SEARCH_VAL":
      return Object.assign({}, state, {
        searchVal: action.v
      });
    case "GET_SEARCH_VAL":
      return state.searchVal;
    case "SET_CATEGORY":
      return Object.assign({}, state, {
        category: action.v
      });
    case "GET_CATEGORY":
        return state.category;
    case "SET_MODULE":
      return Object.assign({}, state, {
        module: action.v
      });
    case "GET_MODULE":
      return state.module;
    default:
      return state;
  }
}

export const others = (state = {}, action) => {
  switch(action.type) {
    case "SET_SOME_VAL":
      return Object.assign({}, state, {
        someVal: action.payload
      });
    case "GET_SOME_VAL":
      return state.someVal;
    default:
      return state;
  }
}

const preloadedState = {}
const reducer = combineReducers({ tools, others })
const createStore = () => reduxCreateStore(reducer, preloadedState)
export default createStore
