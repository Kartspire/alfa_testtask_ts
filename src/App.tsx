import { useEffect } from "react";
import { fetchUsers } from "./asyncActions/users";
import { Loader } from "./components/Loader";
import { Filter } from "./components/Filter";
import { CardsList } from "./components/CardsList";
import "./app.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";

export const App = () => {
  const dispatch = useAppDispatch();
  const { users, error } = useAppSelector((state) => state.users);
  const loader = useAppSelector((state) => state.loader.loader);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return loader ? (
    <Loader />
  ) : error ? (
    <div className="container">
      <h1>{error}</h1>
    </div>
  ) : (
    <div className="container">
      <Filter />
      {<CardsList users={users} />}
    </div>
  );
};
