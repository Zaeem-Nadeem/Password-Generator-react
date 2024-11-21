import { createContext, useState, useEffect } from "react";

export const userContext = createContext();

function Provider({ children }) {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);

  const passGenerator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      str += "1234567890";
    }
    if (character) {
      str += `!"#$%&'()*+,-./:;<=>?@[\\]^_{|}~`;
    }

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  };

  useEffect(() => {
    passGenerator();
  }, [character, number, length]);

  return (
    <userContext.Provider value={{ length, setLength, number, character, setCharacter, setNumber, password }}>
      {children}
    </userContext.Provider>
  );
}

export default Provider;
