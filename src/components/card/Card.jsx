import React, { useEffect, useState } from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  useEffect(() => {
    setPressed(false);
  }, [props]);

  return (
    <div className={styles.card}>
      <div className={styles.card__english}>{props.english}</div>
      <div className={styles.card__transcription}>{props.transcription}</div>
      {pressed ? (
        <div className={styles.card__russian}>{props.russian}</div>
      ) : (
        <button className={styles.card__button} onClick={handleChange}>
          <span>Показать перевод</span>
        </button>
      )}
    </div>
  );
}

export default Card;
