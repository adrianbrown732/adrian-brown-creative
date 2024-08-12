import styles from "./page.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <div className={styles.logo}></div>
        <h1>Adrian Brown Creative</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
