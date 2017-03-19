import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from  './reducers';
import rootSaga from './sagas/rootSaga';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();
const historyMiddleware = routerMiddleware(history)

const store = createStore(
    rootReducer,
    applyMiddleware(
      sagaMiddleware,
      historyMiddleware
    )
);
window.store = store; //for testing
store.runSaga = sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);