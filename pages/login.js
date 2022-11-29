import Head from "next/head";
import Link from "next/link";
import React from "react";
import Router, { withRouter, useRouter } from "next/router";
import { useState } from "react";
import { signup } from "../firebase_app/firebase.js";

export default function login() {
  const [val, setVal] = useState('');
  // control all this
  // const history = useRouter("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const login = (event) => {
  //   event.preventDefault();
  //   signup
  //     .then((auth) => {
  //       Router.push("/");
  //     })
  //     .catch((e) => {
  //       if (e.message === "The pasw is invalid") {
  //         alert("Please check again");
  //       }
  //     });
  // };
  // till here handle it
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="login">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5087/5087592.png"
          className="login__logo"
        ></img>
        <div className="login__container">
          <h3>Teacher Log In</h3>
          <form>
            <center>
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) =>
                  setVal(e.target.value)}
              />
            </center>

            <center>
              <input
                type="password"
                placeholder="Password"
              />
            </center>

            <center>
              {val==='arjitsingh0609@gmail.com' &&
              <Link href="/teacher">
                <button className="login_button">Log In</button>
              </Link>}
            </center>
          </form>
        </div>
      </div>
    </>
  );
}
