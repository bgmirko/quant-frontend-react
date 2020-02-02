import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import * as ActionTypes from './actions';
import Api from '../../api/calls';

// function* getUser(action){
//   try{
//       const graphqlQuery = {
//           query: `{getUser(email: "${action.email}", password: "${action.password}"){_id, name, email, userName}}`
//       };
//       const result = yield call(Api.makePostRequest, graphqlQuery);
//       if(!result.data.hasOwnProperty('errors')){
//         yield put(ActionTypes.getUserSuccess(result.data));
//       }else{
//         throw new Error(result.data.errors[0].message);
//       }
//   }catch(error){
//       yield put(ActionTypes.getUserError(error));
//   }
// }

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


export default function* authSaga() {
   yield takeEvery(ActionTypes.ADD_NEW_PERFORMER, addNewPerformer);
}