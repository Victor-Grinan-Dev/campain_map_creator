import { createSlice } from "@reduxjs/toolkit";

export const portalSlice = createSlice({
  name: "portal",
  initialState: {
    isLogged: false,
    currentUser: {
      username: undefined,
      type: undefined,
    },
    currentUserID: undefined,

    //temp:
    search: "",
    isLoading: true,
    robotSay: "",
  },

  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setCurrentUserID: (state, action) => {
      state.currentUserID = action.payload;
    },

    //temp:
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setSearch(state, action) {
      state.search = action.payload;
    },
    setRobotSay(state, action) {
      state.robotSay = action.payload;
    },
  },
});

export const {
  setCurrentUser,
  setCurrentUserID,

  //temp:
  setIsLogged,
  setIsLoading,
  setSearch,
  setRobotSay,
} = portalSlice.actions;

export default portalSlice.reducer;
