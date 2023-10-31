import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data/Data";
const userSlice = createSlice({
    name: "user",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        removeUser: (state, action) => {
            const id = action.payload;
            const filterData = state.filter(user => user.id !== id);
            return filterData;

        }
    }

})
export const { removeUser } = userSlice.actions
export const { addUser } = userSlice.actions
export default userSlice.reducer