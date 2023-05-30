import React, { useEffect, useState, useRef } from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, [])

  return (
    <div className={styles.card}>
      <div className={styles.card__english}>{props.english}</div>
      <div className={styles.card__transcription}>{props.transcription}</div>
      {props.pressed ? (
        <div className={styles.card__russian}>{props.russian}</div>
      ) : (
        <button className={styles.card__button} onClick={props.handleLearned} ref={ref}>
          <span>Показать перевод</span>
        </button>
      )}
    </div>
  );
}

export default Card;
