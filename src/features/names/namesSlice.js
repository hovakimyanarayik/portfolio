import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ['Name'],
};

export const namesSlice = createSlice({
  name: "names",
  initialState,
  reducers: {
    add: (state, action) => {
        if(state.value.includes(action.payload)) {
            state.value = state.value.filter(i => i !== action.payload)
        } else {
            state.value.push(action.payload)
        }
    }
  },
});

// Action creators are generated for each case reducer function
export const { add } = namesSlice.actions;

export default namesSlice.reducer;