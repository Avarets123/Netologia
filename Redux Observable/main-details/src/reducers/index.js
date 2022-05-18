import { configureStore, combineReducers } from "@reduxjs/toolkit";
import serverData from "./serverDataSlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    serverData,
});


const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})


export default store;