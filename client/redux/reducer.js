export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const name = action.payload.name;
      const price = action.payload.price;
      console.log("State", state);
      return [...state, { name, price }]
    default:
      return state
  }
}