import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>Let's learn English!</div>
      <nav className={styles.header__menu}>
        <ul className={styles.menu}>
          <li>
            <a href="#" className={styles.menu__item}>Words List</a>
          </li>
          <li>
            <a href="#" className={styles.menu__item}>Cards</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
