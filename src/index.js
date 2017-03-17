import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from  './reducers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()

const StoreInstance = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

StoreInstance.runSaga = sagaMiddleware.run(rootSaga);

ReactDOM.render(
 <Provider store={StoreInstance}>
   <App />
 </Provider>,
 document.getElementById('root')
);