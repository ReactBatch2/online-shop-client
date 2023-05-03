import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const REGISTER_URL = 'http://localhost:8585/api/user/create';

export const register = createAsyncThunk('auths/register',async (user) => {
    console.log(user)
    const response = await axios.post(REGISTER_URL,user,{
        'Content-Type':'application/json',
    })
    return response.data
})

const initialState = {
    user:{},
    error:null
}

const authSlice = createSlice({
    name : 'authSlice',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder
            .addCase(register.fulfilled,(state,action)=>{
                console.log(action.payload)
                state.user = action.payload
            })
    }
    
})

export const getUser = state => state.auths.user
export default authSlice.reducer