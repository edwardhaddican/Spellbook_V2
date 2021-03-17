import React from "react";

const CharacterList = () => {
  const [numberOfCharacters, setNumberOfCharacters] = useState(0);

  return (
    <div>
      <h1>Characters</h1>
      <p>Total Characters: {numberOfCharacters}</p>
    </div>
  );
};

export default CharacterList;
