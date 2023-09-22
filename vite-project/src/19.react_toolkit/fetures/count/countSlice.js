import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
}
const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count++;
        },
    }
})

export default countSlice.reducer;
export const { increment } = countSlice.actions;