import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import * as ActionTypes from './actions';
import Api from '../../api/calls';

function* getPerformers(action){
  try{
      const graphqlQuery = {
          query: `{
            getPerformers{
              performers{
                _id,
                name,
                age,
                category
              }
            }
          }`
      };
      const result = yield call(Api.makePostRequest, graphqlQuery);
      console.log(result);
      if(!result.data.hasOwnProperty('errors')){
        yield put(ActionTypes.getPerformersSuccess(result.data));
      }else{
        throw new Error(result.data.errors[0].message);
      }
  }catch(error){
      yield put(ActionTypes.getPerformersError(error));
  }
}

function* addNewPerformer(action){
  try{
      console.log(action)
      const graphqlQuery = {
        query: `
          mutation {
            createPerformer(
              name: "${action.name}", 
              age: "${action.age}",
              category: "${action.category}"
              )
          {_id, name, age, category}
        }`
      };
      const result = yield call(Api.makePostRequest, graphqlQuery);
      if(!result.data.hasOwnProperty('errors')){
        yield put(ActionTypes.newPerformerSuccess(result.data));
      }else{
        throw new Error(result.data.errors[0].message);
      }
  }catch(error){
      yield put(ActionTypes.newPerformerError(error));
  }
}

function* deletePerformer(action){
  try{
      console.log(action)
      const graphqlQuery = {
        query: `
          mutation {
            deletePerformer(
              _id: "${action._id}", 
              )
          {_id, name, age, category}
        }`
      };
      const result = yield call(Api.makePostRequest, graphqlQuery);
      if(!result.data.hasOwnProperty('errors')){
       // yield put(ActionTypes.newPerformerSuccess(result.data));
      }else{
        throw new Error(result.data.errors[0].message);
      }
  }catch(error){
    //  yield put(ActionTypes.newPerformerError(error));
  }
}


export default function* authSaga() {
   yield takeEvery(ActionTypes.ADD_NEW_PERFORMER, addNewPerformer);
   yield takeEvery(ActionTypes.GET_PERFORMERS, getPerformers);
   yield takeEvery(ActionTypes.DELETE_PERFORMER, deletePerformer);
}