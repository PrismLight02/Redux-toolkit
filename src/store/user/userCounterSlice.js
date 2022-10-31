import { createSlice } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const initialState={
    counter : 0
}


export const userCounterSlice = createSlice({
    name: "usercounter",
    initialState,
    reducers:{
        updateCounter:(state,action)=>{
            state.counter = state.counter + 1;
        }
    }
})

export const {updateCounter}= userCounterSlice.actions;
export default userCounterSlice.reducer;