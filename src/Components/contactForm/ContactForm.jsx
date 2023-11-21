import React, { useState } from "react";
import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import "../../Components/contactForm/contactForm.css";
import {Modal} from "antd"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
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
          setOpen(true)
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setOpenError(true);
        }
      );
  };

  const handleOk = () => {
    
    setOpen(false);
    setOpenError(false);
  };

  const handleCancel = () => {
    
    setOpen(false);
    setOpenError(false);
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
      <Modal
        title="Votre message vient d'être envoyé"
        open={open}
        onOk={handleOk}
        okButtonProps={{ disabled: false }}
        cancelButtonProps={{ disabled: false , }}
        onCancel={handleCancel}
      >
        
      </Modal>
      <Modal
        title="Votre message n'a pas pu être envoyé"
        open={openError}
        onOk={handleOk}
        okButtonProps={{ disabled: false }}
        cancelButtonProps={{ disabled: false , }}
        onCancel={handleCancel}
      >
        
      </Modal>

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
