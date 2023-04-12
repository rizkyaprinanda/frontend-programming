import { useState } from 'react';
import styles from "./Navbar.module.css";
import menuIcon from "./navbar.svg";

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
            <li className={styles.navbar__item}>Home</li>
            <li className={styles.navbar__item}>Add Movie</li>
            <li className={styles.navbar__item}>Popular</li>
            <li className={styles.navbar__item}>Now Playing</li>
            <li className={styles.navbar__item}>Top Rated</li>
        </ul>
        </div>
    </div>
  );
}

export default Navbar;
