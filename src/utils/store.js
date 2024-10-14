import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice"

const store = configureStore({
    reducer: {
        hamburger: hamburgerSlice,
        search: searchSlice,
        chat: chatSlice,
    },
})

export default store;