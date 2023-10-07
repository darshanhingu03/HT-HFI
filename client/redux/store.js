import { createStore } from 'redux';
import { cartReducer } from "./reducer";
import { createWrapper } from 'next-redux-wrapper';

export const cartStore = createStore(cartReducer);

const makeStore = () => cartStore;

export const wrapper = createWrapper(makeStore);

// const cartReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return state.push([action.item])
//     default:
//       return state
//   }
// }