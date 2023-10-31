import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";
const store = configureStore({
    reducer: {
        user: Reducer,
    }
})
export default store;