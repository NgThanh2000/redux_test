
import {createStore} from "redux";
import combineReducers from "./reducer/combineReducer";

const store = createStore(combineReducers);

export default store;

// redux sẽ chạy tất cả các reducer khi có một action được thực hiện