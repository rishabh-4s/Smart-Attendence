import { React, useState } from "react";
import List from "./List"
import TextField from "@mui/material/TextField"
import styles from "../styles/checkattendance.module.css"

const checkattendance = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className={styles.main}>
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
    </div>
  )
}

export default checkattendance