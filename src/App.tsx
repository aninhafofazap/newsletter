import React, { useState } from "react";
import background from "./assets/images/illustration-sign-up-mobile.svg";
import list from "./assets/images/icon-list.svg";
import success from "./assets/images/icon-success.svg";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");

  const [send, setSend] = useState(false);

  function sendEmail() {
    setSend(true);
  }

  return (
    <>
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
          <img src={background} alt="" />
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
              <label className="email-title">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@company.com"
                required={true}
                onChange={(value) => setEmail(value.target.value)}
              />
              <button className="button" onClick={() => sendEmail()}>
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
