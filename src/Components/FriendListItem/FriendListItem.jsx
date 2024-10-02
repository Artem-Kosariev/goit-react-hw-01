import css from './FriendListItem.module.css';
const FriendListItem = ({friends: { avatar, name, isOnline }}) => (
  <div className={css.item}>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
        {isOnline? <p className={css.online}>online</p>:<p className={css.offline}>offline</p>}
  </div>
);

export default FriendListItem

