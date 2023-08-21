import React from "react";
import background from "./assets/images/illustration-sign-up-mobile.svg";
import list from "./assets/images/icon-list.svg";

import "./App.css";

function App() {
  return (
    <>
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
              required
            ></input>
            <a className="button">Subscribe to monthly newsletter</a>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
