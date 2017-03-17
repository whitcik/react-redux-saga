import { takeEvery } from 'redux-saga/effects'
import { addItemAsyncSaga } from './addItemAsyncSaga';

function* watchAddItemAsyncSaga() {
  yield takeEvery('ADD_ITEM_ASYNC', addItemAsyncSaga);
}

export default function* rootSaga() {
  yield [
    watchAddItemAsyncSaga()
  ]
}