import axios from "axios";
import { removeLoader } from "../store/reducers/loaderSlice";
import {
  usersFetchingError,
  usersFetchingSucces,
} from "../store/reducers/usersSlice";
import { AppDispatch } from "../store/store";
import { IUsersData } from "../models/IUser";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    const responce = await axios.get<IUsersData>(
      "https://rickandmortyapi.com/api/character"
    );
    dispatch(usersFetchingSucces(responce.data.results));
    dispatch(removeLoader());
  } catch (e) {
    if (e instanceof Error) {
      dispatch(usersFetchingError(e.message));
    }
  }
};
