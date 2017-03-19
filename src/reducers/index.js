import cartReducer from './cartReducer';
import shelfReducer from './shelfReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    cart: cartReducer,
    shelf: shelfReducer,
    routing: routerReducer
});
export default rootReducer;