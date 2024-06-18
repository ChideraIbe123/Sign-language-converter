import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';
import styles from './Hero.module.css';
import EncryptButton from './EncryptButton';
import useScrambleText from './useScramble'; 

const TARGET_TEXT = "GestureText.AI";

const Hero = () => {
  const vantaRef = useRef(null);
  const scrambledText = useScrambleText(TARGET_TEXT);

  useEffect(() => {
    const vantaEffect = HALO({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      baseColor: 0x67ff,
      backgroundColor: 0x10111,
      xOffset: 0,
      size: 1.30,
      THREE,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className={styles.hero} ref={vantaRef}>
      <h1 className={styles.heroText}>{scrambledText}</h1>
      <div className={styles.heroAction}>
        <EncryptButton />
      </div>
    </div>
  );
};

export default Hero;