import React, { useState } from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__english}>{props.english}</div>
      <div className={styles.card__transcription}>{props.transcription}</div>
      {pressed ? (
        <div className={styles.card__russian}>{props.russian}</div>
      ) : (
        <button className={styles.card__button} onClick={handleChange}>
          Показать перевод
        </button>
      )}
    </div>
  );
}

export default Card;
