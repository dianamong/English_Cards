import styles from "./Header.module.scss";
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <Link to='/words'><img src={logo} className={styles.header__logo} alt='logo'/></Link>
      <nav className={styles.header__menu}>
        <ul className={styles.menu}>
          <li>
            <Link to='/words'>Words List</Link>
          </li>
          <li>
            <Link to='game'>Game</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
