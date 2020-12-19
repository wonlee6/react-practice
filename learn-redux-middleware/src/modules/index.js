import { combineReducers } from "redux";
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import sample from './sample';
import loading from './loading';
// root reducer 
// createStore 함수를 사용하여 스토어 만들 때 리듀서 하나만 사용해야 함
const rootReducer = combineReducers({
    counter,
    sample,
    loading
});

// export function* rootSaga() {
//     // all 함수는 여러 사가를 합쳐주는 역할
//     yield all([counterSaga()])
// }

export default rootReducer;