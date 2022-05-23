import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedex";
import userReducer from "./userRedux";




export default configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
    },
})