//steps of creating store
//step1:
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice"

//step2:
const store = configureStore({
    reducer: todoReducer
})

export default store