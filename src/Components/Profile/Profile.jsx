import css from './Profile.module.css';

const Profile = ({ image, name, tag, location, stats }) => (
  <div className={css.container}>
    <div className={css.wrapper}>
      <img src={image} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{name}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.followers}>
        <span className={css.statsName}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.views}>
        <span className={css.statsName}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.likes}>
        <span className={css.statsName}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile