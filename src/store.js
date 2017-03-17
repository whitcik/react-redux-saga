import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from  './reducers';

const sagaMiddleware = createSagaMiddleware()


export default(initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
};