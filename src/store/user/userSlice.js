import { createSlice } from "@reduxjs/toolkit";

const initialState={
    id:1,
    userName:"aaron",
    email:"aaron@arron.com"
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        updateUserName:(state,action)=>{
            state.userName = action.payload;
        },
        updateEmail:(state,action)=>{
            state.email=action.payload
        }
    }
})

export const {updateUserName, updateEmail}= userSlice.actions;
export default userSlice.reducer