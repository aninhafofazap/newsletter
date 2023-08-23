import React, { useRef, useState } from "react";
import backgroundMobile from "./assets/images/illustration-sign-up-mobile.svg";
import backgroundDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import list from "./assets/images/icon-list.svg";
import success from "./assets/images/icon-success.svg";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [send, setSend] = useState(false);
  const [validEmail, setValidEmail] = useState(true); // Estado para rastrear a validade do email
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  console.log(windowSize);

  function sendEmail() {
    // Verificar se o email é valido antes de permitir o envio
    if (isValidEmail(email)) {
      setValidEmail(true); //Reseta a validação do email ao enviar com sucesso
      setSend(true);
    } else {
      setValidEmail(false); //Define a validação de email como falsa se o email não for válido
    }
  }

  function isValidEmail(email: any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className="container">
      {send ? (
        <div className="success-congratulations">
          <img src={success} alt="" className="congratulations-img" />
          <h1 className="congratulations">Thanks for subscribing! </h1>
          <p className="congratulations-description">
            A confirmation email has been sent to{" "}
            <span className="email">{email}</span>. Please open it and click the
            button inside to confirm your subscription
          </p>
          <a className="congratulations-button" onClick={() => setSend(false)}>
            Dismiss message
          </a>
        </div>
      ) : (
        <div className="App">
          {windowSize.current[0] < 959 ? (
            <img src={backgroundMobile} alt="" />
          ) : (
            <img src={backgroundDesktop} alt="" />
          )}
          <div className="about">
            <h1 className="title">Stay Updated!</h1>
            <p className="description">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="list">
              <li className="list-item">
                <img src={list} alt="" />
                <p className="list-info">
                  Product discovery and building what matters
                </p>
              </li>
              <li className="list-item">
                <img src={list} alt="" />
                <p className="list-info">
                  Measuring to ensure updates are a success
                </p>
              </li>
              <li className="list-item">
                <img src={list} alt="" />
                <p className="list-info">And much more!</p>
              </li>
            </ul>
            <form>
              <label className="email-title">
                Email address{" "}
                {!validEmail && (
                  <span className="error-message">
                    Please enter a valid email address
                  </span>
                )}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@company.com"
                required={true}
                onChange={(value) => setEmail(value.target.value)}
                className={validEmail ? "" : "invalid-email"}
              />

              <button className="button" onClick={() => sendEmail()}>
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
