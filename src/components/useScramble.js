import { useEffect, useRef, useState } from "react";

const CHARS = "!@#$%^&*():{};|,.<>/?";

const useScrambleText = (targetText, cyclesPerLetter = 2, shuffleTime = 50) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(targetText);

  useEffect(() => {
    let pos = 0;

    const scramble = () => {
      intervalRef.current = setInterval(() => {
        const scrambled = targetText.split("")
          .map((char, index) => {
            if (pos / cyclesPerLetter > index) {
              return char;
            }

            const randomCharIndex = Math.floor(Math.random() * CHARS.length);
            const randomChar = CHARS[randomCharIndex];

            return randomChar;
          })
          .join("");

        setText(scrambled);
        pos++;

        if (pos >= targetText.length * cyclesPerLetter) {
          stopScramble();
        }
      }, shuffleTime);
    };

    const stopScramble = () => {
      clearInterval(intervalRef.current || undefined);
      setText(targetText);
    };

    scramble();

    return () => stopScramble();
  }, [targetText, cyclesPerLetter, shuffleTime]);

  return text;
};

export default useScrambleText;