import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userSlice from "./user.slice";
import api from "./query";

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
