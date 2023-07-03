import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";



export const getAllData=createAsyncThunk("gitUsers",async()=>{
    const response=await fetch("https://api.github.com/users");
    const result= response.json();
    
    return result;

})

export const userSlice= createSlice({
    name:"user",
    initialState:{
        users:[],
        loading:false,
        error:null
    },

    extraReducers:{
        [getAllData.pending]:(state)=>{
            state.loading=true;
        },
        [getAllData.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users=action.payload
        },
        [getAllData.rejected]:(state,action)=>{
            state.loading=true;
            state.error=action.payload;
        }

    }


})

export default userSlice.reducer;