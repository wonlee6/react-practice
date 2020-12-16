import { combineReducers } from "redux";
import counter from './counter';

// root reducer
const rootReducer = combineReducers({
    counter
});

export default rootReducer;