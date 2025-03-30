import { createSlice } from "@reduxjs/toolkit";
//This is a slice of authentication
const initialState = {
   status : false,
   userData: null
}
//Given parameters are the required parameters of createSlice and we have to export reducer from this
const authSlice = createSlice({
    name: "auth",
    initialState,
    //All the elements inside reducers have access of state and actions
    //state is use for the reflect the changes occurs and from action we can get the payload
    //reducers are use to keep track of states of actions like login, logout, etc.
    reducers: {
         login: (state, action) => {
            state.status = true
            state.userData = action.payload
         },
         logout: (state) => {
            state.status = false
            state.userData = null
         }
    }
})

//exporting the actions login, logout
export const {login, logout} = authSlice.actions
export default authSlice.reducer