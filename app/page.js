import styles from "./page.module.css";
import Header from "./header";
import Footer from "./footer";

const Experience = ({ details }) => {
  return (
    <div className={styles.experience}>
      <div className={styles.icon}></div>
      <p>{details}</p>
    </div>
  );
};

const Service = ({ service, details }) => {
  return (
    <div className={styles.service}>
      <div className={styles.logo}></div>
      <h3>{service}</h3>
      <p>{details}</p>
    </div>
  );
};

const Testimonial = ({ image, quote, name }) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.profile}>{image}</div>
      <p>{quote}</p>
      <p>{name}</p>
    </div>
  );
};

const About = ({ image }) => {
  return (
    <div>
      <div className={styles.profile}>{image}</div>
      <h2>I'm Adrian Brown, a videographer and motion designer</h2>
      <p>
        At Adrianʼs Multimedia, we believe in creativity, quality, and
        collaboration. We strive to understand your vision and bring it to life
        through stunning visuals. Our passion drives us to deliver exceptional
        service and results that exceed your expectations. Together, let’s
        create something amazing that truly resonates with your audience.
      </p>
      <button>Learn more</button>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Capturing your mission one frame at a time</h1>
          <p>Let's bring your vision to life.</p>
          <button>Get in touch</button>
          <button>See more</button>
          <div className={styles.reel}></div>
        </section>

        <section className={styles.experiences}>
          <Experience
            details="Years of expert storytelling 
experience behind every 
frame."
          />
          <Experience
            details="Years of expert storytelling 
experience behind every 
frame."
          />
          <Experience
            details="Years of expert storytelling 
experience behind every 
frame."
          />
        </section>

        <section className={styles.services}>
          <Service
            service="Videography"
            details="Capture life’s moments with stunning 
videography that tells your story 
in a beautiful and engaging way."
          />
          <Service
            service="Motion Graphics"
            details="Bring your ideas to life with eye-catching 
motion graphics that captivate 
and inform your audience."
          />
          <Service
            service="Video Editing"
            details="Capture life’s moments with stunning 
videography that tells your story 
in a beautiful and engaging way."
          />
        </section>

        <section className={styles.testimonials}>
          <h2>Testimonials</h2>
          <Testimonial
            quote="Adrian’s work transformed our vision into a stunning video! 
His creativity and attention to detail are truly unmatched."
            name="Sarah Johnson"
          />
          <Testimonial
            quote="Adrian’s work transformed our vision into a stunning video! 
His creativity and attention to detail are truly unmatched."
            name="Sarah Johnson"
          />
          <Testimonial
            quote="Adrian’s work transformed our vision into a stunning video! 
His creativity and attention to detail are truly unmatched."
            name="Sarah Johnson"
          />
        </section>

        <section>
          <About />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
