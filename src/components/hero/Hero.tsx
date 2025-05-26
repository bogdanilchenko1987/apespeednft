import React from "react";
import styles from "./Hero.module.css";
import img from "../../assets/hero-car.jpg";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <img
        src={img}
        alt="Cyber car"
        loading="lazy"
        className={styles.heroBgImage}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Speed, technology, ownership – become the king of the NFT track
        </h1>

        <div className={styles.ctaButtons}>
          <a href="#catalog" className={styles.ctaButton}>
            Choose Your Cyber Car
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
