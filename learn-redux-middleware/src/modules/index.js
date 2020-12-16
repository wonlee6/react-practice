import { combineReducers } from "redux";
import counter from './counter';

// root reducer 
// createStore 함수를 사용하여 스토어 만들 때 리듀서 하나만 사용해야 함
const rootReducer = combineReducers({
    counter
});

export default rootReducer;