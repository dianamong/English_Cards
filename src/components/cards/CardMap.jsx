import React from "react";
import Card from "../card/Card";
import words from "../../utils/words.js";

function CardMap() {
  return (
    <div>
      {words.map((word) => (
        <Card
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

export default CardMap;
