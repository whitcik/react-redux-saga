export const addToCart = (item) => {
  console.log('adding item:', item);
  return {
      type: 'ADD_ITEM',
      item
  };
}
export const deleteFromCart = (id) => {
  return {
      type: 'DELETE_ITEM',
      id
  };
}

export const addToCartAsync = (id) => {
  return {
      type: 'ADD_ITEM_ASYNC',
      id
  };
}