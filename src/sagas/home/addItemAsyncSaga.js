import { put, call } from 'redux-saga/effects';

function ApiCall(){

  return new Promise((resolve, reject) => {
      setTimeout(function(){
          resolve("Success!"); 
      }, 1000);
  });

}

export function* addItemAsyncSaga(item) {
  try{
    yield call(ApiCall);
    yield put({ type: 'ADD_ITEM', item: item.id });
  } catch(e){
    console.log(e);
  }
}