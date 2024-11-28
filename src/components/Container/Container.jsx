import Stats from "../Stats";
import TextArea from "../TextArea";
import { useState } from "react";

function Container() {
  const [text, setText] = useState("");

  const numberOfCharacters = text.length;
  const instagramCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;


  return (
    <main className="container">
          <TextArea text={text} setText={setText} />
          <Stats numberOfCharacters={numberOfCharacters}
          instagramCharactersLeft={instagramCharactersLeft}
          facebookCharactersLeft={facebookCharactersLeft} />
    </main>
  );
}

export default Container;
