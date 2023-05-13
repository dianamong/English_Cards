import React from "react";
import Card from "../Card/Card";
import words from "../../utils/words.js";

function CardMap() {
  return (
    <div>
      {words.map((word, i) => (
        <Card
          key={i}
          english={word.english}
          transcription={word.transcription}
          russian={word.russian}
          tags={word.tags}
        />
      ))}
    </div>
  );
}

export default CardMap;
