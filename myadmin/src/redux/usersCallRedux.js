import {createSlice} from "@reduxjs/toolkit";

export const userCallSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        isFetching: false,
        error: false,
    },
    reducers: {
         // get all
         getUserStart:(state)=>{
            state.isFetching = true
            state.error = false
         },
         getUserSuccess: (state, action)=>{
          state.isFetching = false;
          state.users = action.payload;
         },
         getUserFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
         },
          // delete 
          deleteUserStart:(state)=>{
            state.isFetching = true
            state.error = false
         },
         deleteUserSuccess: (state, action)=>{
          state.isFetching = false;
          state.users.splice(
            state.users.findIndex((item)=>item._id === action.payload),
            1
          );
         },
         deleteUserFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
         },
            //Update 
            updateUserStart:(state)=>{
               state.isFetching = true
               state.error = false
            },
            updateUserSuccess: (state, action)=>{
             state.isFetching = false;
             state.users[
               state.users.findIndex((item) => item._id === action.payload.id)
             ] = action.payload.user;
            },
            updateUserFailure: (state)=>{
               state.isFetching = false;
               state.error = true;
            },
            //add
            addUserStart:(state)=>{
               state.isFetching = true
               state.error = false
            },
            addUserSuccess: (state, action)=>{
             state.isFetching = false;
             state.users.push(action.payload)
            },
            addUserFailure: (state)=>{
               state.isFetching = false;
               state.error = true;
            }

    },

})
export const {getUserStart, getUserSuccess, getUserFailure, deleteUserStart,deleteUserSuccess,deleteUserFailure, updateUserStart, updateUserSuccess, updateUserFailure ,addUserStart, addUserSuccess, addUserFailure} = userCallSlice.actions;

export default userCallSlice.reducer;