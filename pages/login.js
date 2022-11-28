import Head from "next/head";
import Link from "next/link";
import React from "react";
import Router, { withRouter, useRouter } from "next/router";
import { useState } from "react";
import { signup } from "../firebase_app/firebase.js";

export default function login() {
  // control all this
  const history = useRouter("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    signup
      .then((auth) => {
        Router.push("/");
      })
      .catch((e) => {
        if (e.message === "The pasw is invalid") {
          alert("Please check again");
        }
      });
  };
  // till here handle it

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="login">
        <img
          src="https://helen.edu.vn/wp-content/uploads/2021/09/smart-attendance-management-systemt-2-1024x576.jpeg"
          className="login__logo"
        ></img>
        <div className="login__container">
          <h3>Teacher Log In</h3>
          <form>
            <center>
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </center>

            <center>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </center>
            <center>
              {/* PLS STYLE THE BUTTON */}
              <Link href="/teacher">
                <button> 
                {/* <button onClick={login} type="submit"> */}
                  Log In
                </button>
              </Link>
            </center>
          </form>
        </div>
      </div>
    </>
  );
}
