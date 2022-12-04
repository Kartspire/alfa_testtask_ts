import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface IUsers {
  users: IUser[];
  filter: boolean;
  error: string;
}

const initialState: IUsers = {
  users: [],
  filter: false,
  error: "",
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    usersFetchingSucces(state, action: PayloadAction<IUser[]>) {
      state.error = "";
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    addLike(state, action: PayloadAction<number>) {
      state.users.map((el) => {
        if (el.id === action.payload) {
          el.liked = true;
        }
        return el;
      });
    },
    removeLike(state, action: PayloadAction<number>) {
      state.users.map((el) => {
        if (el.id === action.payload) {
          el.liked = false;
        }
        return el;
      });
    },
    removeUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((el) => el.id !== action.payload);
    },
    showLiked(state) {
      state.filter = !state.filter;
    },
  },
});

export default usersSlice.reducer;
export const {
  addLike,
  removeLike,
  removeUser,
  showLiked,
  usersFetchingSucces,
  usersFetchingError,
} = usersSlice.actions;
