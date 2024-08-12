"use client";

import { useState } from "react";
import styles from "../page.module.css";
import Header from "../header";
import Footer from "../footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    handleReset();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (err) {
      console.error("Err", err);
    }
  };

  return (
    <>
      <Header />
      <h1>Contact</h1>
      <form onSubmit={onSubmit}>
        <div>
          <h2>Send us a message</h2>
          <p>Tell us more about your project!</p>
        </div>

        <div>
          <input
            placeholder="Name"
            id="name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            placeholder="Email"
            id="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <textarea
            value={message}
            id="message"
            placeholder="Tell us about your project!"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
      <Footer></Footer>
    </>
  );
}
