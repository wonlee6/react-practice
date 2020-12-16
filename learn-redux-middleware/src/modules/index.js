import { combineReducers } from "redux";
import counter from './counter';
import sample from './sample';
import loading from './loading';

// root reducer 
// createStore 함수를 사용하여 스토어 만들 때 리듀서 하나만 사용해야 함
const rootReducer = combineReducers({
    counter,
    sample,
    loading
});

export default rootReducer;