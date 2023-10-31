import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data/Data";
const userSlice = createSlice({
    name: "user",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            // eslint-disable-next-line eqeqeq
            const filterData = state.find(user => user.id == id)
            if (filterData) {
                filterData.name = name;
                filterData.email = email
            }

        },
        removeUser: (state, action) => {
            const id = action.payload;
            const filterData = state.filter(user => user.id !== id);
            return filterData;

        },

    }

})
export const { removeUser } = userSlice.actions
export const { addUser } = userSlice.actions
export const { updateUser } = userSlice.actions
export default userSlice.reducer