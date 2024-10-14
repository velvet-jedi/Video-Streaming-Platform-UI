import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(120, 1)
            state.messages.push(action.payload)
            // console.log("Messages after add:", state.messages);
        }

    }
})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;