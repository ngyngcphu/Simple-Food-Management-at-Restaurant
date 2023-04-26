import { combineReducers } from "redux";

import searchData from "./search.reducer";

export const allReducers = combineReducers({
    searchData,
    // add more reducers here
});