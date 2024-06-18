import React, { useEffect } from 'react';
import styles from './Navbar.module.css';
import robot from '../assets/robotlol.png';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.${styles.navbar}`);
      if (window.pageYOffset > 100) {
        navbar.style.backgroundColor = 'rgba(16, 16, 16, 1)'; 
        navbar.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)'; 
      } else {
        navbar.style.backgroundColor = 'rgba(16, 16, 16, 0.8)'; 
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <img src={robot} alt="Background" />
      </div>
      <div className={styles.navRight}>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <a href="#home" className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#upload" className={styles.navLink}>Upload</a>
          </li>
          <li className={styles.navItem}>
            <a href="#live" className={styles.navLink}>Live</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;