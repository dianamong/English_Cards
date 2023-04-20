import React, { useState } from "react";
import styles from "./Row.module.scss";
import editIcon from "../../assets/images/pencil.png";
import saveIcon from "../../assets/images/done.png";
import deleteIcon from "../../assets/images/delete.png";
import cancelIcon from '../../assets/images/cancel.png';

function Row(props) {
  const { english, transcription, russian } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props);
  function editClick() {
    setIsEdit(!isEdit);
  }

  function cancelClick() {
    setInputValue(props);
    setIsEdit(!isEdit);
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.row}>
      {/* <div>{props.number}</div> */}
      {isEdit ? (
        <>
          <input type="text" className={styles.row__input} value={inputValue.english} name={english} onChange={handleChange}></input>
          <input type="text" className={styles.row__input} value={inputValue.transcription} name={transcription} onChange={handleChange}></input>
          <input type="text" className={styles.row__input} value={inputValue.russian} name={russian} onChange={handleChange}></input>
          <div className={styles.row__buttons}>
          <button className={styles.btn}><img src={saveIcon} className={styles.icon} alt='save'></img></button>
          <button className={styles.btn} onClick={cancelClick}><img src={cancelIcon} className={styles.icon} alt='cancel'></img></button>
          </div>
        </>
      ) : (
        <>
          <div>{props.english}</div>
          <div>{props.transcription}</div>
          <div>{props.russian}</div>
          <div className={styles.row__buttons}>
          <button className={styles.btn} onClick={editClick}><img src={editIcon} className={styles.icon} alt='save'></img></button>
          <button className={styles.btn}><img src={deleteIcon} className={styles.icon} alt='delete'></img></button>
          </div>
        </>
      )}
    </div>
  );
}

export default Row;
