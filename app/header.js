"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { Lora } from "next/font/google";
import { useState } from "react";

const lora = Lora({ subsets: ["latin"] });

const email = "mailto:adrianbrown.editor@gmail.com";

export default function Header() {
  const [open, setOpen] = useState("");

  const handleClick = () => {
    setOpen("open");
  };

  const handleClose = () => {
    setOpen("");
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={lora.className}>
          <Link href="/">Adrian Brown Creative</Link>
        </h1>
        <button className={styles.hamburger} onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            width="15"
            height="15"
          >
            <polyline points="0 6 15 6" strokeWidth="3" stroke="white" />
            <polyline points="0 12 15 12" strokeWidth="3" stroke="white" />
          </svg>
        </button>

        <ul className={`${styles.nav} ${styles.desktop}`}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href={email}>Contact</Link>
          </li>
        </ul>
      </header>

      <nav className={`${styles.nav} ${styles[open]}`}>
        <header className={styles["nav-header"]}>
          <h1 className={lora.className}>
            <Link href="/">Adrian Brown Creative</Link>
          </h1>
          <button className={styles.hamburger} onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
              width="15"
              height="15"
            >
              <polyline points="2 6 13 14" strokeWidth="3" stroke="black" />
              <polyline points="2 14 13 6" strokeWidth="3" stroke="black" />
            </svg>
          </button>
        </header>

        <ul className={styles["mobile-nav"]}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href={email}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
