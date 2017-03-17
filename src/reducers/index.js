import cartReducer from './cartReducer';
import shelfReducer from './shelfReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cart: cartReducer,
    shelf: shelfReducer
});
export default rootReducer;