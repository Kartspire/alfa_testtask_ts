import React from "react";
import { DeleteBtn } from "../DeleteBtn";
import { Like } from "../Like";
import { IUser } from "../../models/IUser";
import styles from "./Card.module.css";

interface ICardProps {
  user: IUser;
}

export const Card = React.memo(({ user }: ICardProps) => {
  return (
    <li className={styles.card}>
      <img src={user.image} alt="тут была картинка" className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.spicies}>{user.species}</p>
        <p>{user.status}</p>
      </div>

      <div className={styles.buttons}>
        <Like user={user} />
        <DeleteBtn user={user} />
      </div>
    </li>
  );
});
