import { useDispatch } from "react-redux";
import { IUser } from "../../models/IUser";
import { removeUser } from "../../store/reducers/usersSlice";
import styles from "./DeleteBtn.module.css";

interface IDeleteBtnProps {
  user: IUser;
}

export const DeleteBtn = ({ user }: IDeleteBtnProps) => {
  const dispatch = useDispatch();

  return (
    <button
      className={styles.deleteBtn}
      onClick={() => dispatch(removeUser(user.id))}
    >
      удалить
    </button>
  );
};
