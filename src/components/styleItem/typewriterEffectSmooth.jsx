import React, { useState, useEffect } from "react";

const TypewriterEffectSmooth2 = ({ phrases }) => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if (charIndex < phrases[phraseIndex].text.length) {
          setDisplayText((prevText) => prevText + phrases[phraseIndex].text[charIndex]);
          setCharIndex((prevIndex) => prevIndex + 1);
        } else if (phraseIndex < phrases.length - 1) {
          setTimeout(() => {
            eraseText();
          }, 1000); // Adjust the delay between writing and erasing here
        }
      }, 100); // Adjust the typing speed here
  
      return () => clearTimeout(timer);
    }, [charIndex, phraseIndex, phrases]);
  
    const eraseText = () => {
      const timer = setTimeout(() => {
        if (displayText.length > 0) {
          setDisplayText((prevText) => prevText.slice(0, -1));
        } else {
          setCharIndex(0);
          setPhraseIndex((prevIndex) => prevIndex + 1);
        }
      }, 50); // Adjust the erasing speed here
  
      return () => clearTimeout(timer);
    };
  
    return (
      <span>{displayText}</span>
    );
};

export default TypewriterEffectSmooth2;
