import React, { useState } from "react";
import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import "../../Components/contactForm/contactForm.css";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cw2dcmq",
        "template_uyhxv95",
        form.current,
        "qkNySl5d80zvedG6Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message envoyé");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-contact">
      <form
        className="form-container"
        ref={form}
        onSubmit={sendEmail}
      >
        <label>Nom</label>
        <input
          required
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          required
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Message</label>
        <textarea
          required
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <input
          className="button"
          type="submit"
          value="Envoyer"
        />
      </form>

      <div>
        <Player
          src="https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json"
          className="player d-md-none d-lg-block"
          loop
          autoplay
          style={{ maxHeight: "400px", maxWidth: "400px" }}
        />
      </div>
    </div>
  );
};

export default Contact;
