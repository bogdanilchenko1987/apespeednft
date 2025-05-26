import React from "react";
import styles from "./Faq.module.css";

const testimonials = [
  {
    author: "Liam K.",
    text: "These Cyber Cars are absolutely out of this world! The details, the style, the animation – top-notch. I just want to collect them all!",
    rating: "★★★★★",
  },
  {
    author: "Charlotte L.",
    text: "The NFT cars from Ape Speed NFT are incredible! The graphics are on par with top-tier games, and each design is unique and super cool in its own way.",
    rating: "★★★★★",
  },
  {
    author: "Cooper R.",
    text: "Choosing between classic and futuristic, I went with CyberVortex! Unique design, awesome special effects, and the true feeling of NFT exclusivity.",
    rating: "★★★★★",
  },
  {
    author: "Flynn S.",
    text: "HyperDrift is my new NFT obsession! The drift, the style, the fiery animation! These cars aren’t just pictures – they feel alive!",
    rating: "★★★★★",
  },
  {
    author: "Zara P.",
    text: "I’m in awe! NeoPhantom is an absolute masterpiece. It feels like a car straight out of a cyberpunk future. Ape Speed NFT knows how to create beauty!",
    rating: "★★★★★",
  },
  {
    author: "River T.",
    text: "The Cyber Cars collection is the next level in the NFT world. The details, the dynamics, the stylization – all simply 🔥. I got myself a Quantum GT, and now I can’t stop staring at it!",
    rating: "★★★★★",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Reviews</h2>

        <div className={styles.table}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.author}>{item.author}</div>
              <div className={styles.text}>{item.text}</div>
              <div className={styles.rating}>{item.rating}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
