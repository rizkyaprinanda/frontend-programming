import { useState } from 'react';
import styles from "./Navbar.module.css";
import menuIcon from "./navbar.svg";
import { Link } from 'react-router-dom';

function Navbar(){
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return(
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__left}>
          <h1 className={styles.navbar__brand}>Movie App</h1>
        </div>
          <button className={styles.navbar__toggle} onClick={handleToggle}>
            <img src={menuIcon} alt="" />
          </button>
          
      </nav>
        <div className={styles.navbar__right}>
        <ul className={`${styles.navbar__list} ${showMenu ? styles.show : ''}`}>
            <li className={styles.navbar__item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to ="/movie/create">Add Movie</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/now">Now Playing</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/top">Top Rated</Link>
            </li>
        </ul>
        </div>
    </div>
  );
}

export default Navbar;
