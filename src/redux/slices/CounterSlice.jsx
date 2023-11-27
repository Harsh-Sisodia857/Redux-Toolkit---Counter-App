// This is a counter slice. Slice can be multiple in this project we required only one slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}
// 3 thing required to create slice -- name, initalState, reducers
export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment : (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;