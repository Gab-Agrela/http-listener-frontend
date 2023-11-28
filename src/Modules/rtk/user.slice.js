import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  info: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.token = payload.token;
      state.info = payload.info;
    },
  },
});

const { actions, reducer } = userSlice;

export const { setUser } = actions;
export default reducer;
