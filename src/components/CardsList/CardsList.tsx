import React from "react";
import { Card } from "../Card/Card";
import { IUser } from "../../models/IUser";
import { useAppSelector } from "../../hooks/redux";

interface ICardsListProps {
  users: IUser[];
}

export const CardsList = React.memo(({ users }: ICardsListProps) => {
  const filter = useAppSelector((state) => state.users.filter);
  const likedUsers = users.filter((el) => el.liked);

  return (
    <ul>
      {filter ? (
        likedUsers.length > 0 ? (
          likedUsers.map((user) => <Card key={user.id} user={user} />)
        ) : (
          <div>Упс! У вас нет избранных персонажей</div>
        )
      ) : users.length > 0 ? (
        users.map((user) => <Card key={user.id} user={user} />)
      ) : (
        <div>Упс! У вас нет избранных персонажей</div>
      )}
    </ul>
  );
});
