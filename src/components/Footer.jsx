
import React from 'react';
import styles from './Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2 className={styles.logoText}><span>GestureText</span>.AI</h2>
          
          <div className={styles.contact}>
            <span><i className="fas fa-phone"></i> &nbsp; +1 224 508 0854</span>
            <span><i className="fas fa-envelope"></i> &nbsp; coibe2@illinois.edu</span>
            <span><i className="fas fa-phone"></i> &nbsp; +1 224 622 4078</span>
            <span><i className="fas fa-envelope"></i> &nbsp; vrallapalli2@wisc.edu</span>
            <span><i className="fas fa-phone"></i> &nbsp; +1 331 276 4402</span>
            <span><i className="fas fa-envelope"></i> &nbsp; mamtanin@msu.edu</span>
          </div>
          <div className={styles.socials}>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        

        <div className={styles.footerSection}>
          <h2>Contact Us</h2>
          <form className={styles.contactForm}>
            <input type="email" name="email" className={styles.textInput} placeholder="Your email address..." />
            <textarea name="message" className={styles.textInput} placeholder="Your message..."></textarea>
            <button type="submit" className={styles.btn}>
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>

      <div className={styles.footerBottom}>
        &copy; Designed by Chidera Ibe, Vishnu Rallapalli, Nikhil Mamtani
      </div>
    </footer>
  );
}

export default Footer;
