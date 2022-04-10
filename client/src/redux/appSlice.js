import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isAuth: false,
  },
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

// Action creators are generated for each case reducer function
const appActions = appSlice.actions;

const appReducer = appSlice.reducer;
export { appActions, appReducer };
