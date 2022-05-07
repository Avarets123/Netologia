import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    text: null,
    price: null
}

const editDataSlice = createSlice({
    name: 'editData',
    initialState,
    reducers: {
        addEditData: (state, action) => {

            state.id = action.payload.id
            state.text = action.payload.text
            state.price = action.payload.price

            console.log(`Edit updated`)

        }

    }

})



export const { addEditData } = editDataSlice.actions;
export default editDataSlice.reducer;