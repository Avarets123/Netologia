import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const dataSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        dataAdd: (state, action) => {
            state.push({
                id: nanoid(),
                text: action.payload.text,
                price: action.payload.price
            });

            console.log('Data added');
        },
        dataEdit: (state, action) => {

            const id = action.payload.id;

            const findByIdIndex = state.findIndex(el => el.id === id);
            const findByIdElem = state.find(el => el.id === id);


            findByIdElem.text = action.payload.text;
            findByIdElem.price = action.payload.price;

            state[findByIdIndex] = findByIdElem;
        },
        dataDelete: (state, action) => {

            const id = action.payload.id;

            const findIndex = state.findIndex(el => el.id === id);

            state.splice(findIndex, 1);

        }
    }

});
export const { dataAdd, dataEdit, dataDelete } = dataSlice.actions
export default dataSlice.reducer