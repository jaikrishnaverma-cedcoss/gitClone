import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading:false,
    data:[],
    error:''
}
export const fetchData=createAsyncThunk('github/fetchData',async type=>{
    const apiData=await axios.get(' https://api.github.com/users')
    console.log(apiData)
    return apiData.data
})

export const searchData=createAsyncThunk('github/searchData',async type=>{
 
    const apiData=await axios.get(`https://api.github.com/users/${type}`)
    console.log("apiData",apiData)
    return apiData.data
})
const gitSlice=createSlice({
    name:"github",
    initialState,
    reducers:{

    },
    extraReducers:{
        [fetchData.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchData.fulfilled]:(state,action)=>{
            state.loading=false
            state.data=action.payload
        },
        [fetchData.rejected]:(state,action)=>{
            state.loading=false
            state.data=[]
        }, [searchData.pending]:(state,action)=>{
            state.loading=true
        },
        [searchData.fulfilled]:(state,action)=>{
            state.loading=false
            state.data=action.payload
        },
        [searchData.rejected]:(state,action)=>{
            state.loading=false
            state.data=[]
        },
    }
})
export default gitSlice.reducer