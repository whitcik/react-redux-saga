import cartReducer from './home/cartReducer';
import shelfReducer from './home/shelfReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    cart: cartReducer,
    shelf: shelfReducer,
    routing: routerReducer
});
export default rootReducer;