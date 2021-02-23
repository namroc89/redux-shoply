import data from "./data.json";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const INITIAL_STATE = { items: data.products, cart: {} };
const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newCart = { ...state.cart };
      newCart[action.id] = (newCart[action.id] || 0) + 1;
      return { ...state, cart: newCart };
    }
    case REMOVE_FROM_CART: {
      const newCart = { ...state.cart };
      if (!newCart[action.id]) return state;
      newCart[action.id]--;
      if (newCart[action.id] === 0) {
        delete newCart[action.id];
      }
      return { ...state, cart: newCart };
    }
    default:
      return state;
  }
};

export default rootReducer;
