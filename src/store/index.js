import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"
import userCounter from "./user/userCounterSlice"
import fetchReducer from "./fetch/getPosts"
export const store = configureStore({
    reducer:{
        user:userReducer,
        counter:userCounter,
        post:fetchReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck: false})
})