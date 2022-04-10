import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appSlice.js";
import { userReducer } from "./userSlice.js";

export default configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
});
