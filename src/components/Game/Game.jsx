import React, { useState } from "react";
import cn from "classnames";
import Card from "../Card/Card";
import words from "../../utils/words";
import styles from "./Game.module.scss";
import leftArrow from "../../assets/images/left.png";
import rightArrow from "../../assets/images/right.png";

export default function Game(props) {
  const [cardIndex, setCardIndex] = useState(0);
  const word = words[cardIndex];
  const [count, setCount] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [isFirstCard, setIsFirstCard] = useState(true);
  const [isLastCard, setIsLastCard] = useState(false);
  const [learnedWords, setLearnedWords] = useState([]);

  const handleLearned = () => {
    setPressed(true);
    if (!learnedWords.includes(cardIndex)) {
      setLearnedWords([...learnedWords, cardIndex]);
      setCount(learnedWords.length + 1);
    }
  };

  const handlePrev = () => {
    if (cardIndex - 1 < 0) {
      setCardIndex(words.length - 1);
      setIsLastCard(false);
    } else {
      setCardIndex(cardIndex - 1);
      setIsLastCard(false);
    }
    setPressed(false);
    if (cardIndex - 1 === 0) {
      setIsFirstCard(true);
    } else {
      setIsFirstCard(false);
    }
  };

  const handleNext = () => {
    if (cardIndex + 1 >= words.length) {
      setCardIndex(0);
      setIsFirstCard(false);
    } else {
      setCardIndex(cardIndex + 1);
      setIsFirstCard(false);
    }
    setPressed(false);
    if (cardIndex + 1 === words.length - 1) {
      setIsLastCard(true);
    } else {
      setIsLastCard(false);
    }
  };

  const buttonPrevClass = cn([
    styles.btn,
    styles.prev,
    { [styles.disabled]: isFirstCard },
  ]);
  const buttonNextClass = cn([
    styles.btn,
    styles.next,
    { [styles.disabled]: isLastCard },
  ]);

  return (
    <>
      <div className={styles.game}>
        <button onClick={handlePrev} className={buttonPrevClass}>
          <img src={leftArrow} className={styles.arrow} alt="prev" />
        </button>
        <Card {...word} handleLearned={handleLearned} pressed={pressed} />
        <button onClick={handleNext} className={buttonNextClass}>
          <img src={rightArrow} className={styles.arrow} alt="prev" />
        </button>
      </div>
      <div>
        <p className={styles.counter}>
          Изучено слов: {count} / {words.length}
        </p>
      </div>
    </>
  );
}
