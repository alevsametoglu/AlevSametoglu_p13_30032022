import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
  },
  reducers: {
    updateProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
const userActions = userSlice.actions;
const userReducer = userSlice.reducer;

export { userActions, userReducer };
