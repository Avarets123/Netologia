import { configureStore, combineReducers } from "@reduxjs/toolkit";

import dataSlice from "./dataSlice";
import editDataSlice from "./editDataSlice";






const rootReducer = combineReducers({
    data: dataSlice,
    editData: editDataSlice
});

const store = configureStore({
    reducer: rootReducer
})


export { store }



