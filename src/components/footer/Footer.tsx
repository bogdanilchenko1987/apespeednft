import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import ScrollLink from "../common/ScrollLink";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>Ape Speed NFT</div>

        <ul className={styles.nav}>
          <li>
            <ScrollLink to="#hero">Home</ScrollLink>
          </li>
          <li>
            <ScrollLink to="#catalog">Cyber Cars</ScrollLink>
          </li>
          <li>
            <ScrollLink to="#reviews">Reviews</ScrollLink>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Use</Link>
          </li>
        </ul>

        <div className={styles.email}>support@apespeednft.com</div>

        <div className={styles.copyright}>
          © 2025 apespeednft.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
