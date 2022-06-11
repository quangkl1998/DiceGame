import { combineReducers } from "redux";

import diceReducer from "./diceReducer";

// combineReducers là hàm kết hợp nhiều reducer thành 1 reducer tổng duy nhất
const rootReducer = combineReducers({
    dice: diceReducer,
});

export default rootReducer;
