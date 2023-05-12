import React, { useState } from "react";
import cn from 'classnames'; 
import Card from "../card/Card";
import words from "../../utils/words";
import styles from './Game.module.scss';
import leftArrow from '../../assets/images/left.png';
import rightArrow from '../../assets/images/right.png';

export default function Game(props) {
  const [cardIndex, setCardIndex] = useState(0);
  const word = words[cardIndex];

  const handlePrev = () => {
    if (cardIndex - 1 < 0) {
      setCardIndex(words.length - 1);
    } else {
      setCardIndex(cardIndex - 1);
    }
  };

  const handleNext = () => {
    if (cardIndex + 1 >= words.length) {
      setCardIndex(0);
    } else {
      setCardIndex(cardIndex + 1);
    }
  };

  const buttonPrevClass = cn([styles.btn, styles.prev]);
  const buttonNextClass = cn([styles.btn, styles.next]);

  return (
    <div className={styles.game}>
      <button onClick={handlePrev} className={buttonPrevClass}><img src={leftArrow} className={styles.arrow} alt="prev" /></button>
      <Card {...word} />
      <button onClick={ handleNext} className={buttonNextClass}><img src={rightArrow} className={styles.arrow} alt="prev" /></button>
    </div>
  );
}
