import styles from "../page.module.css";
import Link from "next/link";
import Header from "../header";
import Footer from "../footer";

const Sample = ({ imgURL }) => {
  return (
    <button
      className={styles.sample}
      style={{
        backgroundImage: `url(${imgURL})`,
        padding: "3rem",
        backgroundSize: "cover",
      }}
    ></button>
  );
};

const imgURL = [
  "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/04/split-images-of-sailor-moon.jpg",
];

export default function Portfolio() {
  return (
    <>
      <Header />
      <h1>Portfolio</h1>
      <main>
        <Sample imgURL={imgURL[0]} />
        <Sample imgURL={imgURL[0]} />
        <Sample imgURL={imgURL[0]} />
        <Sample imgURL={imgURL[0]} />
        <Sample imgURL={imgURL[0]} />
        <Sample imgURL={imgURL[0]} />
        <Sample imgURL={imgURL[0]} />
        <Sample imgURL={imgURL[0]} />
        <Sample imgURL={imgURL[0]} />
      </main>
      <Footer></Footer>
    </>
  );
}
