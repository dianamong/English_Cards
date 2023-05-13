import { Link } from "react-router-dom";
import styles from "./NoMatch.module.scss";

export default function NoMatch() {
  return (
  <div className={styles.error}>
    <h1>Oops... We couldn't find the page you are looking for</h1>
    <Link to='/'><button className={styles.btn}>Back home</button></Link>
  </div>
  );
}
