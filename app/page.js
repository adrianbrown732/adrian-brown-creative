import styles from "./page.module.css";
import Header from "./header";
import Footer from "./footer";
import Portfolio from "./portfolio";
import { Lora } from "next/font/google";
import BackgroundVideo from "next-video/background-video";
import videoBG from "/videos/video-bg.mp4";

const lora = Lora({ subsets: ["latin"] });

const email = "mailto:adrianbrown.editor@gmail.com";

const Services = ({ children }) => {
  return <section className={styles.services}>{children}</section>;
};

const Service = ({ service, details }) => {
  return (
    <div className={styles.service}>
      <div className={styles.logo}></div>
      <h3 className={lora.className}>{service}</h3>
      <p>{details}</p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <BackgroundVideo
        src={videoBG}
        style={{
          aspectRatio: "16 / 9",
        }}
      >
        <section className={`${styles.hero} ${styles.desktop}`}></section>
      </BackgroundVideo>

      {/* <Services>
        <h2 className={lora.className}>Services</h2>
        <Service
          service="Videography"
          details="Technically crafted videography that considers lighting, sound and staging to produce aesthetically meaningful visuals."
        />
        <Service
          service="Motion Graphics"
          details="Eye-catching motion graphics designed to captivate and inform your audience of what’s most important."
        />
        <Service
          service="Video Editing"
          details="Meticulously crafted editing that tells your story in a stunning and engaging way."
        />
      </Services> */}
      <Portfolio />

      <Footer></Footer>
    </>
  );
}
