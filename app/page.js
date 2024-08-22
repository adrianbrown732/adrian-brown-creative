import styles from "./page.module.css";
import Header from "./header";
import Footer from "./footer";
import { Lora } from "next/font/google";
import BackgroundVideo from "next-video/background-video";
import videoBG from "/videos/video-bg.mp4";
import Link from "next/link";

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

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.profile}></div>
      <div className={styles.bio}>
        <h2 className={lora.className}>
          I'm Adrian Brown, <br />a videographer and
          <br /> motion designer
        </h2>
        <p>
          Video is essential to modern marketing practices. This makes
          understanding how to properly implement video assets a high priority.
          With each project, my objective is to produce quality content that
          brings value to my clients, handling all phases of production and
          post-production.
        </p>
        <button>
          <Link href={email}>Let's talk</Link>
        </button>
      </div>
    </section>
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
        <section className={`${styles.hero} ${styles.desktop}`}>
          <h1 className={lora.className}>
            Tell your story
            <br /> one frame at a time
          </h1>

          <div className={styles.cta}>
            <button>
              <Link href={email}>Get in touch</Link>
            </button>
            <button>
              <Link href="/portfolio">See portfolio</Link>
            </button>
          </div>
        </section>
      </BackgroundVideo>

      <section className={`${styles.hero} ${styles.mobile}`}>
        <h1 className={lora.className}>
          Tell your story
          <br /> one frame at a time
        </h1>
        <div className={styles.cta}>
          <button>
            <Link href={email}>Get in touch</Link>
          </button>
          <button>
            <Link href="/portfolio">See portfolio</Link>
          </button>
        </div>
        <div className={styles.reel}></div>
      </section>

      <Services>
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
      </Services>

      <About />

      <Footer></Footer>
    </>
  );
}
