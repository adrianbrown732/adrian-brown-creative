import styles from "../page.module.css";
import Header from "../header";
import Footer from "../footer";
import { Lora } from "next/font/google";
import Link from "next/link";

const lora = Lora({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Header />
      <section className={styles.about}>
        <div className={styles.profile}></div>
        <div className={styles.bio}>
          <h2 className={lora.className}>
            I'm Adrian Brown, <br />a videographer and
            <br /> motion designer
          </h2>
          <p>
            Video is essential to modern marketing practices. This makes
            understanding how to properly implement video assets a high
            priority. With each project, my objective is to produce quality
            content that brings value to my clients, handling all phases of
            production and post-production.
          </p>
          <button>
            <Link href="/">See portfolio</Link>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
