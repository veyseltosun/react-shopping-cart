import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
    loading : false,
    cart: cartItems,
    total: 0,
    amount: 0,
}

const AppProvider =({children}) =>{
    
}