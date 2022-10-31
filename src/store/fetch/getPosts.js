import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosGetPost } from "../../Util/Api";


export const fetchAllPosts = createAsyncThunk('getPost/fetchAllPosts',()=>{
    return axiosGetPost()
})

const initialState={
    posts:[],
    loading:false
}

export  const getPostslice= createSlice({
    name:"getPost",
    initialState,
    reducers:{
        setLoading:(state,action)=>{
            state.loading= action.payload
        }
    } ,
    extraReducers:(builder)=>{
        builder
            .addCase(fetchAllPosts.pending, (state)=>{
                state.loading = true
            })
            .addCase(fetchAllPosts.fulfilled, (state,action)=>{
                state.loading = false
                state.posts=action.payload.data
            })
            .addCase(fetchAllPosts.rejected, (state,)=>{
                state.loading = true
            })
    }
})
export  const {setLoading} = getPostslice.actions;
export default getPostslice.reducer