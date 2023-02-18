import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { addUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
