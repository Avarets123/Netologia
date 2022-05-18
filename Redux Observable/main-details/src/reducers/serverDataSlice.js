import { createSlice } from "@reduxjs/toolkit";


const serverData = createSlice({
    name: 'serverData',
    initialState: [],
    reducers: {
        addData(state, action) {
            if (!action.payload) {
                return;
            }
            action.payload.forEach(el => {
                const id = state.find(i => i.id === el.id);
                if (id) return
                state.push(el)
            });
        },
        delData(state, action) {
            const findItem = state.findIndex(el => el.id === action.payload)
            state.splice(findItem, 1);
        },
        editData(state, action) {
            const { id } = action.payload
            const find = state.findIndex(el => el.id === id);
            state[find] = { ...action.payload };
        },
    }

});

export const { addData, delData, editData } = serverData.actions

export default serverData.reducer;