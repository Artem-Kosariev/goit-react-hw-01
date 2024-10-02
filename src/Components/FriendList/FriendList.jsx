import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => ( 
<ul className={css.friendList}>
  {friends.map((friend) => (
    <li key={friend.id}>
      <FriendListItem friends={friend} />
    </li>
  ))}
</ul>
);

export default FriendList;