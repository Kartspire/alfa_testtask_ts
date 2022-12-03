import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "./reducers/usersSlice";
import loaderSlice from "./reducers/loaderSlice";

const rootReducer = combineReducers({
  users: usersSlice,
  loader: loaderSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
