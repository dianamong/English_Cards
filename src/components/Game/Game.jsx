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
    const newIndex = cardIndex - 1 < 0 ? words.length - 1 : cardIndex - 1;
    setCardIndex(newIndex);
    setIsLastCard(false);
    setPressed(false);
    setIsFirstCard(newIndex === 0);
  };

  const handleNext = () => {
    const newIndex = cardIndex + 1 >= words.length ? 0 : cardIndex + 1;
    setCardIndex(newIndex);
    setIsFirstCard(false);
    setPressed(false);
    setIsLastCard(newIndex === words.length - 1);
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
