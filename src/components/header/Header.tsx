import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import ScrollLink from "../common/ScrollLink";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#hero", type: "anchor" },
  { label: "Cyber Cars", href: "#catalog", type: "anchor" },
  { label: "Reviews", href: "#reviews", type: "anchor" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `${styles.header} ${
    isScrolled ? styles.headerScrolled : ""
  }`;

  return (
    <>
      <header className={headerClasses}>
        <div className={styles.containerColumn}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logo}>Ape Speed NFT</span>
          </Link>

          <nav className={styles.navDesktop}>
            <ul className={styles.navList}>
              <li>
                <ScrollLink className={styles.navItem} to="#hero">
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className={styles.navItem} to="#catalog">
                  Catalog
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className={styles.navItem} to="#reviews">
                  Reviews
                </ScrollLink>
              </li>
            </ul>
          </nav>

          <div className={styles.actions}>
            <button
              className={styles.toggle}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <svg
                className={styles.toggleIcon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className={styles.navMobile}>
            <ul className={styles.navListMobile}>
              {navLinks.map(({ label, href, type }) => (
                <li key={label}>
                  {type === "anchor" ? (
                    <ScrollLink to={href} onClick={() => setIsMenuOpen(false)}>
                      {label}
                    </ScrollLink>
                  ) : (
                    <Link to={href} onClick={() => setIsMenuOpen(false)}>
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
