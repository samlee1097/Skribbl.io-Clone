import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({

    name: "setting",

    initialState: {
        value: {
            username: "",  
        }
    },

    reducers: {
        updateUsername: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {updateSettings} = userSlice.actions;

export default userSlice.reducer;