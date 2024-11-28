import Stats from "../Stats";
import TextArea from "../TextArea";
import { useState } from "react";

function Container() {
  const [text, setText] = useState("");

  const numberOfCharacters = text.length;
  const instagramCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;

  const wordArray = text.trim().split(" ");

  const filterWordArray = wordArray.filter((item) => item != "");
  const numberOfWords = filterWordArray.length;

  return (
    <main className="container">
          <TextArea text={text} setText={setText} />
          <Stats numberOfCharacters={numberOfCharacters}
          instagramCharactersLeft={instagramCharactersLeft}
          facebookCharactersLeft={facebookCharactersLeft}
          numberOfWords={numberOfWords} />
    </main>
  );
}

export default Container;
