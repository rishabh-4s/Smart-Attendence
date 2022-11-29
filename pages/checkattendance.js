import { React, useState } from "react";
import Head from "next/head";
import List from "./List";
import TextField from "@mui/material/TextField";
import styles from "../styles/checkattendance.module.css";

function checkattendance() {
  return (
    <div>
      <Head>
        <title>Check Attendance</title>
      </Head>
      
      <iframe
        src="https://docs.google.com/spreadsheets/d/12hmNRarKNkN5KDoHeybMiNX8SehMR2Jy2pEe8Hv_NQM/edit?usp=sharing"
        width="1550"
        height="800"
        className="iframe_table"
        style={{ padding: 100 + "px" }}
      />

      {/* <div className={styles.main}>
        <h1 className={styles.abc}>Student Search</h1>
        <div className={styles.search}>
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <List input={inputText} />
      </div> */}
    </div>
  );
}

export default checkattendance;
