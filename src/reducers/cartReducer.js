
class Id {
  constructor(){
    this.id = 0;
  }
  getId(){
    this.id++;
    return this.id;
  }
}

const id = new Id();

export default(state = [], payload) => {
  switch (payload.type) {
    case 'ADD_ITEM':
      console.log('ADD_ITEM', payload);
      return [...state, { name: payload.item, id: id.getId() }];
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};