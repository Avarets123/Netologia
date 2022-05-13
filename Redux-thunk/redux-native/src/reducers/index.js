import { configureStore, combineReducers } from "@reduxjs/toolkit";
import serverData from "./serverDataSlice";

const rootReducer = combineReducers({
    serverData,
});


const store = configureStore({
    reducer: rootReducer
})


export default store;