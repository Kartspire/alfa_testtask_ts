import { useAppDispatch } from "../../hooks/redux";
import { IUser } from "../../models/IUser";
import { addLike, removeLike } from "../../store/reducers/usersSlice";
import styles from "./Like.module.css";

interface ILikeProps {
  user: IUser;
}

export const Like = ({ user }: ILikeProps) => {
  const dispatch = useAppDispatch();

  const likeUser = () => {
    user.liked ? dispatch(removeLike(user.id)) : dispatch(addLike(user.id));
  };

  return (
    <div
      onClick={likeUser}
      className={`${styles.likeButton} ${user.liked && styles.liked} `}
    >
      <span className={styles.likeIcon}>
        <div className={styles.heartAnimationFirst}></div>
        <div className={styles.heartAnimationSecond}></div>
      </span>
    </div>
  );
};
