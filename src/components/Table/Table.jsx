import Row from "../Row/Row";
import words from "../../utils/words.js";
import styles from "./Table.module.scss";

function Table() {
  return (
    <div className={styles.table}>
      <div className={styles.table__header}>
        <span>Word</span>
        <span>Transcription</span>
        <span>Translate</span>
      </div>
      {words.map((word) => (
        <Row
          key={word.id}
          english={word.english}
          transcription={word.transcription}
          russian={word.russian}
          tags={word.tags}
        />
      ))}
    </div>
  );
}

export default Table;
