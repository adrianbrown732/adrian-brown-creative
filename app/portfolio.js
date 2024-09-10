"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const videos = [
  "https://player.vimeo.com/video/927179187?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/919394669?h=f53a2d345e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/927179489?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/861291447?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/919427698?h=ae9a7248aa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/919394826?h=8ea3cffe55&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/861280731?h=dca1f5dfd9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/927170607?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/927178979?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
];

const imgURL = [
  "/art.png",
  "/faq.png",
  "/harvest.png",
  "/hazel.png",
  "/jade.png",
  "/moonboys.png",
  "/roots.png",
  "/sheep.png",
  "/train.png",
];

export default function Portfolio() {
  const [display, setDisplay] = useState("hide");
  const [videoSrc, setVideoSrc] = useState("");

  const handleOpen = () => {
    setDisplay(" ");
  };

  const handleClose = () => {
    setDisplay("hide");
  };

  const Sample = ({ imgURL, videoSrc }) => {
    return (
      <div className={styles.overlay}>
        <button
          onClick={() => {
            handleOpen();
            setVideoSrc(videoSrc);
          }}
          className={styles.sample}
          style={{
            backgroundImage: `url(${imgURL})`,
            padding: "3rem",
            backgroundSize: "cover",
          }}
        ></button>
      </div>
    );
  };

  const Video = () => {
    return (
      <div className={`${styles["video-display"]} ${styles[display]}`}>
        <div className={styles["video-player"]}>
          <iframe
            className={styles.iframe}
            src={videoSrc}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          ></iframe>
          <button onClick={handleClose}>close</button>
          {/* <div className={styles["blur-overlay"]}></div> */}
        </div>
      </div>
    );
  };

  return (
    <div className={styles["portfolio-page"]}>
      <div className={styles.portfolio}>
        <Sample imgURL={imgURL[6]} videoSrc={videos[6]} />
        <Sample imgURL={imgURL[1]} videoSrc={videos[1]} />
        <Sample imgURL={imgURL[7]} videoSrc={videos[7]} />
        <Sample imgURL={imgURL[3]} videoSrc={videos[3]} />
        <Sample imgURL={imgURL[4]} videoSrc={videos[4]} />
        <Sample imgURL={imgURL[5]} videoSrc={videos[5]} />
        <Sample imgURL={imgURL[8]} videoSrc={videos[8]} />
        <Sample imgURL={imgURL[2]} videoSrc={videos[2]} />
        <Sample imgURL={imgURL[0]} videoSrc={videos[0]} />
      </div>
      <Video />
    </div>
  );
}
