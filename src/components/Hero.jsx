import React, { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import useScrambleText from './useScramble';

const TARGET_TEXT = "Hello World"; // Original text for translation

const translations = {
  en: "Hello World",
  es: "Hola Mundo",
  fr: "Bonjour le monde",
  de: "Hallo Welt",
  zh: "你好，世界",
  // Add more translations as needed
};

const Hero = () => {
  const [language, setLanguage] = useState('en');
  const [displayText, setDisplayText] = useState('');
  const scrambledText = useScrambleText(displayText);
  const videoRef = useRef(null);
  {/* points to video element*/}
  const [isCameraOn, setIsCameraOn] = useState(false);
  {/* check if camera is on or not */}
  const [stream, setStream] = useState(null);
  {/* stores media stream object as a state*/}

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    setDisplayText(translations[language]);
  }, [language]);

  const toggleCamera = () => {
    if (isCameraOn) {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        videoRef.current.srcObject = null;
      }
      setIsCameraOn(false);
    } else {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
          setStream(stream);
          setIsCameraOn(true);
        })
        .catch(err => {
          console.error("Error accessing camera: ", err);
        });
    }
  };

  return (
    <div className={styles.hero}>
      <h1 className={styles.heroText}>{scrambledText}</h1>
      <div className={styles.translationContainer}>
        <select 
          className={styles.languageDropdown} 
          value={language} 
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          {/* Add more options as needed */}
        </select>
        <div className={styles.rectangle}>
          <video ref={videoRef} autoPlay className={styles.videoFeed}></video>
          {/*this is for accessing the video and actually playing it*/}

          <textarea 
            className={styles.translationBox} 
            value={displayText} 
            readOnly 
          />
        </div>
        <button className={styles.cameraButton} onClick={toggleCamera}>
          {isCameraOn ? 'Turn Camera Off' : 'Turn Camera On'}
        </button>
      </div>
    </div>
  );
};

export default Hero;
