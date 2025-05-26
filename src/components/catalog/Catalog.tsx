import styles from "./Catalog.module.css";

import img1 from "../../assets/f1.jpg";
import img2 from "../../assets/f2.jpg";
import img3 from "../../assets/f3.jpg";
import img4 from "../../assets/f4.jpg";
import img5 from "../../assets/f5.jpg";
import img6 from "../../assets/hero-car.jpg";

const cars = [
  {
    title: "NeoPhantom – Shadow of Speed",
    features: [
      "Maximum aerodynamic efficiency",
      "Invisible to opponent radars",
      "Acceleration 0–100 km/h in 1.8 sec",
      "399$",
    ],
    image: img2,
  },
  {
    title: "CyberVortex – Whirlwind of Technology",
    features: [
      "High-tech anti-gravity chassis",
      "Jet-powered booster",
      "Superior maneuverability on the track",
      "299$",
    ],
    image: img3,
  },
  {
    title: "AeroBlade – Sharper Than Speed",
    features: [
      "Futuristic carbon fiber body",
      "Turbocharged engine with AI control",
      "Perfect balance of speed and handling",
      "499$",
    ],
    image: img1,
  },
  {
    title: "HyperDrift – King of Drifting",
    features: [
      "Enhanced electric motor",
      "360° control in turns",
      "Special NFT drift skins",
      "249$",
    ],
    image: img4,
  },
  {
    title: "Quantum GT – Racing Through Time",
    features: [
      "Unique quantum transmission",
      "Instant hyper-mode acceleration",
      "Exclusive NFT design with animated effects",
      "149$",
    ],
    image: img5,
  },
  {
    title: "ApeSpeed M8 – Speed of the Future",
    features: [
      "Unique wheel design for maximum grip",
      "Advanced AI navigation system",
      "Special effects for NFT owners",
      "209$",
    ],
    image: img6,
  },
];

const Catalog = () => {
  return (
    <section id="catalog" className={styles.catalog}>
      <h2 className={styles.title}>Cyber Cars Catalog – Choose Your Legend!</h2>
      <div className={styles.grid}>
        {cars.map((car, idx) => (
          <article key={idx} className={styles.card}>
            <img src={car.image} alt={car.title} className={styles.image} />
            <div className={styles.textOverlay}>
              <h3>{car.title}</h3>
              <ul>
                {car.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
