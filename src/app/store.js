import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/form/formSlice";
import apiReducer from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    api: apiReducer,
  },
});
