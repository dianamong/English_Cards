import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Row.module.scss";
import editIcon from "../../assets/images/pencil.png";
import saveIcon from "../../assets/images/done.png";
import deleteIcon from "../../assets/images/delete.png";
import cancelIcon from "../../assets/images/cancel.png";

export default function Row(props) {
  const { english, transcription, russian, tags } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (
      inputValue.english.trim() === "" ||
      inputValue.transcription.trim() === "" ||
      inputValue.russian.trim() === "" ||
      inputValue.tags.trim() === ""
    ) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [inputValue]);

  function editClick() {
    setIsEdit(!isEdit);
  }

  function cancelClick() {
    setInputValue(props);
    setIsEdit(false);
  }

  const handleChange = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  function saveClick() {
    const cyrillicRegex = /^[А-Яа-я]+$/;
    const latinRegex = /^[A-Za-z]+$/;
    if (
      inputValue.english.trim() === "" ||
      inputValue.transcription.trim() === "" ||
      inputValue.russian.trim() === "" ||
      inputValue.tags.trim() === ""
    ) {
      alert("Заполните все поля");
    } else if (!inputValue.english.match(latinRegex)) {
      alert("Введите слово в поле WORD латинскими буквами");
    } else if (!inputValue.russian.match(cyrillicRegex)) {
      alert("Введите слово в поле TRANSLATE русскими буквами");
    } else if (!inputValue.tags.match(cyrillicRegex)) {
      alert("Введите слово в поле TAGS русскими буквами");
    } else {
      console.log("Form parameters:", inputValue);
      setIsEdit(false);
    }
  }

  const inputClass = cn([
    styles.row__input,
    {[styles.inputError]: isEmpty },
  ]);

  const saveButton = cn([styles.btn, {[styles.disabled]: isEmpty}])
  return (
    <div className={styles.row}>
      {/* <div>{props.number}</div> */}
      {isEdit ? (
        <>
          <input
            type="text"
            className={inputClass}
            value={inputValue.english}
            name="english"
            onChange={handleChange}
          />
          <input
            type="text"
            className={inputClass}
            value={inputValue.transcription}
            name="transcription"
            onChange={handleChange}
          />
          <input
            type="text"
            className={inputClass}
            value={inputValue.russian}
            name="russian"
            onChange={handleChange}
          />
          <input
            type="text"
            className={inputClass}
            value={inputValue.tags}
            name="tags"
            onChange={handleChange}
          />
          <div className={styles.row__buttons}>
            <button className={saveButton} onClick={saveClick}>
              <img src={saveIcon} className={styles.icon} alt="save"></img>
            </button>
            <button className={styles.btn} onClick={cancelClick}>
              <img src={cancelIcon} className={styles.icon} alt="cancel"></img>
            </button>
          </div>
        </>
      ) : (
        <>
          <div>{english}</div>
          <div>{transcription}</div>
          <div>{russian}</div>
          <div>{tags}</div>
          <div className={styles.row__buttons}>
            <button className={styles.btn} onClick={editClick}>
              <img src={editIcon} className={styles.icon} alt="save"></img>
            </button>
            <button className={styles.btn}>
              <img src={deleteIcon} className={styles.icon} alt="delete"></img>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
