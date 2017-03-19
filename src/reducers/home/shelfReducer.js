
const initialState = [
  'shampoo', 'chocolate', 'yogurt'
];

export default(state = initialState, payload) => {
  switch (payload.type) {

    default:
      return state;
  }
};