import { React, useState } from "react";
import List from "./List"
import TextField from "@mui/material/TextField"
import styles from "../styles/checkattendance.module.css"

const checkattendance = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.abc}>Student Search</h1>
      <div className={styles.search}>
      <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    <List/>
    </div>
  )
}

export default checkattendance